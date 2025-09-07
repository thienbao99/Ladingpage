import dotenv from "dotenv";
import nodemailer from "nodemailer";

// Load biến môi trường
dotenv.config({ path: ".env.local" });  // <-- bắt buộc trỏ file env

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function send() {
  console.log("EMAIL_USER:", process.env.EMAIL_USER); // test thử biến có load ko
  console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Loaded ✅" : "Missing ❌");

  try {
    await transporter.verify();
    console.log("✅ Kết nối SMTP thành công!");
  } catch (err) {
    console.error("❌ Lỗi SMTP:", err);
  }
}

send();
// Chạy lệnh: node testMail.js