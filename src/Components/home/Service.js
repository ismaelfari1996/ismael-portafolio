import React from "react";
export default function Service() {
    return (
        <div className="container mb-5" id="services">
            <h2 className="margin text-center">Asesoria y soluciones a tu alcance</h2>
            <p className="margin text-center text-color mb-5">Transforma tus necesidades en soluciones digitales</p>
            <div className="row">
                <div className="col-md-4">
                    <div className="card mx-auto mb-5 pt-3 bg-light" style={{ "width": " 18rem" }}>
                        <img src="https://img.icons8.com/ios-filled/100/228BE6/monitor--v1.png" alt="web application" className="service-icon img-fluid mx-auto" />
                        <div className="card-body">
                            <h3 className="card-title text-center fw-bold fs-5">Aplicaciones Web</h3>
                            <p className="card-text text-center text-color">
                                Desarrollamos aplicaciones web personalizadas y únicas para satisfacer tus necesidades, de principio a fin. Contáctanos para llevar tu proyecto al siguiente nivel.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mx-auto mb-5 pt-3 bg-light" style={{ "width": " 18rem" }}>
                        <img src="https://img.icons8.com/ios-filled/100/228BE6/android.png" alt="movil application" className="service-icon img-fluid mx-auto" />
                        <div className="card-body">
                            <h3 className="card-title text-center fw-bold fs-5">Aplicaciones móviles</h3>
                            <p className="card-text text-center text-color">Desarrollo de aplicaciones móviles personalizadas. Trabajamos contigo para entender tus requerimientos y crear una solución que se ajuste a tus objetivos.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mx-auto mb-5 pt-3 bg-light" style={{ "width": " 18rem" }}>
                        <img src="https://img.icons8.com/dotty/100/228BE6/consultation.png" alt="asesoria" className="service-icon img-fluid mx-auto" />
                        <div className="card-body">
                            <h3 className="card-title text-center fw-bold fs-5">Asesoria</h3>
                            <p className="card-text text-center text-color"> Asesorías personalizadas en tus proyectos o tareas de desarrollo de software, con soluciones prácticas y especificas de acuerdo a tus necesidades.</p>
                        </div>
                    </div>
                </div>
            </div>
            <a className="btn btn-primary  mx-auto px-5 align-items-center text-align-center w-90"
             style={{"display": "block", "margin": "0 auto","width":"200px"}}
             href="#contact">Contactar</a>

        </div>
    )
}