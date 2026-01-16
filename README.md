# ⚡ Angular 19 Signal Task Manager

A high-performance, modern Task Management application built using **Angular 19**. This project focuses on the latest "Signal-first" reactive patterns, avoiding the complexity of Zone.js and RxJS for simple state management.



## 🚀 Key Features

* **Signal State Management**: Utilizes `signal()` for the core state, ensuring fine-grained updates and better performance.
* **Derived State**: Uses `computed()` to automatically track and update task statistics (e.g., completed count).
* **Modern Control Flow**: Implements the new `@for` and `@empty` syntax for cleaner, more efficient templates.
* **Professional UI**: A fully responsive, card-based design with interactive hover states and transitions.
* **CRUD Operations**: Full support for Adding, Toggling (Complete/Undo), and Deleting tasks.

## 🛠️ Tech Stack

* **Framework**: [Angular 19](https://angular.dev/)
* **Language**: TypeScript
* **Styling**: Modern CSS (Flexbox, custom properties)
* **Build Tool**: Vite/esbuild (Angular 19 Default)

## 📂 Project Structure

* `src/app/task.service.ts`: The central "Store" using Signals to manage global application state.
* `src/app/app.component.ts`: The logic layer utilizing `inject()` and local component signals.
* `src/app/task.model.ts`: Interface definitions for Type Safety.

## 🏁 Getting Started

### Prerequisites
* Node.js (v18.19.0+)
* Angular CLI (`npm install -g @angular/cli`)

### Installation
1. Clone the repository:
   ```bash
   git clone [https://github.com/YOUR_USERNAME/angular-signal-task-manager.git](https://github.com/YOUR_USERNAME/angular-signal-task-manager.git)