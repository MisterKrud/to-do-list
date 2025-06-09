import  { TodoItem as ToDo } from "./toDoClass.js"
import {items} from "./manageItems.js"





const categories = ['Default']
let filteredCat = []

export const populateCategories = () => {
    items.forEach(item => {
        if (!categories.includes(item.category)){
        categories.push(item.category)
        }
        console.log(`Categories: ${item.category}`)
    })
    console.table(categories)
     categories.sort();
    let n = categories.indexOf('Default')
    categories.splice(n, 1);
    categories.unshift('Default');
    categories.unshift('All')

};


export const setNewCategory = (categoryName) =>  categories.push(categoryName);
    
export const  changeCategory = (n, newCategory) => items[n].category = newCategory;


export const filter = (cat) => {
  filteredCat = []
// if(cat === "All"){

// }
  items.forEach((item) => {

    
    if (item.category === cat) {
      
      filteredCat.push(item);
      console.log(item);
    }
  });
return filteredCat
};


// export const sortProjects = () => items.sort((a,b) => {
//  let x = a.category.toLowerCase();
//  let y = b.category.toLowerCase();
//  if (x<y) {return -1}
//  if (x>y) {return 1}
//  let n = items.category.indexOf('Default');


// }

// );


export {categories, filteredCat}
// console.log(Todos.items)

/*
const obj = {
  name: 'John Doe',
  age: 30,
  city: 'New York',
  occupation: 'Engineer'
};

// Filter by value type
const filteredByValueType = Object.fromEntries(
  Object.entries(obj).filter(([key, value]) => typeof value === 'string')
);
console.log(filteredByValueType); // Output: { name: 'John Doe', city: 'New York', occupation: 'Engineer' }

//Filter by key
const filteredByKey = Object.fromEntries(
    Object.entries(obj).filter(([key]) => key.includes('name') || key.includes('city'))
)
console.log(filteredByKey) // Output: { name: 'John Doe', city: 'New York' }

// Filter by key-value pair
const filteredByKeyValue = Object.fromEntries(
  Object.entries(obj).filter(([key, value]) => key === 'age' && value > 25)
);
console.log(filteredByKeyValue); // Output: { age: 30 }

*/