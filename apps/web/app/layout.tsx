'use client';

import { ThemeProvider } from 'next-themes';
import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { initialI18nActivate } from '../src/utils/i18n/initialI18nActivate';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});


initialI18nActivate();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <I18nProvider i18n={i18n}>{children}</I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
