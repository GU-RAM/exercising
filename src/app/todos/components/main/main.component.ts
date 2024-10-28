import { Component, computed, inject } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { FilterEnum, TodoInterface } from '../models/todos.models';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-todos-main',
  standalone: true,
  imports: [CommonModule, CardModule, TableModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  todosService = inject(TodosService);
  count = 0;
  visibleTodos = computed(() => {
    const todos = this.todosService.todosSig();
    const filter = this.todosService.filterSig();

    if (filter === FilterEnum.active) {
      return todos.filter((el) => !el.isCompleted);
    }

    if (filter === FilterEnum.completed) {
      return todos.filter((el) => el.isCompleted);
    }

    return todos;
  });

  constructor() {
    // // Effect to react to changes in the todosSig signal from the service
    // const todoList = this.todosService.todosSig();
    // effect(
    //   () => {
    //     const todoList = this.todosService.todosSig();
    //     // this.todoList.set(todosFromService);
    //     // console.log('Todos updated:', this.todoList());
    //   },
    //   { allowSignalWrites: true }  // Enable signal writes inside the effect
    // );
  }
}
