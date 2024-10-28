import { Injectable, signal } from '@angular/core';
import { FilterEnum, TodoInterface } from '../models/todos.models';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todosSig = signal<TodoInterface[]>([]);
  filterSig = signal<FilterEnum>(FilterEnum.all);

  constructor() {}

  changeFilter(filterName: FilterEnum) {
    this.filterSig.set(filterName);
  }

  addTodo(text: string): void {
    const newTodo: TodoInterface = {
      text,
      isCompleted: false,
      id: Math.random().toString(16),
    };

    this.todosSig.update((todos) => [...todos, newTodo]);
    console.log(this.todosSig());
  }

  // todosSig: BehaviorSubject<TodoInterface[]> = new BehaviorSubject<TodoInterface[]>([])

  // constructor() { }

  // addTodo(text: string): void {
  //   const newTodo: TodoInterface = {
  //   text,
  //   isCompleted: false,
  //   id: Math.random().toString(16)
  // }
  // const currentTodos = this.todosSig.getValue();  // Get the current value of todos
  // this.todosSig.next([...currentTodos, newTodo]);
  //   }
}
