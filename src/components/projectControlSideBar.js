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
  };

  //  High priorty projects
  const highPriortyProjectsDisplay = () => {
    const allProjectCardsNodes = document.querySelectorAll(".projectCard");
    allProjectCardsNodes.forEach((node) => {
      node.style.display = "none";
    });

    const highPriortyProjectCards = [];

    allProjectCardsNodes.forEach((node) => {
      node.classList.contains("high")
        ? highPriortyProjectCards.push(node)
        : "return";
    });
    highPriortyProjectCards.forEach((node) => {
      node.style.display = "flex";
    });
    ProjectControlMain.addProjectsNum(highPriortyProjectCards.length);
  };

  //Medium priorty projects
  const medPriortyProjectsDisplay = () => {
    const allProjectCardsNodes = document.querySelectorAll(".projectCard");
    allProjectCardsNodes.forEach((node) => {
      node.style.display = "none";
    });

    const medPriortyProjectCards = [];

    allProjectCardsNodes.forEach((node) => {
      node.classList.contains("medium")
        ? medPriortyProjectCards.push(node)
        : "return";
    });
    medPriortyProjectCards.forEach((node) => {
      node.style.display = "flex";
    });
    ProjectControlMain.addProjectsNum(medPriortyProjectCards.length);
  };
  //Low priorty projects

  const lowPriortyProjectsDisplay = () => {
    const allProjectCardsNodes = document.querySelectorAll(".projectCard");
    allProjectCardsNodes.forEach((node) => {
      node.style.display = "none";
    });

    const lowPriortyProjectCards = [];

    allProjectCardsNodes.forEach((node) => {
      node.classList.contains("low")
        ? lowPriortyProjectCards.push(node)
        : "return";
    });
    lowPriortyProjectCards.forEach((node) => {
      node.style.display = "flex";
    });
    ProjectControlMain.addProjectsNum(lowPriortyProjectCards.length);
  };

  return {
    finishedProjectsDisplay,
    onGoingProjectsDisplay,

    highPriortyProjectsDisplay,
    medPriortyProjectsDisplay,
    lowPriortyProjectsDisplay,
  };
})();
