const projects = [
  {
    name: "PQRS_SYSTEM",
    summary: "Sistema para la gestion de PQRS con roles y filtros.",
    url: "https://github.com/davblandon/PQRS_SYSTEM",
    image: "assets/images/pqrs.png",
  },
  {
    name: "DEFENDIENDO_EL_OLIMPO",
    summary: "Proyecto creativo con narrativa y mecanicas interactivas.",
    url: "https://github.com/davblandon/DEFENDIENDO_EL_OLIMPO",
    image: "assets/images/defendiendo_olimpo.png",
  },
  {
    name: "davblandon",
    summary: "Repositorio personal con metricas de WakaTime y perfil profesional.",
    url: "https://github.com/davblandon/davblandon",
    image: "assets/images/davblandon.png",
  },
];

const certs = [
  {
    title: "Entrega de Premio al Bachiller Comfamiliar",
    issuer: "Comfamiliar",
    file: "assets/certificates/Certificado%20Entrega%20de%20Premio%20al%20Bachiller%20Comfamiliar.pdf",
    details: "Comfamiliar Pereira, entidad de bienestar con programas educativos y sociales.",
  },
  {
    title: "Mision TIC Completo",
    issuer: "Mision TIC",
    file: "assets/certificates/CERTIFICADO_MISION_TIC_COMPLETO.pdf",
    details: "Formacion virtual con MinTIC y la Universidad Industrial de Santander (UIS).",
  },
];

const featuredProjects = document.getElementById("featured-projects");
if (featuredProjects) {
  const featured = projects.slice(0, 3);
  featuredProjects.innerHTML = featured
    .map(
      (project) =>
        `<article class="card">
          <div class="card-media" style="background-image: url('${project.image}')"></div>
          <h3>${project.name}</h3>
          <p>${project.summary}</p>
          <a href="${project.url}" target="_blank" rel="noreferrer">Ver repositorio</a>
        </article>`
    )
    .join("");
}

const featuredCerts = document.getElementById("featured-certs");
if (featuredCerts) {
  const featured = certs.slice(0, 3);
  featuredCerts.innerHTML = featured
    .map(
      (cert) =>
        `<article class="card">
          <h3>${cert.title}</h3>
          <p>${cert.issuer}</p>
          <p>${cert.details}</p>
          <a href="${cert.file}" target="_blank" rel="noreferrer">Ver</a>
        </article>`
    )
    .join("");
}
