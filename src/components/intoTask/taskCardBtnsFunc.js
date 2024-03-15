import ProjectsStorage from "../projectsStorage";
import AddTaskForm from "./addTaskForm";
import IntoTask from "./intoTask";

export default (function () {
  // move To Inprogress From OnList fuctionality
  const moveToInprogressFromOnListFunc = () => {
    const moveToInprogressBtns = document.querySelectorAll(".moveToInProgress");

    moveToInprogressBtns.forEach((btn) => {
      console.log();
      let cardNumber =
        btn.parentElement.parentElement.attributes["maincardnumber"].value;

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
          ProjectsStorage.projects[cardNumber].inProgressTasks.push(
            btn.parentElement.parentElement.children[0].textContent
          );

          let taskCardNum =
            btn.parentElement.parentElement.attributes["data-number"];

          ProjectsStorage.projects[cardNumber].onListTasks.splice(
            taskCardNum - 1,
            1
          );

          IntoTask.displayProjectTasks(cardNumber);
        }
      });
    });
  };

  // move To Inprogress From OnList fuctionality
  const moveToInprogressFromDoneFunc = () => {
    const moveToInprogressBtns = document.querySelectorAll(".moveToInProgress");

    moveToInprogressBtns.forEach((btn) => {
      let cardNumber =
        btn.parentElement.parentElement.attributes["maincardnumber"].value;

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
          ProjectsStorage.projects[cardNumber].inProgressTasks.push(
            btn.parentElement.parentElement.children[0].textContent
          );

          let taskCardNum =
            btn.parentElement.parentElement.attributes["data-number"];

          ProjectsStorage.projects[cardNumber].doneTasks.splice(
            taskCardNum - 1,
            1
          );

          IntoTask.displayProjectTasks(cardNumber);
        }
      });
    });
  };

  // moveToOnList fuctionality
  const moveToOnListFunc = () => {
    const moveToOnListBtns = document.querySelectorAll(".moveToOnlist");

    moveToOnListBtns.forEach((btn) => {
      let cardNumber =
        btn.parentElement.parentElement.attributes["maincardnumber"].value;

      btn.addEventListener("click", function (e) {
        if (
          Number(btn.attributes["data-number"].value) ===
          Number(
            btn.parentElement.parentElement.attributes["data-number"].value
          )
        ) {
          ProjectsStorage.projects[cardNumber].onListTasks.push(
            btn.parentElement.parentElement.children[0].textContent
          );

          let taskCardNum =
            btn.parentElement.parentElement.attributes["data-number"];

          ProjectsStorage.projects[cardNumber].inProgressTasks.splice(
            taskCardNum - 1,
            1
          );

          IntoTask.displayProjectTasks(cardNumber);
        }
      });
    });
  };

  // moveToOnList fuctionality
  const moveToDoneFunc = () => {
    const moveToDoneBtns = document.querySelectorAll(".moveToDone");

    moveToDoneBtns.forEach((btn) => {
      let cardNumber =
        btn.parentElement.parentElement.attributes["maincardnumber"].value;

      btn.addEventListener("click", function (e) {
        if (
          Number(btn.attributes["data-number"].value) ===
          Number(
            btn.parentElement.parentElement.attributes["data-number"].value
          )
        ) {
          ProjectsStorage.projects[cardNumber].doneTasks.push(
            btn.parentElement.parentElement.children[0].textContent
          );

          let taskCardNum =
            btn.parentElement.parentElement.attributes["data-number"];

          ProjectsStorage.projects[cardNumber].inProgressTasks.splice(
            taskCardNum - 1,
            1
          );

          IntoTask.displayProjectTasks(cardNumber);
        }
      });
    });
  };

  // moveToOnList fuctionality
  const deleteTaskFunc = () => {
    const deleteTaskBtns = document.querySelectorAll(".deleteTask");

    deleteTaskBtns.forEach((btn) => {
      let cardNumber =
        btn.parentElement.parentElement.attributes["maincardnumber"].value;

      let containerNode = btn.parentElement.parentElement.parentElement;

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
            ProjectsStorage.projects[cardNumber].onListTasks.splice(
              taskCardNum - 1,
              1
            );
          } else if (
            containerNode.classList.contains("inprogressTasksContainer")
          ) {
            ProjectsStorage.projects[cardNumber].inProgressTasks.splice(
              taskCardNum - 1,
              1
            );
          } else if (containerNode.classList.contains("doneTasksContainer")) {
            ProjectsStorage.projects[cardNumber].doneTasks.splice(
              taskCardNum - 1,
              1
            );
          }
        }
        IntoTask.displayProjectTasks(cardNumber);
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
