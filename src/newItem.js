
//Date formatter
import {lightFormat, parseISO, constructNow } from "date-fns";
import { TodoItem  as ToDo } from "./toDoClass.js";
import { categories } from "./manageCategories.js"
import { items, saveItem as save } from "./manageItems.js"



//To-Do Item class
// const Todo = TodoItem;

const today = lightFormat(new Date(), 'd/M/yy')
console.log(today)
const thisDay = new Date();
console.log(thisDay)
console.log(lightFormat(new Date(), 'd/M/yy'))

//Create New item function
const createNew = (
  title,
  description,
  dueDate = new Date(),
  priority = 'Medium',
  notes = "",
  complete = false,
  category = "Default"
) => {

  
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
console.log('newItems')
export { createNew}


