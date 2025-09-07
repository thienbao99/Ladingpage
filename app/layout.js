import { Inter } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/app/contexts/ModalContext";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tối ưu hóa Web",
  description: "Tiếp cận thiết kế UI và chiến lược SEO theo hướng hiệu suất",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} flex flex-col h-auto`}
        suppressHydrationWarning
      >
        <ModalProvider>
          <main className="flex-grow">{children}</main>
        </ModalProvider>
      </body>
    </html>
  );
}
