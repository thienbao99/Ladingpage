"use client";

import { useState, useEffect } from "react";

export default function ConsultFormModal({ isOpen, onClose, initialEmail = "" }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // Khóa scroll khi mở modal
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isOpen]);

  // Cập nhật email từ Banner khi modal mở
  useEffect(() => {
    if (initialEmail) {
      setForm((prev) => ({ ...prev, email: initialEmail }));
    }
  }, [initialEmail]);

  if (!isOpen) return null;

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
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => {
          setStatus("");
          onClose();
        }, 1200);
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
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative transform transition-all duration-300 scale-95 animate-scaleIn">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          aria-label="Đóng"
        >
          ✕
        </button>

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

        {status && (
          <p className="text-center text-sm mt-3 text-gray-700">{status}</p>
        )}
      </div>
    </div>
  );
}
