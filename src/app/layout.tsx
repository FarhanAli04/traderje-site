import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import { Toaster } from "sonner";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800', '900'],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Traderje | Your Path to Successful Prop Trading",
  description: "Become a successful prop trader with Traderje. Master the markets and learn profitable trading from the most successful Prop Trading community.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${poppins.variable}`}>
      <ClientBody>
        <Toaster position="top-center" />
        {children}
      </ClientBody>
    </html>
  );
}
