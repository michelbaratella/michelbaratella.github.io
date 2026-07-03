import StyledLink from "~/components/StyledLink";

export default function Home() {
  return (
    <>
      <p>This is the home page</p>
      <StyledLink to="/about">About</StyledLink>
    </>
  );
}
