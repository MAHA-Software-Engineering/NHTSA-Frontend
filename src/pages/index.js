import React from "react";
import { useSession, signIn, signOut } from "next-auth/client/_utils";

export default function HomePage() {
  const [session, loading] = useSession();

  if (loading)
  {
    return null;
  }

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign Out</button>
      </>
    )
  }
  return (
    <>
      Not Signed In <br />
      <button onClick={() => signIn()}>Sign In</button>
    </>
  )
}