import React, { RefObject, useEffect, useState } from "react";
import * as Icons from "@/components/icons";

interface SkillCardProps {
  icon: string;
  index: number;
  sectionRef: RefObject<HTMLDivElement | null>;
}
const SkillCard = ({ icon, sectionRef, index }: SkillCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const Icon = Icons[icon as keyof typeof Icons];

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
    <div
      className="py-4 px-6 bg-gradient-to-r from-muted/30 to-muted cursor-default"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease, transform 0.5s ease ${index * 0.2}s`,
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="flex items-center justify-center gap-2">
        <Icon
          className="w-10 h-10 hover:opacity-75 transition-all"
          style={{
            transform: isHover ? "translateY(-5px)" : "translateY(0)",
            transition: `opacity 0.4s ease, transform 0.4s ease 0.2s`,
          }}
        />
        <span
          className="text-muted-foreground font-semibold"
          style={{
            transform: isHover ? "translateY(-5px)" : "translateY(0)",
            transition: `opacity 0.4s ease, transform 0.4s ease 0.2s`,
          }}
        >
          {icon}
        </span>
      </div>
    </div>
  );
};

export default SkillCard;
