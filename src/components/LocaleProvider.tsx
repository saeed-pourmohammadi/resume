'use client';

import { NextIntlClientProvider } from 'next-intl';
import { useState, ReactNode } from 'react';

import en from '../../messages/en.json';
import de from '../../messages/de.json';

const MESSAGES = { en, de };

export default function LocaleProvider({ children }: { children: ReactNode }) {
    const [locale, setLocale] = useState<'en' | 'de'>('en');

    return (
        <>
            <div style={{ marginBottom: 12 }}>
                <button onClick={() => setLocale('en')}>EN</button>
                <button onClick={() => setLocale('de')}>DE</button>
            </div>

            <NextIntlClientProvider
                locale={locale}
                messages={MESSAGES[locale]}
            >
                {children}
            </NextIntlClientProvider>
        </>
    );
}
