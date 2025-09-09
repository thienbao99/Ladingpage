"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaClock, FaTools, FaLink, FaShieldAlt, FaQuestionCircle, FaLightbulb } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function HocSeoCoBanPage() {
  const [activeDay, setActiveDay] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleDay = (index) => setActiveDay(activeDay === index ? null : index);
  const toggleFaq = (index) => setActiveFaq(activeFaq === index ? null : index);

  const days = [
    {
      title: "Ngày 1: On-page SEO",
      desc: [
        "Nghiên cứu từ khóa cho website.",
        "Viết nội dung chất lượng, phù hợp từ khóa.",
        "Tối ưu tiêu đề, meta description, URL, hình ảnh và liên kết nội bộ.",
        "Sử dụng công cụ kiểm tra và cải thiện On-page SEO.",
      ],
      icon: <FaTools className="text-green-600 w-6 h-6" />,
      img: "/images/onpage-seo.png",
    },
    {
      title: "Ngày 2: Off-page SEO",
      desc: [
        "Hiểu tầm quan trọng của backlink.",
        "Xây dựng backlink chất lượng từ website uy tín.",
        "Xây dựng Entity.",
        "Sử dụng công cụ để kiểm tra và cải thiện Off-page SEO.",
      ],
      icon: <FaLink className="text-blue-600 w-6 h-6" />,
      img: "/images/networking.png",
    },
    {
      title: "Ngày 3: Technical SEO",
      desc: [
        "Tăng tốc độ tải trang.",
        "Thiết kế responsive cho mọi thiết bị.",
        "Tạo & gửi sitemap cho Google.",
        "Sử dụng robots.txt để kiểm soát crawl.",
        "Bảo mật website bằng SSL.",
        "Sử dụng công cụ để cải thiện Technical SEO.",
      ],
      icon: <FaShieldAlt className="text-purple-600 w-6 h-6" />,
      img: "/images/service.png",
    },
  ];

  const faqs = [
    {
      q: "SEO cơ bản có mất phí không?",
      a: "Bạn có thể tự học SEO cơ bản miễn phí, nhưng một số công cụ nâng cao như Ahrefs là trả phí.",
    },
    {
      q: "Cần bao lâu để thấy kết quả SEO?",
      a: "Thông thường 1-3 tháng, tùy nội dung, backlink và mức độ cạnh tranh.",
    },
    {
      q: "Có cần cập nhật thường xuyên sau khi SEO?",
      a: "Có. Google cập nhật thuật toán liên tục, nên cần điều chỉnh chiến lược.",
    },
  ];

  const tips = [
    "Sử dụng canonical URL để tránh duplicate content.",
    "Tối ưu hóa hình ảnh (alt text + size).",
    "Sử dụng schema markup cho rich snippets.",
    "Internal linking hợp lý giữa các trang.",
    "Tạo sitemap và robots.txt chuẩn.",
  ];

  const resources = [
    { text: "Google Search Central", url: "https://developers.google.com/search" },
    { text: "Moz Beginner's Guide to SEO", url: "https://moz.com/beginners-guide-to-seo" },
    { text: "Ahrefs Blog", url: "https://ahrefs.com/blog" },
  ];

  return (
    <>
     

      <main className="min-h-screen bg-gray-50 text-slate-800">

        {/* Hero */}
        <section className="py-24 px-6 bg-gradient-to-r from-green-600 to-green-400 text-white text-center">
          <motion.h1 initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl font-extrabold mb-4">
            Tự Học SEO Cơ Bản Trong 3 Ngày
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-lg md:text-xl max-w-2xl mx-auto">
            Học SEO Marketing từng bước, thực hành ngay trên website của bạn.
          </motion.p>
        </section>

        {/* Chuẩn bị */}
        <section className="py-16 px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-green-600 text-center">Cần Chuẩn Bị Gì?</h2>
          <div className="space-y-6">
            {[
              { icon: <FaTools className="text-green-500 w-6 h-6" />, title: "Chuẩn bị website", desc: "Tạo website thực hành, chọn tên miền liên quan chủ đề." },
              { icon: <FaClock className="text-blue-500 w-6 h-6" />, title: "Sắp xếp lịch học", desc: "Chia nhỏ mục tiêu, đặt deadline, xác định thời gian học phù hợp." },
              { icon: <FaCheckCircle className="text-green-500 w-6 h-6" />, title: "Công cụ hỗ trợ SEO", desc: "Sử dụng Search Console, Analytics, Ahrefs, Keywordtool.io để tối ưu." },
              { icon: <FaShieldAlt className="text-purple-500 w-6 h-6" />, title: "Kiên trì học tập", desc: "Duy trì thói quen, thực hành và tham khảo tài liệu khi cần." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.2 }} className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                {item.icon}
                <div><h3 className="font-semibold text-lg mb-1">{item.title}</h3><p className="text-gray-700">{item.desc}</p></div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Accordion Lộ trình 3 ngày + Infographic & Hình */}
        <section className="py-16 px-6 bg-green-50">
          <h2 className="text-3xl font-bold mb-12 text-green-600 text-center">Lộ Trình 3 Ngày</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {days.map((day, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }} className="bg-white rounded-xl shadow-md overflow-hidden">
                <button onClick={() => toggleDay(i)} className="w-full flex items-center justify-between p-4 font-semibold text-left text-gray-800 hover:bg-gray-100 transition">
                  <div className="flex items-center gap-3">{day.icon}{day.title}</div>
                  <span>{activeDay === i ? "-" : "+"}</span>
                </button>
                {activeDay === i && (
  <div className="px-6 pb-4 pt-2 text-gray-700">
    <div className="flex flex-col md:flex-row gap-6 items-start">
      {/* Phần text */}
      <div className="flex-1 space-y-2">
        {day.desc.map((line, idx) => <p key={idx}>• {line}</p>)}
      </div>
      {/* Phần ảnh */}
      {day.img && (
        <div className="flex-shrink-0 w-full md:w-48">
          <Image
            src={day.img} 
            alt={day.title}
            width={192}
            height={192}
            priority
            className="rounded-lg shadow-md object-contain w-full h-48"
          />
        </div>
      )}
    </div>
  </div>
)}

              </motion.div>
            ))}
          </div>
        </section>

        {/* Mẹo & Best practices */}
        <section className="py-16 px-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md">
          <h2 className="text-3xl font-bold mb-8 text-green-600 text-center">Mẹo & Best Practices</h2>
          <ul className="space-y-3">
            {tips.map((tip, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700">
                <FaLightbulb className="text-yellow-500" /> {tip}
              </li>
            ))}
          </ul>
        </section>

        {/* Video hướng dẫn */}
        <section className="py-16 px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-green-600">Video Hướng Dẫn Nhanh</h2>
          <div className="mx-auto w-full max-w-6xl">
            <iframe
              src="https://www.youtube.com/embed/FgxbuAtAeWc"
              title="Video hướng dẫn SEO"
              allowFullScreen
              loading="lazy"
              className="w-full h-[60vw] min-h-[400px] rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="py-16 px-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md">
          <h2 className="text-3xl font-bold mb-10 text-green-600 text-center">Câu Hỏi Thường Gặp</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }} className="border rounded-lg overflow-hidden">
                <button onClick={() => toggleFaq(i)} className="w-full flex items-center justify-between px-4 py-3 font-semibold text-left text-gray-800 hover:bg-gray-50 transition">
                  <div className="flex items-center gap-3"><FaQuestionCircle className="text-blue-500 w-5 h-5" />{faq.q}</div>
                  <span>{activeFaq === i ? "-" : "+"}</span>
                </button>
                {activeFaq === i && <div className="px-6 pb-4 pt-2 text-gray-700"><p>{faq.a}</p></div>}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Resources */}
        <section className="py-16 px-6 max-w-4xl mx-auto bg-green-50 rounded-xl shadow-md">
          <h2 className="text-3xl font-bold mb-6 text-green-600 text-center">Tài Liệu & Tham Khảo</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {resources.map((r, i) => (
              <li key={i}><a href={r.url} target="_blank" className="text-blue-600 hover:underline">{r.text}</a></li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 text-center bg-green-600 text-white">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl font-bold mb-6">
            Nâng Cao Hiệu Suất Website
          </motion.h2>
          <p className="mb-6">Sau khi học SEO cơ bản, tiếp tục tối ưu hiệu suất tổng thể để website đạt chuẩn Google.</p>
          <Link href="/hieu-suat" className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Tìm Hiểu Hiệu Suất →
          </Link>
        </section>

      </main>

      
    </>
  );
}
