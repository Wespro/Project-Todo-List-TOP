import ProjectMaker from "./projectMaker";
export default (function ProjectsStorage() {
  // const projects = [];
  // localStorage.setItem("projects", JSON.stringify([]));

  // const projects = [];
  // JSON.parse(localStorage.getItem("projects"));

  // default project
  const createTestProject = () => {
    const testProject = new ProjectMaker(
      "test",
      "2023/7/15",
      "High",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sint dolorum distinctio magni similique libero suscipit!",
      0
    );
    // testProject.notes.push("dsad");
    // testProject.onListTasks.push("testTask");
    // projects.push(testProject);
    //  localStorage.clear();
    //localStorage.setItem("test", JSON.stringify(testProject));

    // console.log(localStorage);

    // localStorage.setItem("projects", JSON.stringify([testProject]));
  };

  createTestProject();
  return {
    //projects,
    createTestProject,
  };
})();
