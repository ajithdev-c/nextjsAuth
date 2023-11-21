import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../utils/outhOptions";

export default async function WelcomePage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Welcome to your Application</p>
    </div>
  );
}
