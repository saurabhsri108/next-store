import { SignIn } from "@clerk/nextjs";
import Container from "@/components/Container";

const SignInPage = () => (
  <Container className="flex h-[calc(100vh-11rem)] items-center justify-center">
    <SignIn />
  </Container>
);
export default SignInPage;
