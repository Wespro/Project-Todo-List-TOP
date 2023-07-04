import ProjectsStorage from "./projectsStorage";

export default (function ProjectManipulation() {
  const projectsContainer = document.querySelector(".projects");
  const fragment = new DocumentFragment();

  // adding pojects from project storage
  const addProjects = (projectsSearchedFor) => {
    projectsContainer.replaceChildren();
    !projectsSearchedFor
      ? ProjectsStorage.projects.forEach((element, index) => {
          const projectCard = document.createElement("div");

          const projectInfo = document.createElement("div");
          const projectTitle = document.createElement("h2");
          const projectDescription = document.createElement("p");
          const projectPriority = document.createElement("h3");
          const projectPrioritySpan = document.createElement("span");
          const projectDueDate = document.createElement("h3");

          const optionBtns = document.createElement("div");
          const modify = document.createElement("button");
          const addNotes = document.createElement("button");
          const intoTasks = document.createElement("button");
          const deleteProject = document.createElement("button");

          // assign attrs

          projectCard.classList.add("projectCard");

          projectCard.setAttribute("data-number", `${index}`);

          projectInfo.classList.add("projectInfo");
          projectTitle.classList.add("projectTitle");
          projectDescription.classList.add("projectDescription");
          projectPriority.classList.add("projectPriority");
          projectPrioritySpan.classList.add(`${element.priority}`);
          projectDueDate.classList.add("projectDueDate");

          optionBtns.classList.add("optionBtns");
          modify.classList.add("modify");
          addNotes.classList.add("addNotes");
          intoTasks.classList.add("intoTasks");
          deleteProject.classList.add(`delete`);

          //add classes as a key for its project
          modify.setAttribute("data-number", `${index}`);
          addNotes.setAttribute("data-number", `${index}`);
          intoTasks.setAttribute("data-number", `${index}`);
          deleteProject.setAttribute("data-number", `${index}`);

          //add text
          projectTitle.innerText = element.title;
          projectDescription.innerText = element.description;
          projectPriority.innerText = `Priority: `;
          projectPrioritySpan.innerText = element.priority;
          projectDueDate.innerText = `Due-Date: ${element.dueDate}`;

          modify.innerText = "Modify Info";
          addNotes.innerText = "Add Notes";
          intoTasks.innerText = "Into Tasks";
          deleteProject.innerText = "Delete Project";

          // appending

          fragment.appendChild(projectCard);
          projectCard.append(projectInfo, optionBtns);
          projectInfo.append(
            projectTitle,
            projectDescription,
            projectPriority,
            projectDueDate
          );
          projectPriority.append(projectPrioritySpan);
          optionBtns.append(modify, addNotes, intoTasks, deleteProject);
        })
      : projectsSearchedFor.forEach((element, index) => {
          const projectCard = document.createElement("div");

          const projectInfo = document.createElement("div");
          const projectTitle = document.createElement("h2");
          const projectDescription = document.createElement("p");
          const projectPriority = document.createElement("h3");
          const projectPrioritySpan = document.createElement("span");
          const projectDueDate = document.createElement("h3");

          const optionBtns = document.createElement("div");
          const modify = document.createElement("button");
          const addNotes = document.createElement("button");
          const intoTasks = document.createElement("button");
          const deleteProject = document.createElement("button");

          // assign attrs

          projectCard.classList.add("projectCard");

          projectCard.setAttribute("data-number", `${index}`);

          projectInfo.classList.add("projectInfo");
          projectTitle.classList.add("projectTitle");
          projectDescription.classList.add("projectDescription");
          projectPriority.classList.add("projectPriority");
          projectPrioritySpan.classList.add(`${element.priority}`);
          projectDueDate.classList.add("projectDueDate");

          optionBtns.classList.add("optionBtns");
          modify.classList.add("modify");
          addNotes.classList.add("addNotes");
          intoTasks.classList.add("intoTasks");
          deleteProject.classList.add(`delete`);

          //add classes as a key for its project
          modify.setAttribute("data-number", `${index}`);
          addNotes.setAttribute("data-number", `${index}`);
          intoTasks.setAttribute("data-number", `${index}`);
          deleteProject.setAttribute("data-number", `${index}`);

          //add text
          projectTitle.innerText = element.title;
          projectDescription.innerText = element.description;
          projectPriority.innerText = `Priority: `;
          projectPrioritySpan.innerText = element.priority;
          projectDueDate.innerText = `Due-Date: ${element.dueDate}`;

          modify.innerText = "Modify Info";
          addNotes.innerText = "Add Notes";
          intoTasks.innerText = "Into Tasks";
          deleteProject.innerText = "Delete Project";

          // appending

          fragment.appendChild(projectCard);
          projectCard.append(projectInfo, optionBtns);
          projectInfo.append(
            projectTitle,
            projectDescription,
            projectPriority,
            projectDueDate
          );
          projectPriority.append(projectPrioritySpan);
          optionBtns.append(modify, addNotes, intoTasks, deleteProject);
        });

    projectsContainer.append(fragment);
  };

  //add number of projects
  const addProjectsNum = () => {
    const projectNum = document.querySelector(".projectNum");
    ProjectsStorage.projects.length === 1
      ? (projectNum.innerText = `${ProjectsStorage.projects.length} Project`)
      : (projectNum.innerText = `${ProjectsStorage.projects.length} Projects`);
  };

  //sreach-bar functionality
  const searchBarFunciton = () => {
    const searchBar = document.getElementById("search");
    const projectsSearchedFor = ProjectsStorage.projects.filter((project) => {
      return project.title
        .toLowerCase()
        .includes(searchBar.value.toLowerCase());
    });

    addProjects(projectsSearchedFor);
  };
  //highlight the curnt project been clicked
  const projectHighlight = () => {
    const projectsNodeList = document.querySelectorAll(".projectCard");
    const projectSelectedName = document.querySelector(".projectSelectedName");

    projectsNodeList.forEach((project) => {
      project.addEventListener("click", (e) => {
        projectsNodeList.forEach((project) => {
          project.classList.remove("projectSelected");
        });

        project.classList.toggle("projectSelected");
        projectSelectedName.innerText = `Project: ${
          ProjectsStorage.projects[project.dataset.number].title
        }`;
      });
    });
  };

  return { addProjects, addProjectsNum, searchBarFunciton, projectHighlight };
})();
