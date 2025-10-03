import RecipeHeader from "@/components/molecules/RecipeHeader";
import RecipePreparation from "@/components/molecules/RecipePreparation";
import RecipeIngredients from "@/components/molecules/RecipeIngredients";
import RecipeInstructions from "@/components/molecules/RecipeInstructions";
import RecipeNutrition from "@/components/molecules/RecipeNutrition";
import { ListItem, ListItemPreparation } from "@/components/atoms/List";
import LineBreak from "@/components/atoms/LineBreak";

export default function Home() {
  const preparation: ListItemPreparation[] = [
    {
      id: "total",
      label: "Total",
      content: ": Approximately 10 minutes",
    },
    {
      id: "prep",
      label: "Preparation",
      content: ": 5 minutes",
    },
    {
      id: "cook",
      label: "Cooking",
      content: ": 5 minutes",
    },
  ];

  const ingredients: ListItem[] = [
    { id: "eggs", content: "2-3 large eggs" },
    { id: "salt", content: "Salt, to taste" },
    { id: "pepper", content: "Pepper, to taste" },
    { id: "butter", content: "1 tablespoon of butter or oil" },
    {
      id: "fillings",
      content:
        "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
    },
  ];

  const instructions: ListItem[] = [
    {
      id: 1,
      content:
        "Beat the eggs with a pinch of salt and pepper. Add a tablespoon of water or milk for fluffiness.",
    },
    {
      id: 2,
      content: "Heat a non-stick pan over medium heat and add butter or oil.",
    },
    { id: 3, content: "Pour in the eggs, tilting the pan to coat evenly." },
    {
      id: 4,
      content:
        "When edges start to set but center is still runny, add fillings on one half.",
    },
    {
      id: 5,
      content:
        "Fold the omelette and cook for another minute, then slide onto a plate.",
    },
    { id: 6, content: "Serve hot, with additional salt and pepper if needed." },
  ];

  const nutrition = [
    { id: "calories", label: "Calories", value: "277 kcal" },
    { id: "carbs", label: "Carbs", value: "0 g" },
    { id: "protein", label: "Protein", value: "18 g" },
    { id: "fat", label: "Fat", value: "20 g" },
  ];

  return (
    <div className="sm:p-6 sm:mx-12 sm:my-32 ">
      <section className="mx-auto max-w-3xl p-6 sm:p-10 bg-white sm:rounded-3xl">
        <RecipeHeader
          title="Simple Omelette Recipe"
          description="An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats."
          imageSrc="/assets/images/image-omelette.jpeg"
          imageAlt="Delicious omelette"
          caption="A simple omelette, ready to serve."
        />
        <RecipePreparation items={preparation} />
        <RecipeIngredients items={ingredients} />

        <LineBreak />

        <RecipeInstructions items={instructions} />
        <LineBreak />

        <RecipeNutrition items={nutrition} />
      </section>
    </div>
  );
}
