import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Alex Morgan | Full Stack Developer',
  description: 'Portfolio of Alex Morgan - Full Stack Developer & UI/UX Designer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-dark text-white`}>
        {children}
      </body>
    </html>
  );
}