import {ReactNode} from "react";
import Container from "@/components/Container";
import Link from "next/link";
import {useRouter} from "next/router";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const {asPath} = useRouter()
  return <Container className="p-4 flex justify-center flex-col md:flex-row">
    <aside className="w-full md:w-[20%] md:mr-2 border-r-2 border-r-slate-100">
      <nav className="w-full md:w-[94%]">
        <ul className="flex flex-row md:flex-col gap-2 w-full">
          <li className="w-full text-center md:text-left">
            <Link className={`${asPath === "/dashboard/profile" ? "bg-slate-950 text-slate-50" : "bg-slate-200 text-slate-950"}  inline-block w-full p-2 border-b-2 border-b-white`} href="/dashboard/profile">Profile</Link>
          </li>
          <li className="w-full text-center md:text-left">
            <Link className={`${asPath === "/dashboard/orders" ? "bg-slate-950 text-slate-50" : "bg-slate-200 text-slate-950"}  inline-block w-full p-2 border-b-2 border-b-white`} href="/dashboard/orders">Orders</Link>
          </li>
          <li className="w-full text-center md:text-left">
            <Link className={`${asPath === "/dashboard/refunds" ? "bg-slate-950 text-slate-50" : "bg-slate-200 text-slate-950"}  inline-block w-full p-2 border-b-2 border-b-white`} href="/dashboard/refunds" onClick={() => {
              // @ts-ignore
              smartech("identify", "saurabhsri+123@geekyants.com");
              // @ts-ignore
              smartech("dispatch", "refund_clicked", {
                NAME: "Saurabh Srivastava",
                EMAIL: "saurabhsri+123@geekyants.com"
              })
            }}>Refunds</Link>
          </li>
        </ul>
      </nav>
    </aside>
    <section className="w-full md:w-[80%]">
      {children}
    </section>
  </Container>;
}