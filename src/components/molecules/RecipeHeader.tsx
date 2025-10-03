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
}: Readonly<RecipeHeaderProps>) {
  return (
    <header className="space-y-4 flex flex-col gap-8">
      <ImageFigure
        src={imageSrc}
        alt={imageAlt}
        caption={caption}
        width={600}
        height={400}
      />
      <div>
        <Heading level={1} preset="1">
          {title}
        </Heading>
        <Text preset="4">{description}</Text>
      </div>
    </header>
  );
}
