import './globals.css';
import { Inter } from 'next/font/google';
import Header from '../../components/Header.js';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Joe Hannis',
  description: 'Joe Hannis - Software Engineer',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='icon'
          href='./icon.png'
          type='image/<generated>'
          sizes='<generated>'
        />
      </head>
      <body className={inter.className}>
        <HeaderLayout />
        {children}
      </body>
    </html>
  );
}

function HeaderLayout() {
  return (
    <header>
      <Header />
    </header>
  );
}
