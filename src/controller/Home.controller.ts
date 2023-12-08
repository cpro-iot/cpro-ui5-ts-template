import Event from 'sap/ui/base/Event';
import ManagedObject from 'sap/ui/base/ManagedObject';
import Filter from 'sap/ui/model/Filter';
import FilterOperator from 'sap/ui/model/FilterOperator';
import BaseController from './BaseController';
import { todoModel, messageModel } from '../model/provider';
import {
  AppBinding,
  AppEventProvider,
  AppSortEventParameters,
} from '../@types/UI5Shims';
import Dialog from 'sap/m/Dialog';
import Fragment from 'sap/ui/core/Fragment';
import Sorter from 'sap/ui/model/Sorter';
import {mount} from '../components/react'

/**
 * @namespace cpro.ui5.__kunde__.__projekt__.controller.Home
 */
export default class HomeController extends BaseController {
  private homeDialogTableFilterPath =
    'cpro/ui5/__kunde__/__projekt__/view/Fragments/TableFilter';
  private homeDialogTableSorterPath =
    'cpro/ui5/__kunde__/__projekt__/view/Fragments/TodoTableSorter';

  private homeDialogs: Record<string, Dialog> = {};

  onInit() {
    messageModel.register(this);
    todoModel.register(this);
    todoModel.syncTodos();
  }

  onAfterRendering(): void {
    this.bindReactComponent(mount, 'react');
  }

  onPressTableItem(event: Event) {
    const todoPath = (event.getSource() as ManagedObject)
      .getBindingContext('todo')
      .getPath();
    const todoItem = todoModel.getProperty(todoPath);
    this.getRouter().navTo('todo', { todoId: todoItem.id });
  }

  onSearch(event: Event) {
    const query = (event.getSource() as AppEventProvider).getValue();
    const filterProps = ['title', 'description'];
    const appliedFilters: Filter[] = [];
    const tableControl = this.getView().byId('table-users');

    if (query) {
      filterProps.forEach((key) =>
        appliedFilters.push(new Filter(key, FilterOperator.Contains, query)),
      );
    }

    (tableControl.getBinding('items') as AppBinding).filter(
      appliedFilters.length === 0 ? [] : new Filter(appliedFilters, false),
    );
  }

  async onOpenSorterDialog() {
    const view = this.getView();

    if (!this.homeDialogs[this.homeDialogTableSorterPath]) {
      this.homeDialogs[this.homeDialogTableSorterPath] = (await Fragment.load({
        name: this.homeDialogTableSorterPath,
        controller: this,
      })) as Dialog;
      view.addDependent(this.homeDialogs[this.homeDialogTableSorterPath]);
    }
    this.homeDialogs[this.homeDialogTableSorterPath].open();
  }

  sortTodos(event: Event) {
    const tableControl = this.getView().byId('table-users');
    const parameters = event.getParameters() as AppSortEventParameters;
    const key = parameters.sortItem.getKey();
    const descending: boolean = parameters.sortDescending;
    const sorters = [];
    sorters.push(new Sorter(key, descending));
    (tableControl.getBinding('items') as AppBinding).sort(sorters);
  }

  onPressExport() {
    todoModel.exportTodosToExcel();
    messageModel.addInfoMessage({
      message: 'You exported your todos as an excel file',
    });
  }
  onPressInfoButton() {
    messageModel.addInfoMessage({
      message: 'You pressed the INFO button',
      description: 'Here goes an informatic description',
    });
  }
  onPressSuccessButton() {
    messageModel.addSuccessMessage({
      message: 'You pressed the SUCCESS button',
    });
  }
  onPressCancelButton() {
    messageModel.addErrorMessage({ message: 'You pressed the CANCEL button' });
  }
}
