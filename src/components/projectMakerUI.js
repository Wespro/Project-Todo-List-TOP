import CreateProjectForm from "./createProjectFrom";

import ProjectControlMain from "./projectControlMain";
import ProjectControlSideBar from "./projectControlSideBar";
import ProjectCardControl from "./projectCardControl";

export default function createProjectUI() {
  // golbar vars

  //main vars

  //aboutProjects vars
  const searchBar = document.getElementById("search");
  const clearFinishedProjectsBtn = document.querySelector(".clear");
  const createBtn = document.querySelector(".create");

  //add the Create PRoject form
  CreateProjectForm.theCreateForm();

  //projects control

  //main control
  ProjectControlMain.addProjects();
  ProjectControlMain.projectHighlight();
  ProjectControlMain.addProjectsNum();

  searchBar.addEventListener("input", () => {
    ProjectControlMain.searchBarFunciton();
  });

  clearFinishedProjectsBtn.addEventListener("click", () => {
    ProjectControlMain.clearFinishedProjects();
    projectDoneBtnsEventListener();
  });
  // project card vars
  const modifyBtns = document.querySelectorAll(".modify");
  const addNotesBtns = document.querySelectorAll(".addNotes");
  const intoTasksBtn = document.querySelectorAll(".intoTasks");
  const deleteProjectBtns = document.querySelectorAll(".delete");

  const projectDoneBtnsEventListener = (onGoing) => {
    const projectDoneBtns = document.querySelectorAll(".projectDone");
    projectDoneBtns.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        ProjectCardControl.projectDone(e.target.dataset.number, onGoing);
      });
    });
    ProjectControlMain.projectHighlight();
  };
  projectDoneBtnsEventListener();
  //sidebar vars
  const allProjects = document.querySelector(".allProjects");
  const onGoingProjects = document.querySelector(".onGoingProjects");
  const finishedProjects = document.querySelector(".finishedProjects");

  const highPriortyProjects = document.querySelector(".highPriority");
  const medPriortyProjects = document.querySelector(".medPriority");
  const lowPriortyProjects = document.querySelector(".lowPriority");

  //sidebar control
  allProjects.addEventListener("click", () => {
    ProjectControlMain.addProjects();
    projectDoneBtnsEventListener();
    ProjectControlMain.addProjectsNum();
  });
  onGoingProjects.addEventListener("click", () => {
    ProjectControlSideBar.onGoingProjectsDisplay();
    projectDoneBtnsEventListener("onGoing");
  });
  finishedProjects.addEventListener("click", () => {
    ProjectControlSideBar.finishedProjectsDisplay();
    projectDoneBtnsEventListener();
  });

  highPriortyProjects.addEventListener("click", () => {
    ProjectControlSideBar.highPriortyProjectsDisplay();
  });
  medPriortyProjects.addEventListener("click", () => {
    ProjectControlSideBar.medPriortyProjectsDisplay();
  });

  lowPriortyProjects.addEventListener("click", () => {
    ProjectControlSideBar.lowPriortyProjectsDisplay();
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
    projectDoneBtnsEventListener();
  });
}
