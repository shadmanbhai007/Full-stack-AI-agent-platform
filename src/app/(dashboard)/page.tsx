import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { HomeView } from "@/modules/home/ui/views/home-view";

import { headers } from "next/headers";

// http://localhost:3000
const Page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/sign-in");
  }
  return <HomeView />;
};

export default Page;
