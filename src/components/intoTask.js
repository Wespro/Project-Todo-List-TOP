import "../css/intoTask.css";

export default (function () {
  const body = document.querySelector("body");
  body.replaceChildren();
  const displayProjectTasks = () => {
    const fragment = new DocumentFragment();

    const tasksContainer = document.createElement("div");

    const projectTitle = document.createElement("h1");

    const onListTasks = document.createElement("div");
    const onListTasksTop = document.createElement("div");
    const onListTasksTitle = document.createElement("h2");
    const addTaskCard = document.createElement("button");

    const inprogressTasks = document.createElement("div");
    const inprogressTasksTitle = document.createElement("h2");

    const doneTasks = document.createElement("div");
    const doneTasksTitle = document.createElement("h2");

    const backToHome = document.createElement("button");

    const taskCard = document.createElement("div");
    const taskTitle = document.createElement("h3");
    const taskActions = document.createElement("div");
    const moveToOnlist = document.createElement("button");
    const moveToInProgress = document.createElement("button");
    const moveToDone = document.createElement("button");
    const deleteTask = document.createElement("button");

    //adding classes

    tasksContainer.classList.add("tasksContainer");

    projectTitle.classList.add("projectTitle");

    onListTasks.classList.add("onListTasks");
    onListTasksTop.classList.add("onListTasksTop");
    onListTasksTitle.classList.add("onListTasksTitle");
    addTaskCard.classList.add("addTaskCard");

    inprogressTasks.classList.add("inprogressTasks");
    inprogressTasksTitle.classList.add("inprogressTasksTitle");

    doneTasks.classList.add("doneTasks");
    doneTasksTitle.classList.add("doneTasksTitle");

    backToHome.classList.add("backToHome");

    taskCard.classList.add("taskCard");
    taskTitle.classList.add("taskTitle");
    taskActions.classList.add("taskActions");
    moveToOnlist.classList.add("moveToOnlist");
    moveToInProgress.classList.add("moveToInProgress");
    moveToDone.classList.add("moveToDone");
    deleteTask.classList.add("deleteTask");
    //adding text
    // (h)s
    projectTitle.innerText = "new one";
    onListTasksTitle.innerText = "OnList";
    inprogressTasksTitle.innerText = "Inprogress";
    doneTasksTitle.innerText = "Done";
    taskTitle.innerText = "task";

    // btns;
    addTaskCard.innerText = "Add Task +";
    moveToOnlist.innerText = "Move To Onlist";
    moveToInProgress.innerText = "Move To InProgress";
    moveToDone.innerText = " Move To Done ✔";
    deleteTask.innerText = " Delete Task x";
    backToHome.innerText = " Back To Home";

    //appending

    tasksContainer.append(onListTasks, inprogressTasks, doneTasks);
    onListTasks.append(onListTasksTop, taskCard);
    onListTasksTop.append(onListTasksTitle, addTaskCard);
    inprogressTasks.append(inprogressTasksTitle);

    doneTasks.append(doneTasksTitle);

    taskCard.append(taskTitle, taskActions);

    taskActions.append(moveToOnlist, moveToInProgress, moveToDone, deleteTask);
    fragment.append(projectTitle, tasksContainer, backToHome);
    body.append(fragment);
  };
  return { displayProjectTasks };
})();
