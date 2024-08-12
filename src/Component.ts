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

    this.installServiceWorker();
  }

  private installServiceWorker() {
    // Install the service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js').then(function (registration) {
        // request permission for a desktop notification and show it
        Notification.requestPermission().then(granted => {
          if (granted) {
            new Notification('Cpro app installed', {
              icon: 'assets/icon-192.png',
              body: 'This app is now ready for offline usage. If you have previously installed this app, please refresh the page',
              tag: "cpro-app-installed",
              badge: "assets/icon-192.png"
            }).addEventListener('click', () => {
              window.location.reload();
              window.focus();
            })
          }
        })
      }).catch(function (err) {
        console.log('ServiceWorker registration failed: ', err);
      });
    } else {
      console.warn('No service worker support in this browser');
    }
  }
}
