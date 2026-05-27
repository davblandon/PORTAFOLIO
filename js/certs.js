const certs = [
  {
    title: "Entrega de Premio al Bachiller Comfamiliar",
    issuer: "Comfamiliar",
    file: "assets/certificates/Certificado%20Entrega%20de%20Premio%20al%20Bachiller%20Comfamiliar.pdf",
    details: "Comfamiliar Pereira, entidad de bienestar con programas educativos y sociales.",
  },
  {
    title: "Misión TIC Completo",
    issuer: "Misión TIC",
    file: "assets/certificates/CERTIFICADO_MISION_TIC_COMPLETO.pdf",
    details: "Formación virtual con MinTIC y la Universidad Industrial de Santander (UIS).",
  },
  {
    title: "MATLAB Onramp",
    issuer: "MathWorks Training Services",
    file: "assets/certificates/certificado_onramp.pdf",
    details: "Curso introductorio de MATLAB (Onramp).",
  },
  {
    title: "Image Processing Onramp",
    issuer: "MathWorks Training Services",
    file: "assets/certificates/certificado%20image%20Processing%20Onramp.pdf",
    details: "Curso de procesamiento de imagenes (Onramp).",
  },
  {
    title: "Machine Learning Onramp",
    issuer: "MathWorks Training Services",
    file: "assets/certificates/certificado%20machine%20learning%20onramp.pdf",
    details: "Curso introductorio de machine learning (Onramp).",
  },
  {
    title: "Circuit Simulation Onramp (Simulink)",
    issuer: "MathWorks Training Services",
    file: "assets/certificates/certificado_circuit_simulink_onramp.pdf",
    details: "Curso de simulacion de circuitos en Simulink (Onramp).",
  },
];

const container = document.getElementById("certs");
if (container) {
  container.innerHTML = certs
    .map((cert, index) => {
      const sideClass = index % 2 === 0 ? "cert-left" : "cert-right";
      return `<article class="cert-item ${sideClass}">
          <div class="card cert-card">
            <h3>${cert.title}</h3>
            <p class="cert-issuer">${cert.issuer}</p>
            <p>${cert.details}</p>
            <a href="${cert.file}" target="_blank" rel="noreferrer">Ver certificado</a>
          </div>
        </article>`;
    })
    .join("");
}
