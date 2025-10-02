// components/atoms/Heading.tsx
import { ReactNode, HTMLAttributes, ElementType } from "react";
import clsx from "clsx";

type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6; // default h2
  children: ReactNode;
  size?: "xl" | "lg" | "md" | "sm"; // optional size override
  color?: string; // optional color override
  as?: ElementType; // allows custom wrapper
  className?: string;
} & HTMLAttributes<HTMLElement>;

export default function Heading({
  level = 2,
  children,
  size,
  color = "text-foreground",
  as: CustomTag,
  className,
  ...props
}: HeadingProps) {
  // Use the custom tag if provided, otherwise default to h1-h6
  const Tag: ElementType = CustomTag || (`h${level}` as ElementType);

  const defaultSizeMap: Record<number, string> = {
    1: "text-4xl font-bold",
    2: "text-3xl font-semibold",
    3: "text-2xl font-semibold",
    4: "text-xl font-medium",
    5: "text-lg font-medium",
    6: "text-base font-medium",
  };

  const sizeMap: Record<string, string> = {
    xl: "text-4xl font-bold",
    lg: "text-3xl font-semibold",
    md: "text-2xl font-medium",
    sm: "text-base font-medium",
  };

  const headingClasses = clsx(
    "font-sans",
    color,
    size ? sizeMap[size] : defaultSizeMap[level],
    className,
  );

  return (
    <Tag className={headingClasses} {...props}>
      {children}
    </Tag>
  );
}
