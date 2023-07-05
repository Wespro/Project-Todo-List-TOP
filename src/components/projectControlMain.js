import ProjectsStorage from "./projectsStorage";

export default (function ProjectManipulation() {
  const projectsContainer = document.querySelector(".projects");
  const fragment = new DocumentFragment();

  // adding pojects
  const addProjects = (
    projectsSearchedFor,
    finishedProjects,
    onGoingProjects,
    highPriortyProjects,
    medPriortyProjects,
    lowPriortyProjects
  ) => {
    projectsContainer.replaceChildren();

    const addingProjects = (element, index) => {
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
      const projectDone = document.createElement("button");
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
      projectDone.classList.add(`projectDone`);
      deleteProject.classList.add(`delete`);

      //add classes as a key for its project
      modify.setAttribute("data-number", `${index}`);
      addNotes.setAttribute("data-number", `${index}`);
      intoTasks.setAttribute("data-number", `${index}`);
      projectDone.setAttribute("data-number", `${index}`);
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
      projectDone.innerText = " ✔ Project Done";
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
      optionBtns.append(
        modify,
        addNotes,
        intoTasks,
        projectDone,
        deleteProject
      );
      projectsContainer.append(fragment);
    };
    /////////////////////////////////////////
    //deciding display of projects
    if (
      !projectsSearchedFor &&
      !finishedProjects &&
      !onGoingProjects &&
      !highPriortyProjects &&
      !medPriortyProjects &&
      !lowPriortyProjects
    ) {
      ProjectsStorage.projects.forEach((project, index) => {
        addingProjects(project, index);
      });
    } else if (
      projectsSearchedFor &&
      !finishedProjects &&
      !onGoingProjects &&
      !highPriortyProjects &&
      !medPriortyProjects &&
      !lowPriortyProjects
    ) {
      projectsSearchedFor.forEach((project, index) => {
        addingProjects(project, index);
      });
    } else if (
      !projectsSearchedFor &&
      finishedProjects &&
      !onGoingProjects &&
      !highPriortyProjects &&
      !medPriortyProjects &&
      !lowPriortyProjects
    ) {
      finishedProjects.forEach((project, index) => {
        addingProjects(project, index);
      });
    } else if (
      !projectsSearchedFor &&
      !finishedProjects &&
      onGoingProjects &&
      !highPriortyProjects &&
      !medPriortyProjects &&
      !lowPriortyProjects
    ) {
      onGoingProjects.forEach((project, index) => {
        addingProjects(project, index);
      });
    } else if (
      !projectsSearchedFor &&
      !finishedProjects &&
      !onGoingProjects &&
      highPriortyProjects &&
      !medPriortyProjects &&
      !lowPriortyProjects
    ) {
      highPriortyProjects.forEach((project, index) => {
        addingProjects(project, index);
      });
    } else if (
      !projectsSearchedFor &&
      !finishedProjects &&
      !onGoingProjects &&
      !highPriortyProjects &&
      medPriortyProjects &&
      !lowPriortyProjects
    ) {
      medPriortyProjects.forEach((project, index) => {
        addingProjects(project, index);
      });
    } else if (
      !projectsSearchedFor &&
      !finishedProjects &&
      !onGoingProjects &&
      !highPriortyProjects &&
      !medPriortyProjects &&
      lowPriortyProjects
    ) {
      lowPriortyProjects.forEach((project, index) => {
        addingProjects(project, index);
      });
    }
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

  //add number of projects
  const addProjectsNum = () => {
    const projectCards = document.querySelectorAll(".projectCard");
    const projectNum = document.querySelector(".projectNum");

    switch (projectCards.length) {
      case 0:
        projectNum.innerText = `${projectCards.length} Projects`;
        break;
      case 1:
        projectNum.innerText = `${projectCards.length} Project`;

        break;
      default:
        projectNum.innerText = `${projectCards.length} Projects`;
    }
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

  //Clear Finished Projects
  const clearFinishedProjects = () => {
    const keysOffinishedProjects = [];

    const finishedProjects = ProjectsStorage.projects.filter((project) => {
      return project.done;
    });

    finishedProjects.forEach((project) => {
      keysOffinishedProjects.push(project.projectKey);
    });

    // manual delettion of the first one normaly
    // so that we can use -1 as the index change every time we delete
    // from the ProjectsStorage.projects
    ProjectsStorage.projects.splice(keysOffinishedProjects[0], 1);

    keysOffinishedProjects.forEach((index) => {
      ProjectsStorage.projects.splice(index - 1, 1);
    });
    //update the projects Dislpay
    addProjects();
  };
  return {
    addProjects,
    addProjectsNum,
    searchBarFunciton,
    projectHighlight,
    clearFinishedProjects,
  };
})();
