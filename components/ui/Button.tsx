import Link from "next/link";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/25",
  secondary:
    "bg-white text-dark border border-border-gray hover:bg-light-gray",
  outline:
    "border-2 border-white/80 text-white hover:bg-white hover:text-dark",
  ghost: "text-white/90 hover:text-white hover:bg-white/10",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

type SharedProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type LinkButtonProps = SharedProps & {
  href: string;
  onClick?: () => void;
};

type NativeButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

function getClasses(
  variant: Variant,
  size: Size,
  className: string
): string {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md font-semibold uppercase tracking-wide transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50";

  return `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
}

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className = "",
    children,
  } = props;

  const classes = getClasses(variant, size, className);

  if ("href" in props && props.href) {
    const { href, onClick } = props;
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  const { href: _, ...buttonProps } = props as NativeButtonProps;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
