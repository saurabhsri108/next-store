import { ReactNode } from "react";
import Container from "@/components/Container";
import Link from "next/link";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return <Container className="p-4 flex justify-center">
    <aside className="w-[25%]">
      <nav>
        <ul>
          <li>
            <Link href="/dashboard/profile">Dashboard</Link>
          </li>
          <li>
            <Link href="/dashboard/orders">Orders</Link>
          </li>
          <li>
            <Link href="/dashboard/refunds">Refunds</Link>
          </li>
        </ul>
      </nav>
    </aside>
    <section className="w-[75%]">
      {children}
    </section>
  </Container>;
}