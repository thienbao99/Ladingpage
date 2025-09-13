import { Inter } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "./contexts/ModalContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

// Metadata chuẩn SEO
export const metadata = {
  title: "Tối ưu hóa Web",
  description:
    "Thiết kế UI hiện đại & chiến lược SEO hiệu suất cao. Cải thiện tốc độ, trải nghiệm người dùng và tăng hiệu quả SEO cho website.",
  keywords: [
    "tối ưu web",
    "SEO kỹ thuật",
    "UI/UX",
    "web performance",
    "landing page",
    "tăng tốc độ website",
  ],
  authors: [{ name: "Landing Page Optimal Team" }],
  creator: "Landing Page Optimal",
  publisher: "Landing Page Optimal",

  // Open Graph (Facebook, LinkedIn, Zalo...)
  openGraph: {
    title: "Tối ưu hóa Web",
    description:
      "Thiết kế UI hiện đại & chiến lược SEO hiệu suất cao. Giúp website nhanh hơn, thân thiện SEO hơn.",
    url: "https://ladingpage-optimal.vercel.app",
    siteName: "Landing Page Optimal",
    images: [
      {
        url: "https://ladingpage-optimal.vercel.app/Optimize.jpg",
        width: 1200,
        height: 630,
        alt: "Tối ưu hóa Web - Landing Page Optimal",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Tối ưu hóa Web",
    description:
      "Thiết kế UI hiện đại & chiến lược SEO hiệu suất cao cho website.",
    images: ["https://ladingpage-optimal.vercel.app/og-image.png"],
    creator: "@your_twitter_handle",// nếu có Twitter
  },

  // Icons (favicon + apple-touch-icon)
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // Metadata khác
  alternates: {
    canonical: "https://ladingpage-optimal.vercel.app",
  },
  metadataBase: new URL("https://ladingpage-optimal.vercel.app"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <ModalProvider>
          <main className="flex-grow">{children}</main>
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
