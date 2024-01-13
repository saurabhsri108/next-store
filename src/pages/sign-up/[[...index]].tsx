import Container from "@/components/Container";
import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => (
	<Container className="flex h-[calc(100vh-11rem)] items-center justify-center">
		<SignUp />
	</Container>
);
export default SignUpPage;
