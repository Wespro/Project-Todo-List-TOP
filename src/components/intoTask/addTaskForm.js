import "../../css/addTaskForm.css";
//icons

import CloseIcon from "../../img & icnons/icons/close-outline.svg";
import IntoTask from "./intoTask";
// import PlusIcon from "../img & icnons/icons/plus-circle-outline.svg";
//components
// import ProjectMaker from "./projectMaker";
import ProjectsStorage from "../projectsStorage";
// import ProjectControlMain from "./projectControlMain";
// import ProjectCardControl from "./projectCardControl";

export default (function () {
  const theAddTaskForm = () => {
    const fragment = new DocumentFragment();
    const body = document.querySelector("body");

    const dimLightScreen = document.querySelector(".dimLightScreen");
    const AddTaskForm = document.createElement("form");
    const AddTaskFormCloseIcon = document.createElement("img");
    const AddTaskFormTitle = document.createElement("h1");
    const taskContainerForm = document.createElement("div");
    const tasklable = document.createElement("label");
    const taskTextarea = document.createElement("textarea");
    const addTaskSubmitBtn = document.createElement("button");
    //assign attributes
    AddTaskForm.setAttribute("id", "AddTaskForm");
    AddTaskForm.classList.add("closeAddTaskForm");

    AddTaskFormCloseIcon.classList.add("AddTaskFormCloseIcon");

    AddTaskFormTitle.classList.add("AddTaskFormTitle");
    taskContainerForm.classList.add("taskContainerForm");
    tasklable.classList.add("tasklable");
    tasklable.setAttribute("for", "taskTextarea");
    taskTextarea.setAttribute("id", "taskTextarea");
    taskTextarea.setAttribute("required", "");
    taskTextarea.setAttribute("cols", "35");
    taskTextarea.setAttribute("rows", "1");
    addTaskSubmitBtn.setAttribute("id", "addTaskSubmitBtn");
    addTaskSubmitBtn.setAttribute("type", "submit");
    //add text
    AddTaskFormTitle.innerText = "Add a task";
    tasklable.innerText = "Task: ";
    addTaskSubmitBtn.innerText = "Add";
    //add src for icon and img
    AddTaskFormCloseIcon.src = CloseIcon;
    // addAnotherNote.src = PlusIcon;
    //appending
    fragment.append(AddTaskForm);
    AddTaskForm.append(
      AddTaskFormCloseIcon,
      AddTaskFormTitle,
      taskContainerForm,
      addTaskSubmitBtn
    );

    taskContainerForm.append(tasklable, taskTextarea);

    body.append(fragment);
  };
  const openTaskForm = () => {
    const dimLightScreen = document.querySelector(".dimLightScreen");
    const AddTaskForm = document.querySelector("#AddTaskForm");

    AddTaskForm.classList.remove("closeAddTaskForm");
    AddTaskForm.classList.add("openAddTaskForm");
    dimLightScreen.classList.add("dimLightScreenOn");
    dimLightScreen.classList.remove("dimLightScreenOff");
  };
  const closeTaskForm = () => {
    const AddTaskForm = document.querySelector("#AddTaskForm");
    const dimLightScreen = document.querySelector(".dimLightScreen");
    AddTaskForm.classList.remove("openAddTaskForm");
    AddTaskForm.classList.add("closeAddTaskForm");
    dimLightScreen.classList.remove("dimLightScreenOn");
    dimLightScreen.classList.add("dimLightScreenOff");
  };

  // const AddTaskCardBtnIsclicked = (e, state) => {
  //   const btnNum = Number(e.target.attributes["data-number"].value);
  //   ProjectsStorage.projects.forEach((project) => {
  //     if (project.projectKey === btnNum) {
  //       project.openToAddNote = state;
  //     }
  //   });
  // };
  const addTaskToStorage = (e, cardKey) => {
    if (!taskTextarea.value) {
      return;
    } else {
      e.preventDefault();
      //addding the new note to storage
      JSON.parse(localStorage.getItem(cardKey)).onListTasks.push(
        taskTextarea.value
      );

      const project = JSON.parse(localStorage.getItem(cardKey));

      project.onListTasks.push(taskTextarea.value);

      localStorage.setItem(`${cardKey}`, JSON.stringify(project));
    }
  };
  const addTaskUI = (e, cardKey) => {
    if (!taskTextarea.value) {
      return;
    } else if (taskTextarea.value) {
      IntoTask.displayProjectTasks(cardKey);
      //reset form
      taskTextarea.value = "";
    }
  };
  return {
    theAddTaskForm,
    openTaskForm,
    closeTaskForm,
    // AddNoteCardBtnIsclicked,
    addTaskToStorage,
    addTaskUI,
  };
})();
