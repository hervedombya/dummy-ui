import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { ModuleFederationPlugin } from "@module-federation/enhanced-rspack";
import path from "path";

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    entry: {
      index: "./src/index.tsx",
    },
  },
  tools: {
    rspack: {
      output: {
        filename: "static/js/[name].[contenthash].js",
        assetModuleFilename: "static/assets/[name].[hash][ext][query]",
        cssFilename: "static/css/[name].[contenthash].css",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/dummy-ui/",
      },
      plugins: [
        new ModuleFederationPlugin({
          name: "dummy_ui",
          filename: "static/js/remoteEntry.js",
          exposes: {
            "./FederableApp": "./src/App.tsx",
          },
          shared: [],
        }),
      ],
    },
  },
  html: {
    title: "Dummy UI",
  },
});
