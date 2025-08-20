"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/themeToggle";
import { authClient } from "@/lib/auth-client";

export default function Home() {
  const { data: session } = authClient.useSession();

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
