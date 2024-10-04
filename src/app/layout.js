import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "../(components)/header";
import Footer from "../(components)/footer";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  title: "Seeam Ahmod-Portfolio",
  description: " Seeam Ahmod-Portfolio-UI/UX Designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
