const projects = [
  {
    name: "PQRS_SYSTEM",
    summary: "Sistema para la gestion de PQRS con roles y filtros.",
    stack: ["HTML", "CSS", "JavaScript"],
    url: "https://github.com/davblandon/PQRS_SYSTEM",
    image: "assets/images/pqrs.png",
  },
  {
    name: "DEFENDIENDO_EL_OLIMPO",
    summary: "Proyecto creativo con narrativa y mecanicas interactivas.",
    stack: ["HTML", "CSS", "JavaScript"],
    url: "https://github.com/davblandon/DEFENDIENDO_EL_OLIMPO",
    image: "assets/images/defendiendo_olimpo.png",
  },
  {
    name: "davblandon",
    summary: "Repositorio personal con metricas de WakaTime y perfil profesional.",
    stack: ["Markdown", "WakaTime"],
    url: "https://github.com/davblandon/davblandon",
    image: "assets/images/davblandon.png",
  },
  {
    name: "CLEAN CLOTHES",
    summary: "Landing page para servicios de lavandería.",
    stack: ["HTML", "CSS", "JavaScript"],
    url: "https://github.com/davblandon/CLEAN_CLOTHES",
    image: "assets/images/clean_clothes.png",
  },
];

const container = document.getElementById("projects");
if (container) {
  container.innerHTML = projects
    .map(
      (project) =>
        `<article class="card">
          <div class="card-media" style="background-image: url('${project.image}')"></div>
          <h3>${project.name}</h3>
          <p>${project.summary}</p>
          <p><strong>Stack:</strong> ${project.stack.join(", ")}</p>
          <a href="${project.url}" target="_blank" rel="noreferrer">Ver repositorio</a>
        </article>`
    )
    .join("");
}
