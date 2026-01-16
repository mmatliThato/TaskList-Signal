import { Injectable, signal, computed } from '@angular/core';
import { Task } from './task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasksSignal = signal<Task[]>([]);

  tasks = this.tasksSignal.asReadonly();
  
  completedCount = computed(() => 
    this.tasks().filter(t => t.completed).length
  );

  totalCount = computed(() => this.tasks().length);

  addTask(title: string) {
    const newTask: Task = { id: Date.now(), title, completed: false };
    this.tasksSignal.update(tasks => [...tasks, newTask]);
  }

  toggleTask(id: number) {
    this.tasksSignal.update(tasks =>
      tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
    );
  }

  deleteTask(id: number) {
    this.tasksSignal.update(tasks => tasks.filter(t => t.id !== id));
  }
}