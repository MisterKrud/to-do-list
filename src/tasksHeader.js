import { items } from "./manageItems";
import { categories, filter } from "./manageCategories";
import { tasksMain } from "./tasksMain";



const tasksHeader = () => {
    const content = document.getElementById("content")
    const header = document.querySelector("header")
    const projectsContainer = document.createElement("div")//.id("projects");
    const projectsList = document.createElement("ul")//.id("projects-list");
    // const viewAllItems = document.createElement("li");
    // viewAllItems.id = "view-all"
    // viewAllItems.className = "project-name";
    // viewAllItems.textContent = "View all"
    // projectsList.appendChild(viewAllItems)
    const mainScreen = document.getElementById("item-container")
 
    header.appendChild(projectsContainer)
    projectsContainer.appendChild(projectsList)

   
      

    


console.table(categories)

return projectsList;

}

export { tasksHeader }

