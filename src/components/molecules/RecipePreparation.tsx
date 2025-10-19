// components/molecules/RecipePreparation.tsx
import Heading from "@/components/atoms/Heading";
import List, { ListItem } from "@/components/atoms/List";

type RecipePreparationProps = {
  items: ListItem[];
};

export default function RecipePreparation({
  items,
}: Readonly<RecipePreparationProps>) {
  return (
    <div className="bg-rose-50 rounded-xl p-6 my-6">
      <Heading as="p" level={2} preset="3" color="rose-800" className="pb-4">
        Preparation Time
      </Heading>
      <List items={items} />
    </div>
  );
}
