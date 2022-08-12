import Controller from 'sap/ui/core/mvc/Controller';
import JSONModel from 'sap/ui/model/json/JSONModel';

/**
 * @namespace cpro.ui5.__kunde__.__projekt__.model.BaseModel
 */
export default class BaseModel<T> extends JSONModel {
  private modelName: string;

  constructor(modelName: string) {
    super();
    this.modelName = modelName;
    this.setData({
      form: {},
      activeItem: {},
      collection: [],
    });
  }

  public register(handler: Controller) {
    handler.getOwnerComponent().setModel(this, this.modelName);
  }

  public setActiveItem(data: T) {
    this.setProperty('/activeItem', data);
  }

  public getActiveItem(): T {
    return this.getProperty('/activeItem');
  }

  public setCollection(data: T[]) {
    this.setProperty('/collection', data);
  }

  public getCollection(): T[] {
    return this.getProperty('/collection');
  }
}
