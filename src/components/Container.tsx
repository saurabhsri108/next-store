import { ReactNode } from "react";

export default function Container({ children, className }: { children: ReactNode, className?: string }) {
  return <section className={`max-w-7xl mx-auto ${className}`}>
    {children}
  </section>;
}