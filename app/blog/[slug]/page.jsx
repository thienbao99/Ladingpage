"use client";

import { useParams } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import ConsultFormInLine from "../../components/ConsultFormInLine";
import { postContents } from "../../data/postContents";

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
        <div className="prose max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: content }} />
        <div className="mt-14 text-center">
          <Link href="/blog" className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
            Quay lại Blog
          </Link>
          <div className="mt-14">
            <ConsultFormInLine />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
