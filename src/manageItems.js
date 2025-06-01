import { TodoItem as ToDo } from "./toDoClass.js";

export const items = [];
export const deletedItems = [];

export const deleteItems = (n) =>  items.splice(n, 1);


// console.log(`Test manageItems: `);
// console.log(`Delete Vacuum: ${deleteItems(5)}`);
// console.table(items);