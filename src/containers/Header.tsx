import Link from "next/link";
import { useRouter } from "next/router";
import Container from "@/components/Container";
import { useState } from "react";
import CloseIcon from "@/components/icons/CloseIcon";
import HamburgerIcon from "@/components/icons/HamburgerIcon";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import CartIcon from "@/components/icons/CartIcon";
import LoginIcon from "@/components/icons/LoginIcon";
import { mainMenuLinks } from "@/utils/navigation-links";
import { motion } from "framer-motion";

export default function Header() {
  const { pathname } = useRouter();
  const [menuClicked, setMenuClicked] = useState<boolean>(false);

  const handleMenuClick = () => setMenuClicked(!menuClicked);

  return (
    <header className="bg-neutral-950 text-neutral-50">
      <Container className="flex items-center justify-between px-8 py-7">
        <section className="flex items-center justify-start gap-16">
          <Link
            href="/"
            className="flex items-center text-lg font-bold"
            onClick={() => fetch("/api/server-tag")}
          >
            nextStore
          </Link>
          <nav
            className={`absolute bottom-0 left-0 right-0 top-16 bg-neutral-950 text-neutral-50 md:relative md:top-0 ${
              menuClicked ? "z-10 translate-x-0" : "-translate-x-full"
            } duration-200 md:translate-x-0`}
          >
            <ul
              className="flex flex-col items-start justify-center gap-8 pl-4 pt-8 text-xl md:flex-row md:items-center md:gap-4 md:pl-0 md:pt-0 md:text-base"
              onClick={handleMenuClick}
            >
              {mainMenuLinks?.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="relative text-sm font-[500] hover:text-neutral-50 focus:text-neutral-50"
                  >
                    {pathname === link.href && (
                      <motion.span
                        layoutId="underline"
                        className="absolute left-0 top-full block h-[0.1rem] w-full rounded-md bg-neutral-50"
                      ></motion.span>
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
            <li className="relative mr-6 flex cursor-pointer items-center justify-center">
              <CartIcon className="h-8 w-8" />
              <span className="absolute -top-4 left-4 flex h-8 w-8 items-center justify-center rounded-full border-r-2 border-t-2 border-neutral-950 p-1 text-xs font-bold text-neutral-950">
                0
              </span>
            </li>
            <li>
              <SignedOut>
                <Link
                  href="/sign-in"
                  className="flex items-center justify-center gap-2 rounded-md border-2 border-gray-50 bg-neutral-800 px-2 py-2 pr-3 text-sm font-bold text-white duration-100 hover:bg-neutral-950 hover:text-white focus:bg-neutral-950 focus:text-white"
                >
                  <span>
                    <LoginIcon />
                  </span>
                  <span className="hidden md:flex">Sign in</span>
                </Link>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </li>
          </ul>
          <button
            className="md:hidden"
            onClick={() => setMenuClicked(!menuClicked)}
          >
            {menuClicked ? (
              <CloseIcon className="h-8 w-8" />
            ) : (
              <HamburgerIcon className="h-8 w-8" />
            )}
          </button>
        </nav>
      </Container>
    </header>
  );
}
