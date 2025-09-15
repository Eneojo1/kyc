import { X } from "lucide-react";
import { useEffect } from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-[rgba(0,0,0,0.1)] bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal content */}
      <div className="relative z-10 bg-white rounded-xl shadow-lg max-w-lg w-full mx-4 p-6 transform transition-all scale-95 opacity-100 animate-modalOpen">
        {/* Header */}
        {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}

        {/* Body */}
        <div>{children}</div>

        {/* Close button */}
        <X
          className="absolute cursor-pointer top-3 right-3 text-gray-500 hover:text-gray-700 rounded-full"
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default Modal;
