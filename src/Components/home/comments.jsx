import React, { useState, useEffect } from 'react';
import ComentsJSON from "../../assets/json/coments.json"
const Comments = () => {
  const [comments, setComments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = () => {
    fetch(ComentsJSON)
      .then((response) => response.json())
      .then((data) => setComments(data));
  };

  const handleAddComment = () => {
    setShowModal(true);
  };

  const handleSaveComment = () => {
    const newComment = {
      id: comments.length + 1,
      name: userName,
      comment,
      rating,
    };
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    setShowModal(false);

    // Guardar en el archivo JSON
    fetch("../../assets/json/coments.json", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedComments),
    });
  };

  const handleStarClick = (starRating) => {
    setRating(starRating);
  };

  return (
    <div>
    <button onClick={handleAddComment} className="btn btn-primary">Agregar Comentario</button>

    <div className={`modal ${showModal ? 'show' : ''}`} tabIndex="-1" style={{ display: showModal ? 'block' : 'none' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Agregar Comentario</h5>
            <button type="button" className="btn-close" onClick={() => setShowModal(false)} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <label htmlFor="userName">Nombre de Usuario:</label>
            <input
              type="text"
              id="userName"
              className="form-control"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <label htmlFor="comment">Comentario:</label>
            <textarea
              id="comment"
              className="form-control"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cerrar</button>
            <button type="button" className="btn btn-primary" onClick={handleSaveComment}>Guardar Comentario</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Comments;
