import CreateProjectForm from "./createProjectFrom";
import ProjectControlMain from "./projectControlMain";
import ProjectControlSideBar from "./projectControlSideBar";
import ProjectCardControl from "./projectCardControl";
import ModifyProjectFrom from "./modifyProjectFrom";
import AddNotesForm from "./addNotesForm";
import sidebarTabMobileControls from "./sidebar-tab-Mobile-controls";
// imgs
import more from "../img & icnons/icons/menu-outline.svg";

export default function createProjectUI() {
  const intialProjectsPage = () => {
    const fragment = new DocumentFragment();
    const body = document.querySelector("body");
    body.replaceChildren();
    const homeInnerBody = document.createElement("div");

    const dimscreen = document.createElement("div");
    const header = document.createElement("header");
    const headerTitle = document.createElement("h1");

    const sideBarMainContainer = document.createElement("div");

    const sideBar = document.createElement("div");
    const sideBarInnerContainer = document.createElement("div");

    const openCloseSidebarContainer = document.createElement("div");
    const openCloseSidebarBtn = document.createElement("button");
    const openCloseSidebarPar = document.createElement("p");
    const openCloseSidebarImg = document.createElement("img");

    const sideBarTitle = document.createElement("h1");
    const allProjects = document.createElement("button");
    const onGoingProjects = document.createElement("button");
    const finishedProjects = document.createElement("button");
    const highPriority = document.createElement("button");
    const medPriority = document.createElement("button");
    const lowPriority = document.createElement("button");

    const main = document.createElement("main");

    const aboutProjects = document.createElement("div");
    const projectSelectedName = document.createElement("h2");
    const search = document.createElement("input");
    const projectNum = document.createElement("h3");
    const creatClearProjects = document.createElement("div");
    const createProjectBtn = document.createElement("button");
    const clearFinishedProjectsBtn = document.createElement("button");

    const projects = document.createElement("div");

    const footer = document.createElement("footer");

    const githubLink = document.createElement("a");

    //adding attrs
    homeInnerBody.classList.add("homeInnerBody");
    dimscreen.classList.add("dimLightScreen", "dimLightScreenOff");
    sideBarMainContainer.classList.add("sideBarMainContainer");

    sideBar.classList.add("sideBar", "closeSidebar");
    sideBarInnerContainer.classList.add("sideBarInnerContainer");

    openCloseSidebarContainer.classList.add("openCloseSidebarContainer");
    openCloseSidebarBtn.classList.add("openCloseSidebarBtn");
    openCloseSidebarPar.classList.add("openCloseSidebarPar");
    openCloseSidebarImg.classList.add("openCloseSidebarImg");

    allProjects.classList.add("sidBarBtn", "allProjects");
    onGoingProjects.classList.add("sidBarBtn", "onGoingProjects");
    finishedProjects.classList.add("sidBarBtn", "finishedProjects");
    highPriority.classList.add("sidBarBtn", "highPriority");
    medPriority.classList.add("sidBarBtn", "medPriority");
    lowPriority.classList.add("sidBarBtn", "lowPriority");

    aboutProjects.classList.add("aboutProjects");
    projectSelectedName.classList.add("projectSelectedName");
    search.setAttribute("id", "search");
    search.setAttribute("type", "search");
    search.setAttribute("placeholder", "Search for a project");

    projectNum.classList.add("projectNum");
    creatClearProjects.classList.add("creatClearProjects");
    createProjectBtn.classList.add("createProjectBtn");
    clearFinishedProjectsBtn.classList.add("clearFinishedProjectsBtn");

    projects.classList.add("projects");

    githubLink.setAttribute("href", "https://github.com/Wespro");

    // imgs

    openCloseSidebarImg.src = more;

    //text
    openCloseSidebarPar.innerText = "";
    headerTitle.innerText = "Projects";
    sideBarTitle.innerText = "Projects Control";
    allProjects.innerText = "All Projects";
    onGoingProjects.innerText = "On-Going Projects";
    finishedProjects.innerText = "Finished Projects";
    highPriority.innerText = "High Priority";
    medPriority.innerText = "Medium Priority";
    lowPriority.innerText = "Low Priority";

    projectSelectedName.innerText = "Project: Test";
    projectNum.innerText = "1 project";

    createProjectBtn.innerText = "+ Create project";
    clearFinishedProjectsBtn.innerText = "Clear Finised Projects";

    footer.innerHTML = `Copyright © 2023 `;

    fragment.append(dimscreen, header, sideBarMainContainer, footer);
    header.append(headerTitle);
    sideBarMainContainer.append(sideBar, main);
    sideBar.append(sideBarInnerContainer);
    sideBarInnerContainer.append(
      openCloseSidebarContainer,
      sideBarTitle,
      allProjects,
      onGoingProjects,
      finishedProjects,
      highPriority,
      medPriority,
      lowPriority
    );
    openCloseSidebarContainer.append(openCloseSidebarBtn);
    openCloseSidebarBtn.append(openCloseSidebarImg, openCloseSidebarPar);

    main.append(aboutProjects, projects);

    aboutProjects.append(
      projectSelectedName,
      search,
      projectNum,
      creatClearProjects
    );

    creatClearProjects.append(createProjectBtn, clearFinishedProjectsBtn);
    footer.append(githubLink);

    homeInnerBody.append(fragment);
    body.append(homeInnerBody);
  };
  intialProjectsPage();

  //add the Create Project form
  CreateProjectForm.theCreateForm();
  //add the Modify Project form
  ModifyProjectFrom.theModifyForm();
  //add the Add note Project form
  AddNotesForm.theNoteForm();
  //projects control

  //main control
  ProjectControlMain.addProjects();
  ProjectControlMain.projectHighlight();
  // important to put this here after addprojects
  const allProjectCardsNodes = document.querySelectorAll(".projectCard");
  ProjectControlMain.addProjectsNum(allProjectCardsNodes.length);

  const search = document.querySelector("#search");

  search.addEventListener("input", (e) => {
    ProjectControlMain.searchBarFunciton();
    ProjectCardControl.projectDoneBtnsEventListener();
    ProjectCardControl.deleteProjectBtnsEventListener();
    ProjectCardControl.modifyProjectInfoBtnsEventListener();
    ProjectCardControl.AddNotesBtnsEventListener(e);
    ProjectCardControl.intoTasksBtnsEventListener(e);
  });

  const clearFinishedProjectsBtn = document.querySelector(
    ".clearFinishedProjectsBtn"
  );

  clearFinishedProjectsBtn.addEventListener("click", (e) => {
    ProjectControlMain.clearFinishedProjects();
  });

  //card btns intial asssiment of event listner
  ProjectCardControl.projectDoneBtnsEventListener();
  ProjectCardControl.deleteProjectBtnsEventListener();
  ProjectCardControl.modifyProjectInfoBtnsEventListener();
  ProjectCardControl.AddNotesBtnsEventListener();
  ProjectCardControl.intoTasksBtnsEventListener();

  //sidebar vars
  const allProjects = document.querySelector(".allProjects");
  const onGoingProjects = document.querySelector(".onGoingProjects");
  const finishedProjects = document.querySelector(".finishedProjects");

  const highPriortyProjects = document.querySelector(".highPriority");
  const medPriortyProjects = document.querySelector(".medPriority");
  const lowPriortyProjects = document.querySelector(".lowPriority");
  // sidebar control
  allProjects.addEventListener("click", (e) => {
    //   updated nodes for addProjectsNum
    const allProjectCardsNodes = document.querySelectorAll(".projectCard");

    ProjectControlMain.addProjects();
    ProjectCardControl.projectDoneBtnsEventListener();
    ProjectCardControl.deleteProjectBtnsEventListener();
    ProjectControlMain.addProjectsNum(allProjectCardsNodes.length);
    ProjectCardControl.projectDoneSwitchWord("", "");
    ProjectCardControl.modifyProjectInfoBtnsEventListener();
    ProjectCardControl.AddNotesBtnsEventListener(e);
    ProjectCardControl.intoTasksBtnsEventListener(e);
    sidebarTabMobileControls.sidebarBtnsCloseSidebar();
  });
  onGoingProjects.addEventListener("click", (e) => {
    ProjectControlSideBar.onGoingProjectsDisplay();
    ProjectCardControl.projectDoneSwitchWord("onGoing");
    ProjectCardControl.deleteProjectBtnsEventListener();
    ProjectCardControl.modifyProjectInfoBtnsEventListener();
    ProjectCardControl.AddNotesBtnsEventListener(e);
    ProjectCardControl.intoTasksBtnsEventListener(e);
    sidebarTabMobileControls.sidebarBtnsCloseSidebar();
  });
  finishedProjects.addEventListener("click", (e) => {
    ProjectControlSideBar.finishedProjectsDisplay();
    ProjectCardControl.projectDoneSwitchWord("", "finish");
    ProjectCardControl.deleteProjectBtnsEventListener();
    ProjectCardControl.modifyProjectInfoBtnsEventListener();
    ProjectCardControl.AddNotesBtnsEventListener(e);
    ProjectCardControl.intoTasksBtnsEventListener(e);
    sidebarTabMobileControls.sidebarBtnsCloseSidebar();
  });

  highPriortyProjects.addEventListener("click", (e) => {
    ProjectControlSideBar.highPriortyProjectsDisplay();
    ProjectCardControl.projectPrioritySwitch("high");
    ProjectCardControl.projectDoneSwitchWord("", "");
    ProjectCardControl.deleteProjectBtnsEventListener();
    ProjectCardControl.modifyProjectInfoBtnsEventListener();
    ProjectCardControl.AddNotesBtnsEventListener(e);
    ProjectCardControl.intoTasksBtnsEventListener(e);
    sidebarTabMobileControls.sidebarBtnsCloseSidebar();
  });
  medPriortyProjects.addEventListener("click", (e) => {
    ProjectControlSideBar.medPriortyProjectsDisplay();
    ProjectCardControl.projectPrioritySwitch(undefined, "med");
    ProjectCardControl.projectDoneSwitchWord("", "");
    ProjectCardControl.deleteProjectBtnsEventListener();
    ProjectCardControl.modifyProjectInfoBtnsEventListener();
    ProjectCardControl.AddNotesBtnsEventListener(e);
    ProjectCardControl.intoTasksBtnsEventListener(e);
    sidebarTabMobileControls.sidebarBtnsCloseSidebar();
  });

  lowPriortyProjects.addEventListener("click", (e) => {
    ProjectControlSideBar.lowPriortyProjectsDisplay();
    ProjectCardControl.projectPrioritySwitch(undefined, undefined, "low");
    ProjectCardControl.projectDoneSwitchWord("", "");
    ProjectCardControl.deleteProjectBtnsEventListener();
    ProjectCardControl.modifyProjectInfoBtnsEventListener();
    ProjectCardControl.AddNotesBtnsEventListener(e);
    ProjectCardControl.intoTasksBtnsEventListener(e);
    sidebarTabMobileControls.sidebarBtnsCloseSidebar();
  });
  //create Form Manipulation

  const submitBtn = document.querySelector("#submit");

  const closeIcon = document.querySelector(".closeIcon");
  const createProjectBtn = document.querySelector(".createProjectBtn");
  createProjectBtn.addEventListener("click", CreateProjectForm.openCreateForm);
  closeIcon.addEventListener("click", CreateProjectForm.closeCreateForm);
  submitBtn.addEventListener("click", (e) => {
    CreateProjectForm.createProject(e);
  });
}
