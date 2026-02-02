'use client';

import { NextIntlClientProvider } from 'next-intl';
import { useState, ReactNode } from 'react';

import en from '../../messages/en.json';
import de from '../../messages/de.json';

const MESSAGES = { en, de };

export default function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<'en' | 'de'>('de');

  return (
    <div className='bg-gray-50'>
      <div className='max-w-5xl mx-auto flex justify-center p-2 gap-2'>
        <button className={`flex items-center justify-center gap-2 ${locale === "en" ? "bg-blue-600" : "bg-blue-300"} hover:bg-blue-700 text-white font-bold py-2 px-6 rounded disabled:opacity-50 w-44`} onClick={() => setLocale('en')}>EN</button>
        <button className={`flex items-center justify-center gap-2 ${locale === "de" ? "bg-blue-600" : "bg-blue-300"} hover:bg-blue-700 text-white font-bold py-2 px-6 rounded disabled:opacity-50 w-44`} onClick={() => setLocale('de')}>DE</button>
      </div>

      <NextIntlClientProvider
        locale={locale}
        messages={MESSAGES[locale]}
      >
        {children}
      </NextIntlClientProvider>
    </div>
  );
}
