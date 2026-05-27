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
];

const container = document.getElementById("certs");
if (container) {
  container.innerHTML = certs
    .map(
      (cert) =>
        `<article class="card">
          <h3>${cert.title}</h3>
          <p>${cert.issuer}</p>
          <p>${cert.details}</p>
          <a href="${cert.file}" target="_blank" rel="noreferrer">Ver certificado</a>
        </article>`
    )
    .join("");
}
