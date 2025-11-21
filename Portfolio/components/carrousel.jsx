import React from 'react'

export default function Carrousel() {
    const tech = [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Tailwind", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: ".NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
    { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Visual Studio Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  ];

  const duplicated = [...tech, ...tech];

  return(
    <div className="w-full overflow-hidden py-12 bg [#0d1117]">
        <h2 className="text-center text-3xl font-bold mb-6 text-white">
            Technologies</h2>
            <br /><br />

            <div className="whitespace-nowrap flex overflow-hidden">
                <div className="flex gap-16 items-center animate-scroll"
                style={{animation: "scroll 15s linear infinite"}}>


                    {duplicated.map((t, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <img src={t.icon} alt={t.name} className="w-16 h16" />
                            <span className="text-white mt-2">{t.name}</span>
                        </div>
                    ))}
                </div>
            </div>
    </div>
  )
}