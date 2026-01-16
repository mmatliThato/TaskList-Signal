import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
  protected readonly title = signal('my-app-signal');

taskService = inject(TaskService);
  newTaskTitle = signal('');

  addNewTask() {
    const title = this.newTaskTitle().trim();
    if (title) {
      this.taskService.addTask(title);
      this.newTaskTitle.set('');
    }
  }

}
