import { items } from "./manageItems";
import { categories, filter } from "./manageCategories";



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

    categories.forEach(category => {
        const project = document.createElement("li")
        project.className = "project-name";
        project.id = category.toLowerCase();
        project.textContent = category;
        projectsList.appendChild(project);

       project.addEventListener("click", () =>{
           const projectNames = document.querySelectorAll(".project-name");
           console.table(projectNames)
           projectNames.forEach(projName => projName.classList.remove("active"));
            project.classList.add("active");
             const activeProject = document.querySelector(".active");
             console.log('active project')
      console.table(activeProject.getAttribute("id"));
        })
    })




      

    


console.table(categories)

return projectsList;

}

export { tasksHeader }

