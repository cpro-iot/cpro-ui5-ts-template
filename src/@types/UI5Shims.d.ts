import EventProvider from "sap/ui/base/EventProvider";
import Binding from "sap/ui/model/Binding";
import Filter from "sap/ui/model/Filter";
import Sorter from "sap/ui/model/Sorter";

export interface AppEventProvider extends EventProvider {
  getValue: () => string | any;
}

export interface AppBinding extends Binding {
  filter: (filter: Filter | Filter[]) => void;
  sort: (sorter: Sorter | Sorter[]) => void;
}

export interface AppSortEventParameters {
  sortItem: {
    getKey: () => string;
  };
  sortDescending: boolean;
}
