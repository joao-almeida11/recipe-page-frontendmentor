import RecipeHeader from "@/components/molecules/RecipeHeader";
import RecipePreparation from "@/components/molecules/RecipePreparation";
import RecipeIngredients from "@/components/molecules/RecipeIngredients";
import RecipeInstructions from "@/components/molecules/RecipeInstructions";
import RecipeNutrition from "@/components/molecules/RecipeNutrition";
import { ListItem } from "@/components/atoms/List";
import LineBreak from "@/components/atoms/LineBreak";
import Attribution from "@/components/atoms/Attribution";

export default function Home() {
  const preparation: ListItem[] = [
    {
      id: "total",
      label: "Total",
      content: "Approximately 10 minutes",
    },
    {
      id: "prep",
      label: "Preparation",
      content: "5 minutes",
    },
    {
      id: "cook",
      label: "Cooking",
      content: "5 minutes",
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
      label: "Beat the eggs",
      content:
        "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.",
    },
    {
      id: 2,
      label: "Heat the pan",
      content:
        "Place a non-stick frying pan over medium heat and add butter or oil.",
    },
    {
      id: 3,
      label: "Cook the omelette",
      content:
        "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
    },
    {
      id: 4,
      label: "Add fillings (optional)",
      content:
        "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
    },
    {
      id: 5,
      label: "Fold and serve",
      content:
        "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
    },
    {
      id: 6,
      label: "Enjoy",
      content: "Serve hot, with additional salt and pepper if needed.",
    },
  ];

  const nutrition = [
    { id: "calories", label: "Calories", value: "277 kcal" },
    { id: "carbs", label: "Carbs", value: "0 g" },
    { id: "protein", label: "Protein", value: "20 g" },
    { id: "fat", label: "Fat", value: "22 g" },
  ];

  return (
    <>
      <main className="sm:p-6 md:p-0 sm:mx-12 sm:my-32">
        <section className="mx-auto max-w-3xl p-6 sm:p-10 bg-white sm:rounded-3xl">
          <RecipeHeader
            title="Simple Omelette Recipe"
            description="An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats."
            imageSrc="./assets/images/image-omelette.jpeg"
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
      </main>
      <footer>
        <Attribution />
      </footer>
    </>
  );
}
