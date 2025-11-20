import React, { useState } from "react";

export default function Footer(){
    return(
        <footer class="bg-[#0A0F1F] text-gray-300 py-8">
            <div class="max-w-4xl mx-auto flex flex-col items-center gap-4">
            <p className="text-sm tracking-wide">
                {new Date().getFullYear()} Eliot Francisco Gutierrez - All rights reserved</p>

                <div className="flex gap-6 text-lg">
                    <a href="https://github.com/Seven-99" target="_blank"
                     className="hover:text-blue-400 transition">GitHub</a>

                     <a href="https://www.linkedin.com/in/eliot-francisco-gutierrez-16927a2a8/" target="_blank" 
                     className="hover:text-blue-400 transition">LinkedIn</a>

                     <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
                </div>
            </div>
        </footer>
    );
};