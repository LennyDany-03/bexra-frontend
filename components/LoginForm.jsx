"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "./ui/Button";
import Field from "./ui/Field";
import OAuthButtons from "./OAuthButtons";
import { validateEmail, validatePassword } from "@/lib/validation";

const INITIAL = { email: "", password: "" };

export default function LoginForm() {
  const router = useRouter();
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [remember, setRemember] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  function update(name, value) {
    setValues((prev) => ({ ...prev, [name]: value }));
    // Clear a field's error as soon as the user edits it.
    setErrors((prev) => (prev[name] ? { ...prev, [name]: null } : prev));
    setFormError(null);
  }

  function validate() {
    return {
      email: validateEmail(values.email),
      password: validatePassword(values.password),
    };
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = validate();
    if (Object.values(nextErrors).some(Boolean)) {
      setErrors(nextErrors);
      return;
    }

    setSubmitting(true);
    setFormError(null);

    try {
      // Swap this for your real sign-in endpoint.
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: values.email.trim(),
          password: values.password,
          remember,
        }),
      });

      if (!res.ok) {
        setFormError(
          res.status === 401
            ? "That email and password don't match an account."
            : "We couldn't sign you in. Please try again.",
        );
        return;
      }

      router.push("/");
    } catch {
      setFormError("Network error — check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <OAuthButtons disabled={submitting} />

      <div className="flex items-center gap-3">
        <span className="h-px flex-1 bg-muted/25" />
        <span className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-muted">
          or with email
        </span>
        <span className="h-px flex-1 bg-muted/25" />
      </div>

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
        {formError && (
          <div
            role="alert"
            className="rounded-[7px] border border-loss/40 bg-loss/5 px-3.5 py-3 text-[13px] leading-[1.45] text-loss"
          >
            {formError}
          </div>
        )}

        <Field
          id="email"
          name="email"
          type="email"
          label="Work email"
          placeholder="you@company.co"
          autoComplete="email"
          value={values.email}
          onChange={(e) => update("email", e.target.value)}
          error={errors.email}
        />

        <Field
          id="password"
          name="password"
          type={showPassword ? "text" : "password"}
          label="Password"
          placeholder="••••••••"
          autoComplete="current-password"
          value={values.password}
          onChange={(e) => update("password", e.target.value)}
          error={errors.password}
          trailing={
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="rounded px-2 py-1 text-[11.5px] font-medium text-muted transition-colors hover:text-brand"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          }
        />

        <div className="flex flex-wrap items-center justify-between gap-3">
          <label className="flex cursor-pointer items-center gap-2 text-[13px] text-muted">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="size-4 accent-brand"
            />
            Keep me signed in
          </label>
          <Link
            href="/login"
            className="text-[13px] font-medium text-brand hover:text-ink"
          >
            Forgot password?
          </Link>
        </div>

        <Button type="submit" size="full" disabled={submitting} className="mt-1">
          {submitting ? "Signing in…" : "Sign in"}
        </Button>
      </form>
    </div>
  );
}
