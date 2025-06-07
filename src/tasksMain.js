import { items } from "./manageItems";

const tasksMain = () => {
const content = document.getElementById("content");
const itemContainer = document.createElement("div");
itemContainer.setAttribute("id", "item-container")
content.appendChild(itemContainer);



console.log(`items in dom.js: ${items}`)
    items.forEach(item => {
        const completeClass = () =>item.complete ? "complete" : "incomplete";
  
        console.log(`item.title: ${item.title}`)
        const itemListView = document.createElement("div");
        itemListView.setAttribute("class", "item-list-view");
        itemListView.setAttribute("id", item.id);
        const title = document.createElement("p")
        title.setAttribute("class", "item-header")
        title.textContent = item.title;
        const itemContent = document.createElement("div")
        itemContent.setAttribute("class", "item-content")
        const description = document.createElement("p")
        description.textContent = item.description;
        const dueDate = document.createElement("p")
        dueDate.setAttribute("class", "due-date")
        dueDate.textContent = `  | ${item.dueDate}`;
        const priority = document.createElement("p");
        priority.textContent = item.priority;
        const notes = document.createElement("p");
        notes.setAttribute("class", "notes")
        notes.textContent = item.notes;
        const complete = document.createElement("p");
        complete.setAttribute("class", completeClass());
        complete.innerText = (completeClass());
        const category = document.createElement("p");
        category.setAttribute("class", "category")
        category.textContent = item.category;
        itemContainer.appendChild(itemListView);

         const checkComplete = document.createElement("button");
         const checkDiv = document.createElement("div");
         checkDiv.setAttribute("class","checkbox-container")
    checkComplete.setAttribute("role", "checkbox");
    checkComplete.setAttribute("class", "check-complete")
    checkComplete.setAttribute("aria-checked", "false")
      
        // itemCard.appendChild(title)
        itemListView.append(checkComplete, title, itemContent );
       itemContent.append(category, dueDate)
    }
    )



    const itemListView = document.querySelectorAll(".item-list-view");
    itemListView.forEach(item =>{
        item.addEventListener("click", ()=>{
            itemListView.forEach(listItem => listItem.classList.remove("selected"))
            item.classList.add("selected")
        })
    })

return itemContainer;
}

// page()


export { tasksMain }