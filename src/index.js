// import {divOne} from "./home.js"
import { TodoItem as ToDo } from "./toDoClass.js"
import { createNew} from "./newItem.js";
import { setNewCategory, changeCategory } from "./manageCategories.js"



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

window.createNew = createNew;
window.ToDo = ToDo;
