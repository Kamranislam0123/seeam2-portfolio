import { Poppins } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";
import Header from "../(components)/header";
import Footer from "../(components)/footer";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const solenoidal = localFont({
  src: '../fonts/Solenoidal.ttf',
  variable: '--font-solenoidal'
});

const franie = localFont({
  src: '../fonts/Franie.otf',
  variable: '--font-franie',
  weight: '300',
  style: 'normal'
});

export const metadata = {
  title: "Seeam Ahmod-Portfolio",
  description: " Seeam Ahmod-Portfolio-UI/UX Designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${solenoidal.variable} ${franie.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
