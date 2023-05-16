import React from "react";
import Logo from "../assets/logo.png";
import ConfigValue from "../config/config.json";
export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container">
                <img src={Logo} className="img img-fluid" style={{"width":"30px","height":"30px"}} alt="ismael-logo" />
                <a className="navbar-brand mx-2" href="#home">{"Ismael"}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#home">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">Sobre mi</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Portafolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#services">Servicios</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skill">Skill</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contactos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={ConfigValue.cv} target={"_blank"} rel="noopener noreferrer"><i class="las la-cloud-download-alt"></i> CV</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    );
}