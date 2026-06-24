import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function PageContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <main className={cn("app-page", className)}>{children}</main>;
}

export function ContentWidth({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("mx-auto w-full max-w-[1220px] px-4 sm:px-6 lg:px-8", className)}>{children}</div>;
}

export function SectionCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("surface-card", className)}>{children}</div>;
}

export function SoftCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("soft-card", className)}>{children}</div>;
}

export function Tag({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: "default" | "soft";
}) {
  return <span className={cn("tag", tone === "soft" && "tag-soft")}>{children}</span>;
}

type ButtonTone = "primary" | "secondary" | "ghost" | "nav-dark" | "nav-light";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  children: ReactNode;
  tone?: ButtonTone;
};

function toneClasses(tone: ButtonTone) {
  return cn(
    tone === "primary" && "button-primary",
    tone === "secondary" && "button-secondary",
    tone === "ghost" && "button-ghost",
    tone === "nav-dark" && "button-nav-dark",
    tone === "nav-light" && "button-nav-light",
  );
}

export function ButtonLink({ children, className, tone = "primary", ...props }: ButtonLinkProps) {
  return (
    <Link className={cn("button-base", toneClasses(tone), className)} {...props}>
      {children}
    </Link>
  );
}

export function ButtonAnchor({
  children,
  className,
  tone = "primary",
  ...props
}: ComponentProps<"a"> & {
  tone?: ButtonTone;
}) {
  return (
    <a className={cn("button-base", toneClasses(tone), className)} {...props}>
      {children}
    </a>
  );
}
