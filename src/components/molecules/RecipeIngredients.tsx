// components/molecules/RecipeIngredients.tsx
import Heading from "@/components/atoms/Heading";
import List, { ListItem } from "@/components/atoms/List";

type RecipeIngredientsProps = {
  items: ListItem[];
};

export default function RecipeIngredients({ items }: RecipeIngredientsProps) {
  return (
    <section>
      <Heading level={2}>Ingredients</Heading>
      <List items={items} />
    </section>
  );
}
