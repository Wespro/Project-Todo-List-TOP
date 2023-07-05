import "../css/createProjectForm.css";
//icons

import CloseIcon from "../img & icnons/icons/close-outline.svg";
//components
import ProjectMaker from "./projectMaker";
import ProjectsStorage from "./projectsStorage";

export default (function form() {
  const fragment = new DocumentFragment();

  const body = document.querySelector("body");
  const form = document.createElement("form");
  const closeIcon = document.createElement("img");

  const titleContainer = document.createElement("div");
  const titlelable = document.createElement("label");
  const titleInput = document.createElement("input");

  const dueDateContainer = document.createElement("div");
  const dueDatelable = document.createElement("label");
  const dueDateInput = document.createElement("input");

  const priorityContainer = document.createElement("div");
  const prioritylable = document.createElement("label");
  const prioritySelect = document.createElement("select");
  const prioritySelect1 = document.createElement("option");
  const prioritySelect2 = document.createElement("option");
  const prioritySelect3 = document.createElement("option");

  const descriptionContainer = document.createElement("div");
  const descriptionlable = document.createElement("label");
  const descriptionTextArea = document.createElement("textarea");

  const submitbtn = document.createElement("button");
  const theCreateForm = () => {
    //assign attributes
    form.classList.add("closeForm");
    closeIcon.classList.add("closeIcon");

    titleContainer.classList.add("titleContainer");
    titlelable.setAttribute("for", "title");
    titleInput.setAttribute("id", "title");
    titleInput.setAttribute("required", "");
    titleInput.setAttribute("name", "title");
    titleInput.setAttribute("type", "text");

    dueDateContainer.classList.add("dueDateContainer");
    dueDatelable.setAttribute("for", "dueDate");
    dueDateInput.setAttribute("id", "dueDate");
    dueDateInput.setAttribute("required", "");
    dueDateInput.setAttribute("name", "dueDate");
    dueDateInput.setAttribute("type", "date");

    priorityContainer.classList.add("priorityContainer");
    prioritylable.setAttribute("for", "priority");
    prioritySelect.setAttribute("id", "priority");
    prioritySelect.setAttribute("required", "");
    prioritySelect.setAttribute("name", "priority");

    prioritySelect1.setAttribute("value", "High");
    prioritySelect2.setAttribute("value", "Medium");
    prioritySelect3.setAttribute("value", "Low");

    descriptionContainer.classList.add("descriptionContainer");
    descriptionlable.setAttribute("for", "description");
    descriptionTextArea.setAttribute("id", "description");
    descriptionTextArea.setAttribute("required", "");
    descriptionTextArea.setAttribute("name", "description");
    descriptionTextArea.setAttribute("rows", "7");
    descriptionTextArea.setAttribute("cols", "25");

    submitbtn.classList.add("submit");
    submitbtn.setAttribute("type", "submit");
    //add text
    titlelable.innerText = "Title: ";
    dueDatelable.innerText = "Due-Date: ";
    prioritylable.innerText = "Priority: ";
    prioritySelect1.innerText = "High";
    prioritySelect2.innerText = "Midium";
    prioritySelect3.innerText = "Low";
    descriptionlable.innerText = "Description: ";

    submitbtn.innerText = "Create";
    //add src for icon and img
    closeIcon.src = CloseIcon;
    //appending
    fragment.appendChild(form);
    form.append(
      closeIcon,
      titleContainer,
      dueDateContainer,
      priorityContainer,
      descriptionContainer,
      submitbtn
    );
    titleContainer.append(titlelable, titleInput);
    dueDateContainer.append(dueDatelable, dueDateInput);
    priorityContainer.append(prioritylable, prioritySelect);
    descriptionContainer.append(descriptionlable, descriptionTextArea);

    prioritySelect.append(prioritySelect1, prioritySelect2, prioritySelect3);

    body.append(fragment);
  };
  //methouds
  const openForm = () => {
    form.classList.remove("closeForm");
    form.classList.add("openForm");
  };
  const closeForm = () => {
    form.classList.remove("openForm");
    form.classList.add("closeForm");
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
      closeForm();
      //addding the newproject to storage
      ProjectsStorage.projects.push(newProject);
    }
  };

  return { theCreateForm, openForm, closeForm, createProject };
})();
