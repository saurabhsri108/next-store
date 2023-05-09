import Container from "@/components/Container";

export default function Footer() {
  return <footer className="text-white bg-slate-950">
    <Container className="flex items-center justify-between p-4">
      <p className="text-center w-full text-xs sm:text-md md:text-base">Copyright &copy; Saurabh
        Srivastava {new Date().getFullYear()}, All
        rights
        reserved</p>
    </Container>
  </footer>;
}
