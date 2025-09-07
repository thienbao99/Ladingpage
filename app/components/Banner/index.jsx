"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useModal } from "@/app/contexts/ModalContext";

export default function Banner() {
  const { openModal } = useModal();
  const [email, setEmail] = useState("");

  const handleRegisterClick = () => {
    openModal(email); // truyền email vào modal
  };

  return (
    <section className="flex flex-col md:flex-row items-center bg-[#f8f9fa] px-6 md:px-20 py-16 md:py-20">
      {/* Left content */}
      <div className="flex-1 flex flex-col justify-center items-start text-center md:text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Tối ưu hóa Web
        </h1>
        <h2 className="text-lg md:text-xl lg:text-2xl text-gray-700 mt-4">
          Thiết kế UI hiện đại & chiến lược SEO hiệu suất cao
        </h2>
        <p className="mt-6 text-gray-600 max-w-md">
          Cải thiện tốc độ, tăng trải nghiệm người dùng và nâng cao hiệu quả
          SEO cho website của bạn.
        </p>

        {/* Form đăng ký */}
        <div className="mt-8 flex w-full max-w-md relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Nhập email của bạn"
            className="w-full pl-5 pr-36 h-12 rounded-3xl border border-gray-300 outline-none"
          />
          <button
            onClick={() => openModal(email)} // truyền email từ input banner
            className="absolute right-1 top-1 bottom-1 px-5 rounded-3xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Đăng ký
          </button>

        </div>
      </div>

      {/* Right image */}
      <div className="flex-1 flex justify-center mt-10 md:mt-0">
        <div className="relative w-[280px] md:w-[380px] lg:w-[450px] h-[220px] md:h-[300px] lg:h-[350px]">
          <Image
            src="/images/Optimize.jpg"
            alt="Minh họa tối ưu web & SEO"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 100vw,
                   (max-width: 1200px) 50vw,
                   400px"
          />
        </div>
      </div>
    </section>
  );
}
