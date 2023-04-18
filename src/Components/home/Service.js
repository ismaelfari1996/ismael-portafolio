import React from "react";
export default function Service() {
    return (
        <div className="container mb-5">
            <h1 className="margin text-center">Asesoria y soluciones a tu alcance</h1>
            <p className="margin text-center text-color mb-5">Transforma tus necesidades en soluciones digitales</p>
            <div className="row">
                <div className="col-md-4">
                    <div className="card mx-auto mb-5 pt-3" style={{ "width": " 18rem" }}>
                        <img src="https://img.icons8.com/ios-filled/100/228BE6/monitor--v1.png" className="service-icon img-fluid mx-auto" />
                        <div className="card-body">
                            <h5 className="card-title text-center">Aplicacion Web</h5>
                            <p className="card-text text-center text-color">Desarrollo de aplicaciones móviles personalizadas. Trabajamos contigo para entender tus requerimientos y crear una solución que se ajuste a tus objetivos.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mx-auto mb-5 pt-3" style={{ "width": " 18rem" }}>
                        <img src="https://img.icons8.com/ios-filled/100/228BE6/android.png" className="service-icon img-fluid mx-auto" />
                        <div className="card-body">
                            <h5 className="card-title text-center">Aplicacion mobil</h5>
                            <p className="card-text text-center text-color">Desarrollo de aplicaciones móviles personalizadas. Trabajamos contigo para entender tus requerimientos y crear una solución que se ajuste a tus objetivos.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mx-auto mb-5 pt-3" style={{ "width": " 18rem" }}>
                        <img src="https://img.icons8.com/dotty/100/228BE6/consultation.png" className="service-icon img-fluid mx-auto" />
                        <div className="card-body">
                            <h5 className="card-title text-center">Asesoria</h5>
                            <p className="card-text text-center text-color">Desarrollo de aplicaciones móviles personalizadas. Trabajamos contigo para entender tus requerimientos y crear una solución que se ajuste a tus objetivos.</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn btn-primary d-flex mx-auto px-5">Contactar</button>

        </div>
    )
}