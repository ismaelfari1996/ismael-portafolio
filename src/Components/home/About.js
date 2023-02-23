import React from "react";
import Img from "../../assets/ismael.jpg";
export default function About() {
    return (
        <div className="container container-fluid mb-5 bg-light py-5" data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <div className="row">
                <div className="col-md-6 align-items-lg-center">
                    <img src={Img} className="img-fluid d-flex mx-auto" alt="ismael" height={200} width={200} />
                    <div className="d-flex flex-column">
                        <h2 className="d-flex mx-auto">Isamel Farinango</h2>
                        <span className="d-flex mx-auto">Ingeniero de Sistemas</span>
                        <div className="d-flex mx-auto">
                            <i className="lab la-github icon"></i>
                            <i className="lab la-linkedin icon"></i>
                            <i className="lab la-facebook-square icon"></i>
                            <i className="lab la-instagram icon"></i>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 align-self-center">
                    <div className="card-body">
                        <h2 className="card-title">Sobre mi</h2>
                        <p className="card-text text-sm-justify my-3">
                            Bienvenido a mi sitio web, mi nombre es Ismael Farinango, soy Ingeniero de Sistemas y desarrollador de software.
                            Me apasiona la tecnología y la programación, y en este sitio podrás conocer más acerca de mi experiencia, habilidades y proyectos en los que he trabajado.
                            Estoy siempre en busca de nuevos desafíos y oportunidades para seguir aprendiendo y creciendo en mi campo.
                            Si tienes alguna pregunta o estás interesado en trabajar juntos, no dudes en ponerte en contacto conmigo.
                            Gracias por visitar mi sitio web.
                        </p>
                        <div className="d-flex mx-auto my-5">
                            <a className="btn btn-primary">Download CV</a>
                            <a className="btn btn-primary ms-4">Portafolio</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}