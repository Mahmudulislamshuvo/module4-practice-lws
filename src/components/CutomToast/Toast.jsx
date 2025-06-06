// File: src/components/CustomToast/Toast.jsx
import React from "react";
import styles from "./ToastProvider.module.css";

const Toast = ({
  message,
  variant = "default",
  onClose,
  exiting = false,
  showIcon = true,
}) => {
  const variantIcons = {
    success: "✅",
    error: "❌",
    warning: "⚠️",
    info: "ℹ️",
    default: "💬",
  };

  const variantTitles = {
    success: "Success",
    error: "Error",
    warning: "Warning",
    info: "Information",
    default: "Notification",
  };

  return (
    <div
      className={`${styles.toast} ${styles[variant]} ${
        exiting ? styles.exiting : ""
      }`}
      onClick={onClose}
    >
      {showIcon && <div className={styles.icon}>{variantIcons[variant]}</div>}

      <div className={styles.content}>
        <div className={styles.title}>{variantTitles[variant]}</div>
        <div className={styles.message}>{message}</div>
      </div>

      <button className={styles.closeButton} onClick={onClose}>
        &times;
      </button>
    </div>
  );
};

export default Toast;
