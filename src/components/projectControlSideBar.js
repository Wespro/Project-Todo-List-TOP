import ProjectControlMain from "./projectControlMain";
import ProjectsStorage from "./projectsStorage";
import ProjectCardControl from "./projectCardControl";
export default (function () {
  //  Finished projects
  const finishedProjectsDisplay = () => {
    const allProjectCardsNodes = document.querySelectorAll(".projectCard");
    allProjectCardsNodes.forEach((node) => {
      node.style.display = "none";
    });

    const finishedProjectCards = [];

    allProjectCardsNodes.forEach((node) => {
      node.classList.contains("finishedProject")
        ? finishedProjectCards.push(node)
        : "return";
    });
    finishedProjectCards.forEach((node) => {
      node.style.display = "flex";
    });

    ProjectControlMain.addProjectsNum(finishedProjectCards.length);
    // const finishedProjects = ProjectsStorage.projects.filter((project) => {
    //   return project.done;
    // });

    // ProjectControlMain.addProjects(undefined, finishedProjects, undefined);
  };

  // onGoing Projects
  const onGoingProjectsDisplay = () => {
    const allProjectCardsNodes = document.querySelectorAll(".projectCard");
    allProjectCardsNodes.forEach((node) => {
      node.style.display = "none";
    });

    const onGoingProjectCards = [];

    allProjectCardsNodes.forEach((node) => {
      !node.classList.contains("finishedProject")
        ? onGoingProjectCards.push(node)
        : "return";
    });
    onGoingProjectCards.forEach((node) => {
      node.style.display = "flex";
    });
    ProjectControlMain.addProjectsNum(onGoingProjectCards.length);
    // const onGoingProjects = ProjectsStorage.projects.filter((project) => {
    //   return !project.done;
    // });

    // ProjectControlMain.addProjects(undefined, undefined, onGoingProjects);
  };

  //  High priorty projects
  const highPriortyProjectsDisplay = () => {
    const allProjectCardsNodes = document.querySelectorAll(".projectCard");
    allProjectCardsNodes.forEach((node) => {
      node.style.display = "none";
    });

    const highPriortyProjectCards = [];

    allProjectCardsNodes.forEach((node) => {
      !node.classList.contains("finishedProject")
        ? highPriortyProjectCards.push(node)
        : "return";
    });
    highPriortyProjectCards.forEach((node) => {
      node.style.display = "flex";
    });
    ProjectControlMain.addProjectsNum(highPriortyProjectCards.length);

    // const highPriortyProjects = ProjectsStorage.projects.filter((project) => {
    //   return project.priority === "High";
    // });
    // ProjectControlMain.addProjects(
    //   undefined,
    //   undefined,
    //   undefined,
    //   highPriortyProjects
    // );
    // ProjectControlMain.addProjectsNum();
  };

  //Medium priorty projects
  const medPriortyProjectsDisplay = () => {
    const medPriortyProjects = ProjectsStorage.projects.filter((project) => {
      return project.priority === "Medium";
    });

    ProjectControlMain.addProjects(
      undefined,
      undefined,
      undefined,
      undefined,
      medPriortyProjects
    );
    ProjectControlMain.addProjectsNum();
  };
  //       //Low priorty projects

  const lowPriortyProjectsDisplay = () => {
    const lowPriortyProjects = ProjectsStorage.projects.filter((project) => {
      return project.priority === "Low";
    });

    ProjectControlMain.addProjects(
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      lowPriortyProjects
    );
    ProjectControlMain.addProjectsNum();
  };

  return {
    finishedProjectsDisplay,
    onGoingProjectsDisplay,

    highPriortyProjectsDisplay,
    medPriortyProjectsDisplay,
    lowPriortyProjectsDisplay,
  };
})();
