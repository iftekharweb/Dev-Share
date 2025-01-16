import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";
import Link from "next/link";

const Navbar = async () => {
  const session = await auth();
  console.log(session);

  return (
    <header className="px-5 py-2 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          {/* <Image src="/logo.png" alt="logo" width={144} height={30} /> */}
          <h1 className="font-semibold uppercase text-black text-2xl px-3">
            DEV.Share()
          </h1>
        </Link>
        <div className="flex items-center gap-5">
          {session && session?.user ? (
            <>
              <Link href="/blog/create">
                <span className="text-gray-800">Create</span>
              </Link>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit" className="border border-gray-300 px-4 py-1 rounded-md">
                  <span className="font-bold">Log out</span>
                </button>
              </form>
              <Link href={`/user/${session?.id}`}>
                <Image src={session?.user?.image || ""} className="rounded-full" height={36} width={36}/>
                {/* <span>{session?.user?.name}</span> */}
              </Link>
            </>
          ) : (
            <>
              <form
                action={async () => {
                  "use server";
                  await signIn("github");
                }}
              >
                <button type="submit" className="border border-gray-300 px-4 py-1 rounded-md">
                  <span className="font-bold">Log in</span>
                </button>
              </form>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
