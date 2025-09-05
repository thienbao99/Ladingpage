"use client";

import { FaPaintBrush, FaSearch, FaRocket } from "react-icons/fa";
import React from "react";

export default function IntroSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-20 text-center">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
        Tại sao cần tối ưu Web?
      </h2>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        Một website được tối ưu không chỉ giúp tăng trải nghiệm người dùng mà
        còn cải thiện hiệu suất, nâng cao thứ hạng SEO và tạo sự chuyên nghiệp.
      </p>

      {/* Features */}
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {/* UI */}
        <div className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition">
          <FaPaintBrush className="text-blue-600 text-4xl mx-auto" />
          <h3 className="mt-4 text-xl font-semibold">UI Tối ưu</h3>
          <p className="mt-2 text-gray-600">
            Thiết kế hiện đại, dễ dùng và phù hợp với nhiều thiết bị.
          </p>
        </div>

        {/* SEO */}
        <div className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition">
          <FaSearch className="text-green-600 text-4xl mx-auto" />
          <h3 className="mt-4 text-xl font-semibold">SEO Kỹ thuật</h3>
          <p className="mt-2 text-gray-600">
            Metadata, sitemap và cấu trúc tối ưu giúp website dễ dàng lên top.
          </p>
        </div>

        {/* Performance */}
        <div className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition">
          <FaRocket className="text-red-600 text-4xl mx-auto" />
          <h3 className="mt-4 text-xl font-semibold">Hiệu suất</h3>
          <p className="mt-2 text-gray-600">
            Tốc độ tải nhanh, hỗ trợ lazy load, SSR và tối ưu CDN.
          </p>
        </div>
      </div>
    </section>
  );
}
