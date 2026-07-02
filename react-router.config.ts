import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,
  basename: "/portfolio/",
  async prerender() {
    return ["/"]; // Explicitly list paths to generate physical .html files
  },
} satisfies Config;
