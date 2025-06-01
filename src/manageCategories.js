import  { TodoItem as ToDo } from "./toDoClass.js"
import {items} from "./manageItems.js"





const categories = ['Default']


export const setNewCategory = (categoryName) =>  categories.push(categoryName);
    
export const  changeCategory = (n, newCategory) => items[n].category = newCategory;

    
 
// Object.assign(Todos.prototype, setNewCategory, changeCategory)



// console.log(`Manage categories tests:`)
// console.log(`Create new category: ${setNewCategory('Home')}`)
// console.log(`Change category for 'Mow': ${changeCategory(1, "Home")}`)
// console.log(`Change and set new category for Trim: ${changeCategory(4, 'Yard')}`)

export {categories}
// console.log(Todos.items)