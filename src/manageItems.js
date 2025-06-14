export const items = [];
export const deletedItems = [];

const storageAvailable = (type) => {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      storage &&
      storage.length !== 0
    );
  }
};

export const saveItem = (item) => {
  if (storageAvailable("localStorage")) {
    saveToDoItem(item);
  } else {
    console.log("Insufficient storage");
  }
};

const saveToDoItem = (item) => {
  const itemId = item.id;
  if (!localStorage.getItem(item)) {
    localStorage.setItem(itemId, JSON.stringify(item));
  }
};

export const deleteToDoItem = (item) => {
  items.splice(items.indexOf(item));
  localStorage.removeItem(item.id);
};

export const getItemsFromStorage = () => {
  Object.keys(localStorage).forEach((key) => {
    items.push(JSON.parse(localStorage.getItem(key)));
  });
};

export const toggleComplete = (item) => item.complete === false ? item.complete = true : item.complete = false;

console.log('manageItems')