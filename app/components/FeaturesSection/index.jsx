"use client";

import { FaPaintBrush, FaSearch, FaRocket, FaBlog, FaLaptopCode } from "react-icons/fa";
import Link from "next/link";
import React from "react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <FaPaintBrush className="text-4xl text-blue-600" />,
      title: "UI tối ưu",
      desc: "Thiết kế giao diện hiện đại, thân thiện, dễ sử dụng và chuẩn Accessibility.",
      link: "/ui-toi-uu",
    },
    {
      icon: <FaSearch className="text-4xl text-green-600" />,
      title: "SEO kỹ thuật",
      desc: "Metadata, Schema, Sitemap và cấu trúc nội dung giúp tăng thứ hạng tìm kiếm.",
      link: "/seo-ky-thuat",
    },
    {
      icon: <FaRocket className="text-4xl text-red-500" />,
      title: "Hiệu suất",
      desc: "Tối ưu tốc độ tải trang: Lazy Load, SSR, CDN và nén dữ liệu.",
      link: "/hieu-suat",
    },
    {
      icon: <FaBlog className="text-4xl text-purple-600" />,
      title: "Blog chuyên sâu",
      desc: "Các bài viết chi tiết về UI, SEO, hiệu suất và các case study thực tế.",
      link: "/blog",
    },
    {
      icon: <FaLaptopCode className="text-4xl text-yellow-600" />,
      title: "Demo trước/sau",
      desc: "So sánh website trước và sau khi tối ưu để thấy rõ kết quả.",
      link: "/demo",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Các mục chính
        </h2>
        <p className="text-gray-600 mb-12">
          Tìm hiểu các khía cạnh quan trọng trong việc tối ưu hóa website của bạn.
        </p>

        {/* Grid Features */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition bg-gray-50 flex flex-col items-center text-center"
            >
              {feature.icon}
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.desc}</p>
              <Link
                href={feature.link}
                className="mt-4 text-blue-600 font-medium hover:underline"
              >
                Khám phá →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
