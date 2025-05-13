import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { ModuleFederationPlugin } from "@module-federation/enhanced-rspack";

export default defineConfig({
  plugins: [pluginReact()],
  tools: {
    rspack: {
      plugins: [
        new ModuleFederationPlugin({
          name: "dummy_ui",
          filename: "static/js/remoteEntry.js",
          exposes: {
            "./FederableApp": "./src/App.tsx",
          },
          shared: {
            react: { singleton: true, requiredVersion: false },
            "react-dom": { singleton: true, requiredVersion: false },
          },
        }),
      ],
    },
  },
  html: {
    title: "Dummy UI",
  },
});
