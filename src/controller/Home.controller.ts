import BaseController from "./BaseController";
import { todoModel, messageModel } from "../model/provider";
import Event from "sap/ui/base/Event";
import ManagedObject from "sap/ui/base/ManagedObject";

/**
 * @namespace cpro.ui5.__kunde__.__projekt__.controller.Home
 */
export default class HomeController extends BaseController {
  onInit() {
    messageModel.register(this);
    todoModel.register(this);
    todoModel.syncTodos();
    console.log(this.getOwnerComponent().getManifest());
  }

  onPressTableItem(oEvent: Event) {
    const todoPath = (oEvent.getSource() as ManagedObject)
      .getBindingContext("todo")
      .getPath();
    const todoItem = todoModel.getProperty(todoPath);

    this.getRouter().navTo("todo", { todoId: todoItem.id });
  }

  onPressExport() {
    this.getView().setBusy(true);
    todoModel.exportTodosToExcel();
    messageModel.addInfoMessage({ message: "You pressed the INFO button" });
    this.getView().setBusy(false);
  }

  onPressInfoButton() {
    messageModel.addInfoMessage({
      message: "You pressed the INFO button",
      description: "Here goes an informatic description",
    });
  }
  onPressSuccessButton() {
    messageModel.addSuccessMessage({
      message: "You pressed the SUCCESS button",
    });
  }
  onPressCancelButton() {
    messageModel.addErrorMessage({ message: "You pressed the CANCEL button" });
  }
}
