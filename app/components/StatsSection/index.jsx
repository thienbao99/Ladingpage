"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "40%", text: "Tăng tốc độ tải trang" },
  { number: "60%", text: "Giữ chân người dùng lâu hơn" },
  { number: "30%", text: "Cải thiện SEO tự nhiên" },
];

export default function StatsSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-slate-800 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Hiệu quả sau khi tối ưu
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              className="p-6 bg-white shadow rounded-xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <p className="text-4xl font-bold text-blue-600">{s.number}</p>
              <p className="text-gray-600 mt-2">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
