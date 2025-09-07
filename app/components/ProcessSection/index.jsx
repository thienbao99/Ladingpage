"use client";

import { motion } from "framer-motion";
import { FaLightbulb, FaCode, FaCheckCircle } from "react-icons/fa";

const steps = [
  { icon: <FaLightbulb />, title: "Phân tích", desc: "Đánh giá giao diện và hiệu suất ban đầu." },
  { icon: <FaCode />, title: "Tối ưu", desc: "Cải thiện UI, SEO, tốc độ tải." },
  { icon: <FaCheckCircle />, title: "Kiểm thử", desc: "Đảm bảo trải nghiệm mượt mà trên mọi thiết bị." },
];

export default function ProcessSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-slate-800 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Quy trình tối ưu hóa Web
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="p-8 border rounded-xl shadow-sm hover:shadow-md transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="text-4xl text-blue-600 mb-4 flex justify-center">
                {step.icon}
              </div>
              <h3 className="font-semibold text-lg text-slate-700">{step.title}</h3>
              <p className="text-gray-600 mt-2">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
