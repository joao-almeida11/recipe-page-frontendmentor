// components/molecules/RecipeHeader.tsx
import Heading from "@/components/atoms/Heading";
import Text from "@/components/atoms/Text";
import ImageFigure from "@/components/atoms/ImageFigure";

type RecipeHeaderProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  caption?: string;
};

export default function RecipeHeader({
  title,
  description,
  imageSrc,
  imageAlt,
  caption,
}: RecipeHeaderProps) {
  return (
    <header className="space-y-4">
      <ImageFigure
        src={imageSrc}
        alt={imageAlt}
        caption={caption}
        width={600}
        height={400}
      />
      <Heading level={1}>{title}</Heading>
      <Text preset="4">{description}</Text>
    </header>
  );
}
