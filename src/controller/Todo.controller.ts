import BaseController from './BaseController';
import { todoModel, messageModel } from '../model/provider';
import Event from 'sap/ui/base/Event';
import MessageToast from 'sap/m/MessageToast';

/**
 * @namespace cpro.ui5.__kunde__.__projekt__.controller.Todo
 */
export default class TodoController extends BaseController {
  onInit() {
    todoModel.register(this);
    messageModel.register(this);
    todoModel.syncTodos();
    this.getRouter()
      .getRoute('todo')
      .attachPatternMatched(this._onObjectMatched, this);
  }

  async _onObjectMatched(oEvent: Event) {
    const { todoId } = oEvent.getParameter('arguments');
    todoModel.setActiveTodoFromCollection(todoId);
  }

  onPressAcceptButton() {
    const message = this.getAppResourceBundleText(
      'message-todo-update-success',
    );
    todoModel.updateActiveTodoInCollection();

    messageModel.addSuccessMessage({ message });
    MessageToast.show(message);
    this.navToHome();
  }
}
