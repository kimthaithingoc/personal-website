import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

interface Props {
  images: string[];
  title: string;
  alt: string;
}
const Gallery = ({ images, title, alt }: Props) => {
  const t = useTranslations();
  return (
    images &&
    images.length > 0 && (
      <div className="space-y-3 w-full">
        <h3 className="text-lg font-semibold">{t(title)}</h3>
        <div
          className={cn(
            "grid items-center",
            images.length > 1 && "grid-cols-2 gap-2"
          )}
        >
          {images.map((image, index) => (
            <div
              className="relative h-36 overflow-hidden sm:h-52 rounded-md"
              key={image + index}
            >
              <Image
                src={image}
                alt={alt}
                fill
                className="object-cover rounded-md transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default Gallery;
