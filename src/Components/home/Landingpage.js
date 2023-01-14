import React from "react"
import LoadImg from "../../assets/loadPageImage.jpg";
export default function Landingpage() {
    return (
        <div className="container mt-0 min-vh-100">
            <div className="row d-flex">
                <div className="col-md-6 col-sm-6 align-items-center introduction-text">
                    <p>Hola, soy Ismael Farinango</p>
                    <h1>Ingeniero en Sistemas</h1>
                    <p>Desarrolladro de software, apasionado por la tecnologia y la programacion</p>
                    <button className="btn btn-primary mt-5">Trabajemos juntos</button>
                </div>
                <div className="col-md-6 col-sm-6  d-flex align-items-center py-5 d-none landig-img">
                    <img src={LoadImg} alt="Imagen" className="img-fluid" />
                </div>
            </div>
        </div>

    )
}