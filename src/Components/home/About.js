import React from "react";
import Img from "../../assets/ismael.webp";
import ConfigValue from "../../config/config.json";
export default function About() {
    return (
        <div className=" container-fluid mb-5 bg-light py-5" id="about" data-aos=""
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000">
            <div className="row">
                <div className="col-md-6 align-items-lg-center">
                    <img src={Img} className="img-fluid d-flex mx-auto" alt="ismael" height={300} width={300} />
                    <div className="d-flex flex-column">
                        <h2 className="d-flex mx-auto">Ismael Farinango</h2>
                        <span className="d-flex mx-auto">Ingeniero de Sistemas</span>
                        <div className="d-flex mx-auto">
                            <a href={ConfigValue.contact.github} target={"_blank"} rel="noopener noreferrer" aria-label="Github"><i className="lab la-github icon"></i></a>
                            <a href={ConfigValue.contact.linkedin} target={"_blank"} rel="noopener noreferrer" aria-label="Linkedin" ><i className="lab la-linkedin icon"></i></a>
                            <a href={ConfigValue.contact.facebook} target={"_blank"} rel="noopener noreferrer" aria-label="Facebook"><i className="lab la-facebook-square icon"></i></a>
                            <a href={ConfigValue.contact.instagram} target={"_blank"} rel="noopener noreferrer" aria-label="Instagram"><i className="lab la-instagram icon"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 align-self-center">
                    <div className="card-body">
                        <h2 className="card-title border border-4 border-end-0 border-top-0 border-bottom-0 px-2" >Sobre mi</h2>
                        <p className="card-text text-sm-justify my-3 text-color" >
                            Bienvenido a mi sitio web, mi nombre es Ismael Farinango, soy Ingeniero de Sistemas y desarrollador de software.
                            Me apasiona la tecnología y la programación, y en este sitio podrás conocer más acerca de mi experiencia, habilidades y proyectos en los que he trabajado.
                            Estoy siempre en busca de nuevos desafíos y oportunidades para seguir aprendiendo y creciendo en mi campo.
                            Si tienes alguna pregunta o estás interesado en trabajar juntos, no dudes en ponerte en contacto conmigo.
                            Gracias por visitar mi sitio web.
                        </p>
                        <div className="d-flex mx-auto my-5">
                            <a className="btn btn-primary" href={ConfigValue.cv} target={"_blank"} rel="noopener noreferrer"> <i class="las la-cloud-download-alt"></i> Download CV</a>
                            <a className="btn btn-primary ms-4" href="#projects"><i class="las la-briefcase fs-5"></i> Portafolio</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}