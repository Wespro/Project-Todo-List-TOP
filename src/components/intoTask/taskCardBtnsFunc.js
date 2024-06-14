import ProjectsStorage from "../projectsStorage";
import AddTaskForm from "./addTaskForm";
import IntoTask from "./intoTask";

export default (function () {
  // move To Inprogress From OnList fuctionality
  const moveToInprogressFromOnListFunc = () => {
    const moveToInprogressBtns = document.querySelectorAll(".moveToInProgress");

    moveToInprogressBtns.forEach((btn) => {
      let cardKey =
        btn.parentElement.parentElement.attributes["maincardnumber"].value;

      const project = JSON.parse(localStorage.getItem(cardKey));

      btn.addEventListener("click", function (e) {
        if (
          Number(btn.attributes["data-number"].value) ===
            Number(
              btn.parentElement.parentElement.attributes["data-number"].value
            ) &&
          btn.parentElement.parentElement.parentElement.classList.contains(
            "onListTasksContainer"
          )
        ) {
          project.inProgressTasks.push(
            btn.parentElement.parentElement.children[0].textContent
          );

          let taskCardNum =
            btn.parentElement.parentElement.attributes["data-number"];

          project.onListTasks.splice(taskCardNum - 1, 1);

          localStorage.setItem(`${cardKey}`, JSON.stringify(project));
          IntoTask.displayProjectTasks(cardKey);
        }
      });
    });
  };

  // move To Inprogress From OnList fuctionality
  const moveToInprogressFromDoneFunc = () => {
    const moveToInprogressBtns = document.querySelectorAll(".moveToInProgress");

    moveToInprogressBtns.forEach((btn) => {
      let cardKey =
        btn.parentElement.parentElement.attributes["maincardnumber"].value;

      const project = JSON.parse(localStorage.getItem(cardKey));

      btn.addEventListener("click", function (e) {
        if (
          Number(btn.attributes["data-number"].value) ===
            Number(
              btn.parentElement.parentElement.attributes["data-number"].value
            ) &&
          btn.parentElement.parentElement.parentElement.classList.contains(
            "doneTasksContainer"
          )
        ) {
          project.inProgressTasks.push(
            btn.parentElement.parentElement.children[0].textContent
          );

          let taskCardNum =
            btn.parentElement.parentElement.attributes["data-number"];

          project.doneTasks.splice(taskCardNum - 1, 1);

          localStorage.setItem(`${cardKey}`, JSON.stringify(project));

          IntoTask.displayProjectTasks(cardKey);
        }
      });
    });
  };

  // moveToOnList fuctionality
  const moveToOnListFunc = () => {
    const moveToOnListBtns = document.querySelectorAll(".moveToOnlist");

    moveToOnListBtns.forEach((btn) => {
      let cardKey =
        btn.parentElement.parentElement.attributes["maincardnumber"].value;

      const project = JSON.parse(localStorage.getItem(cardKey));

      btn.addEventListener("click", function (e) {
        if (
          Number(btn.attributes["data-number"].value) ===
          Number(
            btn.parentElement.parentElement.attributes["data-number"].value
          )
        ) {
          project.onListTasks.push(
            btn.parentElement.parentElement.children[0].textContent
          );

          let taskCardNum =
            btn.parentElement.parentElement.attributes["data-number"];

          project.inProgressTasks.splice(taskCardNum - 1, 1);

          localStorage.setItem(`${cardKey}`, JSON.stringify(project));

          IntoTask.displayProjectTasks(cardKey);
        }
      });
    });
  };

  // moveToOnList fuctionality
  const moveToDoneFunc = () => {
    const moveToDoneBtns = document.querySelectorAll(".moveToDone");

    moveToDoneBtns.forEach((btn) => {
      let cardKey =
        btn.parentElement.parentElement.attributes["maincardnumber"].value;

      const project = JSON.parse(localStorage.getItem(cardKey));
      btn.addEventListener("click", function (e) {
        if (
          Number(btn.attributes["data-number"].value) ===
          Number(
            btn.parentElement.parentElement.attributes["data-number"].value
          )
        ) {
          project.doneTasks.push(
            btn.parentElement.parentElement.children[0].textContent
          );

          let taskCardNum =
            btn.parentElement.parentElement.attributes["data-number"];

          project.inProgressTasks.splice(taskCardNum - 1, 1);

          localStorage.setItem(`${cardKey}`, JSON.stringify(project));

          IntoTask.displayProjectTasks(cardKey);
        }
      });
    });
  };

  // moveToOnList fuctionality
  const deleteTaskFunc = () => {
    const deleteTaskBtns = document.querySelectorAll(".deleteTask");

    deleteTaskBtns.forEach((btn) => {
      let containerNode = btn.parentElement.parentElement.parentElement;

      let cardKey =
        btn.parentElement.parentElement.attributes["maincardnumber"].value;

      const project = JSON.parse(localStorage.getItem(cardKey));
      btn.addEventListener("click", function (e) {
        if (
          Number(btn.attributes["data-number"].value) ===
          Number(
            btn.parentElement.parentElement.attributes["data-number"].value
          )
        ) {
          let taskCardNum =
            btn.parentElement.parentElement.attributes["data-number"];

          if (containerNode.classList.contains("onListTasksContainer")) {
            project.onListTasks.splice(taskCardNum - 1, 1);
          } else if (
            containerNode.classList.contains("inprogressTasksContainer")
          ) {
            project.inProgressTasks.splice(taskCardNum - 1, 1);
          } else if (containerNode.classList.contains("doneTasksContainer")) {
            project.doneTasks.splice(taskCardNum - 1, 1);
          }
        }
        localStorage.setItem(`${cardKey}`, JSON.stringify(project));
        IntoTask.displayProjectTasks(cardKey);
      });
    });
  };

  return {
    moveToInprogressFromOnListFunc,
    moveToInprogressFromDoneFunc,
    moveToOnListFunc,
    moveToDoneFunc,
    deleteTaskFunc,
  };
})();
