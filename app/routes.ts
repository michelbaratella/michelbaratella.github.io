import { type RouteConfig, layout, route } from "@react-router/dev/routes";

export default [
  layout("./components/AppShellContent.tsx", [
    route("/", "./routes/home.tsx"),
    route("profile", "./routes/profile.tsx"),
    route("*", "./routes/not-found.tsx"),
  ]),
] satisfies RouteConfig;
