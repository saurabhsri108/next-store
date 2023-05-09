import Container from "@/components/Container";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { buildClerkProps, clerkClient, getAuth } from "@clerk/nextjs/server";

export default function Home(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { __clerk_ssr_state: { sessionId, userId } } = props;
  return (
    <Container className="flex flex-col items-center justify-center p-4 w-full">
      
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { userId } = getAuth(ctx.req);
  if (!userId) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false
      }
    };
  }

  const user = userId ? await clerkClient.users.getUser(userId) : undefined;

  return { props: { ...buildClerkProps(ctx.req, { user }) } };
};
