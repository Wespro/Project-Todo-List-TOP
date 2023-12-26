import CreateProjectForm from "./createProjectFrom";
import ProjectControlMain from "./projectControlMain";
import ProjectControlSideBar from "./projectControlSideBar";
import ProjectCardControl from "./projectCardControl";
import ProjectsStorage from "./projectsStorage";
import ModifyProjectFrom from "./modifyProjectFrom";
export default function createProjectUI() {
  // golbar vars

  //main vars

  //aboutProjects vars
  const searchBar = document.getElementById("search");
  const clearFinishedProjectsBtn = document.querySelector(".clear");
  const createBtn = document.querySelector(".create");

  //add the Create Project form
  CreateProjectForm.theCreateForm();
  //add the Modify Project form
  ModifyProjectFrom.theModifyForm();

  //projects control

  //main control
  ProjectControlMain.addProjects();
  ProjectControlMain.projectHighlight();
  // important to put this here after addprojects
  const allProjectCardsNodes = document.querySelectorAll(".projectCard");

  ProjectControlMain.addProjectsNum(allProjectCardsNodes.length);

  searchBar.addEventListener("input", () => {
    ProjectControlMain.searchBarFunciton();
    ProjectCardControl.projectDoneBtnsEventListener();
    ProjectCardControl.deleteProjectBtnsEventListener();
  });

  clearFinishedProjectsBtn.addEventListener("click", () => {
    ProjectControlMain.clearFinishedProjects();
    ProjectCardControl.projectDoneBtnsEventListener();
    ProjectCardControl.deleteProjectBtnsEventListener();
  });

  //card btns intial asssiment of event listner
  ProjectCardControl.projectDoneBtnsEventListener();
  ProjectCardControl.deleteProjectBtnsEventListener();
  ProjectCardControl.modifyProjectInfoBtnsEventListener();

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
    ProjectCardControl.projectDoneBtnsEventListener();
    ProjectCardControl.deleteProjectBtnsEventListener();
    ProjectControlMain.addProjectsNum(allProjectCardsNodes.length);
  });
  onGoingProjects.addEventListener("click", (e) => {
    ProjectControlSideBar.onGoingProjectsDisplay();
    ProjectCardControl.projectDoneSwitchWord("onGoing");
    ProjectCardControl.deleteProjectBtnsEventListener();
  });
  finishedProjects.addEventListener("click", (e) => {
    ProjectControlSideBar.finishedProjectsDisplay();
    ProjectCardControl.projectDoneSwitchWord(undefined, "finish");
    ProjectCardControl.deleteProjectBtnsEventListener();
  });

  highPriortyProjects.addEventListener("click", () => {
    ProjectControlSideBar.highPriortyProjectsDisplay();
    ProjectCardControl.projectPrioritySwitch("high");
    ProjectCardControl.deleteProjectBtnsEventListener();
  });
  medPriortyProjects.addEventListener("click", () => {
    ProjectControlSideBar.medPriortyProjectsDisplay();
    ProjectCardControl.projectPrioritySwitch(undefined, "med");
    ProjectCardControl.deleteProjectBtnsEventListener();
  });

  lowPriortyProjects.addEventListener("click", (e) => {
    ProjectControlSideBar.lowPriortyProjectsDisplay();
    ProjectCardControl.projectPrioritySwitch(undefined, undefined, "low");
    ProjectCardControl.deleteProjectBtnsEventListener();
  });
  //create Form Manipulation

  const submitBtn = document.querySelector(".submit");

  const closeIcon = document.querySelector(".closeIcon");
  createBtn.addEventListener("click", CreateProjectForm.openForm);
  closeIcon.addEventListener("click", CreateProjectForm.closeForm);
  submitBtn.addEventListener("click", (e) => {
    CreateProjectForm.createProject(e);
    ProjectControlMain.addProjects();
    ProjectControlMain.projectHighlight();
    ProjectControlMain.addProjectsNum(ProjectsStorage.projects.length);
    ProjectCardControl.projectDoneBtnsEventListener();
    ProjectCardControl.deleteProjectBtnsEventListener();
    ProjectCardControl.modifyProjectInfoBtnsEventListener();
  });
}
