import { items } from "./manageItems";
import { categories, filter, filteredCat } from "./manageCategories";
import { tasksMain } from "./tasksMain";

const populateDomItems = tasksMain;
// const displayCurrentProject = tasksMain;



const removeItemListViewChildren = () =>{
    const itemContainer = document.getElementById("item-container");
   
    const itemsInList = document.querySelectorAll(".item-list-view");
    
    for (let i=0; i< itemsInList.length; i++) {
if(itemsInList.length >1){
        itemContainer.removeChild(itemsInList[i]);
    }
}}



const displayCurrentProject = () => {
   
    console.log('running displayCurrentProject')
//get the id from the active project
// const itemContainer = document.querySelector("item-container")
 const activeProject = document.querySelector(".active");

 const activeProjectId = activeProject.getAttribute("id") 
  console.log(activeProject, activeProjectId)
//  console.log(`Just logging the string: ${activeProjectId}`)
filter(activeProject.textContent)
console.log(activeProject.textContent)
 console.table(filteredCat)
 populateDomItems(filteredCat)
//  itemContainer.className = 


}

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
    

   categories.forEach(category => {
        const project = document.createElement("li")
        project.className = "project-name";
        project.id = category.toLowerCase();
        project.textContent = category;
        projectsList.appendChild(project);

       project.addEventListener("click", () =>{
           const projectNames = document.querySelectorAll(".project-name");
         
           projectNames.forEach(projName => projName.classList.remove("active"));
            project.classList.add("active");
            if(project.id === "all"){
                if(project.className != "project-name active") {
                   
               
           
                populateDomItems(items)
                } 
         
               
         
        
            } else {
               displayCurrentProject()
                console.log(filteredCat)
            }
        })
    })

   
   
    

   
      

    


console.log('tasksIndex')

return indexBar;

}

export { tasksIndex }

