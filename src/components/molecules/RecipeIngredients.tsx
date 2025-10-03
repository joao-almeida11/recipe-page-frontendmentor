// components/molecules/RecipeIngredients.tsx
import Heading from "@/components/atoms/Heading";
import List, { ListItem } from "@/components/atoms/List";

type RecipeIngredientsProps = {
  items: ListItem[];
};

export default function RecipeIngredients({ items }: RecipeIngredientsProps) {
  return (
    <div>
      <Heading level={2} preset="2">
        Ingredients
      </Heading>
      <List items={items} />
    </div>
  );
}
