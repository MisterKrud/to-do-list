import { items } from "./manageItems";
import { toggleComplete, deleteToDoItem } from "./manageItems";
import { categories, filter, filteredCat} from "./manageCategories";
import { projectsList} from "./tasksIndex";
import { itemCardView } from "./itemCard";
import { createNew as saveNew } from "./newItem";



const tasksMain = () => {
  const content = document.getElementById("content");
  const itemContainer = document.createElement("div");
  itemContainer.setAttribute("id", "item-container");
  content.appendChild(itemContainer);




  const addNew = document.createElement("div");
  addNew.id="add-new";
    const newItemName = document.createElement("input");
        newItemName.setAttribute("type","text");
        newItemName.id= "new-item-name";
        newItemName.placeholder="Add task"
    const addNewButton = document.createElement("button");
        addNewButton.id = "add-new-button";
        addNewButton.textContent = "+";
    
    const newProject = document.createElement("input");
        newProject.setAttribute("type", "text");
         newProject.id = "new-project";  
      const newTask = newItemName.value;

    
 
const itemCard = document.createElement("dialog")
itemCard.id="item-card";
content.appendChild(itemCard)
  



//Put itmes from array in DOM
  const populateDomItems = (arr) => {
     itemContainer.innerHTML =''
  arr.forEach((item) => {
   
    const completeClass = () => (item.complete ? "complete" : "incomplete");

    // console.log(`item.title: ${item.title}`);
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


    
 //checkbox element
    const checkBox = document.createElement("input");

    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("class", "check-box");
    checkBox.classList.add(completeClass());

    itemContainer.prepend(itemListView);
        itemListView.append(checkBox, title, itemContent);
            itemContent.append(category, dueDate);
newItemName.value = '';
 newItemName.placeholder='Add task'
             addNew.append(addNewButton, newItemName);
 itemContainer.appendChild(addNew);
            return itemListView;
  
  
  
  
  
          })

         
  highlightSelectedItem();
//   focussedToDoItem();
//   console.log(focussedToDoItem())

    
};

     
 

 

 


 



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
   
  itemListView.forEach((item) => {
    item.addEventListener("click", () => {
        console.log(`item clicked`)
      itemListView.forEach((listItem) => listItem.classList.remove("selected"));
      
      if (item.firstChild.className === "check-box complete"){
        return} else {

          createItemCard(item)
    //     item.classList.add("selected");
    //  itemCard.innerHTML = '';
    //     content.appendChild(itemCardView());
    //     content.classList.add("three-columns");
       
    //         itemCard.show()
    //         itemCard.classList.add("visible")
            
      }
    });
  })
};

const createItemCard = (selectedItem) => {
   selectedItem.classList.add("selected");
     itemCard.innerHTML = '';
        content.appendChild(itemCardView());
        content.classList.add("three-columns");
       
            itemCard.show()
            itemCard.classList.add("visible")
}
//  const activeProject = document.querySelector(".active");
//   const activeProjectId = activeProject.getAttribute("id") 

const displayCurrentProject = () => {
//get the id from the active project

 const activeProject = document.querySelector(".active");
 const activeProjectId = activeProject.getAttribute("id") 
//  console.log(`Just logging the string: ${activeProjectId}`)
filter(activeProjectId)
 itemContainer.innerHTML = ''
//  console.log(filteredCat)
 populateDomItems(filteredCat)
//  itemContainer.className = 


}


addNewButton.addEventListener("click",() => {
  saveNew(newItemName.value);
  itemContainer.innerHTML='';
  populateDomItems(items);
  const newItem = document.querySelector(".item-list-view")

  
  createItemCard(newItem)
 

  
}

)


const card = document.getElementById("item-card")
// card.addEventListener("change", populateDomItems(items))

  

  //checkbox complete event listener
 populateDomItems(items)
  

//FIX THIS IT IS BROKEN
   const checkBoxes = document.querySelectorAll(".check-box");

 
  checkBoxes.forEach((box) => {
    
 
    box.addEventListener("click", () => {
      console.log(`box clicked`)
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
        const itemDeleteButton = document.createElement("button")
        itemDeleteButton.id = `${boxParentId}-delete`
        itemDeleteButton.className = 'item-delete-button'
        itemDeleteButton.innerText = "x";
        const completedItemContent = completedItemToShift.querySelector(".item-content")
        completedItemToShift.removeChild(completedItemContent)
        completedItemToShift.appendChild(itemDeleteButton);
        completedItemToShift.classList.add("completed-item")


        // completedItemToShift.removeChild(completedItemToShift.querySelector("div"));   
      }     
      toggleComplete(items[idIndex]);
    const itemDeleteButton = document.getElementById(`${boxParentId}-delete`)
     itemDeleteButton.addEventListener("click", () => {
          
          console.table(items)
          const itemPendingDelete = itemDeleteButton.parentElement
          itemContainer.removeChild(itemPendingDelete)
          deleteToDoItem(items[idIndex])
          console.table(items)
      
          
        })
    });
  });

  const updateButton = document.getElementById("update-button");
  // updateButton.addEventListener("click", () =>{
  //   setTimeout(()=> {
  //      populateDomItems(items)}, 1000);
  //  ;
  // })

  return  itemContainer;
};

// page()
console.log('tasksMain')
export { tasksMain };