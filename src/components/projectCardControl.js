import ProjectsStorage from "./projectsStorage";
import ProjectControlMain from "./projectControlMain";
import ProjectControlSideBar from "./projectControlSideBar";
import ModifyProjectFrom from "./modifyProjectFrom";
import AddNotesForm from "./addNotesForm";

import IntoTask from "./intoTask/intoTask";
export default (function () {
  //private vars
  let onGoing1 = "";
  let finished1 = "";
  let isHigh1 = "";
  let isMed1 = "";
  let isLow1 = "";
  // project card vars

  const projectDoneSwitchWord = (onGoing = "", finished = "") => {
    onGoing1 = onGoing;
    finished1 = finished;
  };

  const projectDone = (e) => {
    const nodeKey = e.target.attributes["data-number"].value;
    const nodeElement = e.target.parentElement.parentElement;
    // Update UI

    if (
      JSON.parse(localStorage.getItem(nodeKey)).done == false &&
      onGoing1 === "" &&
      finished1 === ""
    ) {
      nodeElement.classList.add("finishedProject");
      const project = JSON.parse(localStorage.getItem(nodeKey));

      project.done = true;

      localStorage.setItem(`${nodeKey}`, JSON.stringify(project));
    } else if (
      JSON.parse(localStorage.getItem(nodeKey)).done == false &&
      onGoing1 !== "" &&
      finished1 === ""
    ) {
      nodeElement.classList.add("finishedProject");
      nodeElement.style.display = "none";

      //  ProjectsStorage.projects[projectIndex].done = true;
      const project = JSON.parse(localStorage.getItem(nodeKey));

      project.done = true;

      localStorage.setItem(`${nodeKey}`, JSON.stringify(project));

      //update project num
      const allProjectCardsNodes = document.querySelectorAll(".projectCard");

      const onGoingProjectCards = [];

      allProjectCardsNodes.forEach((node) => {
        !node.classList.contains("finishedProject")
          ? onGoingProjectCards.push(node)
          : "return";
      });
      ProjectControlMain.addProjectsNum(onGoingProjectCards.length);
    } else if (
      JSON.parse(localStorage.getItem(nodeKey)).done == true &&
      finished1 !== "" &&
      onGoing1 === ""
    ) {
      nodeElement.classList.remove("finishedProject");

      nodeElement.style.display = "none";
      const project = JSON.parse(localStorage.getItem(nodeKey));

      project.done = false;

      localStorage.setItem(`${nodeKey}`, JSON.stringify(project));

      const allProjectCardsNodes = document.querySelectorAll(".projectCard");
      const finishedProjectCards = [];
      allProjectCardsNodes.forEach((node) => {
        node.classList.contains("finishedProject")
          ? finishedProjectCards.push(node)
          : "return";
      });
      ProjectControlMain.addProjectsNum(finishedProjectCards.length);
    } else if (
      JSON.parse(localStorage.getItem(nodeKey)).done == true &&
      onGoing1 === "" &&
      finished1 === ""
    ) {
      nodeElement.classList.remove("finishedProject");
      const project = JSON.parse(localStorage.getItem(nodeKey));

      project.done = false;

      localStorage.setItem(`${nodeKey}`, JSON.stringify(project));
    }
  };

  const projectDoneBtnsEventListener = () => {
    const projectDoneBtns = document.querySelectorAll(".projectDone");
    projectDoneBtns.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        projectDone(e);
      });
    });
  };

  const projectPrioritySwitch = (isHigh, isMed, isLow) => {
    isHigh1 = isHigh;
    isMed1 = isMed;
    isLow1 = isLow;
  };

  const deleteProject = (e) => {
    const nodeKey = e.target.attributes["data-number"].value;

    for (let i = 0; i < localStorage.length; i++) {
      if (
        nodeKey ===
        JSON.parse(localStorage.getItem(localStorage.key(i))).projectKey
      ) {
        localStorage.removeItem(`${nodeKey}`);
      }
    }
    // update the projects Dislpay
    if (onGoing1) {
      updateUI();
      ProjectControlSideBar.onGoingProjectsDisplay();
    } else if (finished1) {
      updateUI();
      ProjectControlSideBar.finishedProjectsDisplay();
    } else if (isHigh1) {
      updateUI();
      ProjectControlSideBar.highPriortyProjectsDisplay();
    } else if (isMed1) {
      updateUI();
      ProjectControlSideBar.medPriortyProjectsDisplay();
    } else if (isLow1) {
      updateUI();
      ProjectControlSideBar.lowPriortyProjectsDisplay();
    } else {
      updateUI();
    }
  };

  const deleteProjectBtnsEventListener = () => {
    const deleteProjectBtns = document.querySelectorAll(".delete");

    deleteProjectBtns.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        deleteProject(e);
      });
    });
  };
  ////////////////////////

  ///////////////////////////////
  const modifyProjectInfoBtnsEventListener = () => {
    const modifyProjectInfoBtns = document.querySelectorAll(".modify");

    //open modifyform eventListener
    modifyProjectInfoBtns.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        ModifyProjectFrom.openModifyForm(e);
        ModifyProjectFrom.assignOldData(e, btn);
        ModifyProjectFrom.projectModifyIsclicked(e, true);

        //modifyclose icon eventListner
        const modifyFromlCloseIcon = document.querySelector(".modifyCloseIcon");
        modifyFromlCloseIcon.addEventListener(
          "click",
          ModifyProjectFrom.closeModifyForm
        );

        //Modify Form Manipulation
        const modifySubmitBtn = document.querySelector("#modifySubmit");
        modifySubmitBtn.addEventListener("click", (e) => {
          ModifyProjectFrom.modifyProjectStorage(e);
          ModifyProjectFrom.modifyProjectUI(e);
        });
      });
    });
  };

  const deleteNoteStorage = (e) => {
    const projectCardUI =
      e.target.parentElement.parentElement.parentElement.parentElement;
    const noteProjectCardUI = e.target.parentElement;
    for (let i = 0; i < localStorage.length; i++) {
      const project = JSON.parse(localStorage.getItem(localStorage.key(i)));
      if (
        projectCardUI.attributes["data-number"].value === project.projectKey
      ) {
        project.notes.splice(
          Number(noteProjectCardUI.attributes["data-number"].value),
          1
        );
        localStorage.setItem(`${project.projectKey}`, JSON.stringify(project));

        updateUI(e);
      }
    }
  };

  const AddNotesBtnsEventListener = (e) => {
    const AddNotesBtns = document.querySelectorAll(".addNotes");

    //open AddNotes eventListener
    AddNotesBtns.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        AddNotesForm.openNoteForm(e);
        AddNotesForm.AddNoteCardBtnIsclicked(e, true);

        //Add Notes Form Manipulation
        const addNotesSubmitBtn = document.querySelector("#addNoteSubmitBtn");
        addNotesSubmitBtn.addEventListener("click", (e) => {
          AddNotesForm.addNotesStorage(e, btn);
          AddNotesForm.addNotesUI(e, btn);
        });
      });
    });

    //modifyclose icon eventListner
    const addNotesFormlCloseIcon = document.querySelector(
      ".addNotesFormlCloseIcon"
    );
    addNotesFormlCloseIcon.addEventListener(
      "click",
      AddNotesForm.closeNoteForm
    );

    // deletenote btns EventListener
    const deletenoteBtns = document.querySelectorAll(".deletenoteBtn");

    deletenoteBtns.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        deleteNoteStorage(e);
      });
    });
  };

  //into tasks
  const intoTasksBtnsEventListener = (e) => {
    const intoTaskBtns = document.querySelectorAll(".intoTasks");

    intoTaskBtns.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        IntoTask.displayProjectTasks(btn.attributes["data-number"].value);
      });
    });
  };

  const updateUI = (e) => {
    ProjectControlMain.addProjects();
    ProjectControlMain.projectHighlight(e);
    ProjectControlMain.addProjectsNum(localStorage.length);
    projectDoneBtnsEventListener(e);
    deleteProjectBtnsEventListener(e);
    modifyProjectInfoBtnsEventListener();
    AddNotesBtnsEventListener(e);
    intoTasksBtnsEventListener(e);
  };

  return {
    projectDone,
    projectDoneBtnsEventListener,
    projectDoneSwitchWord,
    deleteProject,
    deleteProjectBtnsEventListener,
    projectPrioritySwitch,
    modifyProjectInfoBtnsEventListener,
    AddNotesBtnsEventListener,
    intoTasksBtnsEventListener,
    updateUI,
  };
})();

// function feb(n) {
//   if (n < 2) {
//     return n;
//   } else {
//     return feb(n - 1) + feb(n - 2);
//   }
// }

// function printResult(n) {
//   for (let i = 0; i <= n; i++) {
//     console.log(feb(i));
//   }
// }
// printResult(5);
