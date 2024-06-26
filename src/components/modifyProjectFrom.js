import "../css/modifyProjectForm.css";
//icons

import modifyCloseIconSrc from "../img & icnons/icons/close-outline.svg";
//components
import ProjectMaker from "./projectMaker";
import ProjectsStorage from "./projectsStorage";
import ProjectControlMain from "./projectControlMain";
import ProjectCardControl from "./projectCardControl";
import projectCardControl from "./projectCardControl";

export default (function form() {
  const fragment = new DocumentFragment();

  const body = document.querySelector("body");

  const modifyForm = document.createElement("form");
  const modifyCloseIcon = document.createElement("img");

  const modifyFromName = document.createElement("h1");

  const modifyTitleContainer = document.createElement("div");
  const modifyTitleLabel = document.createElement("label");
  const modifyTitleInput = document.createElement("input");

  const modifyDueDateContainer = document.createElement("div");
  const modifyDueDateLabel = document.createElement("label");
  const modifyDueDateInput = document.createElement("input");

  const modifyPriorityContainer = document.createElement("div");
  const modifyPriorityLabel = document.createElement("label");
  const modifyPrioritySelect = document.createElement("select");
  const modifyPrioritySelect1 = document.createElement("option");
  const modifyPrioritySelect2 = document.createElement("option");
  const modifyPrioritySelect3 = document.createElement("option");

  const modifyDescriptionContainer = document.createElement("div");
  const modifyDescriptionLabel = document.createElement("label");
  const modifyDescriptionTextArea = document.createElement("textarea");

  const modifySubmitbtn = document.createElement("button");

  //methouds
  const theModifyForm = () => {
    //assign attributes
    modifyForm.setAttribute("id", "modifyForm");
    modifyForm.classList.add("closeModifyForm");

    modifyCloseIcon.classList.add("modifyCloseIcon");

    modifyFromName.classList.add("modifyFromName");

    modifyTitleContainer.classList.add("modifyTitleContainer");
    modifyTitleLabel.setAttribute("for", "title");
    modifyTitleInput.setAttribute("id", "title");
    modifyTitleInput.setAttribute("required", "");
    modifyTitleInput.setAttribute("name", "title");
    modifyTitleInput.setAttribute("type", "text");

    modifyDueDateContainer.classList.add("modifyDueDateContainer");
    modifyDueDateLabel.setAttribute("for", "dueDate");
    modifyDueDateInput.setAttribute("id", "dueDate");
    modifyDueDateInput.setAttribute("required", "");
    modifyDueDateInput.setAttribute("name", "dueDate");
    modifyDueDateInput.setAttribute("type", "date");

    modifyPriorityContainer.classList.add("modifyDueDateContainer");
    modifyPriorityLabel.setAttribute("for", "priority");
    modifyPrioritySelect.setAttribute("id", "priority");
    modifyPrioritySelect.setAttribute("required", "");
    modifyPrioritySelect.setAttribute("name", "priority");

    modifyPrioritySelect1.setAttribute("value", "High");
    modifyPrioritySelect2.setAttribute("value", "Medium");
    modifyPrioritySelect3.setAttribute("value", "Low");

    modifyDescriptionContainer.classList.add("modifyDescriptionContainer");
    modifyDescriptionLabel.setAttribute("for", "description");
    modifyDescriptionTextArea.setAttribute("id", "description");
    modifyDescriptionTextArea.setAttribute("required", "");
    modifyDescriptionTextArea.setAttribute("name", "description");
    modifyDescriptionTextArea.setAttribute("rows", "7");
    modifyDescriptionTextArea.setAttribute("cols", "25");

    modifySubmitbtn.setAttribute("id", "modifySubmit");
    modifySubmitbtn.setAttribute("type", "submit");
    //add text
    modifyFromName.innerText = "Modify Project";
    modifyTitleLabel.innerText = "Title: ";
    modifyDueDateLabel.innerText = "Due-Date: ";
    modifyPriorityLabel.innerText = "Priority: ";
    modifyPrioritySelect1.innerText = "High";
    modifyPrioritySelect2.innerText = "Midium";
    modifyPrioritySelect3.innerText = "Low";
    modifyDescriptionLabel.innerText = "Description: ";

    modifySubmitbtn.innerText = "Modify";
    //add src for icon and img
    modifyCloseIcon.src = modifyCloseIconSrc;

    //appending
    fragment.appendChild(modifyForm);
    modifyForm.append(
      modifyCloseIcon,
      modifyFromName,
      modifyTitleContainer,
      modifyDueDateContainer,
      modifyPriorityContainer,
      modifyDescriptionContainer,
      modifySubmitbtn
    );
    modifyTitleContainer.append(modifyTitleLabel, modifyTitleInput);
    modifyDueDateContainer.append(modifyDueDateLabel, modifyDueDateInput);
    modifyPriorityContainer.append(modifyPriorityLabel, modifyPrioritySelect);
    modifyDescriptionContainer.append(
      modifyDescriptionLabel,
      modifyDescriptionTextArea
    );

    modifyPrioritySelect.append(
      modifyPrioritySelect1,
      modifyPrioritySelect2,
      modifyPrioritySelect3
    );
    body.append(fragment);
  };

  const openModifyForm = () => {
    const dimLightScreen = document.querySelector(".dimLightScreen");
    const modifyForm = document.querySelector("#modifyForm");
    modifyForm.classList.remove("closeModifyForm");
    modifyForm.classList.add("openModifyForm");
    dimLightScreen.classList.add("dimLightScreenOn");
    dimLightScreen.classList.remove("dimLightScreenOff");
  };
  const closeModifyForm = () => {
    const dimLightScreen = document.querySelector(".dimLightScreen");
    const modifyForm = document.querySelector("#modifyForm");
    modifyForm.classList.remove("openModifyForm");
    modifyForm.classList.add("closeModifyForm");
    dimLightScreen.classList.remove("dimLightScreenOn");
    dimLightScreen.classList.add("dimLightScreenOff");
  };

  const assignOldData = (e, btn) => {
    //the project that would be modified data assign
    for (let i = 0; i < localStorage.length; i++) {
      if (
        JSON.parse(localStorage.getItem(localStorage.key(i))).title ===
        btn.classList[1]
      ) {
        const oldDataProj = JSON.parse(
          localStorage.getItem(localStorage.key(i))
        );
        console.log(btn.classList[1], "assignOldData");
        modifyTitleInput.value = oldDataProj.title;
        modifyDueDateInput.value = oldDataProj.dueDate;
        modifyPrioritySelect.value = oldDataProj.priority;
        modifyDescriptionTextArea.value = oldDataProj.description;
      }
    }
  };
  const projectModifyIsclicked = (e, state) => {
    const nodeKey = e.target.attributes["data-number"].value;
    for (let i = 0; i < localStorage.length; i++) {
      if (
        JSON.parse(localStorage.getItem(localStorage.key(i))).projectKey ===
        nodeKey
      ) {
        const modifiedProject = JSON.parse(
          localStorage.getItem(localStorage.key(i))
        );
        modifiedProject.openToBeModified = true;

        //updating localStorage
        localStorage.setItem(
          `${modifiedProject.projectKey}`,
          JSON.stringify(modifiedProject)
        );
      }
    }
  };

  const modifyProjectStorage = (e) => {
    if (
      !modifyTitleInput.value ||
      !modifyDueDateInput.value ||
      !modifyPrioritySelect.value ||
      !modifyDescriptionTextArea.value
    ) {
      return;
    } else {
      e.preventDefault();
      for (let i = 0; i < localStorage.length; i++) {
        if (
          JSON.parse(localStorage.getItem(localStorage.key(i)))
            .openToBeModified === true
        ) {
          const modifiedPRoject = JSON.parse(
            localStorage.getItem(localStorage.key(i))
          );
          modifiedPRoject.title = modifyTitleInput.value;
          modifiedPRoject.dueDate = modifyDueDateInput.value;
          modifiedPRoject.priority = modifyPrioritySelect.value;
          modifiedPRoject.description = modifyDescriptionTextArea.value;
          //reset switch
          modifiedPRoject.openToBeModified = false;
          //updating localStorage
          localStorage.setItem(
            `${modifiedPRoject.projectKey}`,
            JSON.stringify(modifiedPRoject)
          );
          projectCardControl.updateUI();
        }
      }

      // localStorage.setItem(
      //   "projects",
      //   JSON.stringify(ProjectsStorage.projects)
      // );
    }
  };

  const modifyProjectUI = (e, btnNum) => {
    if (
      !modifyTitleInput.value ||
      !modifyDueDateInput.value ||
      !modifyPrioritySelect.value ||
      !modifyDescriptionTextArea.value
    ) {
      return;
    } else {
      e.preventDefault();

      projectCardControl.updateUI();
    }
    //close form
    closeModifyForm();
  };
  return {
    theModifyForm,
    modifyProjectStorage,
    openModifyForm,
    closeModifyForm,
    assignOldData,
    projectModifyIsclicked,
    modifyProjectUI,
  };
})();
