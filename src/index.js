import "./styles.css"
import { TodoItem as ToDo } from "./toDoClass.js"

import { createNew} from "./newItem.js";
import { deleteToDoItem, saveItem as save, items, getItemsFromStorage} from "./manageItems.js"
import { setNewCategory, changeCategory, categories, filter, populateCategories } from "./manageCategories.js"
import { changeDueDate, dateIsPast } from "./manageDueDates.js";
import { tasksMain } from "./tasksMain.js"


// import { checkStorage } from "./saveItems.js";





//=> "3 days ago"
// import { main } from "./main.js"  
// import { menu } from "./menu.js"
// import { about } from "./about.js"
const content = document.getElementById("content");
const navButtons = document.querySelectorAll("button");
const buttonOne = navButtons[0];
const buttonTwo = navButtons[1];
const buttonThree = navButtons[2];



// content.appendChild(home());
// console.log(createNew('Mow','Backyard onbly','12/11/25','Low','','incomplete','Home'))



console.log("Working");
console.log(`Populate session table`)
getItemsFromStorage();
populateCategories();

// console.log('createNew test');
// createNew('Sweep','With a broom','2025-05-31','High');
// createNew('Mow','Backyard only','2025-05-16','Low','',undefined,'Yard');
// createNew('Clean car','Use car wash',undefined,'','',true,'Car');
// createNew('Sweep again','With a broom','2025-10-12','High');
// createNew('Trim','Front yard with whippersnipper','2025-06-14','Low','',undefined,'Yard');
// createNew('Vacuum','Kitchen and Laundry',undefined,'','',true,'Home');


console.log(`Manage categories tests:`)
// console.log(`Create new category: ${setNewCategory('Home')}`)
// console.log(`Change category for 'Mow': ${changeCategory(1, "Home")}`)
// console.log(`Change and set new category for Trim: ${changeCategory(3, 'Yard')}`)

console.log(`Change category for 'Sweep': ${changeCategory(2, "Clean")}`)
console.table(categories);

// console.log(`Test manageItems: `);
// console.log(`Delete 'Sweep again': ${deleteItems(3)}`);
// console.table(items);

// console.log(`Test changeDueDate: Mow ${changeDueDate(1, '2025-07-28')}`)

// console.table(items);
// console.log(`Test past date - Clean car: ${dateIsPast(2)}`)

console.log(`Test save function`);

// console.log(items[2])
// checkStorage(items[0]);
// localStorage.clear();

console.log(categories)

console.table(filter('Default'))
console.table(filter('Yard'))
console.table(filter('Home'))


console.table(localStorage)
console.table(items)

content.appendChild(tasksMain())

window.createNew = createNew;
window.ToDo = ToDo;
window.items = items;
window.save = save;
window.deleteToDoItem = deleteToDoItem;
window.changeCategory = changeCategory;
window.setNewCategory = setNewCategory;
// window.filterByCategory = filterByCategory;
window.filter = filter


