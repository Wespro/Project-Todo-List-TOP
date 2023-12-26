import ProjectMaker from "./projectMaker";
export default (function ProjectsStorage() {
  const projects = [];
  const projectNotes = [];
  //default project
  const createTestProject = () => {
    const testProject = new ProjectMaker(
      "Test",
      "2023/7/15",
      "High",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Sint dolorum distinctio magni similique libero suscipit!",
      0
    );

    projects.push(testProject);
  };
  //add notes
  const addNotes = (note) => {
    projectNotes.push(note);
  };
  createTestProject();
  return { projects, createTestProject, projectNotes, addNotes };
})();
