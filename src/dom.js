import { items } from "./manageItems";

const page = () => {
const content = document.getElementById("content");
const itemContainer = document.createElement("div");
itemContainer.setAttribute("id", "item-container")
content.appendChild(itemContainer);



console.log(`items in dom.js: ${items}`)
    items.forEach(item => {
        const completeClass = () =>item.complete ? "complete" : "incomplete";
        console.log(`item.title: ${item.title}`)
        const itemCard = document.createElement("div");
        itemCard.setAttribute("class", "item-card");
        itemCard.setAttribute("id", item.id);
        const title = document.createElement("h4")
        title.setAttribute("class", "item-header")
        title.textContent = item.title;
        const itemContent = document.createElement("div")
        itemContent.setAttribute("class", "item-content")
        const description = document.createElement("p")
        description.textContent = item.description;
        const dueDate = document.createElement("p")
        dueDate.textContent = item.dueDate;
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
        itemContainer.appendChild(itemCard);
        // itemCard.appendChild(title)
        itemCard.append(category, title,itemContent)
        itemContent.append(description,dueDate,notes,priority,complete,)
    }
    )

return itemContainer;
}

// page()


export { page }