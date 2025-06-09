import { TodoItem as ToDo } from "./toDoClass";
import { items } from "./manageItems.js"

const storageAvailable = (type) => {
    let storage;
    try {
        storage = window[type];
    const x = "__storage_test__";
    storage.setItem (x, x);
    storage.removeItem(x);
    return true;
   } catch (e) {
    return (
        e instanceof DOMException &&
        e.name === "QuotaExceededError" &&
        storage &&
        storage.length !== 0
    )
   }
}

const saveItem = (item) => {
    if (storageAvailable("localStorage")){
        console.log(`Local storage length: ${localStorage.length}`)
        console.log('Storage is available');
        saveToDoItem(item)
    //    localStorage.setItem("listItem", JSON.stringify(item))
       console.log(`Get listItem: ${localStorage.getItem("listItem")}`)
    
     
    } else {
        console.log('Insufficient storage');
    }
};

//function incomplete?
const saveToDoItem = (item) =>  {
    const itemId = localStorage.length
    if(!localStorage.getItem(item)){
    localStorage.setItem(itemId, JSON.stringify(item));
    }
}

const deleteToDoItem = (item) => {
    const itemId = item.id

} 

const getItemsFromStorage = () => {
    for(let i = 0; i<localStorage.length; i++)

       items.push(JSON.parse(localStorage.getItem(i)))
 
     
     
    
}
console.log('saveItems')