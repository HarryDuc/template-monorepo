import { fromNavigator, fromStorage, fromUrl } from '@lingui/detect-locale';
import { APP_LOCALES } from 'packages-shared/translations';
import { isDefined, isValidLocale, normalizeLocale } from 'packages-shared/utils';
import { dynamicActivate } from './dynamicActivate';

export const initialI18nActivate = () => {
  // Avoid accessing client-only APIs (location.search, localStorage, navigator)
  // during server-side prerendering. If we're on the server, use default.
  let locale: keyof typeof APP_LOCALES = APP_LOCALES.en;

  if (typeof window !== 'undefined') {
    const urlLocale = fromUrl('locale');
    const storageLocale = fromStorage('locale');
    const navigatorLocale = fromNavigator();

    const normalizedUrlLocale = isDefined(urlLocale)
      ? normalizeLocale(urlLocale)
      : null;
    const normalizedStorageLocale = isDefined(storageLocale)
      ? normalizeLocale(storageLocale)
      : null;
    const normalizedNavigatorLocale = isDefined(navigatorLocale)
      ? normalizeLocale(navigatorLocale)
      : null;

    if (isDefined(normalizedUrlLocale) && isValidLocale(normalizedUrlLocale)) {
      locale = normalizedUrlLocale;
      try {
        localStorage.setItem('locale', normalizedUrlLocale);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log('Failed to save locale to localStorage:', error);
      }
    } else if (
      isDefined(normalizedStorageLocale) &&
      isValidLocale(normalizedStorageLocale)
    ) {
      locale = normalizedStorageLocale;
    } else if (
      isDefined(normalizedNavigatorLocale) &&
      isValidLocale(normalizedNavigatorLocale)
    ) {
      locale = normalizedNavigatorLocale;
    }

    dynamicActivate(locale);
  }
};
