import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trackify - gestion de la situation financiére",
  description: "gestion de la situation financiére",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" /> {/* Chemin vers votre favicon */}
        {/* Vous pouvez également ajouter d'autres formats d'icônes pour la compatibilité */}
        <link rel="icon" type="image/png" href="/favicon.png" />

      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
