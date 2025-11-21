import React from "react";
import potrait from "../public/potrait.webp";

export default function Potrait() {
    return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-2xl opacity-0 translate-y-6 transition-all duration-700"
      onLoad={(e) => {
        e.currentTarget.classList.remove("opacity-0", "translate-y-6");
      }}
    >
      <img
        src={potrait}
        alt="Eliot Gutierrez"
        className="w-[300px] md:w-[360px] h-auto object-cover block"
        decoding="async"
      />
    </div>
    )
}