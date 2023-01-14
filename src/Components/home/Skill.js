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
        <div className="container">
            <h1>Tecnologias que conozco</h1>
            <div className="row" >
                <div className="col-md-2">
                    <img className="img-fluid d-flex mx-auto" src={Java} alt="Java" />
                    <div className="d-flex flex-column">
                        <span className="d-flex mx-auto">Java</span>
                    </div>
                </div>
                <div className="col-md-2">
                    <img className="d-flex mx-auto" src={Php} alt="Java" />
                    <div className="d-flex flex-column">
                        <span className="d-flex mx-auto">Php</span>
                    </div>
                </div>
                <div className="col-md-2">
                    <img className="d-flex mx-auto" src={Python} alt="Java" />
                    <div className="d-flex flex-column">
                        <span className="d-flex mx-auto">Python</span>
                    </div>
                </div>
                <div className="col-md-2">
                    <img className="d-flex mx-auto" src={C} alt="Java" />
                    <div className="d-flex flex-column">
                        <span className="d-flex mx-auto">C++</span>
                    </div>
                </div>
                <div className="col-md-2">
                    <img className="d-flex mx-auto" src={Spring} alt="Java" />
                    <div className="d-flex flex-column">
                        <span className="d-flex mx-auto">Spring Boot</span>
                    </div>
                </div>

                <div className="col-md-2">
                    <img className="d-flex mx-auto" src={JavaScript} alt="Java" />
                    <div className="d-flex flex-column">
                        <span className="d-flex mx-auto">JavaScript</span>
                    </div>
                </div>

            </div>

            <div className="row">
                <div className="col-md-2">
                    <img className="d-flex mx-auto" src={Matlab} alt="Java" />
                    <div className="d-flex flex-column">
                        <span className="d-flex mx-auto">Matlab</span>
                    </div>
                </div>
                <div className="col-md-2">
                    <img className="d-flex mx-auto py-3" src={Html} alt="Java" />
                    <div className="d-flex flex-column">
                        <span className="d-flex mx-auto py-2">HTML</span>
                    </div>
                </div>
                <div className="col-md-2">
                    <img className="d-flex mx-auto" src={Css} alt="Java" />
                    <div className="d-flex flex-column">
                        <span className="d-flex mx-auto">CSS</span>
                    </div>
                </div>
                <div className="col-md-2">
                    <img className="d-flex mx-auto" src={ReactJs} alt="Java" />
                    <div className="d-flex flex-column">
                        <span className="d-flex mx-auto">Recat JS</span>
                    </div>
                </div>
                <div className="col-md-2">
                    <img className="d-flex mx-auto" src={MySql} alt="Java" />
                    <div className="d-flex flex-column">
                        <span className="d-flex mx-auto">MySQL</span>
                    </div>
                </div>
                <div className="col-md-2">
                    <img className="d-flex mx-auto" src={Postgresql} alt="Java" />
                    <div className="d-flex flex-column">
                        <span className="d-flex mx-auto">PostgeSQL</span>
                    </div>
                </div>

            </div>
        </div>
    )
}