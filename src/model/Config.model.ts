import Core from 'sap/ui/core/Core';
import BaseModel from './BaseModel';

export type AppUserLanguage = 'de' | 'en';
type AppUserTheme = 'sap_fiori_3' | 'sap_fiori_3_dark';

/**
 * @namespace cpro.ui5.__kunde__.__projekt__.model.Config
 */
export default class ConfigModel extends BaseModel<any> {
  private localStorageThemeKey: string = 'cpro-ui5-user-theme';
  private localStorageLanguageKey: string = 'cpro-ui5-user-language';

  setTheme(themeName: AppUserTheme) {
    localStorage.setItem(this.localStorageThemeKey, themeName);
    Core.applyTheme(themeName);
  }

  getTheme(): AppUserTheme {
    const localUserTheme = localStorage.getItem(
      this.localStorageThemeKey,
    ) as AppUserTheme;
    if (localUserTheme) {
      return localUserTheme;
    }
    return Core.getConfiguration().getTheme() as AppUserTheme;
  }

  toggleFioriTheme(): void {
    if (this.getTheme() === 'sap_fiori_3') {
      this.setTheme('sap_fiori_3_dark');
    } else {
      this.setTheme('sap_fiori_3');
    }
  }

  setLanguage(languageName: AppUserLanguage) {
    localStorage.setItem(this.localStorageLanguageKey, languageName);
    return Core.getConfiguration().setLanguage(languageName);
  }

  getLanguage(): AppUserLanguage {
    const localUserLanguage = localStorage.getItem(
      this.localStorageLanguageKey,
    ) as AppUserLanguage;
    if (localUserLanguage) {
      return localUserLanguage;
    }

    return Core.getConfiguration().getLanguage() as AppUserLanguage;
  }
}
