import { ReactNode, HTMLAttributes, ElementType } from "react";
import clsx from "clsx";

type TextProps = {
  children: ReactNode;
  preset?: "1" | "2" | "3" | "4" | "4-bold";
  as?: ElementType; // <-- change here
  className?: string;
} & HTMLAttributes<HTMLElement>;

export default function Text({
  children,
  color = "text-stone-600",
  preset = "4",
  as: Tag = "p", // <-- rename 'as' to 'Tag' while destructuring
  className,
  ...props
}: TextProps) {
  const presetClass = `text-preset-${preset}`;

  return (
    <Tag className={clsx(presetClass, color, className)} {...props}>
      {children}
    </Tag>
  );
}
