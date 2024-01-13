import Container from "@/components/Container";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
	const { asPath } = useRouter();
	return (
		<Container className="flex flex-col justify-center p-4 md:flex-row">
			<aside className="w-full border-r-2 border-r-neutral-100 md:mr-2 md:w-[20%]">
				<nav className="w-full md:w-[94%]">
					<ul className="flex w-full flex-row gap-2 md:flex-col">
						<li className="w-full text-center md:text-left">
							<Link
								className={`${
									asPath === "/dashboard/profile"
										? "bg-neutral-950 text-neutral-50"
										: "bg-neutral-200 text-neutral-950"
								}  inline-block w-full border-b-2 border-b-white p-2`}
								href="/dashboard/profile"
							>
								Profile
							</Link>
						</li>
						<li className="w-full text-center md:text-left">
							<Link
								className={`${
									asPath === "/dashboard/orders"
										? "bg-neutral-950 text-neutral-50"
										: "bg-neutral-200 text-neutral-950"
								}  inline-block w-full border-b-2 border-b-white p-2`}
								href="/dashboard/orders"
							>
								Orders
							</Link>
						</li>
						<li className="w-full text-center md:text-left">
							<Link
								className={`${
									asPath === "/dashboard/refunds"
										? "bg-neutral-950 text-neutral-50"
										: "bg-neutral-200 text-neutral-950"
								}  inline-block w-full border-b-2 border-b-white p-2`}
								href="/dashboard/refunds"
								onClick={() => {
									// @ts-ignore
									smartech("identify", "saurabhsri+123@geekyants.com");
									// @ts-ignore
									smartech("dispatch", "refund_clicked", {
										NAME: "Saurabh Srivastava",
										EMAIL: "saurabhsri+123@geekyants.com",
									});
								}}
							>
								Refunds
							</Link>
						</li>
					</ul>
				</nav>
			</aside>
			<section className="w-full md:w-[80%]">{children}</section>
		</Container>
	);
}
