"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import ConsultFormInline from "../components/ConsultFormInline";

export default function SummaryPage() {
  return (
    <>
      
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 text-slate-800">
        
        {/* Tổng kết */}
        <section className="px-6 py-20 max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-6"
          >
            Tổng Kết Hành Trình Tối Ưu Website
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            Chúng ta đã đi qua các bước quan trọng: tối ưu hình ảnh, mã nguồn, 
            sử dụng CDN và cache, nâng cấp hosting, cũng như cải thiện trải nghiệm người dùng. 
            Tất cả đều hướng đến một mục tiêu duy nhất: <strong>tốc độ nhanh, 
            hiệu suất cao và chuẩn SEO bền vững</strong>.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: "Hiệu suất",
                desc: "Website tải nhanh, giảm tỉ lệ thoát trang.",
                color: "bg-green-100 text-green-700"
              },
              {
                title: "Trải nghiệm",
                desc: "Thiết kế thân thiện, dễ dùng trên mọi thiết bị.",
                color: "bg-blue-100 text-blue-700"
              },
              {
                title: "SEO",
                desc: "Tối ưu cho công cụ tìm kiếm, tăng khả năng hiển thị.",
                color: "bg-yellow-100 text-yellow-700"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className={`rounded-xl shadow-md p-6 ${item.color}`}
              >
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-20 bg-gradient-to-r from-blue-500 to-green-400 text-white text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Đã sẵn sàng tăng tốc Website của bạn?
          </motion.h2>

            {/* Nội dung tham khảo */}
  <div className="max-w-3xl mx-auto text-lg md:text-xl mb-10 leading-relaxed space-y-6">
    <p>
      Việc tối ưu hiệu suất không chỉ cải thiện <strong>trải nghiệm người dùng</strong>, 
      mà còn trực tiếp tác động đến <strong>SEO</strong> và <strong>doanh thu</strong>. 
      Nhiều nghiên cứu cho thấy:
    </p>
    <ul className="text-left list-disc list-inside space-y-3">
      <li>⏱️ Website tải chậm hơn 3 giây có thể mất tới <strong>53% người dùng</strong>.</li>
      <li>📊 Tốc độ tải tăng 1s có thể giúp tỷ lệ chuyển đổi tăng từ <strong>7% đến 12%</strong>.</li>
      <li>💡 Google sử dụng <strong>Core Web Vitals</strong> làm yếu tố xếp hạng tìm kiếm.</li>
      <li>🚀 Trang web mượt mà giúp giữ chân khách hàng và tăng độ tin cậy thương hiệu.</li>
    </ul>
    <p>
      Bạn có thể bắt đầu với những việc đơn giản như nén ảnh, giảm mã thừa, dùng CDN, 
      hoặc triển khai các chiến lược nâng cao như tối ưu server và kiểm thử Lighthouse định kỳ.
    </p>
  </div>
          <div className="flex justify-center gap-4">
            <Link
              href="/demo"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
            >
              Xem Demo
            </Link>
            <Link
              href="#consult-form"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-green-700 transition"
            >
              Nhận Tư Vấn
            </Link>
          </div>
        </section>

        {/* Tổng kết + CTA */}
        <section className="bg-purple-50 p-12 rounded-2xl text-center max-w-4xl mx-auto my-12 shadow-md">
          <h2 className="text-3xl font-bold text-purple-700 mb-6">
            Kết quả sau tối ưu
          </h2>
          <ul className="space-y-3 text-lg text-gray-700 mb-8">
            <li>🚀 Tốc độ tải nhanh gấp 3 lần</li>
            <li>📈 SEO tăng mạnh, dễ dàng lên top Google</li>
            <li>🎯 Trải nghiệm mượt mà, tăng tỉ lệ giữ chân</li>
          </ul>
            <div id="consult-form">
                 <ConsultFormInline />
            </div>
          <div className="mt-8">
            <Link
              href="/blog"
              className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              Xem Thêm Blog →
            </Link>
          </div>
        </section>


      </main>
      
    </>
  );
}
