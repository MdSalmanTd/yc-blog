import Link from "next/link";
import Image from "next/image";
import { auth,signOut, signIn } from "@/auth";


const Navbar = async () => {
    const session = await auth();
  return (
    <header className="bg-white px-5 py-3 shadow-sm font-work-sans">
        <nav className="flex items-center justify-between">
            <Link href="/" >
                <Image src="/logo.png" alt="Logo" width={144} height={30} />
            </Link>

            <div className="flex items-center text-black gap-5">
                {session && session?.user ? (
                    <>
                    <Link href="/startup/create">
                        <span>Create</span>
                    </Link>

                    <form action={async () => {
                        "use server";
                        await signOut({redirectTo: '/'});
                    }}>
                    <button type="submit">
                        <span>Logout</span>
                    </button>

                    </form>
                    <Link href={`/user/${session?.user?.id}`}>
                        <span>{session?.user?.name}</span>  
                    </Link>
                    </>

                ) : (
                    <form action={async () => {
                        "use server";
                        await signIn('github');
                    }}>
                    <button type="submit">
                        <span>Login</span>
                    </button>
                    </form>
                )}
            </div>


        </nav>
    </header>
  )
}

export default Navbar