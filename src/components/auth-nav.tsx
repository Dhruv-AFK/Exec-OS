"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export function AuthNav() {
  return (
    <div className="flex items-center gap-2">
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>

      <SignedOut>
        <SignInButton mode="modal">
          <button className="rounded-md bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-700">
            Sign in
          </button>
        </SignInButton>
      </SignedOut>
    </div>
  );
}
