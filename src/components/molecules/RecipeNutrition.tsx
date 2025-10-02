// components/molecules/RecipeNutrition.tsx
import Heading from "@/components/atoms/Heading";
import Text from "@/components/atoms/Text";

type NutritionItem = {
  id: string;
  label: string;
  value: string;
};

type RecipeNutritionProps = {
  items: NutritionItem[];
};

export default function RecipeNutrition({ items }: RecipeNutritionProps) {
  return (
    <section>
      <Heading level={2}>Nutrition</Heading>
      <Text preset="4">
        Nutritional values per serving without additional fillings.
      </Text>
      <table className="table-auto border-collapse border border-stone-600 w-full text-left mt-2">
        <thead className="bg-stone-150">
          <tr>
            <th className="py-1 px-2 font-medium">Nutrient</th>
            <th className="py-1 px-2 font-medium">Amount</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-b border-stone-200">
              <td className="py-1 px-2 font-medium">{item.label}</td>
              <td className="py-1 px-2">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
