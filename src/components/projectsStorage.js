import ProjectMaker from "./projectMaker";
import addNotesForm from "./addNotesForm";
export default (function ProjectsStorage() {
  const projects = [];

  //default project
  const createTestProject = () => {
    const testProject = new ProjectMaker(
      "Test",
      "2023/7/15",
      "High",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sint dolorum distinctio magni similique libero suscipit!",
      0
    );
    testProject.onListTasks.push("testTask");

    projects.push(testProject);
  };

  createTestProject();
  return { projects, createTestProject };
})();
