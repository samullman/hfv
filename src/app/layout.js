import "./globals.css";
import "@fontsource/barlow-semi-condensed";
import "@fontsource-variable/source-code-pro";

import { Providers } from "./providers";
import Script from "next/script";
import Header from "./components/header";

export const metadata = {
  title: "Huck Finn Ventures",
  description: "Huck Finn Ventures",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XECM46QVV8" />
        <Script id="google-analytics">
          {`
            function gaInit () {
              window.data3Layer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XECM46QVV8');
            }

            setTimeout(gaInit)
         `}
        </Script>
      </head>

      <body>
        <Providers>
          <Header />

          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
