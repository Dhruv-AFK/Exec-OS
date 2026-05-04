import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-semibold">Welcome to Exec-OS</h1>
      <p className="mt-4 text-sm text-slate-600">
        Use the sign in button above to authenticate with Clerk.
      </p>
      <div className="mt-6">
        <Button>Click me</Button>
      </div>
    </div>
  );
}
