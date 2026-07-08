import { Alert, AppShell, Burger, Container } from "@mantine/core";
import { useClipboard, useDisclosure } from "@mantine/hooks";
import {
  EnvelopeIcon,
  HouseIcon,
  LinkedinLogoIcon,
  FileTextIcon,
  WhatsappLogoIcon,
  GithubLogoIcon,
  CopyIcon,
} from "@phosphor-icons/react";
import { Outlet, useNavigate } from "react-router";
import NavIconButton from "~/components/NavIconButton";

export default function AppShellContent() {
  const [opened, { toggle }] = useDisclosure();
  const clipboard = useClipboard({ timeout: 1000 });
  const navigate = useNavigate();

  const emailButtonText = clipboard.copied
    ? "Email copied!"
    : "Send me an email";

  const handleWhatsAppClick = () => {
    const phoneNumber = import.meta.env.VITE_PHONE_NUMBER;
    const message = import.meta.env.VITE_WHATSAPP_MESSAGE;
    const encodedMessage = encodeURIComponent(message as string);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleEmailClick = () => {
    toggle();
    clipboard.copy(import.meta.env.VITE_EMAIL_ADDRESS as string);
  };

  const handleLinkedInClick = () => {
    const linkedInUrl = import.meta.env.VITE_LINKEDIN_URL;
    window.open(linkedInUrl, "_blank");
    toggle();
  };

  const handleGithubClick = () => {
    const githubUrl = import.meta.env.VITE_GITHUB_URL;
    window.open(githubUrl, "_blank");
    toggle();
  };

  const handleHomeClick = () => {
    console.log("Redirecting to home page...");
    navigate("/");
    toggle();
  };

  const handleCurriculumClick = () => {
    console.log("Redirecting to profile page...");
    navigate("/profile");
    toggle();
  };
  return (
    <AppShell
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
          <p className="text-lg font-bold font-sans">
            {import.meta.env.VITE_DEVELOPER_NAME}
          </p>
        </Container>
      </AppShell.Header>

      <AppShell.Navbar bg="var(--mantine-color-gray-light)">
        <NavIconButton
          alt="Go to home page"
          icon={HouseIcon}
          onClick={handleHomeClick}
        />
        <NavIconButton
          alt="Check out my curriculum"
          icon={FileTextIcon}
          onClick={handleCurriculumClick}
        />
        <NavIconButton
          alt={emailButtonText}
          icon={EnvelopeIcon}
          onClick={handleEmailClick}
        />
        <NavIconButton
          alt="Go to my LinkedIn profile page"
          icon={LinkedinLogoIcon}
          onClick={handleLinkedInClick}
        />
        <NavIconButton
          alt="Open WhatsApp Chat"
          icon={WhatsappLogoIcon}
          onClick={handleWhatsAppClick}
        />
        <NavIconButton
          alt="Open GitHub Profile"
          icon={GithubLogoIcon}
          onClick={handleGithubClick}
        />
      </AppShell.Navbar>

      <AppShell.Main>
        {clipboard.copied && (
          <Alert
            variant="light"
            color="green"
            title="Email copied!"
            icon={<CopyIcon size={42} />}
          />
        )}
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
