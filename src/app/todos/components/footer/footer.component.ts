import { Component, computed, inject } from '@angular/core';
import { FilterEnum } from '../models/todos.models';
import { CommonModule } from '@angular/common';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todos-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  todosService = inject(TodosService);
  filterSig = this.todosService.filterSig;
  filterEnum = FilterEnum;
  activeCount = computed(() => {
    return this.todosService.todosSig().filter((todo) => !todo.isCompleted)
      .length;
  });
  noTodo = computed(() => {
    return this.todosService.todosSig().length === 0;
  });
  itemsPlural = computed(() => {
    return this.activeCount() < 2 ? '' : 's';
  });

  onFilterClick(event: Event, filterName: FilterEnum) {
    event.preventDefault();
    this.todosService.changeFilter(filterName);
  }
}
