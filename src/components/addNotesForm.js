import "../css/createProjectForm.css";
//icons

import CloseIcon from "../img & icnons/icons/close-outline.svg";
//components
import ProjectMaker from "./projectMaker";
import ProjectsStorage from "./projectsStorage";

export default () => {
  const fragment = new DocumentFragment();

  const body = document.querySelector("body");
  const dimLightScreen = document.querySelector(".dimLightScreen");
  const form = document.createElement("form");
  const closeIcon = document.createElement("img");

  const formName = document.createElement("h1");
  const noteContainer = document.createElement("div");
  const notelable = document.createElement("label");
  const noteInput = document.createElement("input");

  const addAnotherNote = document.createElement("button");

  const submitbtn = document.createElement("button");

  //methouds
  const theCreateForm = () => {
    //assign attributes
    form.classList.add("closeForm");
    closeIcon.classList.add("closeIcon");

    formName.classList.add("formName");
    noteContainer.classList.add("noteContainer");
    notelable.setAttribute("for", "notelable");
    noteInput.setAttribute("id", "notelable");
    noteInput.setAttribute("required", "");
    noteInput.setAttribute("name", "notelable");
    noteInput.setAttribute("placeholder", "Search for the topic first.");
    noteInput.setAttribute("type", "text");

    addAnotherNote.classList.add("addAnotherNote");

    submitbtn.classList.add("submitNote");
    submitbtn.setAttribute("type", "submit");
    //add text
    formName.innerText = "Add Notes";
    notelable.innerText = "Note 1: ";

    submitbtn.innerText = "Add";
    //add src for icon and img
    closeIcon.src = CloseIcon;
    addAnotherNote.src =
      //appending
      fragment.appendChild(form);
    form.append(closeIcon, formName, addAnotherNote, noteContainer, submitbtn);
    noteContainer.append(notelable, noteInput);

    body.append(fragment);
  };

  const openForm = () => {
    form.classList.remove("closeForm");
    form.classList.add("openForm");
    dimLightScreen.classList.add("dimLightScreenOn");
    dimLightScreen.classList.remove("dimLightScreenOff");
  };
  const closeForm = () => {
    form.classList.remove("openForm");
    form.classList.add("closeForm");
    dimLightScreen.classList.remove("dimLightScreenOn");
    dimLightScreen.classList.add("dimLightScreenOff");
  };

  const createAddNotesForm = (e) => {
    ProjectsStorage.projectNotes.forEach(() => {
      if (!noteInput.value) {
        return;
      } else {
        e.preventDefault();

        //reset form
        noteInput.value = "";

        //close form
        closeForm();
        //addding the newproject to storage
        ProjectsStorage.projectNotes.push(note);
      }
    });
  };

  return { theCreateForm, openForm, closeForm, createAddNotesForm };
};
