import React from "react";
import ConfigValue from "../../config/config.json";
export default function Contact() {

    const openEmailApplication=()=>{
        window.open("mailto:"+ConfigValue.contact.email);
    }

    return (
        <div className="container-fluid d-flex justify-content-center mb-5" id="contact" style={{"background":"#ffffff"}} >
            <div class="card m-3 px-3 border-0" >
                <div class="row g-0">
                    <div class="col-md-8 py-2">
                        <div className="card-body">
                            <h2 class="card-title border border-4 border-end-0 border-top-0 border-bottom-0 px-2">Contactame </h2>
                            <p class="card-text text-color my-4">Quieres trabajar juntos o tienes alguna pregunta?,
                                no dudes en contactarme.</p>
                                <button className="btn btn-primary d-flex align-items-center"
                                onClick={openEmailApplication}>
                                    Enviar un mensage <i class="las la-paper-plane fs-3"></i>
                                </button>
                        </div>
                    </div>
                    <div class="col-md-4 py-3">
                        <div class="card-body">
                            <h3 className="card-title fs-4"> Información de contacto</h3>
                            <span className="d-block mb-3 text-color"><i class="las la-map-marker-alt fs-2"></i> Quito, Ecuador</span>
                            <span className="d-block fw-bold">Ponerse en contacto</span>
                            <div className="d-flex mx-auto justify-content-left">
                               <a href={ConfigValue.contact.whatsapp} target={"_blank"} rel="noopener noreferrer" aria-label="Whatsapp"> <i className="lab la-whatsapp icon "></i> </a>
                               <a href={ConfigValue.contact.linkedin} target={"_blank"} rel="noopener noreferrer" aria-label="Linkedin"> <i className="lab la-linkedin icon"></i> </a>
                               <a href={ConfigValue.contact.facebook} target={"_blank"} rel="noopener noreferrer" aria-label="Facebook"> <i className="lab la-facebook-square icon"></i> </a>
                               <a href={ConfigValue.contact.instagram} target={"_blank"} rel="noopener noreferrer" aria-label="Instagram"><i className="lab la-instagram icon"></i> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}