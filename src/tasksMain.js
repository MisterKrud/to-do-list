import { items } from "./manageItems";
import { toggleComplete, deleteToDoItem } from "./manageItems";
import { categories, filter, filteredCat } from "./manageCategories";
import { tasksIndex, createProjectList } from "./tasksIndex";
import { itemCardView } from "./itemCard";
import { createNew as saveNew } from "./newItem";


const tasksMain = () => {


  console.log('tasksMain')

  const createDomStructure = () =>{

  //create dom elements for main card
  const content = document.getElementById("content");
  
  const itemContainer = document.createElement("div");
  itemContainer.setAttribute("id", "item-container");
  const containerInDom = document.querySelector("#item-container") != null;
  if (!containerInDom) {
    content.appendChild(itemContainer);
  }
  const siteHeader = document.createElement("div")
  siteHeader.id = "site-header";
  siteHeader.textContent = "To-Do Tasks"
  itemContainer.appendChild(siteHeader);
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
  const anotherTest = () => console.log('Just testing')

  return {itemContainer, siteHeader, content, addNew, itemCard, newItemName, newTask, addNewButton}
  }
  const dom =  createDomStructure()
 
// querySelector()

  //Put itmes from array in DOM
  const populateDomItems = (arr) => {
    
    console.log(`running populateDomItems for ${arr}`);
    dom.itemContainer.innerHTML = "";
    dom.itemContainer.appendChild(dom.addNew);
    dom.itemContainer.prepend(dom.siteHeader)
    dom.newItemName.value = "";
    dom.newItemName.placeholder = "Add task";
    dom.addNew.append(dom.addNewButton, dom.newItemName);
   const taskItemElements =  arr.map((item) => {
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
      priority.className = "priority"
      priority.textContent = item.priority;
      itemListView.classList.add(`${item.priority.toLowerCase()}`)
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
    
      dom.itemContainer.prepend(itemListView);
     
      itemListView.append(checkBox, title, itemContent);
      title.appendChild(priority)
      itemContent.append(category, dueDate);
     
      return itemListView;
    });
    highlightSelectedItem();
    return taskItemElements
  };



  //Add listeners to checkboxes
  const addCheckBoxListeners = () => {
    console.log('Adding checkbox listeners')
 const checkBoxes = document.querySelectorAll(".check-box");
  checkBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      console.log(`box clicked`);
      const boxParentId = box.parentElement.id;
      const idIndex = items.findIndex((item) => item.id === boxParentId);

      const border = document.createElement("HR");
          border.id = 'border'
      //Restore complete item to main list
      
      if (box.getAttribute("class") === "check-box complete") {
        const itemToRestore = document.getElementById(boxParentId);
        const itemToRestoreTitle = itemToRestore.querySelector(".item-header")
        const itemToRestorePriority = document.createElement("p");
        const masterItem = items[idIndex];
        itemToRestorePriority.textContent = masterItem.priority;
        itemToRestoreTitle.appendChild(itemToRestorePriority);
        itemToRestore.removeChild(itemToRestore.querySelector("button"));
        
        itemToRestore.classList.remove("completed-item");
        itemToRestore.classList.add("selected");
        dom.itemContainer.prepend(itemToRestore);
        box.classList.add("incomplete");
        box.classList.remove("complete");
        if(document.querySelector(".complete")===null){
         
          dom.itemContainer.removeChild(document.getElementById("border"))
        }
      } else {
        //Mark item as complete and move to the bottom of document
        box.classList.add("complete");
        box.classList.remove("incomplete");
        const completedItemToShift = document.getElementById(boxParentId);
        completedItemToShift.classList.remove("selected");
        dom.itemContainer.removeChild(completedItemToShift);
        if(document.querySelector(".complete") === null){
          
          dom.itemContainer.appendChild(border)
        }
        dom.itemContainer.appendChild(completedItemToShift);
        const itemDeleteButton = document.createElement("button");
        itemDeleteButton.id = `${boxParentId}-delete`;
        itemDeleteButton.className = "item-delete-button";
        itemDeleteButton.innerText = "x";
        const completedItemContent =
          completedItemToShift.querySelector(".item-content");
          const completedItemTitle = completedItemToShift.querySelector(".item-header");
          const completedItemPriority = completedItemTitle.querySelector("p");
          completedItemTitle.removeChild(completedItemPriority);
        completedItemToShift.removeChild(completedItemContent);
        completedItemToShift.appendChild(completedItemContent);
        completedItemToShift.appendChild(itemDeleteButton);
        completedItemToShift.classList.add("completed-item");
        completedItemToShift.removeChild

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
          dom.itemContainer.removeChild(itemPendingDelete);
          if(dom.itemContainer.lastChild.id === 'border'){
            dom.itemContainer.removeChild(document.getElementById("border"))
          }
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
    
    console.log("highlighting Selected item");
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
    console.log(`Creating card for ${selectedItem}`)
    dom.content.removeChild(dom.itemCard);
    selectedItem.classList.add("selected");
    dom.content.appendChild(dom.itemCard);
    dom.itemCard.innerHTML = "";
    dom.content.appendChild(itemCardView());
    dom.content.classList.add("three-columns");
    dom.itemCard.show();
    dom.itemCard.classList.add("visible");
    const categoryList = document.getElementById("item-card-categories")
    categoryList.blur();
  };

  //Event listener for new item name

  // console.log(typeof(newName))
  // console.log(typeof(createDomStructure.newItemName))
  dom.newItemName.addEventListener("change", () => {
    dom.addNewButton.focus();
  });

  //Event listener for 'new' button
  dom.addNewButton.addEventListener("click", () => {
    console.log(`Adding new item: ${dom.newItemName.value} (button click)`)
    // const newItemid = dom.newItemName.id
    console.log(dom.newItemName.id)
    saveNew(dom.newItemName.value);
    dom.itemContainer.innerHTML = "";

    populateDomItems(items);
    
    addCheckBoxListeners();
    const newItem = document.querySelector('.item-list-view');
    //  const newItem = document.getElementById(newItemId);
    createItemCard(newItem);
  });


  // const card = document.getElementById("item-card");
  populateDomItems(items);
   
   addCheckBoxListeners();
  
  // const updateButton = document.getElementById("update-button");
  // const {categoryItems, indexBar} = tasksIndex()
// console.log(`typeofcategoryitems: ${typeof(indexBar)}`)
// console.log(`typeofindexbar: ${typeof(indexBar)}`)
  //Event listener for project filter
  const projects = Array.from(document.querySelectorAll(".project-name"));

  console.log(`itemContainer: ${dom.itemContainer}`);
  projects.forEach((proj) => {
    const allItems = Array.from(document.querySelectorAll(".category"));
    
    proj.addEventListener("click", () => {
      const allTasks = document.querySelectorAll(".item-list-view");
      projects.forEach((projName) => projName.classList.remove("active"));
      proj.classList.add("active");
      if (proj.id === "all") {
        dom.itemContainer.innerHTML = "";
        dom.itemContainer.appendChild(dom.addNew);
        populateDomItems(items);
        addCheckBoxListeners();
        // allTasks.forEach((task) => itemContainer.prepend(task));
      } else {
        const projectItems = allItems.filter(
          (item) => item.textContent === proj.textContent
        );
        dom.itemContainer.innerHTML = "";
        dom.itemContainer.appendChild(dom.addNew);
        projectItems.forEach((projectItem) => {
          const categoryParent = projectItem.parentElement;
          const itemElement = categoryParent.parentElement;
          dom.itemContainer.prepend(itemElement);
          addCheckBoxListeners();
          // dom.content.removeChild(indexBar)
       
          // const {projectsIndex} = tasksIndex()
          // console.log(projectsIndex);
dom.itemContainer.prepend(dom.addNew);
dom.itemContainer.prepend(dom.siteHeader);

        });
      }
    });
  });
 
 return  dom.itemContainer;
};

export { tasksMain };
