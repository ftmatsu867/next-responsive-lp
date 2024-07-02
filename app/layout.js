import { Roboto_Slab } from "next/font/google";
import "./globals.css";

const robot_slab = Roboto_Slab({ subsets:["latin"],style:"normal"});

export const metadata = {
  title: "snowfall",
  description: "snowfall website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={robot_slab.className}>{children}</body>
    </html>
  );
}
