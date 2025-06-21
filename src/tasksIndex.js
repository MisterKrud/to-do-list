import { items } from "./manageItems";
import { categories, filter } from "./manageCategories";
import { tasksMain } from "./tasksMain";



const tasksIndex = () => {
    const content = document.getElementById("content");
    const indexBar = document.createElement("div");
    indexBar.id = "index-bar"
    const projectsContainer = document.createElement("div");
    const projectsHeader = document.createElement("h3");
    projectsHeader.textContent = "Projects";
    projectsHeader.id ="projects-header";
    const projectsList = document.createElement("ul");
    projectsList.id="projects-list";

  
    const mainScreen = document.getElementById("item-container")
    content.appendChild(indexBar)
   
    indexBar.append(projectsHeader, projectsList);
    

   
      

    


console.log('tasksIndex')

return indexBar;

}

export { tasksIndex }

