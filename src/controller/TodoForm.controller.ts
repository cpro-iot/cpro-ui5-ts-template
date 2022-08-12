import BaseController from "./BaseController";
import { todoModel } from "../model/provider";
import MessageToast from "sap/m/MessageToast";

/**
 * @namespace cpro.ui5.__kunde__.__projekt__.controller.TodoForm
 */
export default class TodoFormController extends BaseController {
  onInit() {
    todoModel.register(this);
  }

  onPressAcceptButton() {
    todoModel.addFormToCollection();
    MessageToast.show("Todo added!");
    this.navToHome();
  }

  onPressRejectButton() {}
}
