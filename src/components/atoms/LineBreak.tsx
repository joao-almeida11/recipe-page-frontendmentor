// components/atoms/LineBreak.tsx
import { HTMLAttributes } from "react";
import clsx from "clsx";

type LineBreakProps = {
  className?: string;
} & HTMLAttributes<HTMLHRElement>;

export default function LineBreak({ className, ...props }: LineBreakProps) {
  return (
    <hr
      className={clsx(
        "w-full h-[1px] my-8 bg-stone-150", // height = 1px, padding = 32px, background color example
        className,
      )}
      {...props}
    />
  );
}
