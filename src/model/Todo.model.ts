import BaseModel from './BaseModel';
import * as Xlsx from 'xlsx';

interface Todo {
  userId: number;
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const initialTodos = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    description: 'qui ullam ratione quibusdam voluptatem quia omnis',
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    description: 'illo expedita consequatur quia in',
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: 'fugiat veniam minus',
    description: 'quo adipisci enim quam ut ab',
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: 'et porro tempora',
    description: 'illo est ratione doloremque quia maiores aut',
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
    description: 'accusamus eos facilis sint et aut voluptatem',
    completed: false,
  },
];

const initialForm = {
  userId: 1,
  id: 0,
  title: '',
  description: '',
  completed: false,
};

/**
 * @namespace cpro.ui5.__kunde__.__projekt__.model.Todo
 */
export default class TodoModel extends BaseModel<Todo> {
  setActiveTodoFromCollection(todoId: number) {
    const activeTodo = this.getCollection().find((todo) => {
      return +todo.id == +todoId;
    });
    return this.setActiveItem({ ...activeTodo });
  }

  async syncTodos() {
    this.setCollection(initialTodos);
    this.setProperty('/form', { ...initialForm });
  }

  updateActiveTodoInCollection() {
    const todoCollection = this.getCollection();
    const activeTodoItem = this.getActiveItem();

    const activeTodoIndex = todoCollection.findIndex((collectionItem) => {
      return +collectionItem.id === +activeTodoItem.id;
    });
    todoCollection.splice(activeTodoIndex, 1, { ...activeTodoItem });
    this.setCollection(todoCollection);
  }

  public addTodo(todo: Todo) {
    const collection = this.getProperty('/collection');
    const id = collection.length + 1;
    const newEntry = { ...todo, id };
    this.setProperty('/collection', [...collection, newEntry]);
  }

  public addFormToCollection() {
    const collection = this.getProperty('/collection');
    const id = collection.length + 1;
    const newEntry = { ...this.getProperty('/form'), id };
    this.setProperty('/collection', [...collection, newEntry]);
    this.setProperty('/form', { ...initialForm });
  }

  async exportTodosToExcel() {
    const data = this.getCollection();
    const workbook = Xlsx.utils.book_new();
    const sheet = Xlsx.utils.json_to_sheet(data);
    Xlsx.utils.book_append_sheet(workbook, sheet, 'My Todos');
    Xlsx.writeFile(workbook, 'Todos.xls');
  }
}
