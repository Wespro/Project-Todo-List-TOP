import "../../css/intoTask.css";
import createProjectUI from "../projectMakerUI";
import ProjectsStorage from "../projectsStorage";
import AddTaskForm from "./addTaskForm";
import TaskCardBtnsFunc from "./taskCardBtnsFunc";
export default (function () {
  const displayProjectTasks = (cardNumber) => {
    const body = document.querySelector("body");
    body.replaceChildren();
    const fragment = new DocumentFragment();
    const bodyInnerContainer = document.createElement("div");
    const dimscreen = document.createElement("div");
    const tasksContainer = document.createElement("div");

    const projectTitle = document.createElement("h1");

    const onListTasks = document.createElement("div");
    const onListTasksTop = document.createElement("div");
    const onListTasksTitle = document.createElement("h2");
    const onListTasksContainer = document.createElement("div");
    const addTaskCard = document.createElement("button");

    const inprogressTasks = document.createElement("div");
    const inprogressTasksTitle = document.createElement("h2");
    const inprogressTasksContainer = document.createElement("div");

    const doneTasks = document.createElement("div");
    const doneTasksTitle = document.createElement("h2");
    const doneTasksContainer = document.createElement("div");

    const backToHome = document.createElement("button");

    //adding classes
    bodyInnerContainer.classList.add("bodyInnerContainer");
    dimscreen.classList.add("dimLightScreen", "dimLightScreenOff");

    tasksContainer.classList.add("tasksContainer");

    projectTitle.classList.add("projectTitle");

    onListTasks.classList.add("onListTasks");

    onListTasksTop.classList.add("onListTasksTop");
    onListTasksContainer.classList.add("onListTasksContainer");
    onListTasksTitle.classList.add("onListTasksTitle");

    addTaskCard.classList.add("addTaskCard");

    inprogressTasks.classList.add("inprogressTasks");
    inprogressTasksContainer.classList.add("inprogressTasksContainer");
    inprogressTasksTitle.classList.add("inprogressTasksTitle");

    doneTasks.classList.add("doneTasks");
    doneTasksContainer.classList.add("doneTasksContainer");
    doneTasksTitle.classList.add("doneTasksTitle");

    backToHome.classList.add("backToHome");

    //adding text
    // (h)s
    projectTitle.innerText = ProjectsStorage.projects[cardNumber].title;
    onListTasksTitle.innerText = "OnList";
    inprogressTasksTitle.innerText = "Inprogress";
    doneTasksTitle.innerText = "Done";
    // btns;
    addTaskCard.innerText = "Add Task +";

    backToHome.innerText = " ⇦ Back To Home";

    //appending

    tasksContainer.append(onListTasks, inprogressTasks, doneTasks);
    onListTasksTop.append(onListTasksTitle, addTaskCard);
    onListTasks.append(onListTasksTop, onListTasksContainer);
    inprogressTasks.append(inprogressTasksTitle, inprogressTasksContainer);

    doneTasks.append(doneTasksTitle, doneTasksContainer);

    //onlist tasks
    ProjectsStorage.projects[cardNumber].onListTasks.forEach((task, index) => {
      const taskCard = document.createElement("div");
      const taskTitle = document.createElement("h3");
      const taskActions = document.createElement("div");
      const moveToInProgress = document.createElement("button");
      // const moveToDone = document.createElement("button");
      const deleteTask = document.createElement("button");

      taskCard.classList.add("taskCard");
      taskCard.classList.add("taskCard", "taskCardShown");
      taskCard.setAttribute("data-number", `${index}`);
      taskCard.setAttribute("maincardnumber", `${cardNumber}`);
      taskTitle.classList.add("taskTitle");
      taskActions.classList.add("taskActions");

      moveToInProgress.classList.add("moveToInProgress");
      moveToInProgress.setAttribute("data-number", `${index}`);
      // moveToDone.classList.add("moveToDone");
      // moveToDone.setAttribute("data-number", `${index}`);
      deleteTask.classList.add("deleteTask");
      deleteTask.setAttribute("data-number", `${index}`);

      taskTitle.innerText = task;

      //btns
      moveToInProgress.innerText = "Move To InProgress";
      // moveToDone.innerText = " Move To Done ✔";
      deleteTask.innerText = " Delete Task x";

      taskActions.append(moveToInProgress, deleteTask);
      taskCard.append(taskTitle, taskActions);

      onListTasksContainer.append(taskCard);
    });

    //inProgress tasks
    ProjectsStorage.projects[cardNumber].inProgressTasks.forEach(
      (task, index) => {
        const taskCard = document.createElement("div");
        const taskTitle = document.createElement("h3");
        const taskActions = document.createElement("div");
        const moveToOnlist = document.createElement("button");
        const moveToDone = document.createElement("button");
        const deleteTask = document.createElement("button");

        taskCard.classList.add("taskCard");
        taskCard.setAttribute("data-number", `${index}`);
        taskCard.setAttribute("maincardnumber", `${cardNumber}`);
        taskTitle.classList.add("taskTitle");
        taskActions.classList.add("taskActions");

        moveToOnlist.classList.add("moveToOnlist");
        moveToOnlist.setAttribute("data-number", `${index}`);
        moveToDone.classList.add("moveToDone");
        moveToDone.setAttribute("data-number", `${index}`);
        deleteTask.classList.add("deleteTask");
        deleteTask.setAttribute("data-number", `${index}`);

        taskTitle.innerText = task;

        //btns
        moveToOnlist.innerText = "Move To Onlist";
        moveToDone.innerText = " Move To Done ✔";
        deleteTask.innerText = " Delete Task x";

        taskActions.append(moveToOnlist, moveToDone, deleteTask);
        taskCard.append(taskTitle, taskActions);

        inprogressTasksContainer.append(taskCard);
      }
    );

    //done Tasks cards
    ProjectsStorage.projects[cardNumber].doneTasks.forEach((task, index) => {
      const taskCard = document.createElement("div");
      const taskTitle = document.createElement("h3");
      const taskActions = document.createElement("div");
      // const moveToOnlist = document.createElement("button");
      const moveToInProgress = document.createElement("button");
      const deleteTask = document.createElement("button");

      taskCard.classList.add("taskCard", "taskCardShown");
      taskCard.setAttribute("data-number", `${index}`);
      taskCard.setAttribute("maincardnumber", `${cardNumber}`);
      taskTitle.classList.add("taskTitle");
      taskActions.classList.add("taskActions");
      // moveToOnlist.classList.add("moveToOnlist");
      // moveToOnlist.setAttribute("data-number", `${index}`);
      moveToInProgress.classList.add("moveToInProgress");
      moveToInProgress.setAttribute("data-number", `${index}`);
      deleteTask.classList.add("deleteTask");
      deleteTask.setAttribute("data-number", `${index}`);

      taskTitle.innerText = task;

      //btns
      // moveToOnlist.innerText = "Move To Onlist";
      moveToInProgress.innerText = "Move To InProgress";
      deleteTask.innerText = " Delete Task x";

      taskActions.append(moveToInProgress, deleteTask);
      taskCard.append(taskTitle, taskActions);

      doneTasksContainer.append(taskCard);
    });

    bodyInnerContainer.append(projectTitle, tasksContainer, backToHome);
    fragment.append(bodyInnerContainer);
    body.append(dimscreen, fragment);

    /////////
    AddTaskForm.theAddTaskForm();
    backToHomeFunc();
    AddTaskbtnfunc();
    closeFormFunc();
    submitFormBtnfunc(cardNumber);
    TaskCardBtnsFunc.moveToInprogressFromOnListFunc();
    TaskCardBtnsFunc.moveToInprogressFromDoneFunc();
    TaskCardBtnsFunc.moveToOnListFunc();
    TaskCardBtnsFunc.moveToDoneFunc();
    TaskCardBtnsFunc.deleteTaskFunc();
  };

  //add the addTask form

  // back to home fuctionality

  const backToHomeFunc = () => {
    const backToHomeBtn = document.querySelector(".backToHome");

    backToHomeBtn.addEventListener("click", function (e) {
      createProjectUI();
    });
  };

  // AddTaskbtn fuctionality

  const AddTaskbtnfunc = () => {
    const AddTaskbtn = document.querySelector(".addTaskCard");

    AddTaskbtn.addEventListener("click", function (e) {
      AddTaskForm.openTaskForm();
    });
  };

  // closeForm fuctionality

  const closeFormFunc = () => {
    const closeFormIcon = document.querySelector(".AddTaskFormCloseIcon");

    closeFormIcon.addEventListener("click", function (e) {
      AddTaskForm.closeTaskForm();
    });
  };

  // submitFormbtn fuctionality
  const submitFormBtnfunc = (cardNumber) => {
    const submitFormBtn = document.querySelector("#addTaskSubmitBtn");
    submitFormBtn.addEventListener("click", function (e) {
      AddTaskForm.addTaskToStorage(e, cardNumber);
      AddTaskForm.addTaskUI(e, cardNumber);
      AddTaskForm.closeTaskForm();
    });
  };

  return {
    displayProjectTasks,
    backToHomeFunc,
  };
})();
