import { items } from "./manageItems"
import { highlightSelectedItem } from "./tasksMain"

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
const title = document.createElement("h3");
        title.className ="item-header";
        title.textContent = currentItem.title;
        console.log()
currentItem.title

const itemContent = document.createElement("div");
        itemContent.className = "item-content";
        
const description = document.createElement("p");
        description.textContent = currentItem.description;

const dueDate = document.createElement("p");
        dueDate.className = "due-date";
        dueDate.textContent = currentItem.dueDate;
    const priority = document.createElement("p");
        priority.textContent = currentItem.priority;
    const notes = document.createElement("p");
        notes.className = "notes";
        notes.textContent = currentItem.notes;
    const complete = document.createElement("p");
    //     complete.className = completeClass();
    //     complete.innerText = completeClass();
    const category = document.createElement("p");
        category.className = "category";
        category.textContent = currentItem.category;

    const updateButton = document.createElement("button");
    updateButton.id = "update-button";
    updateButton.textContent = "Update";

    const cancelButton = document.createElement("button");
    cancelButton.id = "cancel-button";
    cancelButton.textContent = "Close";

    const buttonDiv = document.createElement("div");
    buttonDiv.id = "button-container";






    // const completeClass = () => (currentItem.complete ? "complete" : "incomplete");

  
    itemCard.append(title, category, description, dueDate, priority, notes, complete, buttonDiv);
    buttonDiv.append(updateButton, cancelButton);
    
    
    cancelButton.addEventListener("click", () => {
        content.classList.remove("three-columns");
        itemCard.close();
});

    
}
 
    // const checkBox = document.createElement("input");

    // checkBox.setAttribute("type", "checkbox");
    // checkBox.setAttribute("class", "check-box");
    // checkBox.classList.add(completeClass());

    // itemContainer.appendChild(itemListView);
    //     itemListView.append(checkBox, title, itemContent);
    //         itemContent.append(category, dueDate);



// itemCard.innerHTML = "dummy text"
// content.appendChild(itemCard);






// const itemId = () => {
//     const selectedItem = document.querySelector(".selected");
//     if(!selectedItem){
//         return
//     }
//         else {
//             return selectedItem.getAttribute("id");
//         }
//     }


// export const focussedToDoItem = () => {
//  if(itemId() === undefined) {
//  console.log('no item selected')   
//  } else {
//  const id = itemId();
//  id.addEventListener("click", () =>{
//  const idIndex = items.findIndex((item) => item.id === id);
// console.table(items[idIndex])


//  })
//  }

// }
return itemCard
}

export { itemCardView}