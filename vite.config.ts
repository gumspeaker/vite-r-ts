import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { viteExternalsPlugin } from "vite-plugin-externals";
const resolve = (...p) => path.resolve(__dirname, ...p);

const getReactPath = (name) =>
  resolve(
    `./package/react/build/oss-stable/${name}/umd/${name}.development.js`
  );
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteExternalsPlugin({
      react: "React",
      "react-dom": "ReactDOM",
      // value support chain, transform to window['React']['lazy']
      // lazy: ["React", "lazy"],
    }),
  ],
});
