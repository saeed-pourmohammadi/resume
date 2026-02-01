'use client';

import { useRouter } from 'next/navigation';

function setLocaleCookie(locale: 'en' | 'fa') {
  // 180 روز
  document.cookie = `locale=${locale}; Path=/; Max-Age=${60 * 60 * 24 * 180}; SameSite=Lax`;
}

export default function LocaleSwitcher() {
  const router = useRouter();

  return (
    <div style={{ display: 'flex', gap: 8 }}>
      <button
        onClick={() => { setLocaleCookie('en'); router.refresh(); }}
      >
        EN
      </button>

      <button
        onClick={() => { setLocaleCookie('fa'); router.refresh(); }}
      >
        FA
      </button>
    </div>
  );
}
