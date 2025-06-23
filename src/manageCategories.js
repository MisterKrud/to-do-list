import {items} from "./manageItems.js"

const categories = ['Default']

let filteredCat = []

export const populateCategories = () => {
    items.forEach(item => {
        if (!categories.includes(item.category)){
        categories.push(item.category)
        }
        // console.log(`Categories: ${item.category}`)
    })
    // console.table(categories)
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
  items.forEach((item) => {
    if (item.category === cat) {
      filteredCat.push(item);
      // console.log(item);
    }
  });
return filteredCat
};

console.log('manageCategories')

export {categories, filteredCat}
