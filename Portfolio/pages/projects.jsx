import React from 'react'

export default function Projects() {

    return(
        <section className="px-6 py-12 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>

            <div className="grid md-grid-cols-2 gap-8">
                <div>
                <span className="inline-block mt-3 px-3 py-2 text-sm bg-blue-600 rounded-full">In progress...</span>

                <h3 className="text-2xl font-semibold">Learning & Building</h3>

                <p className="text-gray-300 mt-2">
                    I'm currently working on my first projects to enhance my skills in web development.
                    in React, .NET, C#, and debugging. More projects will be added soon as 
                    I continue building my portfolio.
                </p>
                </div>
            </div>
        </section>
    );
}