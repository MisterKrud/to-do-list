import { items } from "./manageItems";

const page = () => {
const content = document.getElementById("content");
const itemContainer = document.createElement("div");
itemContainer.setAttribute("id", "item-container")
content.appendChild(itemContainer);



console.log(`items in dom.js: ${items}`)
    items.forEach(item => {
        console.log(`item.title: ${item.title}`)
        const itemCard = document.createElement("div");
        itemCard.setAttribute("class", "item-card");
        itemCard.setAttribute("id", item.id);
        const title = document.createElement("h4")
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
        priority.textContent = item.priority;
        const complete = document.createElement("p");
        complete.setAttribute("class", () => item.complete ? "complete" : "incomplete");
        const category = document.createElement("p");
        category.textContent = item.category;
        itemContainer.appendChild(itemCard);
        // itemCard.appendChild(title)
        itemCard.append(title,itemContent)
        itemContent.append(description,dueDate,notes,priority,complete,category)
    }
    )

return itemContainer;
}

// page()


export { page }