import CreateProjectForm from "./createProjectFrom";

import ProjectManipulation from "./projectManipulation";

export default function createProjectUI() {
  // golbar vars
  const searchBar = document.getElementById("search");
  const clearBtn = document.querySelector(".clear");
  const createBtn = document.querySelector(".create");

  //add the Create PRoject form
  CreateProjectForm.theCreateForm();

  //Projects Manipulation
  ProjectManipulation.addProjects();
  ProjectManipulation.projectHighlight();
  ProjectManipulation.addProjectsNum();
  searchBar.addEventListener("input", ProjectManipulation.searchBarFunciton);

  //Form Manipulation

  const submitBtn = document.querySelector(".submit");
  const closeIcon = document.querySelector(".closeIcon");
  createBtn.addEventListener("click", ProjectForm.openForm);
  closeIcon.addEventListener("click", ProjectForm.closeForm);
  submitBtn.addEventListener("click", (e) => {
    ProjectForm.createProject(e);

    ProjectManipulation.addProjects();
    ProjectManipulation.projectHighlight();
    ProjectManipulation.addProjectsNum();
  });
}
