import { authMiddleware } from "@clerk/nextjs/server";
export default authMiddleware({
  publicRoutes: ["/api/uploadthing"],
  /*ignoredRoutes: ["/((?!api|trpc))(_next.*|.+\.[\w]+$)", "/", ],SI NO PONGO ESTA LINEA ME DA ERROR TODO EL PROYECTO, COSA QUE NO ENTIENDO, HASTA AQUI ME SALIA TODO OK*/
});
export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
