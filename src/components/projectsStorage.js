import ProjectMaker from "./projectMaker";
export default (function ProjectsStorage() {
  const projects = [];
  //default project
  const createTestProject = () => {
    const testProject = new ProjectMaker(
      "Test",
      "7/15/2023",
      "High",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sint dolorum distinctio magni similique libero suscipit!",
      0
    );

    projects.push(testProject);
  };
  createTestProject();
  return { projects, createTestProject };
})();
