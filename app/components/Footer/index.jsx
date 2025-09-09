import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { PiThreadsLogo } from "react-icons/pi";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-10 mt-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Logo + slogan */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/images/logo.png"
            alt="Web Optimization Logo"
            width={80}
            height={80}
            className="mb-3"
          />
          <h1 className="tracking-widest text-sm font-light">
            TỐI ƯU HÓA WEB
          </h1>
          <p className="mt-3 text-xs text-white-400">
            UI đẹp – Hiệu suất cao – SEO chuẩn
          </p>
        </div>

        {/* Điều hướng nhanh */}
        <div>
          <h3 className="font-bold mb-4">Điều hướng</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/" className="hover:text-white">Trang chủ</a></li>
            <li><a href="/ui-toi-uu" className="hover:text-white">Tối ưu UI</a></li>
            <li><a href="/seo-ky-thuat" className="hover:text-white">SEO Kỹ thuật</a></li>
            <li><a href="/hieu-suat" className="hover:text-white">Hiệu suất</a></li>
            <li><a href="/blog" className="hover:text-white">Blog</a></li>
          </ul>
        </div>

        {/* Liên hệ */}
        <div>
          <h3 className="font-bold mb-4">Liên hệ</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <MapPinIcon size={16} />
              <span>Hồ Chí Minh, Việt Nam</span>
            </li>
            <li className="flex items-center gap-2">
              <PhoneIcon size={16} />
              <span>+84 123 456 789</span>
            </li>
            <li className="flex items-center gap-2">
              <MailIcon size={16} />
              <span>thienbaopro2004@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-bold mb-4">Kết nối</h3>
          <div className="flex space-x-4">
            <a href="#" className="p-2 rounded-full bg-zinc-800 hover:bg-blue-600 transition">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="p-2 rounded-full bg-zinc-800 hover:bg-sky-500 transition">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="p-2 rounded-full bg-zinc-800 hover:bg-blue-500 transition">
              <FaLinkedinIn size={18} />
            </a>
            <a href="#" className="p-2 rounded-full bg-zinc-800 hover:bg-gradient-to-tr hover:from-pink-500 hover:to-purple-600 transition">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="p-2 rounded-full bg-zinc-800 hover:bg-black transition">
              <PiThreadsLogo size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-zinc-700 mt-10 pt-6 text-center text-sm text-white-500">
        © {new Date().getFullYear()} Tối Ưu Hóa Web. All rights reserved.
      </div>
    </footer>
  );
}
