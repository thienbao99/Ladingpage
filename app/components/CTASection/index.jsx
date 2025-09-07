"use client";

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Sẵn sàng tối ưu website của bạn?
      </motion.h2>
      <motion.p
        className="mb-8 text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Khám phá cách UI hiện đại và SEO kỹ thuật có thể giúp web của bạn bứt phá.
      </motion.p>
      <motion.a
        href="/ui-toi-uu"
        className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
        whileHover={{ scale: 1.05 }}
      >
        Tìm hiểu ngay
      </motion.a>
    </section>
  );
}
