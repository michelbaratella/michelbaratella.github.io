import {
  EnvelopeIcon,
  FileTextIcon,
  GithubLogoIcon,
  HouseIcon,
  LinkedinLogoIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react";
import NavIconButton from "./NavIconButton";
import { useNavigate } from "react-router";
import type { UseClipboardReturnValue } from "@mantine/hooks";

export default function NavBarContent({
  toggle,
  clipboard,
}: {
  readonly toggle: () => void;
  readonly clipboard: UseClipboardReturnValue;
}) {
  const emailButtonText = clipboard.copied
    ? "Email copied!"
    : "Send me an email";

  const navigate = useNavigate();

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
    navigate("/");
    toggle();
  };

  const handleCurriculumClick = () => {
    navigate("/profile");
    toggle();
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = import.meta.env.VITE_PHONE_NUMBER;
    const message = import.meta.env.VITE_WHATSAPP_MESSAGE;
    const encodedMessage = encodeURIComponent(message as string);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
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
    </>
  );
}
