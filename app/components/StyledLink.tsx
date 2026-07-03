import { Link } from "react-router";

export interface StyledLinkProps {
  to: string;
  children: React.ReactNode;
}

export default function StyledLink({ to, children }: StyledLinkProps) {
  return (
    <Link
      className="color:bluetext-blue-600 underline hover:text-blue-800"
      to={to}
    >
      {children}
    </Link>
  );
}
