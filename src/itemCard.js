import { items, saveItem } from "./manageItems"
import { highlightSelectedItem } from "./tasksMain"
import {priority } from "./toDoClass"

const itemCardView = () => {
const content = document.getElementById("content");
const itemList = document.querySelectorAll("item-list-view");

const itemCard = document.getElementById("item-card")

const activeItem = document.querySelector(".selected")
const activeItemId = activeItem.getAttribute("id")
if(!activeItemId){
    return
}
else {
console.log(activeItemId)

const currentItemIndex = items.findIndex(item => item.id === activeItemId);

const currentItem = items[currentItemIndex]
console.log(`current item: ${currentItem}`)
const title = document.createElement("textarea");
        title.id ="item-card-header";
        title.name = "item-card-header"
        title.rows = 1;
        title.textContent = currentItem.title;

title.addEventListener("change", () => {
    currentItem.title = title.value
    saveItem(currentItem);
})




const itemContent = document.createElement("div");
        itemContent.className = "item-content";
        
const description = document.createElement("textarea");
description.id= currentItem.description;
description.setAttribute("name","description");
description.placeholder = "Description";
        description.textContent = currentItem.description;

    description.addEventListener("change", () => currentItem.description = description.value)
    saveItem(currentItem);    




const dueDate = document.createElement("p");
        dueDate.className = "item-card-date";
        dueDate.textContent = `Due: ${currentItem.dueDate}`;

         const calendarContainer = document.createElement("dialog")
            calendarContainer.id = "calendar-container"
            const datePicker = document.createElement("input");
            datePicker.setAttribute("type", "date");
            datePicker.id="date-picker";
            dueDate.appendChild(calendarContainer);
            calendarContainer.appendChild(datePicker);
            const dateButtonDiv = document.createElement("div");
            dateButtonDiv.id="date-button-div"
            const dateUpdateButton = document.createElement("button");
            calendarContainer.appendChild(dateButtonDiv);
            dateUpdateButton.textContent = 'Save'
            dateUpdateButton.className = 'date-button'
            const dateCancelButton = document.createElement("button");
            dateCancelButton.textContent = 'Cancel';
            
            dateCancelButton.className = 'date-button'
            dateButtonDiv.append(dateUpdateButton, dateCancelButton)


        dueDate.addEventListener("click", () =>{
            calendarContainer.showModal();
        })

        dateUpdateButton.addEventListener("click", () =>{
            // currentItem.dueDate = datePicker.value;
             
            calendarContainer.close();
        }
        
        

    )
    const priorityDiv = document.createElement("div");
    priorityDiv.id = "priority"
     

    //   const prioritySelector = (() =>{
    const priorityList = document.createElement("select")
    priorityList.id = "priority";
    priorityList.setAttribute("name", "priorities")
    priorityDiv.appendChild(priorityList)

    priority.forEach(item => {
      const priorityOption =  document.createElement("option");
      priorityOption.className = "priority-option";
      priorityOption.textContent = item;
      priorityOption.setAttribute("value", item.toLowerCase())
        priorityList.appendChild(priorityOption)
        
        if(item.toLowerCase() === currentItem.priority){
            priorityOption.selected = true;
         
        } else {
            console.log(`${item} doesn't match ${currentItem.priority}`)
            if(item.toLowerCase === 'medium'){
                priorityOption.selected = true
                 console.log(itemCard.querySelector("active"))
            }
        }
        console.log(priorityOption)
      
    })

      priorityList.addEventListener("change", () => {
            console.log('change')
            const newPriority = priorityList.value;

            currentItem.priority = newPriority;
           saveItem(currentItem)
            }
       


        )




// })


    const notes = document.createElement("textarea");
    
        notes.id = "notes";
        notes.setAttribute("name","notes")
        notes.setAttribute("cols", "100")
        notes.setAttribute("rows","1");
     
         notes.placeholder = 'Add notes'
         notes.textContent = currentItem.notes;
      
        notes.addEventListener("change", ()=> {
            currentItem.notes = notes.value
        console.log(`new note: ${notes.value}`)
        console.log(`new note: ${currentItem.notes}`)
        saveItem(currentItem)
        notes.textContent = currentItem.notes
        })
       
        




    const complete = document.createElement("p");
  

    const category = document.createElement("p");
        category.className = "item-card-category";
        category.textContent = currentItem.category;

    const updateButton = document.createElement("button");
    updateButton.id = "update-button";
    updateButton.textContent = "Update";

    const cancelButton = document.createElement("button");
    cancelButton.id = "cancel-button";
    cancelButton.textContent = "Close";

    const buttonDiv = document.createElement("div");
    buttonDiv.id = "button-container";


  
    itemCard.append(title, category, dueDate, description,  priorityDiv, notes, complete, buttonDiv);
    buttonDiv.append(updateButton, cancelButton);

  

    
    const closeDialog = () => {
         content.classList.remove("three-columns");
        itemCard.close();
       itemCard.classList.remove("visible")
    }
    
    cancelButton.addEventListener("click", () => {
       closeDialog()
});

updateButton.addEventListener("click",()=> {

    saveItem(currentItem)
    closeDialog()
} )

    
}




 
return itemCard
}

export { itemCardView}