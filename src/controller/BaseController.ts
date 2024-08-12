import Router from 'sap/f/routing/Router';
import Controller from 'sap/ui/core/mvc/Controller';
import { configModel } from '../model/provider';
import { AppUserLanguage } from '../model/Config.model';
import Event from 'sap/ui/base/Event';
import Popover from 'sap/m/Popover';
import Fragment from 'sap/ui/core/Fragment';
import HTML from 'sap/ui/core/HTML';

/**
 * @namespace cpro.ui5.__kunde__.__projekt__.controller.BaseController
 */
export default class BaseController extends Controller {
  private settingsPopoverPath: string =
    'cpro/ui5/__kunde__/__projekt__/view/Fragments/Settings';
  private messagesPopoverPath: string =
    'cpro/ui5/__kunde__/__projekt__/view/Fragments/Messages';

  private popovers: Record<string, Popover> = {};

  public getAppResourceBundleText(identifier: string): string {
    return (
      this.getOwnerComponent()
        .getModel('i18n')
        // @ts-ignore
        .getResourceBundle()
        .getText(identifier)
    );
  }
  public getRouter(): Router {
    // @ts-ignore
    return this.getOwnerComponent().getRouter();
  }

  public navToHome(): void {
    this.getRouter().navTo('home');
  }

  public navToAbout(): void {
    this.getRouter().navTo('about');
  }

  public navToNewTodoForm(): void {
    this.getRouter().navTo('todo-form');
  }

  /**
   *
   * @param mountFunction The react mount function of the root component
   * @param domElementId The id of the dom element on which to render the react component
   */
  public bindReactComponent(mountFunction: (id: string) => void, domElementId: string) {
    const htmlElement = this.byId(domElementId) as HTML;
    if (!htmlElement) {
      console.error(`Could not mount react component: Element with id "${domElementId}" is missing.\n\nCheck if you have created a "core:HTML" element with id "${domElementId}" in your XML views and whether its "content" is filled with a placeholder value.\n\n See https://ui5.sap.com/#/api/sap.ui.core.HTML for reference`);
      return;
    }

    htmlElement.setContent(`<div id=${htmlElement.getId()}></div>`);
    mountFunction(htmlElement.getId())
  }

  protected toggleDarkTheme(): void {
    this.getView().setBusy(true);
    configModel.toggleFioriTheme();
    this.getView().setBusy(false);
  }

  protected setLanguage(languageName: AppUserLanguage) {
    configModel.setLanguage(languageName);
  }

  private async openSettings(event: Event) {
    const button = event.getSource();
    const view = this.getView();

    if (!this.popovers[this.settingsPopoverPath]) {
      this.popovers[this.settingsPopoverPath] = (await Fragment.load({
        name: this.settingsPopoverPath,
        controller: this,
      })) as Popover;
      view.addDependent(this.popovers[this.settingsPopoverPath]);
    }
    this.popovers[this.settingsPopoverPath].openBy(button, true);
  }

  private closeSettings() {
    this.popovers[this.settingsPopoverPath].close();
  }

  private async toggleMessageManager(event: Event) {
    const button = event.getSource();
    const view = this.getView();

    if (!this.popovers[this.messagesPopoverPath]) {
      this.popovers[this.messagesPopoverPath] = (await Fragment.load({
        name: this.messagesPopoverPath,
        controller: this,
      })) as Popover;
      view.addDependent(this.popovers[this.messagesPopoverPath]);
    }
    this.popovers[this.messagesPopoverPath].openBy(button, true);
  }
}
