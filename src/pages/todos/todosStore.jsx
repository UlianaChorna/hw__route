import { makeAutoObservable } from "mobx";

class TodoStore {
  todos = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchTodos = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      this.todos = data.slice(0, 10); // Обмежуємо список першими 10 елементами
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  }

  deleteTodo = (todoId) => {
    this.todos = this.todos.filter(todo => todo.id !== todoId);
  }
  updateTodoTitle = (todoId, newTitle) => {
    const todoToUpdate = this.todos.find(todo => todo.id === todoId);
    if (todoToUpdate) {
      todoToUpdate.title = newTitle;
    }
  };
}

const todoStore = new TodoStore();
export default todoStore;