import { items } from "./manageItems";
import { categories, filter, filteredCat } from "./manageCategories";
import { tasksMain } from "./tasksMain";

// const mainScreen = tasksMain();
// const displayCurrentProject = tasksMain;

// const addNew = document.querySelector("#add-new");
// console.log(document.querySelector("#add-new"))
// console.log(addNew)

// const removeItemListViewChildren = () =>{
    
   
//     const itemsInList = document.querySelectorAll(".item-list-view");
    
//     for (let i=0; i< itemsInList.length; i++) {
// if(itemsInList.length >1){
//         itemContainer.removeChild(itemsInList[i]);
//     }
// }}



// const displayCurrentProject = () => {
   
//     console.log('running displayCurrentProject')
// //get the id from the active project
// // const itemContainer = document.querySelector("item-container")
//  const activeProject = document.querySelector(".active");

//  const activeProjectId = activeProject.getAttribute("id") 
//   console.log(activeProject, activeProjectId)
// //  console.log(`Just logging the string: ${activeProjectId}`)
// filter(activeProject.textContent)
// console.log(activeProject.textContent)
//  console.table(filteredCat)
// //  mainScreen.populateDomItems(filteredCat)
// //  itemContainer.className = 


// }

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
                   allTasks.forEach(task => document.querySelector("#item-container").prepend(task))
               
           
              
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

