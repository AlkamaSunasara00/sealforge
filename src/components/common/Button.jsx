"use client";

import Link from "next/link";

/**
 * SealForge Precision Industrial Button Component
 *
 * Exact Geometry inspired by Reference:
 * - Parallelogram body with a precision -20deg engineering slant
 * - Right-side secondary geometric bracket (top/right/bottom outline layer sitting behind)
 * - Coordinated mechanical slide animation on hover
 *
 * @param {Object} props
 * @param {"primary" | "secondary" | "ghost" | "light"} [props.variant="primary"] - Visual style variant
 * @param {React.ReactNode} props.children - Button label / content
 * @param {string} [props.href] - Optional URL (renders accessible <a> or Next.js <Link>)
 * @param {Function} [props.onClick] - Click handler
 * @param {"button" | "submit" | "reset"} [props.type="button"] - HTML button type
 * @param {boolean} [props.disabled=false] - Disabled state
 * @param {string} [props.className=""] - Custom classes for button wrapper
 * @param {boolean} [props.showArrow=true] - Whether to show the trailing arrow
 * @param {string | React.ReactNode} [props.arrow="→"] - Arrow glyph or icon
 * @param {string} [props.target] - Link target
 * @param {string} [props.rel] - Link rel
 * @param {string} [props.ariaLabel] - Accessible aria-label
 */
export default function Button({
  variant = "primary",
  children,
  href,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  showArrow = true,
  arrow = "→",
  target,
  rel,
  ariaLabel,
  ...rest
}) {
  // Variant styles: identical geometry, distinct finishes
  const variantStyles = {
    primary: {
      body: "bg-[#253664] border border-white/15 text-white shadow-[0_4px_14px_rgba(7,13,28,0.6),inset_0_1px_0_rgba(255,255,255,0.18)] group-hover:bg-[#1c2a4f] group-hover:border-sky-400/40",
      content: "text-white",
      bracket: "border-sky-400/75 group-hover:border-sky-300 group-hover:opacity-100",
      arrow: "text-slate-100 group-hover:text-white"
    },
    secondary: {
      body: "bg-[#091226] border-[1.5px] border-slate-600/80 text-slate-100 shadow-[0_4px_12px_rgba(0,0,0,0.5)] group-hover:bg-[#0d1a36] group-hover:border-sky-400",
      content: "text-slate-100 group-hover:text-white",
      bracket: "border-sky-500/60 group-hover:border-sky-400 group-hover:opacity-100",
      arrow: "text-slate-300 group-hover:text-white"
    },
    ghost: {
      body: "bg-[#070d1c]/50 backdrop-blur-sm border border-slate-700/60 text-slate-300 group-hover:bg-slate-900/80 group-hover:border-slate-300/80",
      content: "text-slate-300 group-hover:text-white",
      bracket: "border-slate-400/40 group-hover:border-slate-200 group-hover:opacity-90",
      arrow: "text-slate-400 group-hover:text-white"
    },
    light: {
      // Exact visual match for the white/ice-blue reference card
      body: "bg-[#f1f5f9] border border-slate-300 text-slate-950 shadow-[0_4px_14px_rgba(0,0,0,0.4)] group-hover:bg-white group-hover:border-white",
      content: "text-slate-950 font-bold",
      bracket: "border-slate-300 group-hover:border-white group-hover:opacity-100",
      arrow: "text-slate-900 group-hover:text-slate-950"
    }
  };

  const current = variantStyles[variant] || variantStyles.primary;

  const innerContent = (
    <>
      {/* 1. Secondary Right Geometric Bracket (Sitting Behind / Beside with offset) */}
      <span
        aria-hidden="true"
        className={`absolute top-[2px] bottom-[2px] -right-[7px] w-[13px] z-0 -skew-x-[20deg] rounded-tr-[2px] rounded-br-[2px] border-t-[1.5px] border-r-[1.5px] border-b-[1.5px] border-l-0 pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          disabled ? "opacity-30" : "group-hover:translate-x-[4px]"
        } ${current.bracket}`}
      />

      {/* 2. Main Skewed Body with 2px Rounded Corners */}
      <span
        className={`relative z-10 w-full inline-flex items-center justify-center -skew-x-[20deg] rounded-[2px] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          disabled ? "" : "group-hover:translate-x-[2px] group-active:translate-x-[2px] group-active:translate-y-[1px]"
        } ${current.body}`}
      >
        {/* 3. Upright Content Layer (Counter-skewed with compact padding) */}
        <span
          className={`w-full inline-flex items-center justify-center gap-2.5 px-4.5 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-[13px] font-bold tracking-[0.06em] uppercase select-none skew-x-[20deg] transition-colors duration-300 ${current.content}`}
        >
          <span>{children}</span>
          {showArrow && (
            <span
              aria-hidden="true"
              className={`inline-block font-sans text-xs sm:text-sm leading-none transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                disabled ? "" : "group-hover:translate-x-[3px]"
              } ${current.arrow}`}
            >
              {arrow}
            </span>
          )}
        </span>
      </span>
    </>
  );

  const baseClasses = `group relative inline-flex items-center justify-center p-0 mr-3 bg-transparent border-0 outline-none select-none cursor-pointer text-decoration-none transition-opacity duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070d1c] ${
    disabled ? "opacity-45 cursor-not-allowed pointer-events-none" : ""
  } ${className}`;

  // If href is provided, render accessible Next.js <Link> or <a>
  if (href && !disabled) {
    const isExternal =
      href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:");
    if (isExternal) {
      return (
        <a
          href={href}
          target={target}
          rel={target === "_blank" ? rel || "noopener noreferrer" : rel}
          aria-label={ariaLabel}
          className={baseClasses}
          onClick={onClick}
          {...rest}
        >
          {innerContent}
        </a>
      );
    }
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        className={baseClasses}
        onClick={onClick}
        {...rest}
      >
        {innerContent}
      </Link>
    );
  }

  // If href is provided but disabled
  if (href && disabled) {
    return (
      <span
        role="link"
        aria-disabled="true"
        aria-label={ariaLabel}
        className={baseClasses}
        tabIndex={-1}
        {...rest}
      >
        {innerContent}
      </span>
    );
  }

  // Standard <button>
  return (
    <button
      type={type}
      disabled={disabled}
      aria-disabled={disabled}
      aria-label={ariaLabel}
      onClick={onClick}
      className={baseClasses}
      {...rest}
    >
      {innerContent}
    </button>
  );
}
