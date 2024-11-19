import Image from "next/image";
import SignIn from "./SignIn";
import Link from "next/link";
import { auth } from "@/auth";
import SignOut from "./SignOut";

export default async function NavBar() {
  const session = await auth();
  return (
    <header className="px-5 py-3 shadow-sm font-work-sans bg-white">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={144} height={30} />
        </Link>
        <div className="flex items-center gap-4">
          {session && session.user ? (
            <>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>
              <SignOut />
              <Link href={`/user/${session.user.id}`}>
                <span>{session.user.name}</span>
              </Link>
            </>
          ) : (
            <SignIn />
          )}
        </div>
      </nav>
    </header>
  );
}
