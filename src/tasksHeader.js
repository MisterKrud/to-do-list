import { items } from "./manageItems";
import { categories } from "./manageCategories";

const tasksHeader = () => {
    const header = document.querySelector("header")
    const projectsContainer = document.createElement("div")//.id("projects");
    const projectsList = document.createElement("ul")//.id("projects-list");

    header.appendChild(projectsContainer)
    projectsContainer.appendChild(projectsList)

    categories.forEach(category => {
        const project = document.createElement("li")//.className("project-name")
        project.textContent = category;
        projectsList.appendChild(project);
    })

console.table(categories)

return projectsList;

}

export { tasksHeader }

