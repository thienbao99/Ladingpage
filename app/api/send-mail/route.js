import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
  from: `"Tư vấn Website" <${process.env.EMAIL_USER}>`, // luôn là bạn
  to: process.env.EMAIL_TO,                        // bạn nhận
  subject: `Yêu cầu tư vấn từ ${name}`,
  text: `Tên: ${name}\nEmail: ${email}\nNội dung: ${message}`,
  html: `
    <h3>Thông tin tư vấn</h3>
    <p><b>Tên:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Nội dung:</b> ${message}</p>
  `,
  replyTo: email,  // 👈 quan trọng: khi bạn bấm "Reply" sẽ trả lời thẳng cho người nhập
});


    return Response.json({ success: true });
  } catch (err) {
    console.error("❌ Send mail error:", err);
    return Response.json({ success: false, message: err.message }, { status: 500 });
  }
}
