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
  const notesContainer = document.createElement("div");
  const noteContainer = document.createElement("div");
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
    notesContainer.classList.add("notesContainer");
    noteContainer.classList.add("noteContainer");
    notelable.classList.add("notelable");
    notelable.setAttribute("for", "notelable");
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
      notesContainer,
      addNoteSubmitBtn
    );
    notesContainer.append(noteContainer);
    noteContainer.append(notelable, noteTextarea);
    body.append(fragment);
  };
  const openNoteForm = () => {
    AddNotesform.classList.remove("closeAddNotesForm");
    AddNotesform.classList.add("openAddNotesForm");
    dimLightScreen.classList.add("dimLightScreenOn");
    dimLightScreen.classList.remove("dimLightScreenOff");
  };
  const closeNoteForm = () => {
    AddNotesform.classList.remove("openAddNotesForm");
    AddNotesform.classList.add("closeAddNotesForm");
    dimLightScreen.classList.remove("dimLightScreenOn");
    dimLightScreen.classList.add("dimLightScreenOff");
  };

  const AddNoteCardBtnIsclicked = (e, state) => {
    const btnNum = Number(e.target.attributes["data-number"].value);
    ProjectsStorage.projects.forEach((project) => {
      if (project.projectKey === btnNum) {
        project.openToAddNote = state;
      }
    });
  };
  const addNotesStorage = (e) => {
    if (!noteTextarea.value) {
      return;
    } else {
      e.preventDefault();
      //addding the new note to storage
      ProjectsStorage.projects.forEach((project) => {
        if (project.openToAddNote) {
          project.notes.push(noteTextarea.value);
          project.openToAddNote = false;
        } else {
          return;
        }
      });
    }
  };
  const addNotesUI = (e, btn) => {
    if (!noteTextarea.value) {
      return;
    } else if (noteTextarea.value) {
      // console.log("dsadsa");
      ProjectControlMain.addProjects();
      ProjectControlMain.projectHighlight();
      ProjectControlMain.addProjectsNum(ProjectsStorage.projects.length);
      ProjectCardControl.projectDoneBtnsEventListener();
      ProjectCardControl.deleteProjectBtnsEventListener();
      ProjectCardControl.modifyProjectInfoBtnsEventListener();
      ProjectCardControl.AddNotesBtnsEventListener();

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
