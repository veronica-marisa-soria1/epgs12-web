import { type ReactNode, type ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "secondary" | "ghost";

interface BaseProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gold-500 text-ink hover:bg-gold-600 focus-visible:bg-gold-600",
  secondary:
    "border-2 border-teal-700 text-teal-900 hover:bg-teal-100 bg-transparent",
  ghost: "text-teal-900 hover:bg-paper-alt bg-transparent",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 font-body font-semibold text-sm transition-colors duration-150";

interface LinkButtonProps extends BaseProps {
  to: string;
}

export function ButtonLink({ to, variant = "primary", children, className = "" }: LinkButtonProps) {
  return (
    <Link to={to} className={`${base} ${variantClasses[variant]} ${className}`}>
      {children}
    </Link>
  );
}

interface ButtonProps extends BaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {}

export function Button({ variant = "primary", children, className = "", ...rest }: ButtonProps) {
  return (
    <button className={`${base} ${variantClasses[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}
