import EventProvider from "sap/ui/base/EventProvider";
import Binding from "sap/ui/model/Binding";
import Filter from "sap/ui/model/Filter";

export interface AppEventProvider extends EventProvider {
  getValue: () => string | any;
}

export interface AppBinding extends Binding {
  filter: (filter: FIlter | Filter[]) => void;
}
