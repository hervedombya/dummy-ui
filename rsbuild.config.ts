import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { ModuleFederationPlugin } from "@module-federation/enhanced-rspack";

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    entry: {
      index: "./src/index.tsx",
    },
  },
  tools: {
    rspack: {
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
