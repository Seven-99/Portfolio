import React from 'react'

export default function Projects() {

    return(
        <section className="px-6 py-12 max-w-4xl mx-auto">

            <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>

                <h2 className="text-2xl font-semibold">Learning & Building</h2>

                <p className="text-gray-300 mt-2">
                    I'm currently working on my first projects to enhance my skills in web development.
                    in React, .NET, C#, and debugging. More projects will be added soon as 
                    I continue building my portfolio.
                </p>
                <br /><br />

            <div className="grid md-grid-cols-2 gap-8">
                <div>
                    <div class="loading-badge">
                        In progress<span class="dots"></span>
                    </div>
                    <br /><br />

                    <div className="flex flex-col gap-6">

                    {/* CARD 1 */}
                    <div className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-xl
                     shadow-lg backdrop-blur-sm hover:shadow-2xl hover:bg-white/10 transition">
                        <div className="h-full w-2 bg-blue-500 rounded-full"></div>
                        <div>
                        <h3 className="text-xl font-semibold text-white">Coming soon<span class="dots"></span></h3>
                        <p className="text-gray-400 text-sm">
                            A new project is on the way, learning, building & improving.
                        </p>
                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-xl
                     shadow-lg backdrop-blur-sm hover:shadow-2xl hover:bg-white/10 transition">
                        <div className="h-full w-2 bg-purple-500 rounded-full"></div>
                        <div>
                        <h3 className="text-xl font-semibold text-white">Coming soon<span class="dots"></span></h3>
                        <p className="text-gray-400 text-sm">
                            More features and creative ideas are being prepared.
                        </p>
                        </div>
                    </div>

                    {/* CARD 3 */}
                    <div className="flex items-center gap-4 p-6 bg-white/5 border border-white/10 rounded-xl
                     shadow-lg backdrop-blur-sm hover:shadow-2xl hover:bg-white/10 transition">
                        <div className="h-full w-2 bg-green-500 rounded-full"></div>
                        <div>
                        <h3 className="text-xl font-semibold text-white">Coming soon<span class="dots"></span></h3>
                        <p className="text-gray-400 text-sm">
                            New technologies, new challenges, new solutions.
                        </p>
                        </div>
                    </div>
                    </div>

                </div>
            </div>
        </section>
    );
}