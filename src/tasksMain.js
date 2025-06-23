import { items } from "./manageItems";
import { toggleComplete, deleteToDoItem } from "./manageItems";
import { categories, filter, filteredCat } from "./manageCategories";
import { tasksIndex, createProjectList } from "./tasksIndex";
import { itemCardView } from "./itemCard";
import { createNew as saveNew } from "./newItem";
const tasksMain = () => {


  console.log('tasksMain')

  //create dom elements for main card
  const content = document.getElementById("content");
  const itemContainer = document.createElement("div");
  itemContainer.setAttribute("id", "item-container");
  const containerInDom = document.querySelector("#item-container") != null;
  if (!containerInDom) {
    content.appendChild(itemContainer);
  }
  const addNew = document.createElement("div");
  addNew.id = "add-new";
  const newItemName = document.createElement("input");
  newItemName.setAttribute("type", "text");
  newItemName.id = "new-item-name";
  newItemName.placeholder = "Add task";
  const addNewButton = document.createElement("button");
  addNewButton.id = "add-new-button";
  addNewButton.textContent = "+";
  const newProject = document.createElement("input");
  newProject.setAttribute("type", "text");
  newProject.id = "new-project";
  const newTask = newItemName.value;
  const itemCard = document.createElement("dialog");
  itemCard.id = "item-card";
  const cardInDom = document.querySelector("#item-card") != null;
  if (!cardInDom) {
    content.appendChild(itemCard);
  }
  //Put itmes from array in DOM
  const populateDomItems = (arr) => {
    console.log(`running populateDomItems for ${arr}`);
    itemContainer.innerHTML = "";
    itemContainer.appendChild(addNew);
    newItemName.value = "";
    newItemName.placeholder = "Add task";
    addNew.append(addNewButton, newItemName);
    arr.forEach((item) => {
      const completeClass = () => (item.complete ? "complete" : "incomplete");
      // console.log(`item.title: ${item.title}`);
      const itemListView = document.createElement("div");
      itemListView.className = "item-list-view";
      itemListView.id = item.id;
      const title = document.createElement("p");
      title.className = "item-header";
      title.textContent = item.title;
      const itemContent = document.createElement("div");
      itemContent.className = "item-content";
      const description = document.createElement("p");
      description.textContent = item.description;
      const dueDate = document.createElement("p");
      dueDate.className = "due-date";
      dueDate.textContent = `  | ${item.dueDate}`;
      const priority = document.createElement("p");
      priority.textContent = item.priority;
      const notes = document.createElement("p");
      notes.className = "notes";
      notes.textContent = item.notes;
      const complete = document.createElement("p");
      complete.className = completeClass();
      complete.innerText = completeClass();
      const category = document.createElement("p");
      category.className = "category";
      const categoryName = item.category;
      category.textContent = categoryName;
      category.classList.add(categoryName.toLowerCase());
      console.log(`Category: ${category.className}`);
      //checkbox element
      const checkBox = document.createElement("input");
      checkBox.setAttribute("type", "checkbox");
      checkBox.setAttribute("class", "check-box");
      checkBox.id = `check-${item.id}`;
      checkBox.classList.add(completeClass());
      itemContainer.appendChild(itemListView);
      itemListView.append(checkBox, title, itemContent);
      itemContent.append(category, dueDate);
      return itemListView;
    });
    highlightSelectedItem();
  };

  //Add listeners to checkboxes
  const addCheckBoxListeners = () => {
 const checkBoxes = document.querySelectorAll(".check-box");
  checkBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      console.log(`box clicked`);
      const boxParentId = box.parentElement.id;
      const idIndex = items.findIndex((item) => item.id === boxParentId);
      //Restore complete item to main list
      
      if (box.getAttribute("class") === "check-box complete") {
        const itemToRestore = document.getElementById(boxParentId);
        itemToRestore.removeChild(itemToRestore.querySelector("button"));
        itemToRestore.classList.remove("completed-item");
        itemToRestore.classList.add("selected");
        itemContainer.prepend(itemToRestore);
        box.classList.add("incomplete");
        box.classList.remove("complete");
        if(document.querySelector(".complete")===null){
          const border = document.querySelector("HR")
          itemContainer.removeChild(border)
        }
      } else {
        //Mark item as complete and move to the bottom of document
        box.classList.add("complete");
        box.classList.remove("incomplete");
        const completedItemToShift = document.getElementById(boxParentId);
        completedItemToShift.classList.remove("selected");
        itemContainer.removeChild(completedItemToShift);
        if(document.querySelector(".complete") === null){
          const border = document.createElement("HR");
          itemContainer.appendChild(border)
        }
        itemContainer.appendChild(completedItemToShift);
        const itemDeleteButton = document.createElement("button");
        itemDeleteButton.id = `${boxParentId}-delete`;
        itemDeleteButton.className = "item-delete-button";
        itemDeleteButton.innerText = "x";
        const completedItemContent =
          completedItemToShift.querySelector(".item-content");
        completedItemToShift.removeChild(completedItemContent);
        completedItemToShift.appendChild(completedItemContent);
        completedItemToShift.appendChild(itemDeleteButton);
        completedItemToShift.classList.add("completed-item");

        //Delete item permanently
        itemDeleteButton.addEventListener("click", () => {
          console.table(items);
          const itemPendingDelete = itemDeleteButton.parentElement;
          const itemPendingDeleteId = itemDeleteButton.parentElement.id;
          console.log(`parent id: ${itemPendingDeleteId}`);
          console.log(`button id" ${itemDeleteButton.id}`);
          const itemPendingDeleteIndex = items.findIndex((item) => {
            item.id.toLowerCase() === itemPendingDeleteId.toLowerCase();
            console.log(
              `Item ID: [${item.id}] | Pending ID: [${itemPendingDeleteId}]`
            );
            return item.id == itemPendingDeleteId;
          });
          console.log(`index ${itemPendingDeleteIndex}`);
          console.log("deleting:");
          console.table(items[itemPendingDeleteIndex]);
          deleteToDoItem(items[itemPendingDeleteIndex]);
          itemPendingDelete.className=''
          itemContainer.removeChild(itemPendingDelete);
          console.table(items);
          console.table(localStorage);
        });
      }
      toggleComplete(items[idIndex]);
    });
  });
}
  //highlight selected item
  const highlightSelectedItem = () => {
    console.log("highlightSelected()");
    const itemListView = document.querySelectorAll(".item-list-view");
    itemListView.forEach((item) => {
      item.addEventListener("click", () => {
        console.log(`item clicked`);
        itemListView.forEach((listItem) =>
          listItem.classList.remove("selected")
        );
        if (item.firstChild.className === "check-box complete") {
          return;
        }
        createItemCard(item);
      });
    });
  };

  //Create Item card and place in DOM
  const createItemCard = (selectedItem) => {
    content.removeChild(itemCard);
    selectedItem.classList.add("selected");
    content.appendChild(itemCard);
    itemCard.innerHTML = "";
    content.appendChild(itemCardView());
    content.classList.add("three-columns");
    itemCard.show();
    itemCard.classList.add("visible");
  };

  //Event listener for new item name
  newItemName.addEventListener("change", () => {
    addNewButton.focus();
  });

  //Event listener for 'new' button
  addNewButton.addEventListener("click", () => {
    saveNew(newItemName.value);
    itemContainer.innerHTML = "";

    populateDomItems(items.sort());
    
    addCheckBoxListeners()
    const newItem = document.querySelector(".item-list-view");
    createItemCard(newItem);
  });


  // const card = document.getElementById("item-card");
  populateDomItems(items.sort());
   
   addCheckBoxListeners();
  
  // const updateButton = document.getElementById("update-button");

  //Event listener for project filter
  const projects = Array.from(document.querySelectorAll(".project-name"));
  console.log(`itemContainer: ${itemContainer}`);
  projects.forEach((proj) => {
    const allItems = Array.from(document.querySelectorAll(".category"));
    
    proj.addEventListener("click", () => {
      const allTasks = document.querySelectorAll(".item-list-view");
      projects.forEach((projName) => projName.classList.remove("active"));
      proj.classList.add("active");
      if (proj.id === "all") {
        itemContainer.innerHTML = "";
        itemContainer.appendChild(addNew);
        populateDomItems(items.sort());
        addCheckBoxListeners();
        // allTasks.forEach((task) => itemContainer.prepend(task));
      } else {
        const projectItems = allItems.filter(
          (item) => item.textContent === proj.textContent
        );
        itemContainer.innerHTML = "";
        itemContainer.appendChild(addNew);
        projectItems.forEach((projectItem) => {
          const categoryParent = projectItem.parentElement;
          const itemElement = categoryParent.parentElement;
          document.querySelector("#item-container").prepend(itemElement);
          addCheckBoxListeners();
        });
      }
    });
  });
  return itemContainer;
};

export { tasksMain };
