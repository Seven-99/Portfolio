import React from 'react'

export default function Projects() {

    return(
        <section className="px-6 py-12 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>

            <div className="grid md-grid-cols-2 gap-8">
                <div>
                    <div class="loading-badge">
                        In progress<span class="dots"></span>
                    </div>

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