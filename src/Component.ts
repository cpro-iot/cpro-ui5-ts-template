import UIComponent from 'sap/ui/core/UIComponent';
import { configModel } from './model/provider';

/**
 * @namespace cpro.ui5.__kunde__.__projekt__.Component
 */
export default class Component extends UIComponent {
  public metadata = {
    manifest: 'json',
  };
  /**
   * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
   * @public
   * @override
   */
  public init() {
    configModel.setTheme(configModel.getTheme());
    configModel.setLanguage(configModel.getLanguage());
    // call the base component's init function
    // @ts-ignore
    UIComponent.prototype.init.apply(this, arguments);

    // create the views based on the url/hash
    this.getRouter().initialize();
  }
}
