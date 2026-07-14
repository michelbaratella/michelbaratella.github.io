import { AppShell, Burger, Container } from "@mantine/core";
import { useClipboard, useDisclosure } from "@mantine/hooks";
import ReactLenis from "lenis/react";
import { Outlet } from "react-router";
import AnimatedAlert from "./AnimatedAlert";
import NavBarContent from "./NavBarContent";

export default function AppShellContent() {
  const [opened, { toggle }] = useDisclosure();
  const clipboard = useClipboard({ timeout: 1000 });
  const headerTitle = import.meta.env.VITE_DEVELOPER_NAME;

  return (
    <AppShell
      withBorder={false}
      padding="md"
      header={{ height: 50 }}
      navbar={{
        width: 70,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
    >
      <AppShell.Header className="flex items-center p-2">
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Container className="flex items-center justify-center">
          <p className="text-lg font-bold font-sans">{headerTitle}</p>
        </Container>
      </AppShell.Header>

      <AppShell.Navbar>
        <NavBarContent toggle={toggle} clipboard={clipboard} />
      </AppShell.Navbar>

      <AppShell.Main>
        <AnimatedAlert isOn={clipboard.copied} />
        <ReactLenis root /* options={{ infinite: true }} */>
          <Outlet />
        </ReactLenis>
      </AppShell.Main>
    </AppShell>
  );
}
