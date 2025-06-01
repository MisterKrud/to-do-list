

class TodoItem {
    constructor(title, description, dueDate, priority, notes, complete, category) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.complete = complete;
        this.category = category
}

static items = []
static category = ['Default']

static priority = ['Low', 'Medium', 'High', 'Urgent']

checkCategory(value) {

  if (this.category.includes(value)==false){
    this.category.push(value)
  }
}


setnewCategory(categoryName) {
  this.category.push(categoryName)
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
) => {
  if(TodoItem.category.includes(category) == false){
    TodoItem.category.push(category)
    console.log(TodoItem.category)
  } 
 return new TodoItem(
    title,
    description,
    dueDate,
    priority,
    notes,
    complete,
    category
  )

};

console.table(createNew('Sweep','With a broom','12/10/25','High'));


export { createNew}


