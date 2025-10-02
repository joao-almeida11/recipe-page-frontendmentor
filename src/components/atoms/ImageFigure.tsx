// components/atoms/ImageFigure.tsx
import Image, { ImageProps } from "next/image";
import { ReactNode } from "react";
import clsx from "clsx";

type ImageFigureProps = Omit<ImageProps, "alt"> & {
  alt: string; // required for accessibility
  caption?: ReactNode; // optional figcaption
  className?: string; // wrapper <figure> class
  imageClassName?: string; // additional class for the <Image> itself
};

export default function ImageFigure({
  src,
  alt,
  caption,
  className,
  imageClassName,
  ...imageProps
}: ImageFigureProps) {
  return (
    <figure className={clsx("flex flex-col items-center", className)}>
      <Image
        src={src}
        alt={alt}
        className={clsx("rounded-md", imageClassName)}
        {...imageProps}
      />
      {caption && (
        <figcaption className="mt-2 text-sm text-muted-foreground text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

// example usage
{
  /* <ImageFigure
  src="/images/image-omelette.jpeg"
  alt="Delicious omelette"
  caption="A simple omelette, ready to serve."
  width={400}
  height={300}
/>

<ImageFigure
  src="/images/logo.png"
  alt="Logo"
  width={120}
  height={120}
  imageClassName="shadow-lg"
/> */
}
