import Carrousel from "../components/carrousel";
import CvAcordion from "../components/CVacordion";
import Footer from "../components/footer";
import Header from "../components/header";
import Potrait from "../components/potrait";

import About from "./about";
import Contact from "./contact";
import Projects from "./projects";

import React from 'react'


export default function Home() {
    return(
        <div className="min-h-screen bg-[#0A0F1F] text-white">
            <main className="container mx-auto px-4 py-16 bg-[#0A0F1F]">

                <section id="hero" className="text-center py-20">

                <h1 className="text-4xl font-bold mb-4">Hi, nice to meet you!
                     <span className="text-blue-500"> Welcome</span> to my 
                     <span className="text-blue-500">Portfolio</span></h1>

                </section>

                <section
                id="about-section"
                className="flex flex-col md:flex-row items-center md:items-start 
                            justify-center gap-12 md:gap-20 py-10"
                >
               {/*  <div className="animate-fade-in">
                    <Potrait />
                </div>*/}

                <div className="max-w-xl animate-fade-in">
                    <About />
                </div>
                    <CvAcordion />
                <div>

                </div>
                </section>

                <Carrousel />

                <section id="projects"  className="py-20">
                    <Projects />
                </section>

                <section id="contact"  className="py-20">
                    <Contact />
                </section>
            </main>


        </div>
    );
};