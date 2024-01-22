import "../css/createProjectForm.css";
//icons

import CloseIcon from "../img & icnons/icons/close-outline.svg";
//components
import ProjectMaker from "./projectMaker";
import ProjectsStorage from "./projectsStorage";

export default (function form() {
  const fragment = new DocumentFragment();

  const body = document.querySelector("body");
  const dimLightScreen = document.querySelector(".dimLightScreen");
  const createForm = document.createElement("form");

  const closeIcon = document.createElement("img");
  const createFormName = document.createElement("h1");

  const titleContainer = document.createElement("div");
  const titleLabel = document.createElement("label");
  const titleInput = document.createElement("input");

  const dueDateContainer = document.createElement("div");
  const dueDateLabel = document.createElement("label");
  const dueDateInput = document.createElement("input");

  const priorityContainer = document.createElement("div");
  const priorityLabel = document.createElement("label");
  const prioritySelect = document.createElement("select");
  const prioritySelect1 = document.createElement("option");
  const prioritySelect2 = document.createElement("option");
  const prioritySelect3 = document.createElement("option");

  const descriptionContainer = document.createElement("div");
  const descriptionLabel = document.createElement("label");
  const descriptionTextArea = document.createElement("textarea");

  const submitbtn = document.createElement("button");

  //methouds
  const theCreateForm = () => {
    //assign attributes
    createForm.setAttribute("id", "createForm");
    createForm.classList.add("closeCreateForm");

    closeIcon.classList.add("closeIcon");
    createFormName.classList.add("createFormName");

    titleContainer.classList.add("titleContainer");
    titleLabel.setAttribute("for", "title");
    titleInput.setAttribute("id", "title");
    titleInput.setAttribute("required", "");
    titleInput.setAttribute("name", "title");
    titleInput.setAttribute("type", "text");

    dueDateContainer.classList.add("dueDateContainer");
    dueDateLabel.setAttribute("for", "dueDate");
    dueDateInput.setAttribute("id", "dueDate");
    dueDateInput.setAttribute("required", "");
    dueDateInput.setAttribute("name", "dueDate");
    dueDateInput.setAttribute("type", "date");

    priorityContainer.classList.add("priorityContainer");
    priorityLabel.setAttribute("for", "priority");
    prioritySelect.setAttribute("id", "priority");
    prioritySelect.setAttribute("required", "");
    prioritySelect.setAttribute("name", "priority");

    prioritySelect1.setAttribute("value", "High");
    prioritySelect2.setAttribute("value", "Medium");
    prioritySelect3.setAttribute("value", "Low");

    descriptionContainer.classList.add("descriptionContainer");
    descriptionLabel.setAttribute("for", "description");
    descriptionTextArea.setAttribute("id", "description");
    descriptionTextArea.setAttribute("required", "");
    descriptionTextArea.setAttribute("name", "description");
    descriptionTextArea.setAttribute("rows", "7");
    descriptionTextArea.setAttribute("cols", "25");

    submitbtn.classList.add("submit");
    submitbtn.setAttribute("type", "submit");
    //add text
    createFormName.innerText = "Create Project";

    titleLabel.innerText = "Title: ";
    dueDateLabel.innerText = "Due-Date: ";
    priorityLabel.innerText = "Priority: ";
    prioritySelect1.innerText = "High";
    prioritySelect2.innerText = "Midium";
    prioritySelect3.innerText = "Low";
    descriptionLabel.innerText = "Description: ";

    submitbtn.innerText = "Create";
    //add src for icon and img
    closeIcon.src = CloseIcon;
    //appending
    fragment.appendChild(createForm);
    createForm.append(
      closeIcon,
      createFormName,
      titleContainer,
      dueDateContainer,
      priorityContainer,
      descriptionContainer,
      submitbtn
    );
    titleContainer.append(titleLabel, titleInput);
    dueDateContainer.append(dueDateLabel, dueDateInput);
    priorityContainer.append(priorityLabel, prioritySelect);
    descriptionContainer.append(descriptionLabel, descriptionTextArea);

    prioritySelect.append(prioritySelect1, prioritySelect2, prioritySelect3);

    body.append(fragment);
  };

  const openCreateForm = () => {
    createForm.classList.remove("closeCreateForm");
    createForm.classList.add("openCreateForm");
    dimLightScreen.classList.add("dimLightScreenOn");
    dimLightScreen.classList.remove("dimLightScreenOff");
  };
  const closeCreateForm = () => {
    createForm.classList.remove("openCreateForm");
    createForm.classList.add("closeCreateForm");
    dimLightScreen.classList.remove("dimLightScreenOn");
    dimLightScreen.classList.add("dimLightScreenOff");
  };

  const createProject = (e) => {
    if (
      !titleInput.value ||
      !dueDateInput.value ||
      !prioritySelect.value ||
      !descriptionTextArea.value
    ) {
      return;
    } else {
      e.preventDefault();
      const newProject = new ProjectMaker(
        titleInput.value,
        dueDateInput.value,
        prioritySelect.value,
        descriptionTextArea.value,
        ProjectsStorage.projects.length
      );

      //reset form
      titleInput.value = "";
      dueDateInput.value = "";
      prioritySelect.value = "";
      descriptionTextArea.value = "";
      //close form
      closeCreateForm();
      //addding the newproject to storage
      ProjectsStorage.projects.push(newProject);
    }
  };

  return { theCreateForm, openCreateForm, closeCreateForm, createProject };
})();
