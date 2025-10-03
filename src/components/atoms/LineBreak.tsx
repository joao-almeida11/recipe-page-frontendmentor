import { HTMLAttributes } from "react";
import clsx from "clsx";

type LineBreakProps = {
  className?: string;
} & HTMLAttributes<HTMLHRElement>;

export default function LineBreak({ className, ...props }: LineBreakProps) {
  return (
    <hr
      className={clsx("w-full h-[1px] my-8 bg-stone-150", className)}
      {...props}
    />
  );
}
