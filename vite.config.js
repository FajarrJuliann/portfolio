import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const extensions = [
  ".web.tsx",
  ".tsx",
  ".web.ts",
  ".ts",
  ".web.jsx",
  ".jsx",
  ".web.js",
  ".js",
  ".css",
  ".json",
  ".mjs",
];

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "react-native": "react-native-web",
    },
    extensions,
  },
  optimizeDeps: {
    esbuildOptions: {
      resolveExtensions: extensions,
      loader: { ".js": "jsx" }, // Tangani file .js sebagai JSX
      jsx: "automatic",
    },
  },
  define: {
    global: "window", // Tambahkan ini untuk mencegah error "global is not defined"
    __DEV__: JSON.stringify(process.env.NODE_ENV === "development"),
    DEV: JSON.stringify(process.env.NODE_ENV === "development"),
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
  },
});
