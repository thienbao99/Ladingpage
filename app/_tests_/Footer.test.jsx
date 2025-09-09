// app/_tests_/Footer.test.jsx ------  chay voi lenh: npm test
import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

describe("Footer Component", () => {
  test("renders copyright", () => {
    render(<Footer />);

    // Lấy <footer> theo role
    const footer = screen.getByRole("contentinfo");

    // kiểm tra có ký tự ©
    expect(footer.textContent).toMatch(/©/);

    // kiểm tra có thương hiệu "Tối Ưu Hóa Web"
    expect(footer.textContent).toMatch(/Tối Ưu Hóa Web/i);
  });

  test("renders social media icons", () => {
    render(<Footer />);

    // kiểm tra có link tới social media
    expect(screen.getAllByRole("link").length).toBeGreaterThanOrEqual(5);
  });

  test("renders contact info", () => {
    render(<Footer />);

    // kiểm tra số điện thoại có trong text
    expect(screen.getByText(/\+84 123 456 789/)).toBeInTheDocument();

    // kiểm tra email có trong text
    expect(screen.getByText(/thienbaopro2004@gmail.com/)).toBeInTheDocument();
  });
});
