import ProjectControlMain from "./projectControlMain";
import ProjectsStorage from "./projectsStorage";
import ProjectCardControl from "./projectCardControl";
export default (function () {
  //  Finished projects
  const finishedProjectsDisplay = () => {
    const finishedProjects = ProjectsStorage.projects.filter((project) => {
      return project.done;
    });

    ProjectControlMain.addProjects(undefined, finishedProjects, undefined);
    ProjectControlMain.addProjectsNum();
  };

  // onGoing Projects
  const onGoingProjectsDisplay = () => {
    const onGoingProjects = ProjectsStorage.projects.filter((project) => {
      return !project.done;
    });

    ProjectControlMain.addProjects(undefined, undefined, onGoingProjects);
    ProjectControlMain.addProjectsNum();
  };

  //  High priorty projects
  const highPriortyProjectsDisplay = () => {
    const highPriortyProjects = ProjectsStorage.projects.filter((project) => {
      return project.priority === "High";
    });

    ProjectControlMain.addProjects(
      undefined,
      undefined,
      undefined,
      highPriortyProjects
    );
    ProjectControlMain.addProjectsNum();
  };

  //Medium priorty projects
  const medPriortyProjectsDisplay = () => {
    const medPriortyProjects = ProjectsStorage.projects.filter((project) => {
      return project.priority === "Medium";
    });

    ProjectControlMain.addProjects(
      undefined,
      undefined,
      undefined,
      undefined,
      medPriortyProjects
    );
    ProjectControlMain.addProjectsNum();
  };
  //       //Low priorty projects

  const lowPriortyProjectsDisplay = () => {
    const lowPriortyProjects = ProjectsStorage.projects.filter((project) => {
      return project.priority === "Low";
    });

    ProjectControlMain.addProjects(
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      lowPriortyProjects
    );
    ProjectControlMain.addProjectsNum();
  };

  return {
    finishedProjectsDisplay,
    onGoingProjectsDisplay,

    highPriortyProjectsDisplay,
    medPriortyProjectsDisplay,
    lowPriortyProjectsDisplay,
  };
})();
