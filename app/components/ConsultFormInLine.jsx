"use client";

import { useState } from "react";

export default function ConsultFormInline() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
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
        setStatus("✅ Gửi thành công!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Lỗi: " + data.message);
      }
    } catch (err) {
      setStatus("❌ Không gửi được: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 border rounded-xl p-6 mt-8 shadow-md max-w-xl mx-auto">
      <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">Đăng ký tư vấn</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Họ và tên"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          rows={4}
          placeholder="Nội dung cần tư vấn"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
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
