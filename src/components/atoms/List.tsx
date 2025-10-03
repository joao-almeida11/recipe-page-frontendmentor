import { HTMLAttributes, ElementType } from "react";
import clsx from "clsx";
import Text from "./Text";

export type ListItem = {
  id: string | number;
  content: React.ReactNode;
};

export type ListItemPreparation = {
  id: string | number;
  content: React.ReactNode;
  label: string;
};

type ListProps = {
  items: ListItem[] | ListItemPreparation[];
  type?: "ul" | "ol";
  preset?: "1" | "2" | "3" | "4" | "4-bold";
  spacing?: string;
  className?: string;
  itemClassName?: string;
  as?: ElementType;
} & HTMLAttributes<HTMLElement>;

export default function List({
  items,
  type = "ul",
  preset = "4",
  spacing = "mb-2",
  className,
  itemClassName,
  as: CustomTag,
  ...props
}: ListProps) {
  const Tag: ElementType = CustomTag || type;

  return (
    <Tag className={clsx("list-inside", "list-disc", className)} {...props}>
      {items.map((item) => {
        if ("label" in item) {
          return (
            <li
              key={item.id}
              className={clsx(
                spacing,
                itemClassName,
                "flex flex-row flex-wrap",
              )}
            >
              <span className="text-2xl text-rose-800 leading-none mr-4">
                •
              </span>
              <Text preset={preset} className="font-bold">
                {item.label}
              </Text>
              <Text preset={preset}>{item.content}</Text>
            </li>
          );
        }

        return (
          <li
            key={item.id}
            className={clsx(spacing, itemClassName, "flex flex-row flex-wrap")}
          >
            <span className="text-2xl text-rose-800 leading-none mr-4">•</span>
            <Text preset={preset}>{item.content}</Text>
          </li>
        );
      })}
    </Tag>
  );
}
