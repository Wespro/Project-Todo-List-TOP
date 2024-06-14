import "../css/addNotesForm.css";
//icons

import CloseIcon from "../img & icnons/icons/close-outline.svg";
// import PlusIcon from "../img & icnons/icons/plus-circle-outline.svg";
//components
import ProjectMaker from "./projectMaker";
import ProjectsStorage from "./projectsStorage";
import ProjectControlMain from "./projectControlMain";
import ProjectCardControl from "./projectCardControl";

export default (function () {
  const fragment = new DocumentFragment();

  const body = document.querySelector("body");

  const dimLightScreen = document.querySelector(".dimLightScreen");
  const AddNotesform = document.createElement("form");
  const AddNotesformcloseIcon = document.createElement("img");
  const AddNotesTitle = document.createElement("h1");
  const noteContainerForm = document.createElement("div");
  const notelable = document.createElement("label");
  const noteTextarea = document.createElement("textarea");
  const addAnotherNote = document.createElement("button");
  const addNoteSubmitBtn = document.createElement("button");
  //methouds
  const theNoteForm = () => {
    //assign attributes
    AddNotesform.setAttribute("id", "AddNotesform");
    AddNotesform.classList.add("closeAddNotesForm");

    AddNotesformcloseIcon.classList.add("addNotesFormlCloseIcon");
    AddNotesTitle.classList.add("AddNotesTitle");
    noteContainerForm.classList.add("noteContainerForm");
    notelable.classList.add("notelable");
    notelable.setAttribute("for", "noteTextarea");
    noteTextarea.setAttribute("id", "noteTextarea");
    noteTextarea.setAttribute("required", "");
    noteTextarea.setAttribute("cols", "35");
    noteTextarea.setAttribute("rows", "5");
    addAnotherNote.classList.add("addAnotherNote");
    addNoteSubmitBtn.setAttribute("id", "addNoteSubmitBtn");
    addNoteSubmitBtn.setAttribute("type", "submit");
    //add text
    AddNotesTitle.innerText = "Add a note";
    notelable.innerText = "Note: ";
    addNoteSubmitBtn.innerText = "Add";
    addAnotherNote.textContent = "Add";
    //add src for icon and img
    AddNotesformcloseIcon.src = CloseIcon;
    // addAnotherNote.src = PlusIcon;
    //appending
    fragment.appendChild(AddNotesform);
    AddNotesform.append(
      AddNotesformcloseIcon,
      AddNotesTitle,
      noteContainerForm,
      addNoteSubmitBtn
    );

    noteContainerForm.append(notelable, noteTextarea);
    body.append(fragment);
  };
  const openNoteForm = () => {
    const dimLightScreen = document.querySelector(".dimLightScreen");
    AddNotesform.classList.remove("closeAddNotesForm");
    AddNotesform.classList.add("openAddNotesForm");

    dimLightScreen.classList.add("dimLightScreenOn");
    dimLightScreen.classList.remove("dimLightScreenOff");
  };
  const closeNoteForm = () => {
    const dimLightScreen = document.querySelector(".dimLightScreen");
    AddNotesform.classList.remove("openAddNotesForm");
    AddNotesform.classList.add("closeAddNotesForm");
    dimLightScreen.classList.remove("dimLightScreenOn");
    dimLightScreen.classList.add("dimLightScreenOff");
    //reset all openToAddNote
    for (let i = 0; i < localStorage.length; i++) {
      const project = JSON.parse(localStorage.getItem(localStorage.key(i)));

      project.openToAddNote = false;

      localStorage.setItem(`${project.projectKey}`, JSON.stringify(project));
    }
  };

  const AddNoteCardBtnIsclicked = (e, state) => {
    const nodeKey = e.target.attributes["data-number"].value;

    for (let i = 0; i < localStorage.length; i++) {
      const project = JSON.parse(localStorage.getItem(localStorage.key(i)));

      if (project.projectKey === nodeKey) {
        project.openToAddNote = true;

        localStorage.setItem(`${project.projectKey}`, JSON.stringify(project));
      }
    }
  };
  const addNotesStorage = (e) => {
    if (!noteTextarea.value) {
      return;
    } else {
      e.preventDefault();

      //addding the new note to storage
      for (let i = 0; i < localStorage.length; i++) {
        const project = JSON.parse(localStorage.getItem(localStorage.key(i)));
        if (project.openToAddNote) {
          project.notes.push(noteTextarea.value);

          project.openToAddNote = false;

          localStorage.setItem(
            `${project.projectKey}`,
            JSON.stringify(project)
          );
        }
      }
    }
  };
  const addNotesUI = (e, btn) => {
    if (!noteTextarea.value) {
      return;
    } else if (noteTextarea.value) {
      ProjectCardControl.updateUI();

      //reset form

      noteTextarea.value = "";
      //close form
      closeNoteForm();
    }
  };
  return {
    theNoteForm,
    openNoteForm,
    closeNoteForm,
    AddNoteCardBtnIsclicked,
    addNotesStorage,
    addNotesUI,
  };
})();
