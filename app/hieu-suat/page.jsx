"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaClock,
  FaTools,
  FaRocket,
  FaShieldAlt,
  FaLightbulb,
} from "react-icons/fa";
import Link from "next/link";
import BeforeAfterSection from "../components/BeforeAfterSection";

export default function HieuSuatPage() {
const tips = [
  "Nén và tối ưu hình ảnh: WebP, AVIF, Lazy Load – Giảm dung lượng trang, tải nhanh hơn, tiết kiệm băng thông.",
  "Giảm thiểu CSS, JS, HTML và tải không đồng bộ các script – Giảm thời gian render, tránh blocking render.",
  "Sử dụng font tối ưu, tải cục bộ hoặc preload font cần thiết – Tránh FOUT/FOIT, cải thiện trải nghiệm người dùng.",
  "Kích hoạt bộ nhớ cache trình duyệt để tăng tốc tải trang – Giảm request server, trải nghiệm mượt mà hơn.",
  "Sử dụng CDN để phân phối nội dung gần người dùng – Tăng tốc truy cập, giảm độ trễ mạng.",
  "Chọn hosting chất lượng, tối ưu cơ sở dữ liệu và các truy vấn – Cải thiện tốc độ phản hồi server, giảm timeout.",
  "Bật nén Gzip hoặc Brotli trên server – Giảm dung lượng file, tăng tốc load trang.",
  "Giảm thiểu các chuyển hướng (redirects) không cần thiết – Hạn chế chậm trễ, tăng hiệu suất tải trang.",
  "Thiết kế responsive cho mọi thiết bị – Đảm bảo UX tốt trên desktop, tablet và mobile.",
  "Loại bỏ mã theo dõi không cần thiết để giảm tải trang – Giảm scripts không cần thiết, cải thiện tốc độ.",
  "Sử dụng PageSpeed Insights hoặc GTmetrix để kiểm tra hiệu suất – Nhận gợi ý cải thiện cụ thể cho website."
            ];



  const steps = [
    {
      title: "1. Tối ưu hóa tài nguyên",
      desc: [
        "Hình ảnh: Nén hình ảnh, sử dụng định dạng hiện đại WebP/AVIF, áp dụng Lazy Load.",
        "Mã nguồn: Giảm thiểu CSS, JS, HTML, hợp nhất file nhỏ và tải async.",
        "Font chữ: Chọn font cần thiết, ưu tiên font trình duyệt hỗ trợ, tải cục bộ hoặc preload.",
      ],
      icon: <FaTools className="text-blue-600 w-6 h-6" />,
    },
    {
      title: "2. Sử dụng bộ nhớ đệm và CDN",
      desc: [
        "Cache trình duyệt: Kích hoạt bộ nhớ cache giúp tải trang nhanh hơn ở lần truy cập sau.",
        "CDN: Phân phối nội dung từ server gần người dùng để giảm latency.",
      ],
      icon: <FaClock className="text-green-600 w-6 h-6" />,
    },
    {
      title: "3. Tối ưu server và kết nối",
      desc: [
        "Hiệu suất máy chủ: Chọn hosting chất lượng, tối ưu cơ sở dữ liệu và các truy vấn.",
        "Nén tệp: Bật Gzip/Brotli trên server.",
        "Giảm redirects: Hạn chế chuyển hướng không cần thiết để tăng tốc độ.",
      ],
      icon: <FaRocket className="text-red-500 w-6 h-6" />,
    },
    {
      title: "4. Cải thiện trải nghiệm người dùng",
      desc: [
        "Thiết kế responsive: Website hiển thị tốt trên mọi thiết bị.",
        "Loại bỏ mã theo dõi không cần thiết để giảm tải và cải thiện tốc độ.",
      ],
      icon: <FaShieldAlt className="text-purple-600 w-6 h-6" />,
    },
  ];

  return (
    <>
     

      <main className="min-h-screen bg-gray-50 text-slate-800">

        {/* Hero */}
        <section className="py-24 px-6 bg-gradient-to-r from-sky-500 to-red-400 text-white text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            Tối Ưu Hiệu Suất Website
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl max-w-2xl mx-auto"
          >
            Cải thiện tốc độ tải trang, trải nghiệm người dùng và hiệu quả SEO.
          </motion.p>
        </section>

        {/* Steps */}
        <section className="py-16 px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-red-500 text-center">
            Các Bước Nâng Cao Hiệu Suất
          </h2>
          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row gap-6"
              >
                <div className="flex-shrink-0">{step.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {step.desc.map((line, idx) => (
                      <li key={idx}>{line}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Tips */}
        <section className="py-16 px-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md">
          <h2 className="text-3xl font-bold mb-8 text-red-500 text-center">
            Mẹo & Best Practices
          </h2>
          <ul className="space-y-3">
            {tips.map((tip, i) => {
              const [open, setOpen] = useState(false);
              const [title, desc] = tip.split("–").map(s => s.trim());

              return (
                <li
                  key={i}
                  className="flex flex-col border rounded-lg p-4 hover:shadow-md transition"
                >
                  <button
                    onClick={() => setOpen(!open)}
                    className="flex items-center justify-between w-full text-gray-700 font-medium"
                  >
                    <div className="flex items-center gap-3">
                      <FaLightbulb className="text-yellow-500 w-5 h-5" />
                      <span className="text-lg md:text-xl font-semibold text-black-600">{title}</span>
                    </div>
                    <span
                      className={`text-lg transform transition-transform ${
                        open ? "rotate-45" : "rotate-0"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {open && (
                    <div className="mt-2 text-gray-600">
                      <p>{desc}</p>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </section>

        {/* Before/After Section */}
        <BeforeAfterSection />

        {/* CTA */}
        <section className="py-20 px-6 text-center bg-sky-500 text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-6"
          >
            Nâng Cao Tốc Độ Website Ngay
          </motion.h2>
          <p className="mb-6">
            Hãy áp dụng các bước và mẹo trên để website của bạn đạt hiệu suất tối ưu
            và chuẩn SEO.
          </p>
          <Link
            href="/blog"
            className="bg-white text-stone-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Xem Blog →
          </Link>
        </section>
      </main>

      
    </>
  );
}
