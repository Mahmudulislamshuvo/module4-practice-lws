// File: src/DemoPage.jsx
import React from "react";
import { useToast } from "./components/CustomToast/ToastProvider";

const DemoPage = () => {
  const { success, error, warning, info, addToast } = useToast();

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Custom Toast Notifications</h1>

      <div className="grid grid-cols-2 gap-6">
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition"
          onClick={() => success("Your operation was completed successfully!")}
        >
          Show Success Toast
        </button>

        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-lg transition"
          onClick={() => error("Something went wrong! Please try again.")}
        >
          Show Error Toast
        </button>

        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded-lg transition"
          onClick={() => warning("This action requires your attention.")}
        >
          Show Warning Toast
        </button>

        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition"
          onClick={() =>
            info("Here is some information you might find useful.")
          }
        >
          Show Info Toast
        </button>

        <button
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-4 rounded-lg transition"
          onClick={() =>
            addToast("This is a custom notification!", {
              variant: "default",
              position: "bottom-center",
            })
          }
        >
          Custom Toast
        </button>

        <button
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-4 rounded-lg transition"
          onClick={() =>
            addToast("No icon in this toast!", {
              variant: "info",
              showIcon: false,
              position: "top-left",
            })
          }
        >
          Toast Without Icon
        </button>
      </div>

      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Features</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Multiple notification types (success, error, warning, info, default)
          </li>
          <li>
            Multiple positioning options (top-right, top-left, bottom-right,
            bottom-left, top-center, bottom-center)
          </li>
          <li>Smooth entrance and exit animations</li>
          <li>Interactive hover effects</li>
          <li>Customizable duration</li>
          <li>Progress indicator at the bottom</li>
          <li>Click to dismiss</li>
          <li>Priority pulsing animation for the first notification</li>
        </ul>
      </div>
    </div>
  );
};

export default DemoPage;
