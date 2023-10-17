import Container from "@/components/Container";

export default function Footer() {
  return (
    <footer className="border-t bg-white text-neutral-950">
      <Container className="flex items-center justify-between px-8 py-5">
        <p className="sm:text-md w-full text-center text-xs md:text-base">
          Copyright &copy; Saurabh Srivastava {new Date().getFullYear()}, All
          rights reserved
        </p>
      </Container>
    </footer>
  );
}
