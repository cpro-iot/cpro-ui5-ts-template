import BaseController from "./BaseController";
import { todoModel } from "../model/provider";
import Event from "sap/ui/base/Event";

/**
 * @namespace cpro.ui5.__kunde__.__projekt__.controller.Todo
 */
export default class TodoController extends BaseController {
  onInit() {
    todoModel.register(this);
    todoModel.syncTodos();
    this.getRouter()
      .getRoute("todo")
      .attachPatternMatched(this._onObjectMatched, this);
  }

  async _onObjectMatched(oEvent: Event) {
    const { todoId } = oEvent.getParameter("arguments");
    todoModel.setActiveTodoFromCollection(todoId);
  }
}
