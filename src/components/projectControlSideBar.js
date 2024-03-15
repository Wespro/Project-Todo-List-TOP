import ProjectControlMain from "./projectControlMain";
import ProjectsStorage from "./projectsStorage";
import ProjectCardControl from "./projectCardControl";
export default (function () {
  //  Finished projects
  const finishedProjectsDisplay = () => {
    // active BTN
    const sidBarBtns = document.querySelectorAll(".sidBarBtn");
    const finishedProjectsBtn = document.querySelector(".finishedProjects");
    sidBarBtns.forEach((node) => {
      node.classList.remove("activeSidebarBtn");
    });

    finishedProjectsBtn.classList.add("activeSidebarBtn");

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
    // active BTN
    const sidBarBtns = document.querySelectorAll(".sidBarBtn");
    const onGoingProjectsBtn = document.querySelector(".onGoingProjects");
    sidBarBtns.forEach((node) => {
      node.classList.remove("activeSidebarBtn");
    });

    onGoingProjectsBtn.classList.add("activeSidebarBtn");

    ////
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
    console.log(onGoingProjectCards);

    onGoingProjectCards.forEach((node) => {
      node.style.display = "flex";
    });
    ProjectControlMain.addProjectsNum(onGoingProjectCards.length);
  };

  //  High priorty projects
  const highPriortyProjectsDisplay = () => {
    // active BTN
    const sidBarBtns = document.querySelectorAll(".sidBarBtn");
    const highPriorityBtn = document.querySelector(".highPriority");
    sidBarBtns.forEach((node) => {
      node.classList.remove("activeSidebarBtn");
    });

    highPriorityBtn.classList.add("activeSidebarBtn");

    /////
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
    // active BTN
    const sidBarBtns = document.querySelectorAll(".sidBarBtn");
    const medPriorityBtn = document.querySelector(".medPriority");
    sidBarBtns.forEach((node) => {
      node.classList.remove("activeSidebarBtn");
    });

    medPriorityBtn.classList.add("activeSidebarBtn");

    /////
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
    // active BTN
    const sidBarBtns = document.querySelectorAll(".sidBarBtn");
    const lowPriorityBtn = document.querySelector(".lowPriority");
    sidBarBtns.forEach((node) => {
      node.classList.remove("activeSidebarBtn");
    });

    lowPriorityBtn.classList.add("activeSidebarBtn");

    /////
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
