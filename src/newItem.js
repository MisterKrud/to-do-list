

class TodoItem {
    constructor(title, description, dueDate, priority, notes, complete, category) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.complete = complete;
        this.category = category;
}

}



const createNew = (
  title,
  description,
  dueDate,
  priority,
  notes = '',
  complete = false,
  category = 'Default'
) =>
  new TodoItem(
    title,
    description,
    dueDate,
    priority,
    notes,
    complete,
    category
  );

console.table(createNew('Sweep','With a broom','12/10/25','High'));


export { createNew }


