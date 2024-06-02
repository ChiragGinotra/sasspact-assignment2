/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    // Add safelist for dynamically generated classes
    "bg-red-100",
    "text-red-700",
    "bg-blue-100",
    "text-blue-700",
    "bg-green-100",
    "text-green-700",
    "bg-yellow-100",
    "text-yellow-700",
    "bg-indigo-100",
    "text-indigo-700",
    "bg-gray-100",
    "text-gray-700",
    // Add other classes as needed
  ],
  theme: {
    // borderRadius: {
    //   "nav-sm": "0.125rem", // Small border-radius equivalent to rounded-sm
    // },
    extend: {
      colors: {
        "grey-0": " #fff",
        "grey-50": "#f9fafb",
        "grey-100": " #f3f4f6",
        "grey-200": " #e5e7eb",
        "grey-300": " #d1d5db",
        "grey-400": " #9ca3af",
        "grey-500": " #6b7280",
        "grey-600": " #4b5563",
        "grey-700": "#374151",
        "grey-800": " #1f2937",
        "grey-900": " #111827",

        " blue-100": "#e0f2fe",
        " blue-700": "#0369a1",
        " green-100": "#dcfce7",
        " green-700": "#15803d",
        " yellow-100": "#fef9c3",
        " yellow-700": "#a16207",
        " silver-100": "#e5e7eb",
        " silver-700": " #374151",
        " indigo-100": "#e0e7ff",
        " indigo-700": " #4338ca",
        " red-100": " #fee2e2",
        " red-700": " #b91c1c",
        " red-800": "#991b1b",

        "brand-50": " #eef2ff",
        "brand-100": "#e0e7ff",
        "brand-200": " #c7d2fe",
        "brand-500": " #6366f1",
        "brand-600": " #4f46e5",
        "brand-700": " #4338ca",
        "brand-800": " #3730a3",
        "brand-900": " #312e81",

        "nav-active-bg": "#f9fafb", // This would be equivalent to bg-gray-50
        "nav-active-text": "#1f2937", // This would be equivalent to text-gray-800
        "nav-text": "#4b5563", // This would be equivalent to text-gray-600
        "nav-icon": "#9ca3af", // This would be equivalent to text-gray-400
        "nav-hover-text": "#2563eb",
      },
    },
  },
  plugins: [],
};
