import Carrousel from "../components/carrousel";
import Footer from "../components/footer";
import Header from "../components/header";

import About from "./about";
import Contact from "./contact";
import Projects from "./projects";

import React from 'react'


export default function Home() {
    return(
        <div className="min-h-screen bg-[#0A0F1F] text-white">
            <main className="container mx-auto px-4 py-16 bg-[#0A0F1F]">

                <section id="hero" className="text-center py-20">

                <h1 className="text-4xl font-bold mb-4">Hi, I'm Eliot,
                     <span className="text-blue-500">Web Developer</span> in process</h1>

                <h2 className="text-2xl font-bold mb-3 text-gray-400">Web Development Student - React & JavaScript - .NET & C# in progress</h2>

                <p className="text-lg text-gray-300 max-w-xl mx-auto">I work with React, JavaScript, Tailwind, and MySQL.
                    I love building things that work, look clean, and make sense.
                    Always learning, always improving.</p>

                    <div className="flex justify-center gap-4 mt-6">
                        <a href="#projects"
                         className="px-6 py-3 rounded-xl bg-blue-500 text-white font-semibold 
                                    hover:bg-[#38BDF8] transition-all duration-300 
                                    hover:shadow-[0_0_20px_#38BDF8aa] animate-fadeSlideUp">
                            View my work
                        </a>
                        <a href="#contact" className="px-6 py-3 bg-gray-800 rounded-md hover:bg-gray-700">
                             Get in touch
                        </a>
                    </div>
                </section>

                <Carrousel />

                <section id="about"  className="py-20">
                    <About />
                </section>

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