import { SignIn } from "@clerk/nextjs";
import Container from "@/components/Container";

const SignInPage = () => (
  <Container className="flex items-center justify-center h-[calc(100vh-11rem)]">
    <SignIn />
  </Container>
);
export default SignInPage;