"use client";

import { createContext, useContext, useState } from "react";
import ConsultFormModal from "../components/ConsultFormModal";

const ModalContext = createContext({ openModal: (email) => {}, closeModal: () => {} });

export function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");

  const openModal = (initialEmail = "") => {
    setEmail(initialEmail); // email từ Banner hoặc "" từ Header
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <ConsultFormModal
        isOpen={isOpen}
        onClose={closeModal}
        initialEmail={email}
      />
    </ModalContext.Provider>
  );
}

export const useModal = () => useContext(ModalContext);
