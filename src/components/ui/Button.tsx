import Link from "next/link";

type ButtonProps = {
  variant?: "primary" | "secondary";
  size?: "default" | "lg" | "sm";
  href?: string;
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const variantClasses = {
  primary:
    "bg-primary text-white hover:bg-primary-dark",
  secondary:
    "border-2 border-black text-black hover:bg-black hover:text-white",
};

const sizeClasses = {
  sm: "px-6 py-2.5 text-sm",
  default: "px-8 py-3.5 text-base",
  lg: "px-10 py-4 text-lg",
};

export default function Button({
  variant = "primary",
  size = "default",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
