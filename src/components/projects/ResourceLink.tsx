import Link from "next/link";
import React from "react";

interface ResourceLinkProps {
  href?: string | null;
  ariaLabel: string;
  icon: React.ElementType;
}
const ResourceLink = ({ href, ariaLabel, icon: Icon }: ResourceLinkProps) => {
  return (
    href && (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full bg-white p-2 text-gray-900 transition-transform hover:scale-110 dark:bg-gray-800 dark:text-white"
        aria-label={ariaLabel}
      >
        <Icon className="h-5 w-5" />
      </Link>
    )
  );
};

export default ResourceLink;
