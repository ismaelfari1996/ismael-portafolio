import React from "react";
import { useState, useEffect } from "react";
import LoadImg from "../../assets/loadPageImage1.png";
export default function Landingpage() {

    const typed = ({ text }) => {
        const [currentText, setCurrentText] = useState('');
        let index = 0;
      
        useEffect(() => {
          let interval;
          if (index < text.length) {
            interval = setInterval(() => {
              setCurrentText(text.slice(0, index));
              index++;
              if(index==text.length){
                index=0;
              }
            }, 150);
          } else {
            clearInterval(interval);
          }
          return () => clearInterval(interval);
        }, [text, index]);

        
        return <span>{currentText}</span>;
    }

    return (
        <div className="container mt-0 min-vh-100 " id="home">
            <div className="row d-flex">
                <div className="col-md-6 col-sm-6 align-items-center introduction-text d-block ">
                    <p>Hola, mi nombre es</p>
                    <h1>Ismael Farinango.</h1>
                    <h1 style={{"color":"#a6a6a6"}}>Desarrollador de Software.</h1>
                    <p style={{"color":"#a6a6a6"}}>Soy Ingeniero en Sistemas, me apasionado la tecnología y la programación, 
                      siempre estoy abierto a nuevas propuestas y retos dentro de la industria.</p>
                    <a className="btn btn-primary mt-5" href="#contact">Trabajemos juntos</a>
                </div>
                <div className="col-md-6 col-sm-6  d-flex align-items-center py-5 d-none d-sm-block ">
                    <img src={LoadImg} alt="Imagen" className="img-fluid py-4" />
                </div>
            </div>
            
        </div>

    )
}