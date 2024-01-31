import './globals.css';

import CustomFont from '@next/font/local';
const tradeGothic = CustomFont({
  src: './fonts/Trade-Gothic-LT.woff',
});

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={tradeGothic.className}>{children}</body>
    </html>
  );
}
