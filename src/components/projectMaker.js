// Date
import { compareAsc, format } from "date-fns";

// format(new Date(2014, 1, 11), "yyyy-MM-dd";

export default class Project {
  constructor(title, dueDate, priority, description, projectKey) {
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.description = description;
    this.projectKey = projectKey;
    this.notes = [];
    this.done = true;
  }

  addNotes(note) {
    this.notes.push(note);
    console.log();
  }
  projectDone() {
    this.done = !this.done;
  }
}
