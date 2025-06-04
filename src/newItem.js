
//Date formatter
import {lightFormat, parseISO } from "date-fns";
import { TodoItem  as ToDo } from "./toDoClass.js";
import { categories } from "./manageCategories.js"
import { items, saveItem as save } from "./manageItems.js"



//To-Do Item class
// const Todo = TodoItem;

const today = Date.now().toLocaleString("en-AU")

//Create New item function
const createNew = (
  title,
  description,
  dueDate = lightFormat(new Date(), "d/M/yy"),
  priority = 'medium',
  notes = "",
  complete = false,
  category = "Default"
) => {
  if (categories.includes(category) == false) {
   
    categories.push(category)
  }
  let newItem = items.push(
    new ToDo(
      title,
      description,
      lightFormat(dueDate, "d/M/yy"),
      priority,
      notes,
      complete,
      category
    )
  );
  save(items[items.length-1])
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

export { createNew}


