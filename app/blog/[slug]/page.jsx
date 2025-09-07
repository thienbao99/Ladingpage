"use client";

import { useParams } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import ConsultFormInline from "../../components/ConsultFormInline";

// Nội dung chi tiết từng bài viết
const postContents = {
  "ui-ecommerce": `
    <h1 class="text-4xl font-bold mb-4 text-purple-600">Tối ưu UI cho website E-commerce</h1>
    <p>Thiết kế UI chuẩn giúp người dùng dễ thao tác và tăng tỷ lệ chuyển đổi. Dưới đây là các cách nâng cao trải nghiệm người dùng trên website bán hàng.</p>
    
    <h2 class="text-2xl font-semibold mt-6 mb-2">⭐ Mẹo Giao diện</h2>
    <ul class="list-disc ml-6 mb-4">
      <li>Sử dụng màu sắc hài hòa, đồng nhất với thương hiệu.</li>
      <li>Tối ưu bố cục grid để dễ dàng sắp xếp sản phẩm.</li>
      <li>Thiết kế nút kêu gọi hành động (CTA) rõ ràng và nổi bật.</li>
    </ul>
    
    <h2 class="text-2xl font-semibold mt-6 mb-2">🛠️ Công cụ & Thực hành</h2>
    <p>Áp dụng các component reusable, font tối ưu, lazy load hình ảnh, và CDN để tăng tốc độ tải.</p>
    <img src="/images/ui-ecommerce-detail.jpg" class="rounded-md my-4" />
    
    <h2 class="text-2xl font-semibold mt-6 mb-2">📝 Bài tập gợi ý</h2>
    <p>Thực hành thiết kế một trang sản phẩm theo chuẩn UI/UX và đo trải nghiệm người dùng bằng A/B Testing.</p>
  `,
  "audit-seo-lighthouse": `
    <h1 class="text-4xl font-bold mb-4 text-purple-600">Audit SEO bằng Lighthouse</h1>
    <p>Hướng dẫn từng bước kiểm tra SEO, tốc độ và accessibility bằng Lighthouse.</p>
    
    <h2 class="text-2xl font-semibold mt-6 mb-2">⭐ Mẹo SEO</h2>
    <ul class="list-disc ml-6 mb-4">
      <li>Đảm bảo title, meta description chuẩn SEO.</li>
      <li>Sử dụng heading đúng thứ tự H1-H6.</li>
      <li>Kiểm tra các liên kết bị lỗi và redirect không cần thiết.</li>
    </ul>
    
    <h2 class="text-2xl font-semibold mt-6 mb-2">🛠️ Công cụ & Thực hành</h2>
    <p>Sử dụng Lighthouse và PageSpeed Insights để đánh giá hiệu suất, accessibility, SEO và Best Practices.</p>
    <img src="/images/lighthouse-detail.jpg" class="rounded-md my-4" />
    
    <h2 class="text-2xl font-semibold mt-6 mb-2">📝 Bài tập gợi ý</h2>
    <p>Audit website cá nhân hoặc dự án e-commerce, ghi lại điểm số và tối ưu các lỗi được đề xuất.</p>
  `,
  "ssr-vs-csr": `
    <h1 class="text-4xl font-bold mb-4 text-purple-600">SSR vs CSR: Chọn cái nào?</h1>
    <p>So sánh Server-Side Rendering và Client-Side Rendering về tốc độ, SEO và UX.</p>
    
    <h2 class="text-2xl font-semibold mt-6 mb-2">⭐ Ưu điểm & Nhược điểm</h2>
    <ul class="list-disc ml-6 mb-4">
      <li>SSR: SEO tốt, tải trang ban đầu nhanh, dễ index Google.</li>
      <li>CSR: Trải nghiệm người dùng mượt, thích hợp SPA.</li>
      <li>Kết hợp SSR + CSR cho các trang quan trọng.</li>
    </ul>
    
    <h2 class="text-2xl font-semibold mt-6 mb-2">🛠️ Công cụ & Thực hành</h2>
    <p>Thực hành render trang SSR cho blog, trang sản phẩm, kết hợp với CSR cho tính năng động.</p>
    <img src="/images/ssr-csr-detail.jpg" class="rounded-md my-4" />
    
    <h2 class="text-2xl font-semibold mt-6 mb-2">📝 Bài tập gợi ý</h2>
    <p>Soạn một trang blog sử dụng SSR và đánh giá tốc độ tải, SEO và UX.</p>
  `,
  "case-study-speed": `
    <h1 class="text-4xl font-bold mb-4 text-purple-600">Case Study: Tăng tốc website 200%</h1>
    <p>Ví dụ thực tế cải thiện hiệu suất website lên gấp đôi với các kỹ thuật tối ưu.</p>
    
    <h2 class="text-2xl font-semibold mt-6 mb-2">⭐ Phương pháp</h2>
    <ul class="list-disc ml-6 mb-4">
      <li>Lazy load hình ảnh, video, script không cần thiết.</li>
      <li>CDN phân phối nội dung gần người dùng.</li>
      <li>Nén CSS/JS, tối ưu database và caching.</li>
    </ul>
    
    <h2 class="text-2xl font-semibold mt-6 mb-2">🛠️ Công cụ & Thực hành</h2>
    <img src="/images/case-speed-detail.jpg" class="rounded-md my-4" />
    <p>Sử dụng Lighthouse, WebPageTest, GTmetrix để đo hiệu suất trước và sau tối ưu.</p>
    
    <h2 class="text-2xl font-semibold mt-6 mb-2">📝 Bài tập gợi ý</h2>
    <p>Áp dụng kỹ thuật tối ưu cho website cá nhân và đo hiệu suất cải thiện.</p>
  `,
  "tailwind-tips": `
    <h1 class="text-4xl font-bold mb-4 text-purple-600">Cách sử dụng Tailwind hiệu quả</h1>
    <p>Các tips sử dụng Tailwind CSS để viết code nhanh, gọn và maintainable.</p>
    
    <h2 class="text-2xl font-semibold mt-6 mb-2">⭐ Mẹo Tailwind</h2>
    <ul class="list-disc ml-6 mb-4">
      <li>Sử dụng utility classes thay vì CSS truyền thống.</li>
      <li>Tận dụng variants và @apply cho consistency.</li>
      <li>Build sạch với PurgeCSS để loại bỏ CSS dư thừa.</li>
    </ul>
    
    <h2 class="text-2xl font-semibold mt-6 mb-2">🛠️ Công cụ & Thực hành</h2>
    <img src="/images/tailwind-detail.jpg" class="rounded-md my-4" />
    <p>Tạo component reusable, theme và spacing consistent cho dự án.</p>
    
    <h2 class="text-2xl font-semibold mt-6 mb-2">📝 Bài tập gợi ý</h2>
    <p>Xây dựng một component library và áp dụng Tailwind cho UI dự án mẫu.</p>
  `,
  "image-optimization": `
    <h1 class="text-4xl font-bold mb-4 text-purple-600">Giảm thời gian tải hình ảnh trên website</h1>
    <p>Sử dụng WebP/AVIF, Lazy Load, CDN để tối ưu tốc độ và trải nghiệm người dùng.</p>
    
    <h2 class="text-2xl font-semibold mt-6 mb-2">⭐ Mẹo tối ưu ảnh</h2>
    <ul class="list-disc ml-6 mb-4">
      <li>Chuyển đổi ảnh sang WebP hoặc AVIF.</li>
      <li>Lazy load các ảnh ngoài màn hình hiển thị.</li>
      <li>Preload ảnh cần thiết để cải thiện UX.</li>
    </ul>
    
    <h2 class="text-2xl font-semibold mt-6 mb-2">🛠️ Công cụ & Thực hành</h2>
    <img src="/images/image-opt-detail.jpg" class="rounded-md my-4" />
    <p>Dùng CDN để phân phối ảnh gần người dùng, giảm latency.</p>
    
    <h2 class="text-2xl font-semibold mt-6 mb-2">📝 Bài tập gợi ý</h2>
    <p>Tối ưu tất cả hình ảnh trên website mẫu và đo tốc độ trước và sau.</p>
  `,
  "seo-metadata": `
    <h1 class="text-4xl font-bold mb-4 text-purple-600">Tối ưu Metadata cho SEO</h1>
    <p>Hướng dẫn đặt title, description, social tags để tăng thứ hạng tìm kiếm.</p>
    
    <h2 class="text-2xl font-semibold mt-6 mb-2">⭐ Mẹo SEO Metadata</h2>
    <ul class="list-disc ml-6 mb-4">
      <li>Title ngắn gọn, chứa từ khóa chính.</li>
      <li>Description hấp dẫn, 150-160 ký tự.</li>
      <li>Thêm Open Graph & Twitter card để chia sẻ đẹp.</li>
    </ul>
    
    <h2 class="text-2xl font-semibold mt-6 mb-2">🛠️ Công cụ & Thực hành</h2>
    <img src="/images/seo-meta-detail.jpg" class="rounded-md my-4" />
    <p>Kiểm tra bằng Lighthouse hoặc SEO tool khác để đảm bảo metadata chuẩn.</p>
  `,
  "design-system-ui": `
    <h1 class="text-4xl font-bold mb-4 text-purple-600">Design System cho UI Consistency</h1>
    <p>Xây dựng Design System để duy trì tính nhất quán trên toàn bộ dự án web.</p>
    
    <h2 class="text-2xl font-semibold mt-6 mb-2">⭐ Mẹo Design System</h2>
    <ul class="list-disc ml-6 mb-4">
      <li>Tạo style guide và component library.</li>
      <li>Đảm bảo typography, spacing, màu sắc thống nhất.</li>
      <li>Dùng Storybook để quản lý component và tài liệu hóa.</li>
    </ul>
    
    <h2 class="text-2xl font-semibold mt-6 mb-2">🛠️ Công cụ & Thực hành</h2>
    <img src="/images/design-system-detail.jpg" class="rounded-md my-4" />
    <p>Áp dụng Design System vào tất cả trang web để đảm bảo consistency.</p>
  `,
  "minify-css-js": `
    <h1 class="text-4xl font-bold mb-4 text-purple-600">Giảm thiểu CSS và JS cho tốc độ tải nhanh</h1>
    <p>Minify, bundle, split code và lazy load module để tăng tốc trang web.</p>
    
    <h2 class="text-2xl font-semibold mt-6 mb-2">⭐ Mẹo Performance</h2>
    <ul class="list-disc ml-6 mb-4">
      <li>Minify CSS/JS để giảm dung lượng file.</li>
      <li>Bundle và code splitting để load module khi cần.</li>
      <li>Lazy load hình ảnh, font và script.</li>
    </ul>
    
    <h2 class="text-2xl font-semibold mt-6 mb-2">🛠️ Công cụ & Thực hành</h2>
    <img src="/images/minify-detail.jpg" class="rounded-md my-4" />
    <p>Kiểm tra performance bằng Lighthouse sau khi tối ưu.</p>
  `,
  "seo-ecommerce-case": `
    <h1 class="text-4xl font-bold mb-4 text-purple-600">Case Study: SEO tự nhiên cho e-commerce</h1>
    <p>Chiến lược SEO thực tế giúp website bán hàng lên top Google mà không cần quảng cáo.</p>
    
    <h2 class="text-2xl font-semibold mt-6 mb-2">⭐ Chiến lược SEO</h2>
    <ul class="list-disc ml-6 mb-4">
      <li>Nghiên cứu từ khóa chính và phụ.</li>
      <li>Viết content chuẩn SEO, tối ưu title và description.</li>
      <li>Internal linking, backlink chất lượng.</li>
    </ul>
    
    <h2 class="text-2xl font-semibold mt-6 mb-2">🛠️ Công cụ & Thực hành</h2>
    <img src="/images/seo-case-detail.jpg" class="rounded-md my-4" />
    <p>Theo dõi thứ hạng và điều chỉnh dựa trên analytics để cải thiện liên tục.</p>
  `,
};



export default function BlogDetailPage() {
  const { slug } = useParams();
  const content = postContents[slug];

  if (!content) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center text-gray-700">
          <h2 className="text-2xl font-bold">Bài viết không tồn tại.</h2>
          <Link href="/blog" className="ml-4 text-purple-600 hover:underline">
            Quay về Blog
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 text-slate-800 px-6 py-16 max-w-4xl mx-auto">
        <div
          className="prose max-w-none text-gray-700"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <div className="mt-14 text-center">
          <Link
            href="/blog"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Quay lại Blog
          </Link>
          {/* Form Inline luôn hiển thị */}
          <div className="mt-16">
             <ConsultFormInline initialEmail="" />
          </div>
        </div>
        
      </main>
      <Footer />
    </>
  );
}
