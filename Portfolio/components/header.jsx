import React, { useState } from "react";

export default function Header(){
    return(
        <header className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-sm z-50">
            <nav className="max-w-5xl mx-auto flex justify-between items-center py-4 px-6">

                    <a href="#hero" className="text-xl font-semibold tracking-tight">
                        Eliot<span className="text-blue-600">.Dev</span>
                    </a>

                <ul className="flex items-center gap-6 text-gray-700 font-medium">
                    <li className="hover:text-blue-500 transition"><a href="#hero">Home</a></li>
                    <li className="hover:text-blue-500 transition"><a href="#about">About</a></li>
                    <li className="hover:text-blue-500 transition"><a href="#projects">Projects</a></li>
                    <li className="hover:text-blue-500 transition"><a href="#contact">Contact</a></li> 
                </ul>
            </nav>
        </header>
    );
};