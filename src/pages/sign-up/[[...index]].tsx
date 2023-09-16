import { SignUp } from "@clerk/nextjs";
import Container from "@/components/Container";

const SignUpPage = () => (
  <Container className="flex h-[calc(100vh-11rem)] items-center justify-center">
    <SignUp />
  </Container>
);
export default SignUpPage;
