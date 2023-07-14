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
    clearEmptyCellsInArray();
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

      projectCard.classList.add(
        "projectCard",
        element.priority.toLowerCase(),
        element.done
      );

      projectCard.setAttribute("data-number", `${index}`);

      if (element.done) {
        projectCard.classList.add("finishedProject");
      }

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

    ProjectsStorage.projects.forEach((project, index) => {
      addingProjects(project, index);
    });
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

        project.classList.add("projectSelected");
        projectSelectedName.innerText = ` ${
          //check that there is project in projects storage to fix error when there is none
          ProjectsStorage.projects[project.dataset.number]
            ? `Project: ${
                ProjectsStorage.projects[project.dataset.number].title
              }`
            : "Select Project"
        }`;
      });
    });
  };

  //add number of projects
  const addProjectsNum = (projectsNum) => {
    const projectCards = document.querySelectorAll(".projectCard");
    const projectNum = document.querySelector(".projectNum");

    switch (projectsNum) {
      case 0:
        projectNum.innerText = `${projectsNum} Projects`;
        break;
      case 1:
        projectNum.innerText = `${projectsNum} Project`;

        break;
      default:
        projectNum.innerText = `${projectsNum} Projects`;
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
    addProjectsNum();
  };

  //Clear Finished Projects
  const clearFinishedProjects = () => {
    const allProjectKeys = [];
    const keysOffinishedProjects = [];

    const finishedProjects = ProjectsStorage.projects.filter((project) => {
      return project.done;
    });

    finishedProjects.forEach((project) => {
      keysOffinishedProjects.push(project.projectKey);
    });

    ProjectsStorage.projects.forEach((project) => {
      allProjectKeys.push(project.projectKey);
    });
    //removing the empty cells in the nodelist
    allProjectKeys.forEach((projectKey) => {
      keysOffinishedProjects.forEach((finishedProjectKey) => {
        if (projectKey === finishedProjectKey) {
          delete ProjectsStorage.projects[projectKey];
        }
      });
    });
    //reremoving the empty cells  in the nodelist because of index chaning
    allProjectKeys.forEach((projectKey) => {
      keysOffinishedProjects.forEach((finishedProjectKey) => {
        if (projectKey === finishedProjectKey) {
          delete ProjectsStorage.projects[projectKey];
        }
      });
    });

    //update the projects Dislpay
    addProjects();
    addProjectsNum(ProjectsStorage.projects.length);
  };

  const clearEmptyCellsInArray = () => {
    //removing the empty cells in the storge
    for (let i = 0; i <= ProjectsStorage.projects.length; i++) {
      if (ProjectsStorage.projects[i] == null) {
        ProjectsStorage.projects.splice(i, 1);
      }
    }
    //reremoving the empty cells in the storge because of index chaning
    for (let i = 0; i <= ProjectsStorage.projects.length; i++) {
      if (ProjectsStorage.projects[i] == null) {
        ProjectsStorage.projects.splice(i, 1);
      }
    }
    console.log(ProjectsStorage.projects);
  };

  return {
    addProjects,
    addProjectsNum,
    searchBarFunciton,
    projectHighlight,
    clearFinishedProjects,
  };
})();
