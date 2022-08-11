import BaseModel from "./BaseModel";
import * as Xlsx from "xlsx";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

/**
 * @namespace cpro.ui5.__kunde__.__projekt__.model.Todo
 */
export default class TodoModel extends BaseModel<Todo> {
  setActiveTodoFromCollection(todoId: number) {
    const activeTodo = this.getCollection().find((todo) => todo.id === todoId);
    return this.setActiveItem(activeTodo);
  }

  async syncActiveTodo(todoId: number) {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoId}`
    );
    const data: Todo = await response.json();
    this.setActiveItem(data);
  }

  async syncTodos() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?userId=1"
    );
    const data: Todo[] = await response.json();
    this.setCollection(data);
  }

  async exportTodosToExcel() {
    const data = this.getCollection();
    const workbook = Xlsx.utils.book_new();
    const sheet = Xlsx.utils.json_to_sheet(data);
    Xlsx.utils.book_append_sheet(workbook, sheet, "My Todos");
    Xlsx.writeFile(workbook, "Todos.xls");
  }
}
