export default class Project {
  constructor(title, dueDate, priority, description, projectKey) {
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.description = description;
    this.projectKey = `id${Math.random().toString(16).slice(2)}`;
    this.notes = [];
    this.done = false;
    this.openToBeModified = false;
    this.openToAddNote = false;
    this.onListTasks = [];
    this.inProgressTasks = [];
    this.doneTasks = [];
  }

  //add notes
  addNotes = (note) => {
    this.notes.push(note);
  };
}
