import { categories } from "./manageCategories";

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
 
    content.appendChild(indexBar)
 indexBar.append(projectsHeader, projectsList);
 console.log(categories)
   categories.forEach(category => {
        const project = document.createElement("li")
        project.className = "project-name";
        project.id = category.toLowerCase();
        project.textContent = category;
        projectsList.appendChild(project);
    })
  const projects =  Array.from(document.querySelectorAll(".project-name"))
    projects.forEach(proj => {    
 proj.addEventListener("click", () =>{
           projects.forEach(projName => projName.classList.remove("active"));
            proj.classList.add("active");
            if(proj.id === "all"){
                if(proj.className != "project-name active") {
                    document.querySelector("#item-container").innerHTML=''
                   const allTasks = document.querySelectorAll(".item-list-view")
                   console.table(allTasks)
                   const allCurrentTasks = allTasks.filter(() => allTasks.className != 'item-list-view completed-item')
                   console.table(allCurrentTasks)
                   allCurrentTasks.forEach(task => document.querySelector("#item-container").prepend(task))
                } 
            } else {
            const allItems = Array.from(document.querySelectorAll(".category"))
           const projectItems = allItems.filter((item)=> item.textContent === proj.textContent)
               document.querySelector("#item-container").innerHTML=''
            projectItems.forEach(projectItem => { 
                const categoryParent = projectItem.parentElement;
                const itemElement = categoryParent.parentElement;
                document.querySelector("#item-container").prepend(itemElement)
            })
            }
        })
    })
console.log('tasksIndex')
return indexBar;
}
export { tasksIndex }
