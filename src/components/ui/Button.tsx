import React from "react";
import Link from "next/link";
import { ArrowRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "text";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  withArrow?: boolean;
  isLoading?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      icon,
      iconPosition = "right",
      withArrow = false,
      isLoading = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-sans font-semibold transition-all duration-150 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19B5A5] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    const sizeStyles = {
      sm: "text-[13px] min-h-[44px] px-4 py-2 rounded-[10px] gap-2",
      md: "text-[15px] min-h-[44px] px-5 py-2.5 rounded-[10px] gap-2.5",
      lg: "text-[16px] min-h-[48px] px-6 py-3.5 rounded-[12px] gap-3",
    };

    const variantStyles = {
      primary:
        "bg-[#0B0D0E] text-white hover:bg-[#15191B] shadow-sm hover:shadow-md hover:-translate-y-0.5",
      secondary:
        "bg-white text-[#0B0D0E] border border-[#D9E1E1] hover:border-[#0B0D0E] hover:bg-[#F4F7F7] shadow-sm hover:shadow-md hover:-translate-y-0.5",
      text:
        "bg-transparent text-[#0B0D0E] hover:text-[#19B5A5] px-0 min-h-[44px] underline-offset-4 hover:underline",
    };

    const content = (
      <>
        {isLoading && <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />}
        {!isLoading && icon && iconPosition === "left" && icon}
        <span>{children}</span>
        {!isLoading && icon && iconPosition === "right" && icon}
        {!isLoading && withArrow && (
          <ArrowRight
            className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1"
            aria-hidden="true"
          />
        )}
      </>
    );

    const combinedClassName = cn(
      baseStyles,
      variant !== "text" && sizeStyles[size],
      variantStyles[variant],
      withArrow && "group",
      className
    );

    if (href) {
      return (
        <Link
          href={href}
          className={combinedClassName}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...(props as unknown as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        type={props.type || "button"}
        className={combinedClassName}
        disabled={disabled || isLoading}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

