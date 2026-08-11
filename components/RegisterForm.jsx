"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "./ui/Button";
import Field from "./ui/Field";
import OAuthButtons from "./OAuthButtons";
import {
  passwordStrength,
  validateEmail,
  validateName,
  validatePassword,
} from "@/lib/validation";

const INITIAL = { name: "", email: "", password: "", confirm: "" };

const STRENGTH_COLOURS = ["bg-muted/25", "bg-loss", "bg-brand", "bg-gain"];

function StrengthMeter({ value }) {
  const { score, label } = passwordStrength(value);

  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-1 gap-1" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={`h-1 flex-1 rounded-full ${
              i < score ? STRENGTH_COLOURS[score] : "bg-muted/20"
            }`}
          />
        ))}
      </div>
      <span className="w-[64px] shrink-0 text-right font-mono text-[10.5px] text-muted">
        {label}
      </span>
    </div>
  );
}

export default function RegisterForm() {
  const router = useRouter();
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [accepted, setAccepted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  function update(name, value) {
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => (prev[name] ? { ...prev, [name]: null } : prev));
    setFormError(null);
  }

  function validate() {
    return {
      name: validateName(values.name),
      email: validateEmail(values.email),
      password: validatePassword(values.password),
      confirm:
        values.confirm !== values.password ? "Passwords don't match." : null,
      terms: accepted ? null : "Accept the terms to continue.",
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
      // Swap this for your real sign-up endpoint.
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          password: values.password,
        }),
      });

      if (!res.ok) {
        setFormError(
          res.status === 409
            ? "An account already exists for that email."
            : "We couldn't create your account. Please try again.",
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
          id="name"
          name="name"
          type="text"
          label="Your name"
          placeholder="Jaisree"
          autoComplete="name"
          value={values.name}
          onChange={(e) => update("name", e.target.value)}
          error={errors.name}
        />

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

        <div className="flex flex-col gap-2">
          <Field
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            label="Password"
            placeholder="At least 8 characters"
            autoComplete="new-password"
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
          {values.password && <StrengthMeter value={values.password} />}
        </div>

        <Field
          id="confirm"
          name="confirm"
          type={showPassword ? "text" : "password"}
          label="Confirm password"
          placeholder="Re-enter your password"
          autoComplete="new-password"
          value={values.confirm}
          onChange={(e) => update("confirm", e.target.value)}
          error={errors.confirm}
        />

        <div>
          <label className="flex cursor-pointer items-start gap-2.5 text-[13px] leading-[1.5] text-muted">
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => {
                setAccepted(e.target.checked);
                setErrors((prev) => ({ ...prev, terms: null }));
              }}
              aria-invalid={errors.terms ? "true" : undefined}
              className="mt-0.5 size-4 shrink-0 accent-brand"
            />
            <span>
              I agree to the{" "}
              <Link href="/register" className="font-medium text-brand hover:text-ink">
                Terms
              </Link>{" "}
              and{" "}
              <Link href="/register" className="font-medium text-brand hover:text-ink">
                Privacy Policy
              </Link>
              .
            </span>
          </label>
          {errors.terms && (
            <p className="mt-1.5 text-[12px] text-loss">{errors.terms}</p>
          )}
        </div>

        <Button type="submit" size="full" disabled={submitting} className="mt-1">
          {submitting ? "Creating account…" : "Create account"}
        </Button>

        <p className="text-center text-[12px] leading-[1.5] text-muted">
          Free to start. Your first audit costs ₹499 — no card needed to sign
          up.
        </p>
      </form>
    </div>
  );
}
