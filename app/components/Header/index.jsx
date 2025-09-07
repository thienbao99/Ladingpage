"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const menus = [
    { name: "Trang chủ", link: "/" },
    { name: "UI Tối Ưu", link: "/ui-toi-uu" },
    { name: "SEO Kỹ Thuật", link: "/seo-ky-thuat" },
    { name: "Hiệu Suất", link: "/hieu-suat" },
    { name: "Blog", link: "/blog" },
    { name: "Demo", link: "/demo" },
    { name: "Liên hệ", link: "/lien-he" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            alt="Logo tối ưu web"
            width={48}
            height={48}
            src="/images/logo.png"
            className="rounded-md"
            priority
          />
          <span className="font-bold text-lg text-slate-800">OptimalWeb</span>
        </Link>

        {/* Navigation desktop */}
        <nav className="hidden md:flex items-center gap-6 text-slate-700 font-medium">
          {menus.map((menu, index) => (
            <Link
              key={index}
              href={menu.link}
              className={`hover:text-blue-600 transition ${
                pathname === menu.link ? "text-blue-600 font-semibold" : ""
              }`}
            >
              {menu.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/lien-he"
            className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            Đăng ký tư vấn
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md border text-slate-700"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="md:hidden bg-slate-50 border-t px-6 py-4 space-y-3 text-slate-700 font-medium">
          {menus.map((menu, index) => (
            <Link
              key={index}
              href={menu.link}
              className={`block hover:text-blue-600 transition ${
                pathname === menu.link ? "text-blue-600 font-semibold" : ""
              }`}
              onClick={() => setIsOpen(false)} // đóng menu khi bấm
            >
              {menu.name}
            </Link>
          ))}

          {/* CTA cho mobile */}
          <Link
            href="/lien-he"
            className="block text-center bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
            onClick={() => setIsOpen(false)}
          >
            Đăng ký tư vấn
          </Link>
        </nav>
      )}
    </header>
  );
}
