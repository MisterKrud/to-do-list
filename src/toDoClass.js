import { lightFormat, parseISO } from "date-fns";

export class TodoItem {
  constructor(
    title,
    description,
    dueDate,
    priority,
    notes,
    complete,
    category,
    id
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.complete = complete;
    this.category = category;
    this.id = crypto.randomUUID();
  }



 static priority = ["Low", "Medium", "High", "Urgent"];

  toggleComplete() {
    if(this.complete == false){
      this.complete =  true
    } else { this.complete = false }
    return this.complete;
  }

 static deleteItem(n) {
    TodoItem.deletedItems = TodoItem.items.splice(n,1);
    console.table(TodoItem.items)
    return TodoItem.deletedItems
  }
}

export const priority = ["Low", "Medium", "High", "Urgent"];

console.log('toDoClass')