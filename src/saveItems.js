import { TodoItem as ToDo } from "./toDoClass";

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
        storgae &&
        storage.length !== 0
    )
   }
}

const checkStorage = () => {
    if (storageAvailable("localStorage")){
        console.log('Storage is available');
    } else {
        console.log('Insufficient storage');
    }
};

//function incomplete?
const saveItem = (item) =>  localStorage.setItem(item, JSON.stringify);

