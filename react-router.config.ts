import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,
  basename: "/portfolio/",
  async prerender() {
    return ["/"]; 
  },
} satisfies Config;
