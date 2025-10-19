import { HTMLAttributes, ElementType } from "react";
import clsx from "clsx";
import Text from "./Text";

export type ListItem = {
  id: string | number;
  content: React.ReactNode;
  label?: string;
};

type ListProps = {
  items: ListItem[];
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

  const isOrdered = type === "ol";

  return (
    <Tag className={clsx("list-none", className)} {...props}>
      {items.map((item, index) => {
        const marker = isOrdered ? `${index + 1}.` : "•";

        if ("label" in item) {
          return (
            <li
              key={item.id}
              className={clsx(spacing, itemClassName, "flex items-start")}
            >
              <span
                className={clsx(
                  "text-brown-800 mr-4",
                  "text-preset-4-bold",
                  "leading-none",
                )}
              >
                {marker}
              </span>
              <div className="inline">
                <Text preset={preset} className="font-bold inline">
                  {item.label}
                </Text>
                {": "}
                <Text preset={preset} className="inline">
                  {item.content}
                </Text>
              </div>
            </li>
          );
        }

        return (
          <li
            key={item.id}
            className={clsx(spacing, itemClassName, "flex items-start")}
          >
            <span
              className={clsx(
                "text-brown-800 mr-4",
                "text-preset-4-bold",
                "leading-none",
              )}
            >
              {marker}
            </span>
            <Text preset={preset}>{item.content}</Text>
          </li>
        );
      })}
    </Tag>
  );
}
