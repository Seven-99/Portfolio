import React, { use } from "react";
import { useState } from "react";
import profile from "../public/profile.webp"

export default function CvAcordion(){
    
    const [open, setOpen] = useState(false);

    return(
        <div className="w-full max-w-3xl mx-auto mt-6 text-gray-300">

            <button onClick={() => setOpen(!open)} 
            className="w-full flex justify-between
            items-center
            bg-white text-gray-200 shadow-md p-4
            rounded-xl hover:bg-gray-300 transition">

                <span className="font-semibold text-lg">Curricumul Vitae</span>
                <span className="text-xl">{open ? "▲" : "▼"}</span>
            </button>

      {open && (
        <div className="bg-white text-black shadow-inner p-6 mt-2 rounded-xl animate-fadeIn">
          
          {/* Header */}
          <div className="border-b pb-3 mb-4">
            <h2 className="text-2xl font-bold">Eliot Francisco Gutierrez</h2>
            <p className="text-gray-700">Cloud Support Trainee - Web Developer</p>
            <p className="text-sm text-gray-500">Argentina · eliotg89@gmail.com</p>
            <img src="/public/profile.webp" alt="Profile CV" className="w-28 h-28 rounded-full object-cover shadow-sm flex justify-center mb-4" />
          </div>

          {/* Resumen */}
          <section className="mb-5">
            <h3 className="font-semibold mb-2">Resumen Profesional</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Estudiante de desarrollo web y cloud computing con experiencia práctica en Google Cloud
              (Compute Engine, IAM, VPC, Logging) y en aprendizaje progresivo de AWS. Me especializo en
              soporte cloud, resolución de problemas y despliegue de entornos Linux desde consola.
            </p>
          </section>

          {/* Skills */}
          <section className="mb-5">
            <h3 className="font-semibold mb-2">Skills Técnicas</h3>

            <h4 className="text-sm font-semibold mt-2">Google Cloud</h4>
            <ul className="list-disc ml-5 text-sm text-gray-700">
              <li>Compute Engine - Cloud Storage - IAM</li>
              <li>VPC Networking - Firewall Rules</li>
              <li>Cloud Shell - Logging & Monitoring</li>
              <li>Labs ACE completados (progresivos)</li>
            </ul>

            <h4 className="text-sm font-semibold mt-3">AWS</h4>
            <ul className="list-disc ml-5 text-sm text-gray-700">
              <li>IAM - S3 - EC2</li>
              <li>CloudWatch - VPC Basics</li>
              <li>CLI básico y manejo de consola</li>
            </ul>
          </section>

          {/* Proyectos */}
          <section className="mb-5">
            <h3 className="font-semibold mb-2">Proyectos Cloud</h3>
            <ul className="list-disc ml-5 text-sm text-gray-700">
              <li>VM Linux con Firewall personalizado (GCP)</li>
              <li>Bucket Storage con control de acceso y políticas (GCP)</li>
              <li>Instancia EC2 con roles IAM dedicados (AWS)</li>
            </ul>
          </section>

          {/* Certificaciones */}
          <section className="mb-5">
            <h3 className="font-semibold mb-2">Certificaciones</h3>
            <ul className="list-disc ml-5 text-sm text-gray-700">
              <li>Google Associate Cloud Engineer (en progreso)</li>
              <li>AWS Cloud Practitioner (en progreso)</li>
            </ul>
          </section>

          {/* Descarga */}
          <div className="mt-6">
            <a
              href="/CV-Viajero.pdf"
              download
              className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              Descargar PDF
            </a>
          </div>

        </div>
      )}
        </div>

    )
}