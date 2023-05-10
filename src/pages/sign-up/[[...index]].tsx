import { SignUp } from "@clerk/nextjs";
import Container from "@/components/Container";

const SignUpPage = () => (
  <Container className="flex items-center justify-center h-[calc(100vh-11rem)]">
    <SignUp />
  </Container>
);
export default SignUpPage;