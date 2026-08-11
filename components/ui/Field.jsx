/**
 * Labelled form control with inline validation messaging.
 * Presentational only — the owning form holds the state.
 */
export default function Field({
  id,
  label,
  error,
  hint,
  trailing,
  className = "",
  ...inputProps
}) {
  const errorId = `${id}-error`;
  const hintId = `${id}-hint`;
  const describedBy =
    [error ? errorId : null, hint ? hintId : null].filter(Boolean).join(" ") ||
    undefined;

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label htmlFor={id} className="text-[13px] font-medium text-ink">
        {label}
      </label>

      <div className="relative">
        <input
          id={id}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={describedBy}
          className={`h-11 w-full rounded-[7px] border bg-white px-3.5 text-sm text-ink transition-colors outline-none placeholder:text-muted/60 focus:border-brand ${
            error ? "border-loss" : "border-muted/35"
          } ${trailing ? "pr-11" : ""}`}
          {...inputProps}
        />
        {trailing && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-2">
            {trailing}
          </div>
        )}
      </div>

      {hint && !error && (
        <p id={hintId} className="text-[12px] leading-[1.45] text-muted">
          {hint}
        </p>
      )}

      {error && (
        <p id={errorId} className="text-[12px] leading-[1.45] text-loss">
          {error}
        </p>
      )}
    </div>
  );
}
