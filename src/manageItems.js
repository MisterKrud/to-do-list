import { TodoItem as ToDo } from "./toDoClass.js";

export const items = [];
export const deletedItems = [];

const deleteItems = (n) => {
    deletedItems = items.splice(n, 1);
}
