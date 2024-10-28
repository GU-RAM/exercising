import { Component, inject } from '@angular/core';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todos-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private todosService = inject(TodosService);
  text: string = '';

  changeText(event: Event): void{ 
    const target = event.target as HTMLInputElement;
    this.text = target.value;
  }

  addTodo() {
    this.todosService.addTodo(this.text);
  }
}
