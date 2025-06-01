
//Date formatter
import {format } from "date-fns";
import { TodoItem  as ToDo } from "./toDoClass.js";
import { categories } from "./manageCategories.js"
import { items } from "./manageItems.js"


//To-Do Item class
// const Todo = TodoItem;

const today = Date.now().toLocaleString("en-AU")

//Create New item function
const createNew = (
  title,
  description,
  dueDate = format(new Date(), "dd/MM/yy"),
  priority = 'medium',
  notes = "",
  complete = false,
  category = "Default"
) => {
  if (categories.includes(category) == false) {
   
    category = "Default"
  }
  let newItem = items.push(
    new ToDo(
      title,
      description,
      dueDate,
      priority,
      notes,
      complete,
      category
    )
  );

  return newItem;
};


// const deleteItem = splice(TodoItem.items(n))




// console.log('createNew tests');
// createNew('Sweep','With a broom','12/10/25','High');
// createNew('Mow','Backyard onbly','12/11/25','Low','','incomplete','Home')
// createNew('Clean car','Use car wash',undefined,'','','incomplete','Home')
// createNew('Sweep again','With a broom','12/10/25','High');
// createNew('Trim','Front yard with whippersnipper','12/11/25','Low','','incomplete','Home')
// createNew('Vacuum','Kitchen and Laundry',undefined,'','','incomplete','Home')

// console.log(`Create new task: ${createNew('Load dishwasher', '', undefined , undefined , true, 'Home')}`);

export { createNew, format}


