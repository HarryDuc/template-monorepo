'use client';

import { useTranslation } from 'react-i18next';

export default function DashboardHeader() {
  const { t, i18n } = useTranslation('common');

  return (
    <header>
      <h1>{t('welcome')}</h1>

      <div>
        <button onClick={() => i18n.changeLanguage('en')}>EN</button>
        <button onClick={() => i18n.changeLanguage('vi')}>VI</button>
      </div>
    </header>
  );
}
