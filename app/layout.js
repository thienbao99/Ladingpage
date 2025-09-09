import { Inter } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/app/contexts/ModalContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Tối ưu hóa Web",
  description: "Tiếp cận thiết kế UI và chiến lược SEO theo hướng hiệu suất",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <ModalProvider>
          {/* ✅ Header áp dụng cho tất cả các trang */}
          

          <main className="flex-grow">{children}</main>

          {/* ✅ Footer áp dụng cho tất cả các trang */}
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
