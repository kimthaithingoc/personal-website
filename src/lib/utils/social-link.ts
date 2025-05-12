import { SiteConfig } from "@/types";

export function getSocialLinks(
  config: SiteConfig
): { name: string; href: string; icon: string }[] {
  return Object.entries(config.links).map(([key, value]) => {
    const displayName = key.charAt(0).toUpperCase() + key.slice(1);

    const iconMap: Record<string, string> = {
      email: "Email",
      github: "Github",
      linkedin: "Linkedin",
      x: "X",
    };

    return {
      name: displayName,
      href: value,
      icon: iconMap[key] || key,
    };
  });
}
