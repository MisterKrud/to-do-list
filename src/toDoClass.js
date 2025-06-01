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

//   static items = [];
//   static deletedItems = [];
  // static category = ["Default"];

  static priority = ["Low", "Medium", "High", "Urgent"];

  toggleComplete() {
    if(this.complete == false){
      this.complete =  true
    } else { this.complete = false }
    return this.complete;
  }




//   checkCategory(value) {
//     if (this.category.includes(value) == false) {
//       this.category.push(value);
//     }
//   }

  // setNewCategory(categoryName) {
  //   this.category.push(categoryName);
  // }

  // changeItemCategory(newCategory){
  //   this.category = newCategory

  // }

 static deleteItem(n) {
    TodoItem.deletedItems = TodoItem.items.splice(n,1);
    console.table(TodoItem.items)
    return TodoItem.deletedItems
  }
}