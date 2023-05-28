import Link from "next/link";
import {useRouter} from "next/router";
import Container from "@/components/Container";
import {useState} from "react";
import CloseIcon from "@/components/icons/CloseIcon";
import HamburgerIcon from "@/components/icons/HamburgerIcon";
import {SignedIn, SignedOut, UserButton} from "@clerk/nextjs";
import CartIcon from "@/components/icons/CartIcon";
import LoginIcon from "@/components/icons/LoginIcon";
import {fireGtmEvent} from "@/utils/gtm-event";
import {mainMenuLinks} from "@/utils/navigation-links";
import {motion} from "framer-motion";

export default function Header() {
  const { pathname } = useRouter();
  const [menuClicked, setMenuClicked] = useState<boolean>(false);

  const handleMenuClick = () => setMenuClicked(!menuClicked);

  return (
    <header className="bg-white text-slate-950 border-b">
      <Container className="flex items-center justify-between pt-8 pb-4 px-8">
        <section className="flex items-center justify-start gap-16">
          <Link href="/" className="flex items-center font-bold text-lg"
                onClick={() => fireGtmEvent("LogoClicked", {
                  logoText: "nextStore"
                })}>nextStore</Link>
          <nav
            className={`absolute bg-white text-slate-950 top-16 md:relative md:top-0 left-0 bottom-0 right-0 ${menuClicked ? "translate-x-0 z-10" : "-translate-x-full"} duration-200 md:translate-x-0`}>
            <ul
              className="flex flex-col md:flex-row items-start md:items-center text-xl md:text-base pl-4 pt-8 md:pl-0 md:pt-0 justify-center gap-8 md:gap-4"
              onClick={handleMenuClick}>
              {mainMenuLinks?.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="relative hover:text-slate-950 focus:text-slate-950 text-sm font-[500]" >
                    {pathname === link.href && (
                      <motion.span layoutId="underline" className="absolute left-0 top-full block h-[0.1rem] rounded-md w-full bg-slate-950"></motion.span>
                    )}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>
        <nav className="flex items-center justify-center gap-4">
          <ul className="flex items-center justify-center gap-4">
            <li className="cursor-pointer relative flex items-center justify-center mr-6">
              <CartIcon className="w-8 h-8" />
              <span
                className="text-xs border-t-2 border-r-2 border-slate-950 text-slate-950 font-bold p-1 rounded-full h-8 w-8 flex items-center justify-center absolute -top-4 left-4">0</span>
            </li>
            <li>
              <SignedOut>
                <Link href="/sign-in"
                      className="bg-slate-800 text-white hover:bg-slate-950 hover:text-white focus:bg-slate-950 focus:text-white duration-100 border-2 border-gray-50 px-2 py-2 flex items-center  rounded-md font-bold text-sm flex gap-2 pr-3 items-center justify-center">
                  <span><LoginIcon /></span>
                  <span className="hidden md:flex">Sign in</span>
                </Link>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </li>
          </ul>
          <button className="md:hidden" onClick={() => setMenuClicked(!menuClicked)}>
            {menuClicked ? <CloseIcon className="w-8 h-8" /> : <HamburgerIcon className="w-8 h-8" />}
          </button>
        </nav>
      </Container>
    </header>
  );
}
