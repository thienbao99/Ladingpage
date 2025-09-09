"use client";

import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaCogs,
  FaUsers,
  FaPaintBrush,
  FaChartLine,
} from "react-icons/fa";
import Link from "next/link";

export default function UiToiUuContent() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      {/* Intro */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6 text-blue-600"
        >
          Tối Ưu UI – Giao Diện Đẹp, Trải Nghiệm Tốt
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-600"
        >
          Một UI tối ưu không chỉ giúp website trông chuyên nghiệp mà còn cải thiện trải nghiệm người dùng, giảm tỉ lệ thoát và tăng chuyển đổi.
        </motion.p>
      </section>

      {/* Lợi ích */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3 text-center">
          {[
            {
              icon: <FaChartLine size={40} className="text-blue-600" />,
              title: "Tăng chuyển đổi",
              desc: "UI đẹp và rõ ràng giúp người dùng dễ ra quyết định.",
            },
            {
              icon: <FaUsers size={40} className="text-green-600" />,
              title: "Cải thiện UX",
              desc: "Trải nghiệm mượt mà, tăng sự hài lòng và quay lại.",
            },
            {
              icon: <FaPaintBrush size={40} className="text-pink-600" />,
              title: "Nâng cao thương hiệu",
              desc: "UI chuyên nghiệp giúp tăng uy tín và sự tin tưởng.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lỗi phổ biến */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
          Các Lỗi UI Phổ Biến Cần Tránh
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {[
            { icon: <FaTimesCircle size={28} className="text-red-500" />, text: "Font chữ quá nhỏ, thiếu tương phản màu sắc." },
            { icon: <FaTimesCircle size={28} className="text-red-500" />, text: "Bố cục rối rắm, không theo grid chuẩn." },
            { icon: <FaTimesCircle size={28} className="text-red-500" />, text: "Điều hướng khó tìm, UX kém." },
            { icon: <FaTimesCircle size={28} className="text-red-500" />, text: "Thiếu alt text cho ảnh, không hỗ trợ accessibility." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg shadow-sm"
            >
              {item.icon}
              <p className="text-gray-700">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quy trình tối ưu */}
      <section className="py-16 px-6 bg-blue-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">
            Quy Trình Tối Ưu UI
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {["Đánh giá UI hiện tại","Thiết kế wireframe/prototype","Test người dùng","Triển khai & cải thiện"].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <FaCogs size={30} className="mx-auto mb-3 text-blue-600" />
                <h4 className="font-semibold text-gray-800">{step}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">
          Checklist Nhanh UI Tối Ưu
        </h2>
        <ul className="space-y-4">
          {["Responsive cho mọi thiết bị.","Contrast màu đạt chuẩn WCAG.","Font dễ đọc, tối thiểu 16px.","Navigation rõ ràng, dễ hiểu.","Alt text đầy đủ cho hình ảnh."].map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="flex items-center gap-3"
            >
              <FaCheckCircle className="text-green-500" />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-blue-600">
            Câu Hỏi Thường Gặp
          </h2>
          <div className="space-y-6">
            {[
              { q: "Tối ưu UI có làm chậm website không?", a: "Không, nếu được thực hiện đúng cách, tối ưu UI còn giúp website load nhanh hơn nhờ bố cục gọn gàng." },
              { q: "UI Optimization khác gì với UX?", a: "UI tập trung vào giao diện (màu sắc, font, layout), còn UX liên quan đến toàn bộ trải nghiệm người dùng." },
              { q: "Có cần kết hợp với SEO không?", a: "Có, UI tối ưu giúp giảm bounce rate, hỗ trợ SEO hiệu quả hơn." },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <h4 className="font-semibold text-gray-800">{faq.q}</h4>
                <p className="text-gray-600 mt-2">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-blue-600 text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6"
        >
          Sẵn sàng cho bước tiếp theo?
        </motion.h2>
        <p className="mb-6">
          Sau khi tối ưu UI, hãy đảm bảo website của bạn chuẩn SEO kỹ thuật để bứt phá hiệu suất.
        </p>
        <Link
          href="/seo-ky-thuat"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Tìm hiểu SEO Kỹ Thuật →
        </Link>
      </section>
    </main>
  );
}
