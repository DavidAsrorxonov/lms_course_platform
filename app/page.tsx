import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/themeToggle";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <div>
      <h1 className="text-3xl font-bold bg-blue-500">Hello World</h1>

      <ThemeToggle />

      {session ? (
        <>
          <p>{session.user.name}</p>
          <p>{session.user.email}</p>
        </>
      ) : (
        <Button>Login</Button>
      )}
    </div>
  );
}
