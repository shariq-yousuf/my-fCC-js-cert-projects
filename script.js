const projects = [
  {
    id: 1,
    title: "RPG - Dragon Repeller",
    description:
      "In this practice project, I have learned fundamental programming concepts in JavaScript by coding a Role Playing Game. I have learned to work with arrays, strings, objects, functions, loops, if/else statements, and more.",
    imgSrc: "./src/RPG-Dragon-Repeller.png",
    liveUrl: "./Projects/RPG-Dragon-Repeller/index.html",
    githubLink:
      "https://github.com/shariq-yousuf/my-fCC-js-cert-projects/tree/main/Projects/RPG-Dragon-Repeller",
  },
  {
    id: 2,
    title: "Calorie Counter",
    description: "",
    imgSrc: "./src/Calorie-Counter.png",
    liveUrl: "./Projects/Calorie-Counter/index.html",
    githubLink:
      "https://github.com/shariq-yousuf/my-fCC-js-cert-projects/tree/main/Projects/Calorie-Counter",
  },
];

const projectsDiv = document.querySelector("#projects-div");
const reverseProjectsArr = projects.reverse();

reverseProjectsArr.forEach((project) => {
  projectsDiv.innerHTML += `
    <div class="card">
      <div class="bg">
        <img src="${project.imgSrc}" alt="${project.title}" />
        <h2 class="card-title">${project.title}</h2>
        <div class="links-container">
          <a href="${project.liveUrl}">
          <i class="material-symbols-outlined live-icon live-icon">visibility</i>
          </a>
          <a href="${project.githubLink}"><i class="fa fa-github live-icon"></i></a>
        </div>
      </div>
      <div class="blob"></div>
    </div>
  `;
});
