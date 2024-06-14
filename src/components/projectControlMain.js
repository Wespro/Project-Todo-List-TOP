import ProjectsStorage from "./projectsStorage";
import ProjectCardControl from "./projectCardControl";

export default (function ProjectManipulation() {
  // adding pojects
  const addProjects = () => {
    // active BTN
    const sidBarBtns = document.querySelectorAll(".sidBarBtn");
    const allProjectsBtn = document.querySelector(".allProjects");
    sidBarBtns.forEach((node) => {
      node.classList.remove("activeSidebarBtn");
    });

    allProjectsBtn.classList.add("activeSidebarBtn");

    /////

    const projectsContainer = document.querySelector(".projects");
    const fragment = new DocumentFragment();

    projectsContainer.replaceChildren();

    const addingProjects = (element) => {
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

      const notes = document.createElement("div");
      const notesList = document.createElement("ul");
      const notesListHeader = document.createElement("h2");

      if (!(element.notes.length === 0)) {
        notesListHeader.textContent = "Notes:";
        notes.append(notesListHeader, notesList);
      }

      if (element.notes) {
        element.notes.forEach((note, index) => {
          const noteContainerProjectCard = document.createElement("div");
          noteContainerProjectCard.classList.add("noteContainerProjectCard");
          noteContainerProjectCard.setAttribute("data-number", index);

          const deletenoteBtn = document.createElement("button");
          deletenoteBtn.classList.add("deletenoteBtn");
          deletenoteBtn.setAttribute("data-number", index);
          deletenoteBtn.innerText = "X";

          const notePoint = document.createElement("li");
          notePoint.classList.add("note");
          notePoint.innerText = note;

          noteContainerProjectCard.append(notePoint, deletenoteBtn);
          notesList.append(noteContainerProjectCard);
        });
      }
      // assign attrs

      projectCard.classList.add(
        "projectCard",
        element.priority.toLowerCase(),
        element.done,
        element.title
      );

      projectCard.setAttribute("data-number", `${element.projectKey}`);

      if (element.done) {
        projectCard.classList.add("finishedProject");
      }

      projectInfo.classList.add("projectInfo");
      projectTitle.classList.add("projectTitle");
      projectTitle.setAttribute("data-number", `${element.projectKey}`);
      projectDescription.classList.add("projectDescription");
      projectPriority.classList.add("projectPriority");
      projectPrioritySpan.classList.add(`${element.priority}`);
      projectDueDate.classList.add("projectDueDate");

      notes.classList.add("notes");

      optionBtns.classList.add("optionBtns");
      modify.classList.add("modify", `${element.title}`);
      addNotes.classList.add("addNotes");
      intoTasks.classList.add("intoTasks");
      projectDone.classList.add("projectDone");
      deleteProject.classList.add("delete");

      //add classes as a key for its project
      modify.setAttribute("data-number", `${element.projectKey}`);
      addNotes.setAttribute("data-number", `${element.projectKey}`);
      intoTasks.setAttribute("data-number", `${element.projectKey}`);
      projectDone.setAttribute("data-number", `${element.projectKey}`);
      deleteProject.setAttribute("data-number", `${element.projectKey}`);

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
      projectCard.append(projectInfo, notes, optionBtns);
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

    for (let i = 0; i < localStorage.length; i++) {
      addingProjects(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    // console.log(localStorage);

    // JSON.parse(localStorage.getItem("projects")).forEach((project, index) => {
    //   addingProjects(project, index);
    // });
    // ProjectsStorage.projects.forEach((project, index) => {
    //   addingProjects(project, index);
    // });
  };

  //highlight the curnt project been clicked
  const projectHighlight = () => {
    const projectsNodeList = document.querySelectorAll(".projectCard");
    const projectSelectedName = document.querySelector(".projectSelectedName");

    projectsNodeList.forEach((projectM) => {
      const cardkey = projectM.attributes["data-number"].value;
      projectM.addEventListener("click", (e) => {
        projectsNodeList.forEach((project) => {
          project.classList.remove("projectSelected");
        });

        projectM.classList.add("projectSelected");

        //check that there is project in projects storage... to fix error when there is none

        if (cardkey) {
          projectSelectedName.innerText = ` ${
            JSON.parse(localStorage.getItem(`${cardkey}`)).title
          }`;
        } else {
          projectSelectedName.innerText = "select a project";
        }
      });
    });
  };

  //add number of projects
  const addProjectsNum = (projectsNum) => {
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

    const allProjectCardsNodes = document.querySelectorAll(".projectCard");
    const allProjectTitles = document.querySelectorAll(".projectTitle");
    allProjectCardsNodes.forEach((node) => {
      node.style.display = "none";
    });
    const projectsSearchedFor = [];

    allProjectTitles.forEach((node) => {
      allProjectCardsNodes.forEach((bNode) => {
        if (
          node.textContent
            .toLowerCase()
            .includes(searchBar.value.toLowerCase()) &&
          bNode.attributes["data-number"].value ===
            node.attributes["data-number"].value
        ) {
          projectsSearchedFor.push(bNode);
        } else {
          return;
        }
      });
    });
    projectsSearchedFor.forEach((node) => {
      node.style.display = "flex";
    });
    addProjectsNum(projectsSearchedFor.length);
  };

  //Clear Finished Projects
  const clearFinishedProjects = () => {
    // const inPorgressProjects = ProjectsStorage.projects.filter((project) => {
    //   return !project.done;
    // });
    const inPorgressProjects = [];
    // getting the inprograss projects
    for (let i = 0; i < localStorage.length; i++) {
      if (JSON.parse(localStorage.getItem(localStorage.key(i))).done == false) {
        inPorgressProjects.push(
          JSON.parse(localStorage.getItem(localStorage.key(i)))
        );
      }
    }
    //empty storage
    // ProjectsStorage.projects = [...inPorgressProjects];
    localStorage.clear();
    // putting only the inPorgressProjects in storage
    for (let i = 0; i < inPorgressProjects.length; i++) {
      localStorage.setItem(
        `${inPorgressProjects[i].projectKey}`,
        JSON.stringify(inPorgressProjects[i])
      );
    }

    //update the projects Dislpay
    ProjectCardControl.updateUI();
  };

  return {
    addProjects,
    addProjectsNum,
    searchBarFunciton,
    projectHighlight,
    clearFinishedProjects,
  };
})();
