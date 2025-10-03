// components/molecules/RecipeInstructions.tsx
import Heading from "@/components/atoms/Heading";
import List, { ListItem } from "@/components/atoms/List";

type RecipeInstructionsProps = {
  items: ListItem[];
};

export default function RecipeInstructions({
  items,
}: Readonly<RecipeInstructionsProps>) {
  return (
    <section>
      <Heading level={2}>Instructions</Heading>
      <List type="ol" items={items} preset="4" spacing="mb-3" />
    </section>
  );
}
