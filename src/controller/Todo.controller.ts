import BaseController from "./BaseController";
import { todoModel } from "../model/provider";
import Event from "sap/ui/base/Event";

/**
 * @namespace cpro.ui5.__kunde__.__projekt__.controller.Home
 */
export default class HomeController extends BaseController {
  onInit() {
    todoModel.register(this);
    this.getRouter()
      .getRoute("todo")
      .attachPatternMatched(this._onObjectMatched, this);
  }

  async _onObjectMatched(oEvent: Event) {
    const { todoId } = oEvent.getParameter("arguments");
    await todoModel.setActiveTodoFromCollection(todoId);
  }
}
