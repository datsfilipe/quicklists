"use client"

import { useAuth, useClerk } from "@clerk/nextjs";
import { Button } from "./ui/button";

export function UserButtons() {
  const { userId } = useAuth();
  const { signOut, openSignIn } = useClerk();

  return (
    <div className="flex items-center space-x-2">
      {userId ? (
        <Button onClick={() => signOut()}>Sign out</Button>
      ) : (
        <Button onClick={() => openSignIn()}>Sign in</Button>
      )}
    </div>
  )
}
