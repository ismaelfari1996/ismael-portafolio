import React from "react";
import Java from "../../assets/icons/icon-java.png";
import Php from "../../assets/icons/icon-php.png";
import Python from "../../assets/icons/icon-python.png"
import C from "../../assets/icons/icon-c++.png";
import Spring from "../../assets/icons/icon-spring.png";
import JavaScript from "../../assets/icons/icon-javascript.png";
import Matlab from "../../assets/icons/icon-matlab.png";
import Html from "../../assets/icons/icon-html.png";
import Css from "../../assets/icons/icon-css.png";
import ReactJs from "../../assets/icons/icon-react.png";
import MySql from "../../assets/icons/icon-mysql.png";
import Postgresql from "../../assets/icons/icon-postgresql.png";
export default function Skill() {
    return (
        <div className="container-fluid bg-light mb-5 pb-5" id="skill">
            <div className="mx-5 pt-5 mb-5 title-mg">
                <h2 className="border border-4 border-end-0 border-top-0 border-bottom-0 px-2">Skill</h2>
            </div>
            <div className=" mx-auto" style={{ "maxWidth": "900px" }}>
                <div className="row" >
                    <div className="col-md-2 col-4">
                        <img className="img-fluid d-flex mx-auto" src={Java} alt="Java" />
                        <div className="d-flex flex-column">
                            <span className="d-flex mx-auto">Java</span>
                        </div>
                    </div>
                    <div className="col-md-2 col-4">
                        <img className="d-flex mx-auto img-fluid" src={Php} alt="Php" />
                        <div className="d-flex flex-column">
                            <span className="d-flex mx-auto">Php</span>
                        </div>
                    </div>
                    <div className="col-md-2 col-4">
                        <img className="d-flex mx-auto img-fluid" src={Python} alt="Python" />
                        <div className="d-flex flex-column">
                            <span className="d-flex mx-auto">Python</span>
                        </div>
                    </div>
                    <div className="col-md-2 col-4">
                        <img className="d-flex mx-auto img-fluid" src={C} alt="C++" />
                        <div className="d-flex flex-column">
                            <span className="d-flex mx-auto">C++</span>
                        </div>
                    </div>
                    <div className="col-md-2 col-4">
                        <img className="d-flex mx-auto img-fluid" src={Spring} alt="Sprint Boot" />
                        <div className="d-flex flex-column">
                            <span className="d-flex mx-auto">Spring Boot</span>
                        </div>
                    </div>

                    <div className="col-md-2 col-4">
                        <img className="d-flex mx-auto img-fluid" src={JavaScript} alt="JavaScript" />
                        <div className="d-flex flex-column">
                            <span className="d-flex mx-auto">JavaScript</span>
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-md-2 col-4">
                        <img className="d-flex mx-auto img-fluid" src={Matlab} alt="Matlab" />
                        <div className="d-flex flex-column">
                            <span className="d-flex mx-auto">Matlab</span>
                        </div>
                    </div>
                    <div className="col-md-2 col-4">
                        <img className="d-flex mx-auto py-3 img-fluid" src={Html} alt="HTML" />
                        <div className="d-flex flex-column">
                            <span className="d-flex mx-auto py-2">HTML</span>
                        </div>
                    </div>
                    <div className="col-md-2 col-4">
                        <img className="d-flex mx-auto img-fluid" src={Css} alt="CSS" />
                        <div className="d-flex flex-column">
                            <span className="d-flex mx-auto">CSS</span>
                        </div>
                    </div>
                    <div className="col-md-2 col-4">
                        <img className="d-flex mx-auto img-fluid" src={ReactJs} alt="React JS" />
                        <div className="d-flex flex-column">
                            <span className="d-flex mx-auto">React JS</span>
                        </div>
                    </div>
                    <div className="col-md-2 col-4">
                        <img className="d-flex mx-auto img-fluid" src={MySql} alt="MySQL" />
                        <div className="d-flex flex-column">
                            <span className="d-flex mx-auto">MySQL</span>
                        </div>
                    </div>
                    <div className="col-md-2 col-4">
                        <img className="d-flex mx-auto img-fluid" src={Postgresql} alt="PostreSQL" />
                        <div className="d-flex flex-column">
                            <span className="d-flex mx-auto">PostgreSQL</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}