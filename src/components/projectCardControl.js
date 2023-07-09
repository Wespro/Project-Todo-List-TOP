import ProjectsStorage from "./projectsStorage";
import ProjectControlMain from "./projectControlMain";

export default (function () {
  // project card vars
  const modifyBtns = document.querySelectorAll(".modify");
  const addNotesBtns = document.querySelectorAll(".addNotes");
  const intoTasksBtn = document.querySelectorAll(".intoTasks");

  const projectDone = (projectIndex, ongGoing) => {
    const projectCards = document.querySelectorAll(".projectCard");
    // Update the storage
    ProjectsStorage.projects[projectIndex].done =
      !ProjectsStorage.projects[projectIndex].done;

    // Update Ui

    if (ProjectsStorage.projects[projectIndex].done && ongGoing === undefined) {
      projectCards[projectIndex].classList.add("finishedProject");
    } else if (ongGoing) {
      projectCards[projectIndex].remove();
      ProjectControlMain.addProjectsNum();
    } else {
      projectCards[projectIndex].classList.remove("finishedProject");
    }
  };

  const projectDoneBtnsEventListener = (onGoing) => {
    const projectDoneBtns = document.querySelectorAll(".projectDone");
    projectDoneBtns.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        projectDone(btn.dataset.number, onGoing);
      });
    });
    ProjectControlMain.projectHighlight();
  };

  const deleteProject = (projectIndex) => {
    ProjectsStorage.projects.forEach((storgeProject, index) => {
      if (Number(projectIndex) === index) {
        delete ProjectsStorage.projects[projectIndex];

        //removing the empty cell in the storge
        for (let i = 0; i <= ProjectsStorage.projects.length; i++) {
          if (ProjectsStorage.projects[i] == null) {
            ProjectsStorage.projects.splice(i, 1);
          }
        }
        //update the projects Dislpay
        ProjectControlMain.addProjects();
        ProjectControlMain.addProjectsNum();
      }
    });
  };

  const deleteProjectBtnsEventListener = () => {
    const deleteProjectBtns = document.querySelectorAll(".delete");

    deleteProjectBtns.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        deleteProject(btn.dataset.number);
        deleteProjectBtnsEventListener();
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
    deleteProject,
    deleteProjectBtnsEventListener,
    addNotes,
  };
})();
