import Container from "@/components/Container";
import { SignIn } from "@clerk/nextjs";

const SignInPage = () => (
	<Container className="flex h-[calc(100vh-11rem)] items-center justify-center">
		<SignIn />
	</Container>
);
export default SignInPage;
