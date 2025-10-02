// components/molecules/RecipePreparation.tsx
import Heading from "@/components/atoms/Heading";
import List, { ListItem } from "@/components/atoms/List";

type RecipePreparationProps = {
  items: ListItem[];
};

export default function RecipePreparation({ items }: RecipePreparationProps) {
  return (
    <section>
      <Heading level={2}>Preparation Time</Heading>
      <List items={items} />
    </section>
  );
}
