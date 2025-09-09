import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ConsultFormInline from "../components/ConsultFormInline";
import "@testing-library/jest-dom";
import React from "react";

// Mock fetch global để test submit form
beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ success: true }),
    })
  );
});
// Reset mock sau mỗi test
afterEach(() => {
  jest.resetAllMocks();
});

describe("ConsultFormInline Component", () => {
  beforeEach(() => {
    render(<ConsultFormInline />);
  });

  test("renders form inputs and submit button", () => {
    expect(screen.getByPlaceholderText("Họ và tên")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Nội dung cần tư vấn")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Gửi yêu cầu/i })).toBeInTheDocument();
  });

  test("allows typing into inputs", () => {
    const nameInput = screen.getByPlaceholderText("Họ và tên");
    const emailInput = screen.getByPlaceholderText("Email");
    const messageInput = screen.getByPlaceholderText("Nội dung cần tư vấn");

    fireEvent.change(nameInput, { target: { value: "Nguyen Van A" } });
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(messageInput, { target: { value: "Tôi cần tư vấn" } });

    expect(nameInput.value).toBe("Nguyen Van A");
    expect(emailInput.value).toBe("test@example.com");
    expect(messageInput.value).toBe("Tôi cần tư vấn");
  });

  test("submit form shows success message", async () => {
    const nameInput = screen.getByPlaceholderText("Họ và tên");
    const emailInput = screen.getByPlaceholderText("Email");
    const messageInput = screen.getByPlaceholderText("Nội dung cần tư vấn");
    const button = screen.getByRole("button", { name: /Gửi yêu cầu/i });

    fireEvent.change(nameInput, { target: { value: "Nguyen Van A" } });
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(messageInput, { target: { value: "Tôi cần tư vấn" } });

    fireEvent.click(button);

    // Chờ status "✅ Gửi thành công!" xuất hiện
    await waitFor(() => {
      expect(screen.getByText("✅ Gửi thành công!")).toBeInTheDocument();
    });
  });
});
