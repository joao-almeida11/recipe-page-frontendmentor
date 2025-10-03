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
        className={clsx("rounded-2xl w-full max-w-full h-auto", imageClassName)}
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
