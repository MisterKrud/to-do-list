import { items } from "./manageItems";
import { toggleComplete } from "./manageItems";
import { categories, filter, filteredCat} from "./manageCategories";
import { projectsList} from "./tasksHeader"

const tasksMain = () => {
  const content = document.getElementById("content");
  const itemContainer = document.createElement("div");
  itemContainer.setAttribute("id", "item-container");
  content.appendChild(itemContainer);

  console.log(`items in dom.js: ${items}`);


//Put itmes from array in DOM
  const populateDomItems = (arr) => {
  arr.forEach((item) => {
    const completeClass = () => (item.complete ? "complete" : "incomplete");

    console.log(`item.title: ${item.title}`);
    const itemListView = document.createElement("div");
        itemListView.className="item-list-view";
        itemListView.id =item.id;
    const title = document.createElement("p");
        title.className ="item-header";
        title.textContent = item.title;
    const itemContent = document.createElement("div");
        itemContent.className = "item-content";
    const description = document.createElement("p");
        description.textContent = item.description;
    const dueDate = document.createElement("p");
        dueDate.className = "due-date";
        dueDate.textContent = `  | ${item.dueDate}`;
    const priority = document.createElement("p");
        priority.textContent = item.priority;
    const notes = document.createElement("p");
        notes.className = "notes";
        notes.textContent = item.notes;
    const complete = document.createElement("p");
        complete.className = completeClass();
        complete.innerText = completeClass();
    const category = document.createElement("p");
        category.className = "category";
        category.textContent = item.category;
    
    
 
    const checkBox = document.createElement("input");

    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("class", "check-box");
    checkBox.classList.add(completeClass());

    itemContainer.appendChild(itemListView);
        itemListView.append(checkBox, title, itemContent);
            itemContent.append(category, dueDate);
  })
  highlightSelectedItem();
};


 


  //checkbox complete event listener
  const checkBoxes = document.querySelectorAll(".check-box");
 
  checkBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      const boxParentId = box.parentElement.id;    
      const idIndex = items.findIndex((item) => item.id === boxParentId);
      if (box.getAttribute("class") === "complete") {
        box.classList.add("incomplete");
        box.classList.remove("complete");
      } else {
        box.classList.add("complete");
        box.classList.remove("incomplete");
        const completedItemToShift = document.getElementById(boxParentId);
        completedItemToShift.classList.remove("selected");
        itemContainer.removeChild(completedItemToShift);
        itemContainer.appendChild(completedItemToShift);
        completedItemToShift.removeChild(completedItemToShift.querySelector("div"));   
      }     
      toggleComplete(items[idIndex]);
    });
  });



const projectsList = document.querySelector("ul");

   categories.forEach(category => {
        const project = document.createElement("li")
        project.className = "project-name";
        project.id = category;
        project.textContent = category;
        projectsList.appendChild(project);

       project.addEventListener("click", () =>{
           const projectNames = document.querySelectorAll(".project-name");
         
           projectNames.forEach(projName => projName.classList.remove("active"));
            project.classList.add("active");
            if(project.id === "All"){
                if(project.className != "project-name active") {
                populateDomItems(items)
                } else {return} 
            } else {
            displayCurrentProject();
            }
        })
    })


     //highlight selected item
     const highlightSelectedItem = () => {
    const itemListView = document.querySelectorAll(".item-list-view"); 
    console.table(`itemListView: ${itemListView.length}`)//this is a repeat - need to find a way to fix this
  itemListView.forEach((item) => {
    item.addEventListener("click", () => {
        console.log(`item clicked`)
      itemListView.forEach((listItem) => listItem.classList.remove("selected"));
      
      if (item.firstChild.className === "check-box complete"){
        return} else {
        item.classList.add("selected");
      }
    });
  })
};
//  const activeProject = document.querySelector(".active");
//   const activeProjectId = activeProject.getAttribute("id") 

const displayCurrentProject = () => {
//get the id from the active project

 const activeProject = document.querySelector(".active");
 const activeProjectId = activeProject.getAttribute("id") 
 console.log(`Just logging the string: ${activeProjectId}`)
filter(activeProjectId)
 itemContainer.innerHTML = ''
 console.log(filteredCat)
 populateDomItems(filteredCat)


}
  populateDomItems(items)
  return itemContainer;
};

// page()

export { tasksMain };
