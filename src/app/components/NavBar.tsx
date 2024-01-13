import { SignedIn, SignedOut } from "@clerk/nextjs";
import { SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import IconShoppingCart from "./icons/car";

export function NavBar() {
  return (
    <nav className="fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-slate-800 text-gray-400">
      <Link
        href="/"
        className="uppercase font-bold text-md h-12 flex items-center"
      >
        Livraria
      </Link>
      <div className="flex items-center gap-8">
        <div className="flex items-center cursor-pointer relative">
          <IconShoppingCart />
          <span className="bg-teal-500 text-xs font-bold rounded-full h-4 w-4 text-white flex items-center justify-center absolute left-3 bottom-3">
            2
          </span>
        </div>

        <div>
          <div className="flex items-center gap-8">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button
                  type="button"
                  className="border rounded-md border-gray-400 px-3 py-2"
                >
                  Fazer login
                </button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </div>
    </nav>
  );
}
