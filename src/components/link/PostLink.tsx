import { siteConfig } from "@/lib/config";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";

interface PostLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  href?: string;
}
const PostLink = ({ children, href, ...props }: PostLinkProps) => {
  const isInternal = href?.startsWith(siteConfig.url);

  if (isInternal && href) {
    return (
      <Link href={href} className="text-blue-500 font-medium">
        {children}
      </Link>
    );
  }

  return (
    <a
      className="text-blue-500 font-medium gap-1 inline-flex items-center"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-link-type="mdx-link"
      aria-label={`Link to ${href}`}
      {...props}
    >
      {children}
      <MoveUpRight className="w-4 h-4" />
    </a>
  );
};

export default PostLink;
