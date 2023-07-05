import CreateProjectForm from "./createProjectFrom";

import ProjectControlMain from "./projectControlMain";
import ProjectControlSideBar from "./projectControlSideBar";

export default function createProjectUI() {
  // golbar vars
  const searchBar = document.getElementById("search");
  const clearBtn = document.querySelector(".clear");
  const createBtn = document.querySelector(".create");

  const allProjects = document.querySelector(".allProjects");
  const onGoingProjects = document.querySelector(".onGoingProjects");
  const finishedProjects = document.querySelector(".finishedProjects");

  const highPriortyProjects = document.querySelector(".highPriority");
  const medPriortyProjects = document.querySelector(".medPriority");
  const lowPriortyProjects = document.querySelector(".lowPriority");

  //add the Create PRoject form
  CreateProjectForm.theCreateForm();

  //projects control

  //main control
  ProjectControlMain.addProjects();
  ProjectControlMain.projectHighlight();
  ProjectControlMain.addProjectsNum();
  searchBar.addEventListener("input", () => {
    ProjectControlMain.searchBarFunciton();
    ProjectControlMain.addProjectsNum();
  });

  //sidebar control
  allProjects.addEventListener("click", () => {
    ProjectControlMain.addProjects();
    ProjectControlMain.addProjectsNum();
  });
  onGoingProjects.addEventListener("click", () => {
    ProjectControlSideBar.onGoingProjectsDisplay();
    ProjectControlMain.addProjectsNum();
  });
  finishedProjects.addEventListener("click", () => {
    ProjectControlSideBar.finishedProjectsDisplay();
    ProjectControlMain.addProjectsNum();
  });

  highPriortyProjects.addEventListener("click", () => {
    ProjectControlSideBar.highPriortyProjectsDisplay();
    ProjectControlMain.addProjectsNum();
  });
  medPriortyProjects.addEventListener("click", () => {
    ProjectControlSideBar.medPriortyProjectsDisplay();
    ProjectControlMain.addProjectsNum();
  });

  lowPriortyProjects.addEventListener("click", () => {
    ProjectControlSideBar.lowPriortyProjectsDisplay();
    ProjectControlMain.addProjectsNum();
  });

  //Form Manipulation

  const submitBtn = document.querySelector(".submit");
  const closeIcon = document.querySelector(".closeIcon");
  createBtn.addEventListener("click", CreateProjectForm.openForm);
  closeIcon.addEventListener("click", CreateProjectForm.closeForm);
  submitBtn.addEventListener("click", (e) => {
    CreateProjectForm.createProject(e);
    ProjectControlMain.addProjects();
    ProjectControlMain.projectHighlight();
    ProjectControlMain.addProjectsNum();
  });
}
