import  { TodoItem as ToDo } from "./toDoClass.js"



console.log('From manageCategories.js')

const categories = ['Default']


export const setNewCategory = (categoryName) =>  categories.push(categoryName);
    
export const  changeCategory = (n, newCategory) => ToDo[n].category = newCategory;

    
 
//  Object.assign(Todos.prototype, setNewCategory, changeCategory)




console.log(ToDo);

export {categories}
// console.log(Todos.items)