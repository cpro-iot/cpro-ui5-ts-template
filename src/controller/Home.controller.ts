import Event from "sap/ui/base/Event";
import ManagedObject from "sap/ui/base/ManagedObject";
import Filter from "sap/ui/model/Filter";
import FilterOperator from "sap/ui/model/FilterOperator";
import BaseController from "./BaseController";
import { todoModel, messageModel } from "../model/provider";
import { AppBinding, AppEventProvider } from "../@types/UI5Shims";

/**
 * @namespace cpro.ui5.__kunde__.__projekt__.controller.Home
 */
export default class HomeController extends BaseController {
  onInit() {
    messageModel.register(this);
    todoModel.register(this);
    todoModel.syncTodos();
  }
  onPressTableItem(oEvent: Event) {
    const todoPath = (oEvent.getSource() as ManagedObject)
      .getBindingContext("todo")
      .getPath();
    const todoItem = todoModel.getProperty(todoPath);
    this.getRouter().navTo("todo", { todoId: todoItem.id });
  }

  onSearch(event: Event) {
    const query = (event.getSource() as AppEventProvider).getValue();
    const filterProps = ["title", "description"];
    const appliedFilters: Filter[] = [];
    const tableControl = this.getView().byId("table-users");

    if (query) {
      filterProps.forEach((key) =>
        appliedFilters.push(new Filter(key, FilterOperator.Contains, query))
      );
    }

    (tableControl.getBinding("items") as AppBinding).filter(
      appliedFilters.length === 0 ? [] : new Filter(appliedFilters, false)
    );
  }
  onPressExport() {
    todoModel.exportTodosToExcel();
    messageModel.addInfoMessage({
      message: "You exported your todos as an excel file",
    });
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
