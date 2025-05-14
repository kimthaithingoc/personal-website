"use client";

import Image from "next/image";
import React, { RefObject, useEffect, useState } from "react";
import Link from "next/link";
import { IPost } from "@/types/post";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface PostCardProps {
  post: IPost;
  sectionRef: RefObject<HTMLDivElement | null>;
  index: number;
  orientation?: "horizontal" | "vertical";
}

const PostCard = ({
  post,
  sectionRef,
  index,
  orientation = "vertical",
}: PostCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Link href={`/blog/${post.slug}`}>
      <div
        className="group overflow-hidden rounded-md transition-all h-full"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: `opacity 0.5s ease, transform 0.5s ease ${index * 0.1}s`,
        }}
      >
        <div
          className={cn(
            "h-full",
            orientation === "horizontal" && "flex gap-3 items-start"
          )}
        >
          {/* Images */}
          <div
            className={cn(
              "relative overflow-hidden rounded-md",
              orientation === "horizontal"
                ? "w-1/2 sm:h-60 h-44"
                : "sm:h-52 h-36"
            )}
          >
            <Image
              src={post.thumbnail}
              alt={`Thumbnail of ${post.title}`}
              fill
              className="object-cover rounded-md transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </div>

          {/* Content */}
          <div
            className={cn(
              "mt-3 pb-2 space-y-1",
              orientation === "horizontal" && "w-1/2"
            )}
          >
            <p className="text-gray-600 dark:text-gray-400 text-justify text-xs">
              {t(
                "Date.short",
                { value: new Date(post.publishDate) },
                {
                  dateTime: {
                    short: {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    },
                  },
                }
              )}
            </p>

            <h3 className="font-bold">{post.title}</h3>

            <p
              className={cn(
                "text-gray-600 dark:text-gray-400 text-justify sm:text-sm text-xs overflow-ellipsis",
                orientation === "vertical" ? "line-clamp-3" : "line-clamp-6"
              )}
            >
              {post.description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
