import { ExternalLink } from "lucide-react";
import Image from "next/image";
import React, { RefObject, useEffect, useState } from "react";
import Link from "next/link";
import { ICertification } from "@/types/certification";
import { useTranslations } from "next-intl";

interface CertificationCardProps {
  certification: ICertification;
  sectionRef: RefObject<HTMLDivElement | null>;
  index: number;
}

const CertificationCard = ({
  certification,
  sectionRef,
  index,
}: CertificationCardProps) => {
  const t = useTranslations();
  const [isVisible, setIsVisible] = useState(false);

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
    <Link
      href={certification.credentialUrl || ""}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View live demo of ${certification.name}`}
      className="group overflow-hidden rounded-md shadow-inner transition-all border"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease, transform 0.5s ease ${index * 0.1}s`,
      }}
    >
      <div className="border border-primary/40 rounded-md">
        {/* Images */}
        <div className="relative h-36 overflow-hidden sm:h-52 rounded-md">
          <Image
            src={certification.image}
            alt={certification.name}
            fill
            className="object-cover rounded-md transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          <div className="absolute bottom-0 left-0 right-0 flex items-end gap-2 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {/* Content */}
            <div className="flex flex-col gap-1">
              <h3 className="font-bold text-white">{certification.name}</h3>
              <span className="text-gray-200 dark:text-gray-400 text-justify sm:text-sm text-xs">
                {certification.issuer}
              </span>
              <span className="text-gray-200 dark:text-gray-400 text-justify text-xs">
                {t("Date.normal", { value: new Date(certification.date) })}
                {certification.expires &&
                  ` - ${t("Date.normal", {
                    value: new Date(certification.expires),
                  })}`}
              </span>
            </div>
            {certification.credentialUrl && (
              <div className="rounded-full p-2 text-gray-200 transition-transform hover:scale-110 dark:text-white">
                <ExternalLink className="h-5 w-5" />
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CertificationCard;
