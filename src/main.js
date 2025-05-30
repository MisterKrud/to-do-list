// import { formatDistance, subDays } from "date-fns";

// formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true });
//=> "3 days ago"
const main = () => {
    const content = document.querySelector("#content");
    const divOne = document.createElement("div");

    content.appendChild(divOne);
    divOne.textContent="text"
class TodoItem {
    constructor(title, description, dueDate, priority, notes, checklist, listCategory) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist;
        this.listCategory = listCategory;
}

}

const Category = (title) => title   

const createNew = (
  title,
  description,
  dueDate,
  priority,
  notes,
  checklist,
  listCategory
) =>
  new TodoItem(
    title,
    description,
    dueDate,
    priority,
    notes,
    checklist,
    listCategory
  );

createNew('Work', 'Finish jobs',  )

return divOne;

}

export { main }