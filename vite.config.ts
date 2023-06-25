import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";
// import { viteExternalsPlugin } from "vite-plugin-externals";
const resolve = (...p) => path.resolve(__dirname, ...p);

const getReactPath = (name) =>
  resolve(`./package/react/build/oss-stable/${name}`);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // viteExternalsPlugin({
    //   react: "React",
    //   "react-dom": "ReactDOM",
    // }),
  ],
  // resolve: {
  //   alias: [
  //     {
  //       find: "react",
  //       replacement: getReactPath("react"),
  //     },
  //     {
  //       find: "react-dom",
  //       replacement: getReactPath("react-dom"),
  //     },
  //     {
  //       find: "react-dom/client",
  //       replacement: getReactPath("react-dom/client"),
  //     },
  //     {
  //       find: "scheduler",
  //       replacement: getReactPath("scheduler"),
  //     },
  //     {
  //       find: "react-cache",
  //       replacement: getReactPath("react-cache"),
  //     },
  //     {
  //       find: "log",
  //       replacement: getReactPath("log"),
  //     },
  //   ],
  // },
  // optimizeDeps: {
  //   include: ["react", "react-dom", "scheduler", "react-cache", "log"],
  // },
});
