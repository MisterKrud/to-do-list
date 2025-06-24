import "./styles.css"
import { TodoItem as ToDo } from "./toDoClass.js"

import { createNew} from "./newItem.js";
import { deleteToDoItem, saveItem as save, items, getItemsFromStorage, saveItem} from "./manageItems.js"
import { setNewCategory, changeCategory, categories, filter, populateCategories } from "./manageCategories.js"
import { changeDueDate, dateIsPast } from "./manageDueDates.js";
import { tasksMain } from "./tasksMain.js"
import { tasksIndex } from "./tasksIndex.js";
import { itemCardView } from "./itemCard.js";
import {deletion } from "./deletion.js";


// localStorage.clear();


// createNew('Sweep','With a broom','2025-05-31','High',undefined,undefined,undefined);
// createNew('Mow','Backyard only','2025-05-16','Low','',undefined,undefined);
// createNew('Clean car','Use car wash',undefined,undefined,undefined,undefined);
// createNew('Sweep again','With a broom','2025-10-12','High');
// createNew('Trim','Front yard with whippersnipper','2025-06-14','Low',undefined,undefined,undefined);
// createNew('Vacuum','Kitchen and Laundry',undefined,undefined,undefined,undefined);



//=> "3 days ago"
// import { main } from "./main.js"  
// import { menu } from "./menu.js"
// import { about } from "./about.js"
// const content = document.getElementById("content");
// const indexBar = document.getElementById("index-bar");
// const navButtons = document.querySelectorAll("button");
// const buttonOne = navButtons[0];
// const buttonTwo = navButtons[1];
// const buttonThree = navButtons[2];



// content.appendChild(home());
// console.log(createNew('Mow','Backyard onbly','12/11/25','Low','','incomplete','Home'))



// console.log("Working");
// console.log(`Populate session table`)
getItemsFromStorage();
populateCategories();

// console.log('createNew test');



// console.log(`Manage categories tests:`)
// console.log(`Create new category: ${setNewCategory('Home')}`)
// console.log(`Change category for 'Mow': ${changeCategory(1, "Home")}`)
// saveItem(items[1])
// console.log(`Change and set new category for Trim: ${changeCategory(3, 'Yard')}`)
// saveItem(items[3])

// console.log(`Change category for 'Sweep': ${changeCategory(2, "Clean")}`)
// console.table(categories);

// console.log(`Test manageItems: `);
// console.log(`Delete 'Sweep again': ${deleteItems(3)}`);
// console.table(items);

// console.log(`Test changeDueDate: Mow ${changeDueDate(1, '2025-07-28')}`)

// console.table(items);
// console.log(`Test past date - Clean car: ${dateIsPast(2)}`)

// console.log(`Test save function`);

// console.log(items[2])
// checkStorage(items[0]);


// console.log(categories)
// console.log('default:')
// console.table(filter('Default'))
// console.log('yard:')
// console.table(filter('Yard'))
// console.log('home:')
// console.table(filter('Home'))


// console.table(localStorage)
// console.table(items)

// content.appendChild(tasksIndex())
content.append(tasksIndex(),tasksMain())
// content.append(itemCardView())


window.createNew = createNew;
window.ToDo = ToDo;
window.items = items;
window.save = save;
window.categories = categories;
window.deleteToDoItem = deleteToDoItem;
window.changeCategory = changeCategory;
window.setNewCategory = setNewCategory;
// window.filterByCategory = filterByCategory;
window.filter = filter


console.log('index')