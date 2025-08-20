"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/themeToggle";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Home() {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  const signout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
          toast.success("Signed out successfully");
        },
      },
    });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold bg-blue-500">Hello World</h1>

      <ThemeToggle />

      {session ? (
        <>
          <p>{session.user.name}</p>
          <p>{session.user.email}</p>

          <Button onClick={signout}>Logout</Button>
        </>
      ) : (
        <Button>Login</Button>
      )}
    </div>
  );
}
