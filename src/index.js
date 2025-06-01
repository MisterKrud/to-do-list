// import {divOne} from "./home.js"
import { TodoItem as ToDo } from "./toDoClass.js"
import { createNew} from "./newItem.js";
import { deleteItems, items} from "./manageItems.js"
import { setNewCategory, changeCategory, categories } from "./manageCategories.js"



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

console.log('createNew tests');
createNew('Sweep','With a broom','12/10/25','High');
createNew('Mow','Backyard onbly','12/11/25','Low','','incomplete','Home')
createNew('Clean car','Use car wash',undefined,'','','incomplete','Home')
createNew('Sweep again','With a broom','12/10/25','High');
createNew('Trim','Front yard with whippersnipper','12/11/25','Low','','incomplete','Home')
createNew('Vacuum','Kitchen and Laundry',undefined,'','','incomplete','Home')
console.table(items);


console.log(`Manage categories tests:`)
console.log(`Create new category: ${setNewCategory('Home')}`)
console.log(`Change category for 'Mow': ${changeCategory(1, "Home")}`)
console.log(`Change and set new category for Trim: ${changeCategory(4, 'Yard')}`)
console.table(categories);

console.log(`Test manageItems: `);
console.log(`Delete 'Sweep again': ${deleteItems(3)}`);
console.table(items);




// console.log('From newItem.js')
// console.table(items)

window.createNew = createNew;
window.ToDo = ToDo;
window.items = items;

