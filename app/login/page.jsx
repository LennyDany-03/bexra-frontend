import Link from "next/link";
import AuthShell from "@/components/AuthShell";
import LoginForm from "@/components/LoginForm";

export const metadata = {
  title: "Log in — Bexra",
  description: "Sign in to your Bexra workspace to review audits and roadmaps.",
};

export default function LoginPage() {
  return (
    <AuthShell
      eyebrow="Welcome back"
      title="Log in to Bexra"
      subtitle="Pick up your audit where you left it."
      footer={
        <>
          New to Bexra?{" "}
          <Link
            href="/register"
            className="font-medium text-brand hover:text-ink"
          >
            Create an account
          </Link>
        </>
      }
    >
      <LoginForm />
    </AuthShell>
  );
}
