import { items } from "./manageItems";
import { toggleComplete, deleteToDoItem } from "./manageItems";
import { categories, filter, filteredCat} from "./manageCategories";
import { tasksIndex } from "./tasksIndex";
import { itemCardView } from "./itemCard";
import { createNew as saveNew } from "./newItem";




const tasksMain = () => {
  const content = document.getElementById("content");
  const itemContainer = document.createElement("div");
  itemContainer.setAttribute("id", "item-container");

  const containerInDom = document.querySelector("#item-container") != null
  if(!containerInDom){
  content.appendChild(itemContainer);
  }



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
const cardInDom = document.querySelector("#item-card") != null;
if (!cardInDom) {
content.appendChild(itemCard)
}
  



//Put itmes from array in DOM
  const populateDomItems = (arr) => {
    console.log(`running populateDomItems for ${arr}`)
   
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
      const categoryName = item.category
        category.textContent = categoryName
        category.classList.add(categoryName.toLowerCase())
        console.log(`Category: ${category.className}`);

        
        


 //checkbox element
    const checkBox = document.createElement("input");

    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("class", "check-box");
    checkBox.classList.add(completeClass());
//  const categoryListView = (project) => document.querySelectorAll(project)
// const taskListView = categoryListView(project)

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

     


 

 


//Populate projects in index-bar
// const projectsList = document.querySelector("ul");

//    categories.forEach(category => {
//         const project = document.createElement("li")
//         project.className = "project-name";
//         project.id = category;
//         project.textContent = category;
//         projectsList.appendChild(project);

//        project.addEventListener("click", () =>{
//            const projectNames = document.querySelectorAll(".project-name");
         
//            projectNames.forEach(projName => projName.classList.remove("active"));
//             project.classList.add("active");
//             if(project.id === "All"){
//                 if(project.className != "project-name active") {
//                 populateDomItems(items)
//                 } else {return} 
//             } else {
//             displayCurrentProject();
//             }
//         })
//     })


     //highlight selected item
     
   const highlightSelectedItem = () => {
    console.log('highlightSelected()')
    const itemListView = document.querySelectorAll(".item-list-view"); 
   
  itemListView.forEach((item) => {
    item.addEventListener("click", () => {
        console.log(`item clicked`)
      itemListView.forEach((listItem) => listItem.classList.remove("selected"));
      
      if (item.firstChild.className === "check-box complete"){
        return} 

          createItemCard(item)
    //     item.classList.add("selected");
    //  itemCard.innerHTML = '';
    //     content.appendChild(itemCardView());
    //     content.classList.add("three-columns");
       
    //         itemCard.show()
    //         itemCard.classList.add("visible")
            
     
    });
  })
};

const createItemCard = (selectedItem) => {
 content.removeChild(itemCard)
   selectedItem.classList.add("selected");
   content.appendChild(itemCard)
     itemCard.innerHTML = '';
     
        content.appendChild(itemCardView());
        content.classList.add("three-columns");
       
            itemCard.show()
            itemCard.classList.add("visible")

}
//  const activeProject = document.querySelector(".active");
//   const activeProjectId = activeProject.getAttribute("id") 

// const displayCurrentProject = () => {
// //get the id from the active project

//  const activeProject = document.querySelector(".active");
//  console.log(activeProject)
//  const activeProjectId = activeProject.getAttribute("id") 
//   console.log(activeProject, activeProjectId)
// //  console.log(`Just logging the string: ${activeProjectId}`)
// filter(activeProjectId)
//  itemContainer.innerHTML = ''
// //  console.log(filteredCat)
//  populateDomItems(filteredCat)
// //  itemContainer.className = 


// }
newItemName.addEventListener("change", ()=>{
  addNewButton.focus();
})

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
  

   const checkBoxes = document.querySelectorAll(".check-box");

 
  checkBoxes.forEach((box) => {
    
 
    box.addEventListener("click", () => {
      console.log(`box clicked`)
      const boxParentId = box.parentElement.id;    
      const idIndex = items.findIndex((item) => item.id === boxParentId);
      
      if (box.getAttribute("class") === "check-box complete") {
        const itemToRestore = document.getElementById(boxParentId)
         itemToRestore.removeChild(itemToRestore.querySelector("button"))
        itemToRestore.classList.remove("completed-item");
     itemToRestore.classList.add("selected")
     
          // itemContainer.removeChild(itemToRestore);
      itemContainer.prepend(itemToRestore);
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
        completedItemToShift.appendChild(completedItemContent)
        completedItemToShift.appendChild(itemDeleteButton);
        completedItemToShift.classList.add("completed-item")

        // deleteTask()
        // completedItemToShift.removeChild(completedItemToShift.querySelector("div"));   
      }     
      toggleComplete(items[idIndex]);
   
    });
  });

//   const deleteTask = () => {
//   const itemDeleteButtons = Array.from(document.querySelectorAll(".item-delete-button"))
//    console.log(`Delet buttons: ${itemDeleteButtons}`)
//    itemDeleteButtons.forEach(button =>  
//    button.addEventListener("click", () => {
          
//           console.table(items);
//           const itemPendingDelete = button.parentElement;
          
//           const itemPendingDeleteId = button.parentElement.id;
//           const itemPendingDeleteIndex = items.findIndex(item => item.id = itemPendingDeleteId)
//           itemContainer.removeChild(itemPendingDelete)
//           deleteToDoItem(items[itemPendingDeleteIndex])
//           console.table(items)
      
          
//         })
// ) 
// }
   
  const updateButton = document.getElementById("update-button");
  // updateButton.addEventListener("click", () =>{
  //   setTimeout(()=> {
  //      populateDomItems(items)}, 1000);
  //  ;
  // })

   const projects = Array.from(document.querySelectorAll(".project-name"));

 console.log(`itemContainer: ${itemContainer}`)
    projects.forEach(proj => {    
       const allItems = Array.from(document.querySelectorAll(".category"))
        const allTasks = document.querySelectorAll(".item-list-view")
 let domItems = []
 proj.addEventListener("click", () =>{
          
          
           projects.forEach(projName => projName.classList.remove("active"));
            proj.classList.add("active");
            if(proj.id === "all"){
              
                  
                    itemContainer.innerHTML=''
                  itemContainer.appendChild(addNew)
                   allTasks.forEach(task => itemContainer.prepend(task))
               
           
              
         
               
         
        
            } else {
            
           
           const projectItems = allItems.filter((item)=> item.textContent === proj.textContent)
              itemContainer.innerHTML=''
               itemContainer.appendChild(addNew)
         
            projectItems.forEach(projectItem => {
                const categoryParent = projectItem.parentElement;
                const itemElement = categoryParent.parentElement;
                document.querySelector("#item-container").prepend(itemElement)
            })
            
            
               
            }
        })
    })

   

  return itemContainer;
};

// page()
console.log('tasksMain')
export { tasksMain };


// function outerFunction() {
//   function innerFunction() {
//     console.log("Hello from innerFunction!");
//   }

//   return {
//     doSomething: () => {
//       innerFunction();
//     },
//     innerFunction // <- expose it
//   };
// }

// export default outerFunction;
