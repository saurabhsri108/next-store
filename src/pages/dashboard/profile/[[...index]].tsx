import DashboardLayout from "@/containers/DashboardLayout";
import { SignedIn, UserProfile } from "@clerk/nextjs";

export default function ProfilePage() {
	return (
		<DashboardLayout>
			<SignedIn>
				<UserProfile
					path="/dashboard/profile"
					routing="path"
					appearance={{
						elements: {
							card: "shadow-none border-none w-full",
							rootBox: "w-full",
							navbar: "hidden",
							scrollBox: "w-full",
							pageScrollBox: "py-4 px-0 md:px-4",
							navbarMobileMenuRow: "hidden",
						},
					}}
				/>
			</SignedIn>
		</DashboardLayout>
	);
}
