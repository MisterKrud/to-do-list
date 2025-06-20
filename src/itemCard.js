import { items, saveItem } from "./manageItems";
// import {tasksMain } from "./tasksMain"
import { priority } from "./toDoClass";
import { lightFormat } from "date-fns";
import { categories, setNewCategory } from "./manageCategories";

// const populateDomItems = tasksMain


const itemCardView = () => {
  const content = document.getElementById("content");
  const itemList = document.querySelectorAll("item-list-view");
  const itemCard = document.getElementById("item-card");
  const activeItem = document.querySelector(".selected");
  const activeItemId = activeItem.getAttribute("id");
  if (!activeItemId) {
    return;
  } else {




    
    console.log(activeItemId);

    //Get selected task for card
    const currentItemIndex = items.findIndex(
      (item) => item.id === activeItemId
    );
    const currentItem = items[currentItemIndex];
    console.log(`current item: ${currentItem}`);

//Task title
    const title = document.createElement("textarea");
    title.id = "item-card-header";
    title.name = "item-card-header";
    title.rows = 1;
    title.textContent = currentItem.title;
        //Change title in cards
    title.addEventListener("change", () => {
        const newTitle = title.value 
      currentItem.title = newTitle;
      activeItem.querySelector(".item-header").textContent = newTitle;
      saveItem(currentItem);
      
    });

//Task content
    const itemContent = document.createElement("textArea");
    itemContent.id = "item-content";
    itemContent.rows = 1;

    itemContent.addEventListener("change", () => {
        const newContent = itemContent.value;
       saveItem(currentItem);
    })


//Task description
    const description = document.createElement("textarea");
    description.id = currentItem.description;
    description.setAttribute("name", "description");
    description.placeholder = "Description";
    description.textContent = currentItem.description;
    //Change description in title card
    description.addEventListener(
      "change",
      () => (currentItem.description = description.value)
    );
    saveItem(currentItem);

//Task due-date
    const dueDate = document.createElement("p");
    dueDate.className = "item-card-date";
    dueDate.textContent = `Due: ${currentItem.dueDate}`;

    //Change due date through calendar picker (dialog)
    const calendarContainer = document.createElement("dialog");
    calendarContainer.id = "calendar-container";
    const datePicker = document.createElement("input");
    datePicker.setAttribute("type", "date");
    datePicker.id = "date-picker";
    if(content.contains(document.getElementById("calendar-container"))){
        console.log('calendarContainer already in dom')
    } else {
    content.appendChild(calendarContainer);
    calendarContainer.appendChild(datePicker);
    const dateButtonDiv = document.createElement("div");
    dateButtonDiv.id = "date-button-div";
    const dateUpdateButton = document.createElement("button");
    calendarContainer.appendChild(dateButtonDiv);
    dateUpdateButton.textContent = "Save";
    dateUpdateButton.className = "date-button";
    const dateCancelButton = document.createElement("button");
    dateCancelButton.textContent = "Cancel";

    dateCancelButton.className = "date-button";
    dateButtonDiv.append(dateUpdateButton, dateCancelButton);

    dueDate.addEventListener("click", () => {
       
      calendarContainer.showModal();
    });

    dateUpdateButton.addEventListener("click", () => {
      currentItem.dueDate = lightFormat(datePicker.value, "d/M/yy");
      activeItem.querySelector(".due-date").textContent = ` | ${currentItem.dueDate}`
      saveItem(currentItem)  
      dueDate.textContent = `Due: ${currentItem.dueDate}`;
      calendarContainer.close();
      
    });

    dateCancelButton.addEventListener("click", () => {
        calendarContainer.close()
        
      
      
    })
}

//set priority
    const priorityDiv = document.createElement("div");
    priorityDiv.id = "priority";

    //   const prioritySelector = (() =>{
    const priorityList = document.createElement("select");
    priorityList.id = "priority";
    priorityList.setAttribute("name", "priorities");
    priorityDiv.appendChild(priorityList);

    priority.forEach((item) => {
      const priorityOption = document.createElement("option");
      priorityOption.className = "priority-option";
      priorityOption.textContent = item;
      priorityOption.setAttribute("value", item.toLowerCase());
      priorityList.appendChild(priorityOption);

      if (item.toLowerCase() === currentItem.priority) {
        priorityOption.selected = true;
      } else {
        
        if (item.toLowerCase === "medium") {
          priorityOption.selected = true;
       
        }
      }
     
    });

    priorityList.addEventListener("change", () => {
      console.log("change");
      const newPriority = priorityList.value;

      currentItem.priority = newPriority;
      saveItem(currentItem);
    });

  
//Create notes
    const notes = document.createElement("textarea");

    notes.id = "notes";
    notes.setAttribute("name", "notes");
    notes.setAttribute("cols", "100");
    notes.setAttribute("rows", "1");

    notes.placeholder = "Add notes";
    notes.textContent = currentItem.notes;

    notes.addEventListener("change", () => {
      currentItem.notes = notes.value;
      console.log(`new note: ${notes.value}`);
      console.log(`new note: ${currentItem.notes}`);
      saveItem(currentItem);
      notes.textContent = currentItem.notes;
    });

    const complete = document.createElement("p");

    //project category
    const projectsContainer = document.createElement("div");
    projectsContainer.id = "projects-container";
    const projectLabelText = document.createElement("p");
    projectLabelText.textContent ="Project: "
    projectsContainer.appendChild(projectLabelText)
    const category = document.createElement("select");
    category.id= "item-card-categories";
    projectsContainer.appendChild(category);
   
  
  
    
  category.setAttribute("name","item-card-categories");
  const currentCategory = activeItem.querySelector(".category")
  console.log(currentCategory.textContent)
    
   for (let i = 1; i<categories.length; i++){
        const catOption =  document.createElement("option");
        catOption.className = "category-option";
        catOption.id = `category-${categories[i]}`;
        catOption.setAttribute("value", categories[i].toLowerCase());
        catOption.textContent = categories[i]
        category.appendChild(catOption);
        if (categories[i] === currentCategory.textContent) {
            
          
           
          
            catOption.selected = true;
         
        } else {
            catOption.selected = false;
        }
   }

   //new category

   
    const createNewCategory = document.createElement("textArea");
    createNewCategory.id="new-category";
    createNewCategory.placeholder ='+ New project'
  projectsContainer.appendChild(createNewCategory);
  createNewCategory.addEventListener("change", () =>{
    const newProject = createNewCategory.value
    setNewCategory(newProject)
    const newOption = document.createElement("option")
    newOption.className = "category-option";
    newOption.id=`category-${newProject}`
    newOption.textContent = newProject;
    currentItem.category = newProject;
   category.appendChild(newOption);
    newOption.selected = true;
    createNewCategory.value = null;
    saveItem(currentItem);
    // populateDomItems(items);
    console.log(createNewCategory.value)
    console.log(categories)
    console.table(items);
  })
    

    const updateButton = document.createElement("button");
    updateButton.id = "update-button";
    updateButton.textContent = "Update";

    const cancelButton = document.createElement("button");
    cancelButton.id = "cancel-button";
    cancelButton.textContent = "Close";

    const buttonDiv = document.createElement("div");
    buttonDiv.id = "button-container";

    itemCard.append(
      title,
   
      projectsContainer,
      dueDate,
      description,
      priorityDiv,
      notes,
      complete,
      buttonDiv
    );
    buttonDiv.append(updateButton, cancelButton);

    const closeDialog = () => {
      content.classList.remove("three-columns");
      itemCard.close();
      itemCard.classList.remove("visible");
    };

    cancelButton.addEventListener("click", () => {
      closeDialog();
    });

    updateButton.addEventListener("click", () => {
      saveItem(currentItem);
      closeDialog();
    });
  }

  return itemCard;
};

export { itemCardView };
