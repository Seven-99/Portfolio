import React from 'react'

export default function About(){
    return(
        <div className="max-w-3xl mx-auto text-center">
        <section>
            <h2 className="text-3xl font-bold mb-6">About <span className="text-blue-500">me</span></h2>

            <p className="text-gray-300 leading-relaxed mb-6">Hi, i'm <span className="text-blue-500 font-medium">Eliot Francisco Gutierrez </span>
            I'm a web development student curently expanding my knowledge in
            <span className="text-blue-500 font-medium"> .NET </span> and <span className="text-blue-500 font-medium"> C#</span>, while also learning how to 
            debug code effectively. I enjoy understanding how things work
            and improving my ability to analyze, detect, and fix issues efficiently.
            <br /><br />
            I have experience with <span className="text-blue-500 font-medium">HTML, Css, Tailwind, React, Javascript </span>
            and <span className="text-blue-500 font-medium">MySQL</span> and I'm comfortable using <span>Git</span>
            for version control. I'm also interested in exploring <span className="text-yellow-500 font-medium">Azure </span>
            as I continue building a more complete and modern tech stack.
            <br /><br />
            My goal is to keep improving as a developer and create clean, useful and well-structured
            projects as i grow in the industry.</p>
        </section>
        </div>
    );
};