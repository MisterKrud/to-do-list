import { TodoItem as ToDo } from "./toDoClass";
import {lightFormat, isPast, isFuture } from "date-fns";
import { items } from "./manageItems";

export const changeDueDate = (n, newDate) => items[n].dueDate = lightFormat(newDate, 'd/M/yy')

export const dateIsPast = (n) => isPast(items[n].dueDate) 


console.log('manageDueDates')