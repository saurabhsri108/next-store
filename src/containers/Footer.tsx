import Container from "@/components/Container";

export default function Footer() {
  return <footer className="bg-white text-slate-950 border-t">
    <Container className="flex items-center justify-between py-4 px-8">
      <p className="text-center w-full text-xs sm:text-md md:text-base">Copyright &copy; Saurabh
        Srivastava {new Date().getFullYear()}, All
        rights
        reserved</p>
    </Container>
  </footer>;
}
