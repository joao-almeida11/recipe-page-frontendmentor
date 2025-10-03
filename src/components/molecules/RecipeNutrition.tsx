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

export default function RecipeNutrition({
  items,
}: Readonly<RecipeNutritionProps>) {
  return (
    <div>
      <Heading level={2}>Nutrition</Heading>
      <Text preset="4">
        Nutritional values per serving without additional fillings.
      </Text>
      <table className="table-auto border-collapse w-full text-left mt-2 rounded-xl">
        <thead className="bg-rose-100 rounded-xl">
          <tr>
            <th className="py-1 px-2 font-medium rounded-tl-xl rounded-bl-xl">
              Nutrient
            </th>
            <th className="py-1 px-2 font-medium rounded-tr-xl rounded-br-xl">
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-b border-stone-150">
              <td className="py-1 px-2 font-medium">{item.label}</td>
              <td className="py-1 px-2">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
