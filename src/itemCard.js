import { items, saveItem } from "./manageItems";
// import {tasksMain } from "./tasksMain"
import { priority } from "./toDoClass";
import { lightFormat } from "date-fns";
import { categories, setNewCategory } from "./manageCategories";
import { tasksIndex } from "./tasksIndex";



const itemCardView = () => {
  const content = document.getElementById("content");
  const itemList = document.querySelectorAll("item-list-view");
  const itemCard = document.getElementById("item-card");
  const activeItem = document.querySelector(".selected");
  const activeItemId = activeItem.getAttribute("id");
//   const {indexBar, categoryItems} = tasksIndex()
  if (!activeItemId) {
    return
  } else {

   

 


    


    //Get selected task for card
    const currentItemIndex = items.findIndex(
      (item) => item.id === activeItemId
    );
    const currentItem = items[currentItemIndex];


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
    description.id = "description";
    description.rows = 1
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
    const dueDate = document.createElement("div");
    dueDate.className = "item-card-date";
    dueDate.textContent = `Due: ${currentItem.dueDate}`;

    //Change due date through calendar picker (dialog)
    const calendarContainer = document.createElement("dialog");
    calendarContainer.id = "calendar-container";
    const datePicker = document.createElement("input");
    datePicker.setAttribute("type", "date");
    datePicker.id = "date-picker";

    const dateButtonDiv = document.createElement("div");
    dateButtonDiv.id = "date-button-div";
    const dateUpdateButton = document.createElement("button");

    dateUpdateButton.textContent = "Save";
    dateUpdateButton.className = "date-button";
    const dateCancelButton = document.createElement("button");
    dateCancelButton.textContent = "Cancel";

    dateCancelButton.className = "date-button";
 

    dueDate.addEventListener("click", () => {
        content.appendChild(calendarContainer);
    calendarContainer.appendChild(datePicker);
    calendarContainer.appendChild(dateButtonDiv);
     dateButtonDiv.append(dateUpdateButton, dateCancelButton);
      calendarContainer.showModal();
    });

    dateUpdateButton.addEventListener("click", () => {
      currentItem.dueDate = lightFormat(datePicker.value, "d/M/yy");
      activeItem.querySelector(".due-date").textContent = ` | ${currentItem.dueDate}`
      saveItem(currentItem)  
      dueDate.textContent = `Due: ${currentItem.dueDate}`;
      calendarContainer.close();
      content.removeChild(calendarContainer)
      
    });

    dateCancelButton.addEventListener("click", () => {
        calendarContainer.close()
          content.removeChild(calendarContainer)
      
      
    })
// }

//set priority
    const priorityDiv = document.createElement("div");
    priorityDiv.id = "priority-container";
    const priorityLabelText = document.createElement("p");
    priorityLabelText.textContent = "Priority: "
    priorityDiv.appendChild(priorityLabelText);

    //   const prioritySelector = (() =>{
    const priorityList = document.createElement("div");
    const prioritySelect = document.createElement("select")
    const selectButton = document.createElement("button")
    const selectedContent = document.createElement("selectedcontent")
    selectButton.inert = true;
    console.log(`inert? ${selectButton.inert}`)
    prioritySelect.className = 'priority-select'
    console.log(`currentItem.priority: ${currentItem.priority}`)
    const currentItemPriority = currentItem.priority.toLowerCase()
    priorityList.id = `priority-${currentItemPriority}`;
    priorityList.class ="priority-list";
    priorityList.setAttribute("name", "priorities");
    priorityDiv.appendChild(priorityList);
    priorityList.appendChild(prioritySelect);
    prioritySelect.appendChild(selectButton);
    selectButton.appendChild(selectedContent);


    priority.forEach((item) => {
      const priorityOption = document.createElement("option");
      priorityOption.className = "priority-option";
      priorityOption.textContent = item;
      priorityOption.setAttribute("value", item.toLowerCase());
      priorityOption.id = item.toLowerCase()
      prioritySelect.appendChild(priorityOption);

      if (item.toLowerCase() === currentItemPriority) {
        priorityOption.selected = true;
        
      } else {
        
        if (item.toLowerCase() === "medium") {
          priorityOption.selected = true;
       
        }
      }
     
      selectedContent.setAttribute("id",currentItemPriority)
      prioritySelect.id =  currentItemPriority
      priorityList.id = `priority-${currentItemPriority}`;
    });


    prioritySelect.addEventListener("change", () => {
      console.log("change");
      const newPriority = prioritySelect.value;
console.log(`newPriority: ${newPriority}/${prioritySelect.value}`)
      currentItem.priority = newPriority.toLowerCase();
      console.log(currentItem.priority)
       const activeItemPriority = activeItem.querySelector(".priority")
       const priorityText = activeItemPriority.textContent
       console.log(`priorityText: ${priorityText}`)
       
     selectedContent.setAttribute("id",newPriority.toLowerCase())
     prioritySelect.id =  newPriority.toLowerCase()
     priorityList.id = `priority-${newPriority.toLowerCase()}`;
     activeItem.className = `item-list-view ${newPriority.toLowerCase()}`
     activeItemPriority.textContent = newPriority;
      saveItem(currentItem);
    });

    //Create container for date and priority
    const dateAndPriorityContainer = document.createElement("div")
    dateAndPriorityContainer.id = "date-priority-container"


  
//Create notes
    const notes = document.createElement("textarea");

    notes.id = "notes";
    notes.setAttribute("name", "notes");
    notes.setAttribute("cols", "100");
    notes.setAttribute("rows", "8");

    notes.placeholder = "Add notes";
    notes.textContent = currentItem.notes;

    notes.addEventListener("change", () => {
      currentItem.notes = notes.value;
    
      saveItem(currentItem);
      notes.textContent = currentItem.notes;
    });

    //Task complete - unfinshed
    const complete = document.createElement("p");

    //Task project category
    const projectsContainer = document.createElement("div");
    projectsContainer.id = "projects-container";
    const projectLabelText = document.createElement("p");
    projectLabelText.textContent ="Project: "
    projectsContainer.appendChild(projectLabelText)
    const category = document.createElement("select");
    category.id= "item-card-categories";
    projectsContainer.appendChild(category);
    category.blur();
    category.setAttribute("tabindex","-1")
   
  
  
    
  category.setAttribute("name","item-card-categories");
  const currentCategory = activeItem.querySelector(".category")
  currentCategory.setAttribute("tabindex","-1")
   const projectList = document.getElementById("projects-list");
    const indexBar = document.getElementById("index-bar");
    const projectsHeader = document.getElementById("projects-header");

const saveTaskChanges = (item) => {
    saveItem(item);
    const newProject = document.createElement("li")
    newProject.className = "project-name";
    newProject.id = item.category.toLowerCase()
    newProject.textContent = item.category
    
    projectList.appendChild(newProject);
    location.reload()


}
    
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

const activeItemCategory =    activeItem.querySelector(".category")
//change project category
category.addEventListener("change", () => {
    const changedCategory = category.options[category.selectedIndex].text
currentItem.category = changedCategory
console.log(category.options[category.selectedIndex].text)
activeItemCategory.textContent = changedCategory;
activeItemCategory.className = `category ${changedCategory.toLowerCase()}`
category.selected = true;
saveItem(currentItem);


})

   //new project category 
const newProjectCategory = () =>{
  
    const createNewCategory = document.createElement("textArea");
    createNewCategory.id="new-category";
    createNewCategory.placeholder ='+ New project'
  projectsContainer.appendChild(createNewCategory);

  //event listener for changing category
  createNewCategory.addEventListener("change", () =>{
    const newProjectRaw = createNewCategory.value
    const newProject = newProjectRaw.replace(/\s/g, '_');
    if(categories.includes(newProject)){
        console.log('category already exists - saving item in project with this name')
        saveItem(currentItem)
    } else {
    setNewCategory(newProject)
    const newOption = document.createElement("option")
    newOption.className = "category-option";
    newOption.id=`category-${newProject}`
    newOption.textContent = newProject;
    currentItem.category = newProject;
    const activeItemCategory = activeItem.querySelector(".category")
    activeItemCategory.className = `category ${newProject.toLowerCase()}`
   
    
    createNewCategory.value = null;
   category.appendChild(newOption);
    newOption.selected = true;
     saveTaskChanges(currentItem);
   
    
   
  
    }
  
   
    activeItemCategory.textContent = newProject;
    console.log(createNewCategory.value)
    console.log(categories)
   
    console.table(items);
  })
  return {createNewCategory}
}

newProjectCategory();
    
//update and cancel buttons for card view
    const updateButton = document.createElement("button");
    updateButton.id = "update-button";
    updateButton.textContent = "Update";

    const cancelButton = document.createElement("button");
    cancelButton.id = "cancel-button";
    cancelButton.textContent = "Close";

    const buttonDiv = document.createElement("div");
    buttonDiv.id = "button-container";

    //Put card in dom
    itemCard.append(
        projectsContainer,
      title,
   description,
      
      
      
      
      dateAndPriorityContainer,
      notes,
      complete,
      buttonDiv
    );
    dateAndPriorityContainer.append(dueDate,priorityDiv,)
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
