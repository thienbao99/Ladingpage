"use client";

import { useState } from "react";

export default function ConsultFormInline({ initialEmail = "" }) {
  const [form, setForm] = useState({ name: "", email: initialEmail, message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Đang gửi...");

    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("✅ Gửi thành công! Chúng tôi sẽ liên hệ sớm.");
        setForm({ name: "", email: initialEmail, message: "" });
        setTimeout(() => setStatus(""), 2000);
      } else {
        setStatus("❌ Lỗi: " + data.message);
      }
    } catch (e) {
      setStatus("❌ Không gửi được: " + e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-6 max-w-md mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
        Đăng ký tư vấn
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <span className="text-sm text-gray-700">Họ và tên</span>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="mt-1 w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </label>

        <label className="block">
          <span className="text-sm text-gray-700">Email</span>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="mt-1 w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </label>

        <label className="block">
          <span className="text-sm text-gray-700">Nội dung cần tư vấn</span>
          <textarea
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="mt-1 w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-60"
        >
          {loading ? "Đang gửi..." : "Gửi yêu cầu"}
        </button>
      </form>

      {status && <p className="text-center text-sm mt-3 text-gray-700">{status}</p>}
    </div>
  );
}
