import { HTMLAttributes, ElementType } from "react";
import clsx from "clsx";
import Text from "./Text";

export type ListItem = {
  id: string | number;
  content: React.ReactNode;
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

  return (
    <Tag className={clsx("list-inside", className)} {...props}>
      {items.map((item) => (
        <li key={item.id} className={clsx(spacing, itemClassName)}>
          <Text preset={preset}>{item.content}</Text>
        </li>
      ))}
    </Tag>
  );
}

// example usage
{
  /* <List
  type="ul"
  preset="4"
  items={[
    { id: "eggs", content: "2-3 large eggs" },
    { id: "salt", content: "Salt, to taste" },
    { id: "pepper", content: "Pepper, to taste" },
  ]}
/>

<List
  type="ol"
  preset="4-bold"
  items={[
    { id: 1, content: "Beat the eggs" },
    { id: 2, content: "Heat the pan" },
    { id: 3, content: "Cook the omelette" },
    { id: 4, content: "Add fillings" },
  ]}
/> */
}
