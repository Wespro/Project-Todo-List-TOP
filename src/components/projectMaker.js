// Date
import { compareAsc, format } from "date-fns";

// format(new Date(2014, 1, 11), "yyyy-MM-dd";

export default class Project {
  constructor(title, description, date, priority) {
    this.title = title;
    this.description = description;
    this.duedate = date;
    this.priority = priority;
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
