"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaTag } from "react-icons/fa";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Dữ liệu bài viết
const posts = [
  {
    slug: "ui-ecommerce",
    title: "Tối ưu UI cho website E-commerce",
    excerpt: "Các nguyên tắc thiết kế UI giúp tăng trải nghiệm và doanh số trên website bán hàng.",
    tags: ["UI", "Performance"],
  },
  {
    slug: "audit-seo-lighthouse",
    title: "Audit SEO bằng Lighthouse",
    excerpt: "Hướng dẫn từng bước kiểm tra SEO, tốc độ và accessibility bằng Lighthouse.",
    tags: ["SEO", "Performance"],
  },
  {
    slug: "ssr-vs-csr",
    title: "SSR vs CSR: Chọn cái nào cho web của bạn?",
    excerpt: "So sánh Server-Side Rendering và Client-Side Rendering về tốc độ, SEO và UX.",
    tags: ["Performance", "SEO", "UI"],
  },
  {
    slug: "case-study-speed",
    title: "Case Study: Tăng tốc website 200%",
    excerpt: "Một ví dụ thực tế cải thiện hiệu suất website lên gấp đôi với các kỹ thuật tối ưu.",
    tags: ["Performance", "SEO"],
  },
  {
    slug: "tailwind-tips",
    title: "Cách sử dụng Tailwind hiệu quả",
    excerpt: "Các tips sử dụng Tailwind CSS để viết code nhanh, gọn và maintainable.",
    tags: ["UI", "Performance"],
  },
  {
    slug: "image-optimization",
    title: "Giảm thời gian tải hình ảnh trên website",
    excerpt: "Sử dụng WebP/AVIF, Lazy Load, CDN để tối ưu tốc độ và trải nghiệm người dùng.",
    tags: ["Performance"],
  },
  {
    slug: "seo-metadata",
    title: "Tối ưu Metadata cho SEO",
    excerpt: "Hướng dẫn đặt title, description, social tags để tăng thứ hạng tìm kiếm.",
    tags: ["SEO"],
  },
  {
    slug: "design-system-ui",
    title: "Design System cho UI Consistency",
    excerpt: "Xây dựng Design System để duy trì tính nhất quán trên toàn bộ dự án web.",
    tags: ["UI"],
  },
  {
    slug: "minify-css-js",
    title: "Giảm thiểu CSS và JS cho tốc độ tải nhanh",
    excerpt: "Các kỹ thuật minify, bundle và lazy load scripts giúp tăng hiệu suất.",
    tags: ["Performance"],
  },
  {
    slug: "seo-ecommerce-case",
    title: "Case Study: SEO tự nhiên cho e-commerce",
    excerpt: "Chiến lược SEO thực tế giúp website bán hàng lên top Google mà không cần quảng cáo.",
    tags: ["SEO", "Performance"],
  },
];


const allTags = ["All", "UI", "SEO", "Performance"];

export default function BlogPage() {
  const [selectedTag, setSelectedTag] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredPosts =
    selectedTag === "All"
      ? posts
      : posts.filter((post) => post.tags.includes(selectedTag));

  const visiblePosts = filteredPosts.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-50 text-slate-800">
        {/* Hero */}
        <section className="py-24 px-6 bg-gradient-to-r from-purple-500 to-pink-300 text-white text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            Blog Chuyên Sâu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl max-w-2xl mx-auto"
          >
            Thư viện kiến thức về UI, SEO và Performance để nâng cấp website.
          </motion.p>
        </section>

        {/* Content */}
        <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="md:col-span-1 bg-white rounded-xl shadow-md p-6 h-auto">
            <h3 className="text-xl font-semibold mb-4 text-purple-600">Filter theo Tag</h3>
            <ul className="space-y-2">
              {allTags.map((tag) => (
                <li
                  key={tag}
                  className={`cursor-pointer ${
                    selectedTag === tag ? "font-bold text-purple-600" : "text-gray-700"
                  }`}
                  onClick={() => setSelectedTag(tag)}
                >
                  <FaTag className="inline mr-2 text-yellow-500" /> {tag}
                </li>
              ))}
            </ul>
          </aside>

          {/* Blog Grid */}
          <div className="md:col-span-3 grid sm:grid-cols-2 gap-6">
            {visiblePosts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition"
              >
                <div>
                  <h4 className="text-xl font-bold mb-2 text-purple-600">{post.title}</h4>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm bg-purple-100 text-purple-700 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 text-purple-600 font-medium hover:underline"
                >
                  Xem chi tiết →
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Load More Button */}
        {visibleCount < filteredPosts.length && (
          <div className="text-center mt-8">
            <button
              onClick={loadMore}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              Xem thêm bài viết
            </button>
          </div>
        )}

        {/* Nội dung bổ sung phía dưới */}
        <section className="py-16 px-6 max-w-4xl mx-auto text-gray-700 space-y-6">
          <h3 className="text-2xl font-bold text-purple-600 mb-4">Tài nguyên & Công cụ bổ sung</h3>
          <p>
            Khám phá thêm các công cụ tối ưu hiệu suất web như Lighthouse, WebPageTest, PageSpeed Insights và các framework hiện đại giúp tăng tốc trang web.
          </p>
          <p>
            Các bài viết, case study và ví dụ thực tế sẽ giúp bạn áp dụng kiến thức vào website của mình một cách dễ dàng và hiệu quả.
          </p>
          <p>
            Đừng quên tối ưu hình ảnh, lazy load, sử dụng CDN và giảm thiểu CSS/JS để đạt trải nghiệm người dùng tốt nhất.
          </p>
        </section>
      </main>

      {/* CTA */}
      <section className="py-24 px-6 bg-gradient-to-r from-purple-500 to-pink-300 text-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Bắt đầu tối ưu ngay hôm nay
        </motion.h2>
        <p className="mb-6 text-lg md:text-xl">
          Hãy áp dụng các bước và mẹo trên để website của bạn đạt hiệu suất tối ưu, chuẩn SEO và thân thiện với người dùng.
        </p>
        <Link
          href="/demo"
          className="bg-white text-pink-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Xem Demo →
        </Link>
      </section>

      <Footer />
    </>
  );
}
