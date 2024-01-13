import { publicRoutes } from "@/utils/public-routes";
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
	publicRoutes: publicRoutes,
});

export const config = {
	matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api)(.*)"],
};
