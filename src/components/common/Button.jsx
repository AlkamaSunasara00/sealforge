"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Button({
  variant = "primary",
  children,
  href,
  onClick,
  type = "button",
  disabled = false,
  className = "",
  icon = null,
  iconPosition = "right",
  showArrow = true,
  arrow = null,
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
      icon: "text-slate-100 group-hover:text-white"
    },
    secondary: {
      body: "bg-[#091226] border-[1.5px] border-slate-600/80 text-slate-100 shadow-[0_4px_12px_rgba(0,0,0,0.5)] group-hover:bg-[#0d1a36] group-hover:border-sky-400",
      content: "text-slate-100 group-hover:text-white",
      bracket: "border-sky-500/60 group-hover:border-sky-400 group-hover:opacity-100",
      icon: "text-slate-300 group-hover:text-white"
    },
    ghost: {
      body: "bg-[#070d1c]/50 backdrop-blur-sm border border-slate-700/60 text-slate-300 group-hover:bg-slate-900/80 group-hover:border-slate-300/80",
      content: "text-slate-300 group-hover:text-white",
      bracket: "border-slate-400/40 group-hover:border-slate-200 group-hover:opacity-90",
      icon: "text-slate-400 group-hover:text-white"
    },
    light: {
      body: "bg-[#f1f5f9] border border-slate-300 text-slate-950 shadow-[0_4px_14px_rgba(0,0,0,0.4)] group-hover:bg-white group-hover:border-white",
      content: "text-slate-950 font-bold",
      bracket: "border-slate-300 group-hover:border-white group-hover:opacity-100",
      icon: "text-slate-900 group-hover:text-slate-950"
    },
    white: {
      body: "bg-white border border-white text-brand-950 shadow-[0_4px_14px_rgba(7,17,34,0.24)] group-hover:bg-brand-50 group-hover:border-brand-100",
      content: "text-brand-950",
      bracket: "border-white group-hover:border-bronze-400 group-hover:opacity-100",
      icon: "text-brand-800 group-hover:text-brand-950"
    }
  };

  const current = variantStyles[variant] || variantStyles.primary;

  // Resolve which icon to display
  const resolveIcon = () => {
    // 1. Explicit icon prop takes priority
    const targetIcon = icon !== null ? icon : (showArrow ? (arrow || ArrowRight) : null);
    if (!targetIcon) return null;

    // A. Already an instantiated React Element (e.g. <Send className="w-4 h-4" />)
    if (React.isValidElement(targetIcon)) {
      return targetIcon;
    }

    // B. Component function or forwardRef object (e.g. icon={FileDown} or icon={Send} or icon={ArrowRight})
    if (typeof targetIcon === "function" || (typeof targetIcon === "object" && targetIcon !== null)) {
      const IconComponent = targetIcon;
      return <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2] shrink-0" />;
    }

    // C. String / glyph fallback (e.g. "→", "↗")
    return <span className="font-sans leading-none">{targetIcon}</span>;
  };

  const resolvedIcon = resolveIcon();

  const iconElement = resolvedIcon ? (
    <span
      aria-hidden="true"
      className={`inline-flex items-center justify-center shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        disabled
          ? ""
          : iconPosition === "right"
          ? "group-hover:translate-x-[4px]"
          : "group-hover:-translate-x-[2px]"
      } ${current.icon}`}
    >
      {resolvedIcon}
    </span>
  ) : null;

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
          {iconPosition === "left" && iconElement}
          <span>{children}</span>
          {iconPosition === "right" && iconElement}
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
          {...rest}
        >
          {innerContent}
        </a>
      );
    }

    return (
      <Link href={href} aria-label={ariaLabel} className={baseClasses} {...rest}>
        {innerContent}
      </Link>
    );
  }

  // Otherwise render standard <button>
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={baseClasses}
      {...rest}
    >
      {innerContent}
    </button>
  );
}
