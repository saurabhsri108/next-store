import { authMiddleware } from "@clerk/nextjs";
import { publicRoutes } from "@/utils/public-routes";

export default authMiddleware({
  publicRoutes: publicRoutes
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/"]
};