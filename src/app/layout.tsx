import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { LoadingProvider } from "../context/LoadingContext";
import { ToastContainer } from "react-toastify";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HeroHub",
  description: "A hub for all your favorite heroes",
  openGraph: {},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${workSans.className} antialiased`}>
        <LoadingProvider>
          {children}
          <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        </LoadingProvider>
      </body>
    </html>
  );
}
