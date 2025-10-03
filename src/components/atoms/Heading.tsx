// components/atoms/Heading.tsx
import { ReactNode, HTMLAttributes, ElementType } from "react";
import clsx from "clsx";

type TextPreset = "1" | "2" | "3" | "4" | "4-bold";

type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6; // semantic heading tag
  children: ReactNode;
  color?: string;
  preset?: TextPreset; // design system text preset
  as?: ElementType; // override tag if needed
  className?: string;
} & HTMLAttributes<HTMLElement>;

export default function Heading({
  level = 2,
  children,
  color = "brown-800",
  preset = "2", // default preset if none provided
  as: CustomTag,
  className,
  ...props
}: HeadingProps) {
  // Decide which tag to render
  const Tag: ElementType = CustomTag || (`h${level}` as ElementType);

  const colorMap: Record<string, string> = {
    "brown-800": "text-brown-800",
  };

  return (
    <Tag
      className={clsx(
        "font-sans",
        `text-preset-${preset}`,
        colorMap[color],
        "pb-6",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
