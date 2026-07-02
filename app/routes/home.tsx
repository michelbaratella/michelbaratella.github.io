import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Michel's Portfolio" },
    { name: "description", content: "Welcome to my Github page!" },
  ];
}

export default function Home() {
  // return <Welcome />;
  return <p>Coming soon...</p>
}
