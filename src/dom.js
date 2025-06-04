import { items } from "./manageItems";

const page = () => {
const content = document.getElementById("content");
const itemContainer = document.createElement("div")
content.appendChild(itemContainer);
itemContainer.innerText = 'InnerText test'


console.log(`items in dom.js: ${items}`)
    items.forEach(item => {
        console.log(`item.title: ${item.title}`)
        const itemCard = document.createElement("div");
        itemCard.setAttribute("class", "item-card");
        itemCard.setAttribute("id", item.id);
        const title = document.createElement("div");
        title.textContent = item.title;
        const description = document.createElement("div")
        description.textContent = item.description;
        const dueDate = document.createElement("div")
        dueDate.textContent = item.dueDate;
        const priority = document.createElement("div");
        priority.textContent = item.priority;
        const notes = document.createElement("div");
        priority.textContent = item.priority;
        const complete = document.createElement("div");
        complete.setAttribute("class", () => item.complete ? "complete" : "incomplete");
        const category = document.createElement("div");
        category.textContent = item.category;
        itemContainer.appendChild(itemCard);
        // itemCard.appendChild(title)
        itemCard.append(title,description,dueDate,notes,priority,complete,category)
    }
    )

return itemContainer;
}

// page()


export { page }