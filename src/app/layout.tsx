import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Noto_Naskh_Arabic } from 'next/font/google';
import { Navbar } from '@/components/layout';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  display: 'swap',
});

const notoArabic = Noto_Naskh_Arabic({
  variable: '--font-noto-arabic',
  subsets: ['arabic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Afkaaruna - Belajar Nahwu & Shorof',
  description: 'Game interaktif untuk belajar tata bahasa Arab (Nahwu & Shorof) dengan cara yang menyenangkan. Tersedia dalam Bahasa Indonesia, Arab, dan Inggris.',
  keywords: ['nahwu', 'shorof', 'arabic grammar', 'learning game', 'bahasa arab', 'tata bahasa arab'],
  authors: [{ name: 'Afkaaruna' }],
  openGraph: {
    title: 'Afkaaruna - Belajar Nahwu & Shorof',
    description: 'Game interaktif untuk belajar tata bahasa Arab',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${jakarta.variable} ${notoArabic.variable} antialiased min-h-screen`}>
        <Navbar />
        <main className="pb-20 md:pb-0">{children}</main>
      </body>
    </html>
  );
}
