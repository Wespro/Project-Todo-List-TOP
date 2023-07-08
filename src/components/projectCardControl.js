import ProjectsStorage from "./projectsStorage";
import ProjectControlMain from "./projectControlMain";

export default (function () {
  const projectDone = (projectIndex, ongGoing) => {
    const projectCards = document.querySelectorAll(".projectCard");
    // Update the storage
    ProjectsStorage.projects[projectIndex].done =
      !ProjectsStorage.projects[projectIndex].done;

    // Update Ui

    if (ProjectsStorage.projects[projectIndex].done && ongGoing === undefined) {
      projectCards[projectIndex].classList.add("finishedProject");
      console.log("hey");
    } else if (ongGoing) {
      projectCards[projectIndex].remove();
      ProjectControlMain.addProjectsNum();
    } else {
      projectCards[projectIndex].classList.remove("finishedProject");
    }
  };

  const addNotes = (note) => {
    this.notes.push(note);
    console.log();
  };

  const deleteProject = () => {};

  return {
    addNotes,
    projectDone,
    deleteProject,
  };
})();
