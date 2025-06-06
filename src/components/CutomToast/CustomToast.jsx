// File: src/components/CustomToast/ToastProvider.jsx
import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  useRef,
} from "react";
import Toast from "./Toast";
import styles from "./ToastProvider.module.css";

const ToastContext = createContext();

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, options = {}) => {
    const id = Math.random().toString(36).substring(2, 9);
    const toast = {
      id,
      message,
      variant: options.variant || "default",
      position: options.position || "top-right",
      duration: options.duration || 4000,
      showIcon: options.showIcon !== false,
    };

    setToasts((prev) => [...prev, toast]);

    return id;
  };

  const removeToast = (id) => {
    setToasts((prev) =>
      prev.map((toast) =>
        toast.id === id ? { ...toast, exiting: true } : toast
      )
    );

    // Remove from DOM after animation completes
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 300);
  };

  const success = (message, options) =>
    addToast(message, { ...options, variant: "success" });
  const error = (message, options) =>
    addToast(message, { ...options, variant: "error" });
  const warning = (message, options) =>
    addToast(message, { ...options, variant: "warning" });
  const info = (message, options) =>
    addToast(message, { ...options, variant: "info" });

  return (
    <ToastContext.Provider
      value={{ addToast, success, error, warning, info, removeToast }}
    >
      {children}

      {/* Render toasts in different positions */}
      {[
        "top-right",
        "top-left",
        "bottom-right",
        "bottom-left",
        "top-center",
        "bottom-center",
      ].map((position) => (
        <div
          key={position}
          className={`${styles.toastContainer} ${styles[position]}`}
        >
          {toasts
            .filter((t) => t.position === position)
            .map((toast) => (
              <Toast
                key={toast.id}
                {...toast}
                onClose={() => removeToast(toast.id)}
              />
            ))}
        </div>
      ))}
    </ToastContext.Provider>
  );
}

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
