"use client";

import { useTranslations } from "next-intl";
import React, { useRef, useState } from "react";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import PostCard from "./PostCard";
import { IPaginationResult } from "@/types/pagination";
import { IPost } from "@/types/post";

interface BlogProps {
  paginatedPost: IPaginationResult<IPost>;
}
const Blog = ({ paginatedPost }: BlogProps) => {
  const t = useTranslations("Blog");
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isHover, setIsHover] = useState(false);
  const tButton = useTranslations("Button");
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  React.useEffect(() => {
    if (!api) return;

    const updateButtons = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    updateButtons();
    api.on("select", updateButtons);
    api.on("reInit", updateButtons);

    return () => {
      api.off("select", updateButtons);
      api.off("reInit", updateButtons);
    };
  }, [api]);

  return (
    <section ref={sectionRef} className="py-4 space-y-4" id="experience">
      <Button
        className="hover:bg-primary/5 relative text-sm px-5 py-0.5 bg-background rounded-full text-foreground font-medium transition-all duration-300 border border-transparent"
        style={{
          backgroundClip: "padding-box",
        }}
      >
        <span className="relative z-10">{t("title")}</span>
        <span className="absolute inset-0 rounded-full -z-10 bg-gradient-to-r from-primary to-background p-0.5 -m-0.5" />
      </Button>

      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          align: "start",
        }}
      >
        <CarouselContent>
          {paginatedPost &&
            paginatedPost.data.length > 0 &&
            paginatedPost.data.map((post, index) => (
              <CarouselItem
                key={post.slug}
                className="flex basis-1/2 lg:basis-1/3"
              >
                <div className="w-full">
                  <PostCard index={index} post={post} sectionRef={sectionRef} />
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>
        {canScrollPrev && (
          <CarouselPrevious className="left-2 bg-muted text-muted-foreground" />
        )}
        {canScrollNext && (
          <CarouselNext className="right-2 bg-muted text-muted-foreground" />
        )}
      </Carousel>

      <Link
        href="/blog/"
        className="font-semibold flex items-center gap-1 hover:opacity-80"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <span>{tButton("viewMore")}</span>
        <MoveRight
          className="w-4 h-4 transition-transform"
          style={{
            transform: isHover ? "translateX(4px)" : "translateX(0)",
            transition: `opacity 0.3s ease, transform 0.3s ease 0.3s`,
          }}
        />
      </Link>
    </section>
  );
};

export default Blog;
