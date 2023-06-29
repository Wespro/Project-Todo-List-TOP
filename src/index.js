// css
import "./css/styles.css";
//components
import ProjectMaker from "./components/projectMaker";

(function toDoList() {
  const project1 = new ProjectMaker(
    "to do",
    "testing the thing",
    "06/30/2023",
    "1st",
    "things",
    "things"
  );
  project1.addNotes("what's appdsadsad");
  project1.projectDone();

  console.log(project1);
})();
