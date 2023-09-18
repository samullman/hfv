import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Huck Finn Ventures",
  description: "General Construction, with an edge!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />

          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
