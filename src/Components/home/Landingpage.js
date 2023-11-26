import React from "react";
import LoadImg from "../../assets/loadPageImage1.webp";
export default function Landingpage() {

    return (
        <div className="container mt-0 min-vh-100 " id="home">
            <div className="row d-flex">
                <div className="col-md-6 col-sm-6 align-items-center introduction-text d-block ">
                    <p className="fw-bold">Hola, mi nombre es</p>
                    <h1 className="fw-bold">Ismael Farinango.</h1>
                    <h2 style={{"color":"black"}}>Desarrollador de Software.</h2>
                    <p style={{"color":"black"}}>Soy Ingeniero en Sistemas, me apasionado la tecnología y la programación, 
                      siempre estoy abierto a nuevas propuestas y retos dentro de la industria.</p>
                    <a className="btn btn-primary mt-5 align-items-center" href="#contact">Trabajemos juntos <i class="las la-hand-point-right fs-5"></i></a>
                </div>
                <div className="col-md-6 col-sm-6  d-flex align-items-center py-5 d-none d-sm-block ">
                    <img src={LoadImg} alt="Imagen" className="img-fluid py-4" />
                </div>
            </div>
            
        </div>

    )
}