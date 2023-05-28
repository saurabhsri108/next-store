import {SignedIn, UserProfile} from "@clerk/nextjs";
import DashboardLayout from "@/containers/DashboardLayout";

export default function ProfilePage() {
  return <DashboardLayout>
    <SignedIn>
      <UserProfile path="/dashboard/profile" routing="path" appearance={
        {
          elements: {
            card: "shadow-none border-none w-full",
            rootBox: "w-full"
          }
        }
      } />
    </SignedIn>
  </DashboardLayout>;
}
