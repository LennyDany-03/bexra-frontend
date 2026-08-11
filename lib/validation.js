/** Shared client-side validators for the auth forms. */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateEmail(value) {
  const email = value.trim();
  if (!email) return "Enter your email address.";
  if (!EMAIL_RE.test(email)) return "That email address doesn't look right.";
  return null;
}

export function validatePassword(value, { min = 8 } = {}) {
  if (!value) return "Enter a password.";
  if (value.length < min) return `Use at least ${min} characters.`;
  return null;
}

export function validateName(value) {
  const name = value.trim();
  if (!name) return "Enter your name.";
  if (name.length < 2) return "That name looks too short.";
  return null;
}

/**
 * Scores password strength 0-3 and returns a label for the meter.
 * Length carries the most weight, then character variety.
 */
export function passwordStrength(value) {
  if (!value) return { score: 0, label: "—" };

  let score = 0;
  if (value.length >= 8) score += 1;
  if (value.length >= 12) score += 1;
  if (/[^A-Za-z]/.test(value) && /[A-Za-z]/.test(value)) score += 1;

  const labels = ["Too short", "Weak", "Good", "Strong"];
  return { score, label: labels[score] };
}
