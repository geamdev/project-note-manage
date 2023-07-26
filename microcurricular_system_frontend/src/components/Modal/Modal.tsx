import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { ModalOverlay, ModalContent } from "./Modal.styles";

interface Props {
  children: React.ReactNode;
  showModal?: boolean;
  onClose?: () => void;
}

const Modal: React.FC<Props> = ({ showModal, onClose, children }) => {
  const [isModalOpen, setIsModalOpen] = useState(showModal || false);

  useEffect(() => {
    setIsModalOpen(showModal || false);
  }, [showModal]);

  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose?.();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isModalOpen]);

  const closeModal = () => {
    setIsModalOpen(false);
    onClose?.();
  };

  return isModalOpen ? (
    createPortal(
      <ModalOverlay onClick={closeModal}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          {children}
        </ModalContent>
      </ModalOverlay>,
      document.body
    )
  ) : (
    <ModalContent>{children}</ModalContent>
  );
};

export default Modal;
