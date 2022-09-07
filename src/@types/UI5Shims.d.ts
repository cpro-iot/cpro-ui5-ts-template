import EventProvider from 'sap/ui/base/EventProvider';
import Binding from 'sap/ui/model/Binding';
import Filter from 'sap/ui/model/Filter';
import FilterOperator from 'sap/ui/model/FilterOperator';
import Sorter from 'sap/ui/model/Sorter';

interface AppFilterItem {
  getKey: () => string;
}
export interface AppEventProvider extends EventProvider {
  getValue: () => string | any;
}

export interface AppTableItemsBinding extends Binding {
  filter: (filter: Filter | Filter[]) => void;
  sort: (sorter: Sorter | Sorter[]) => void;
}

export interface AppSortEventParameters {
  sortItem: {
    getKey: () => string;
  };
  sortDescending: boolean;
}

export interface AppFilterEventParameters {
  filterItems: AppFilterItem[];
}

export type AppSortKeyTuple = [
  string,
  FilterOperator,
  string | number | boolean,
];
