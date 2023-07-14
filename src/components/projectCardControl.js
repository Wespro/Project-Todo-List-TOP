import ProjectsStorage from "./projectsStorage";
import ProjectControlMain from "./projectControlMain";
import ProjectControlSideBar from "./projectControlSideBar";

export default (function () {
  //private vars
  let onGoing1 = "";
  let finished1 = "";
  let isHigh1 = "";
  let isMed1 = "";
  let isLow1 = "";
  // project card vars
  const modifyBtns = document.querySelectorAll(".modify");
  const addNotesBtns = document.querySelectorAll(".addNotes");
  const intoTasksBtn = document.querySelectorAll(".intoTasks");

  const projectDoneSwitchWord = (onGoing, finished) => {
    onGoing1 = onGoing;
    finished1 = finished;
  };

  const projectDone = (projectIndex) => {
    const projectCards = document.querySelectorAll(".projectCard");

    // Update UI

    if (
      !ProjectsStorage.projects[projectIndex].done &&
      !onGoing1 &&
      !finished1
    ) {
      projectCards[projectIndex].classList.add("finishedProject");
      ProjectsStorage.projects[projectIndex].done = true;
    } else if (!ProjectsStorage.projects[projectIndex].done && onGoing1) {
      projectCards[projectIndex].classList.add("finishedProject");
      projectCards[projectIndex].style.display = "none";
      ProjectsStorage.projects[projectIndex].done = true;

      onGoing1 = "";

      //update project num
      const allProjectCardsNodes = document.querySelectorAll(".projectCard");

      const onGoingProjectCards = [];

      allProjectCardsNodes.forEach((node) => {
        !node.classList.contains("finishedProject")
          ? onGoingProjectCards.push(node)
          : "return";
      });
      ProjectControlMain.addProjectsNum(onGoingProjectCards.length);
    } else if (ProjectsStorage.projects[projectIndex].done && finished1) {
      projectCards[projectIndex].classList.remove("finishedProject");

      projectCards[projectIndex].style.display = "none";
      ProjectsStorage.projects[projectIndex].done = false;
      finished1 = "";
      const allProjectCardsNodes = document.querySelectorAll(".projectCard");
      const finishedProjectCards = [];
      allProjectCardsNodes.forEach((node) => {
        node.classList.contains("finishedProject")
          ? finishedProjectCards.push(node)
          : "return";
      });
      ProjectControlMain.addProjectsNum(finishedProjectCards.length);
    } else {
      projectCards[projectIndex].classList.remove("finishedProject");
      ProjectsStorage.projects[projectIndex].done = false;
    }
  };

  const projectDoneBtnsEventListener = (onGoing, finish) => {
    const projectDoneBtns = document.querySelectorAll(".projectDone");
    projectDoneBtns.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        projectDone(btn.dataset.number, onGoing, finish);
      });
    });
    ProjectControlMain.projectHighlight();
  };

  const projectPrioritySwitch = (isHigh, isMed, isLow) => {
    isHigh1 = isHigh;
    isMed1 = isMed;
    isLow1 = isLow;
  };

  const deleteProject = (projectIndex, projectsType) => {
    ProjectsStorage.projects.forEach((storgeProject, index) => {
      if (Number(projectIndex) === index) {
        delete ProjectsStorage.projects[projectIndex];

        //removing the empty cell in the storge
        for (let i = 0; i <= ProjectsStorage.projects.length; i++) {
          if (ProjectsStorage.projects[i] == null) {
            ProjectsStorage.projects.splice(i, 1);
          }
        }

        // update the projects Dislpay
        if (onGoing1) {
          ProjectControlMain.addProjects();
          ProjectControlSideBar.onGoingProjectsDisplay();
        } else if (finished1) {
          ProjectControlMain.addProjects();
          ProjectControlSideBar.finishedProjectsDisplay();
        } else if (isHigh1) {
          ProjectControlMain.addProjects();
          ProjectControlSideBar.highPriortyProjectsDisplay();
        } else if (isMed1) {
          ProjectControlMain.addProjects();
          ProjectControlSideBar.medPriortyProjectsDisplay();
        } else if (isLow1) {
          ProjectControlMain.addProjects();
          ProjectControlSideBar.lowPriortyProjectsDisplay();
        } else {
          ProjectControlMain.addProjects();
          ProjectControlMain.addProjectsNum(ProjectsStorage.projects.length);
        }
      }
    });
  };

  const deleteProjectBtnsEventListener = (projectsType) => {
    const deleteProjectBtns = document.querySelectorAll(".delete");

    deleteProjectBtns.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        deleteProject(btn.dataset.number, projectsType);
        deleteProjectBtnsEventListener(projectsType);
      });
    });
    ProjectControlMain.projectHighlight();
  };

  const addNotes = (note) => {
    this.notes.push(note);
  };

  return {
    projectDone,
    projectDoneBtnsEventListener,
    projectDoneSwitchWord,
    deleteProject,
    deleteProjectBtnsEventListener,
    projectPrioritySwitch,
    addNotes,
  };
})();
