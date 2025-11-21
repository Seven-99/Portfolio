import React from 'react'

export default function About(){
    return(
        <div className="max-w-3xl mx-auto text-center">
        <section>
            <h2 className="text-3xl font-bold mb-6">About <span className="text-blue-500">me</span></h2>

        <div className="order-2 md:order-1">
          <h3 className="text-2xl font-bold mb-4 text-gray-400">
             React & JavaScript - .NET & C# in progress
          </h3>

          <p className="text-lg text-gray-300 max-w-xl mx-auto mb-6">
            I work with <span className="font-medium text-blue-400">React</span>,{" "}
            <span className="font-medium text-blue-400">JavaScript</span>,{" "}
            <span className="font-medium text-blue-400">Tailwind</span>, and{" "}
            <span className="font-medium text-blue-400">MySQL</span>. I enjoy building
            clean, functional projects with a purpose.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            Hi, I'm{" "}
            <span className="text-blue-500 font-medium">Eliot Francisco Gutiérrez</span>.
            I'm a web development student who works and studies at the same time,
            constantly pushing myself to grow both professionally and personally.
            I'm currently expanding my skills in{" "}
            <span className="text-blue-400 font-medium">React, JavaScript, Tailwind, MySQL, .NET,</span>{" "}
            and <span className="text-blue-400 font-medium">C#</span>, while improving my
            debugging abilities to better understand how things work under the hood.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            Outside of tech, I'm passionate about <span className="text-blue-400 font-medium">motorbike customization,</span> a hobby that teaches me precision,
            patience, and the value of building things with my own hands. I also enjoy
            learning new languages and exploring tools that help me level up.
          </p>

          <p className="text-gray-300 leading-relaxed">
            I'm committed to continuous improvement to grow as a developer.
            Always going the extra mile to keep improving, learning, and expanding what I can build.
          </p>
        </div>
        </section>
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
        </div>
        
    );
};