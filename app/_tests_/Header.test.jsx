import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../components/Header";

// Mock ModalContext
const mockOpenModal = jest.fn();
jest.mock("../contexts/ModalContext", () => ({
  useModal: () => ({ openModal: mockOpenModal }),
}));

// Mock usePathname
jest.mock("next/navigation", () => ({
  usePathname: () => "/", // bạn có thể thay đổi pathname test menu active
}));

describe("Header Component", () => {
  beforeEach(() => {
    mockOpenModal.mockClear();
  });

  test("renders logo and navigation", () => {
    render(<Header />);
    expect(screen.getByText(/OptimalWeb/i)).toBeInTheDocument();
    expect(screen.getByText(/Trang chủ/i)).toBeInTheDocument();
  });

  test("calls openModal on desktop CTA click", () => {
    render(<Header />);
    const button = screen.getByText(/Đăng ký tư vấn/i);
    fireEvent.click(button);
    expect(mockOpenModal).toHaveBeenCalled();
  });

  test("toggles mobile menu and calls openModal", () => {
    render(<Header />);
    const mobileButton = screen.getByText("☰");
    fireEvent.click(mobileButton); // mở menu
    const ctaMobile = screen.getAllByText(/Đăng ký tư vấn/i)[1]; // mobile button
    fireEvent.click(ctaMobile);
    expect(mockOpenModal).toHaveBeenCalled();
  });
});
