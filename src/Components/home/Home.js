import React from "react"
import Footer from "../Footer"
import Header from "../Header"
import About from "./About"
import Contact from "./Contact"
import Landingpage from "./Landingpage"
import Project from "./projects"
import Skill from "./Skill"
export default function HomePage(){
    return(
        <>
        <Header/>
        <Landingpage/>
        <About/>
        <Project/>
        <Skill/>
        <Contact/>
        <Footer/>
        </>
    )
}