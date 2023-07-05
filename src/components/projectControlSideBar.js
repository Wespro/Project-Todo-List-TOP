import ProjectControlMain from "./projectControlMain";
import ProjectsStorage from "./projectsStorage";
export default (function () {
  //  Finished projects
  const finishedProjectsDisplay = () => {
    const finishedProjects = ProjectsStorage.projects.filter((project) => {
      return project.done;
    });

    ProjectControlMain.addProjects(undefined, finishedProjects, undefined);
  };

  // onGoing Projects
  const onGoingProjectsDisplay = () => {
    const onGoingProjects = ProjectsStorage.projects.filter((project) => {
      return !project.done;
    });

    ProjectControlMain.addProjects(undefined, undefined, onGoingProjects);
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
  };

  return {
    finishedProjectsDisplay,
    onGoingProjectsDisplay,

    highPriortyProjectsDisplay,
    medPriortyProjectsDisplay,
    lowPriortyProjectsDisplay,
  };
})();
