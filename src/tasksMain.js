import { items } from "./manageItems";
import { toggleComplete } from "./manageItems";

const tasksMain = () => {
const content = document.getElementById("content");
const itemContainer = document.createElement("div");
itemContainer.setAttribute("id", "item-container")
content.appendChild(itemContainer);

 

console.log(`items in dom.js: ${items}`)
    items.forEach(item => {
       const completeClass = () =>item.complete ? "complete" : "incomplete";
   
  
    
        console.log(`item.title: ${item.title}`)
        const itemListView = document.createElement("div");
        itemListView.setAttribute("class", "item-list-view");
        itemListView.setAttribute("id", item.id);
        const title = document.createElement("p")
        title.setAttribute("class", "item-header")
        title.textContent = item.title;
        const itemContent = document.createElement("div")
        itemContent.setAttribute("class", "item-content")
        const description = document.createElement("p")
        description.textContent = item.description;
        const dueDate = document.createElement("p")
        dueDate.setAttribute("class", "due-date")
        dueDate.textContent = `  | ${item.dueDate}`;
        const priority = document.createElement("p");
        priority.textContent = item.priority;
        const notes = document.createElement("p");
        notes.setAttribute("class", "notes")
        notes.textContent = item.notes;
        const complete = document.createElement("p");
        complete.setAttribute("class", completeClass());
        complete.innerText = (completeClass());
        const category = document.createElement("p");
        category.setAttribute("class", "category")
        category.textContent = item.category;
        itemContainer.appendChild(itemListView);

        const checkBox = document.createElement("input");
        
      checkBox.setAttribute("type", "checkbox")
      checkBox.setAttribute("class", "check-box")
checkBox.classList.add(completeClass())
       
        

        // itemCard.appendChild(title)
        itemListView.append(checkBox, title, itemContent );
       itemContent.append(category, dueDate)
    }
    )

    const checkBoxes = document.querySelectorAll(".check-box");
    // console.table(checkBoxes)

        checkBoxes.forEach(box => {
           
            box.addEventListener("click", () =>{
             
              const boxParentId = box.parentElement.id
              console.log(box.parentElement)
              console.log(box.parentElement.id)
             const idIndex = items.findIndex(item => item.id === boxParentId)
               
                if (box.getAttribute("class") === 'complete'){
                    box.classList.add('incomplete')
                    box.classList.remove('complete')
                   
                    
                    
                } else {
                    box.classList.add('complete');
                    box.classList.remove('incomplete');
                    
                    
                }
            
                console.log(items[idIndex])
                console.log(items[idIndex].complete)
                toggleComplete(items[idIndex])
                 console.log(items[idIndex].complete)
                console.table(items)
            } )
        })


    const itemListView = document.querySelectorAll(".item-list-view");
    itemListView.forEach(item =>{
        
        item.addEventListener("click", ()=>{
            itemListView.forEach(listItem => listItem.classList.remove("selected"))
            item.classList.add("selected")
          
        })
    })

  
    // const checkBoxes = document.querySelectorAll(".check-box");

 
    //     checkBoxes.forEach(box => {
    //         box.addEventListener("click", () =>{
    //             console.log(box.getAttribute("class"))
    //             if (box.getAttribute("class") === 'complete'){
    //                 box.classList.add('incomplete')
    //                 box.classList.remove('complete')
                    
    //             } else {
    //                 box.classList.add('complete');
    //                 box.classList.remove('incomplete');
    //             }
    //         } )
    //     })
   

return itemContainer;
}

// page()


export { tasksMain }