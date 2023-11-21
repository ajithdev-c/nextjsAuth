import {
  GithubSignInButton,
  GoogleSignInButton,
} from "@/components/authButtons";
import WelcomePage from "@/components/CredentialsForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./utils/outhOptions";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/welcomepage");
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <GithubSignInButton />
        <GoogleSignInButton />
      </div>
      <div className="pt-6">email: ajithdev@example.com</div>
      <div>password: ajithdev</div>
      <div>
        <WelcomePage />
      </div>
    </main>
  );
}
