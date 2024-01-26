import './globals.css';

import CustomFont from '@next/font/local';
const tradeGothic = CustomFont({
  src: './fonts/Trade-Gothic-LT.woff',
  variable: '--font-cfont',
});

// const cfont = CustomFont({
//   src: '../public/fonts/cfont.ttf',
//   variable: '--font-cfont',
// })

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={tradeGothic.className}>{children}</body>
    </html>
  );
}

// const ppNeue = localFont({ src: '../public/fonts/ppneueregular.woff2' })
