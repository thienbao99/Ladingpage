import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { ModalProvider, useModal } from "../contexts/ModalContext";
import "@testing-library/jest-dom";

// Test component nhỏ để gọi openModal từ context
function TestComponent() {
  const { openModal, closeModal } = useModal();
  return (
    <div>
      <button onClick={() => openModal("test@example.com")}>Open Modal</button>
      <button onClick={closeModal}>Close Modal</button>
    </div>
  );
}

// Mock ConsultFormModal nếu nó dùng Next.js Portal hoặc animation
jest.mock("../components/ConsultFormModal", () => ({ isOpen, onClose, initialEmail }) => (
  <div data-testid="modal">
    {isOpen && <p>Modal is open with email: {initialEmail}</p>}
    {isOpen && <button onClick={onClose}>Close</button>}
  </div>
));

describe("ModalProvider", () => {
  beforeEach(() => {
    render(
      <ModalProvider>
        <TestComponent />
      </ModalProvider>
    );
  });

  test("renders children correctly", () => {
    expect(screen.getByText("Open Modal")).toBeInTheDocument();
    expect(screen.getByText("Close Modal")).toBeInTheDocument();
  });

  test("opens modal with initial email", () => {
    fireEvent.click(screen.getByText("Open Modal"));

    const modalText = screen.getByText(/Modal is open with email: test@example.com/i);
    expect(modalText).toBeInTheDocument();
  });

  test("closes modal", () => {
    // Mở modal trước
    fireEvent.click(screen.getByText("Open Modal"));
    expect(screen.getByText(/Modal is open with email: test@example.com/i)).toBeInTheDocument();

    // Gọi closeModal
    fireEvent.click(screen.getByText("Close"));
    expect(screen.queryByText(/Modal is open/i)).not.toBeInTheDocument();
  });
});
