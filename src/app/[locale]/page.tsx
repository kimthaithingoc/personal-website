import LocaleSwitcher from "@/components/LocaleSwitcher";
import { ModeToggle } from "@/components/ModeToggle";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <div>
      {t("title")}
      <LocaleSwitcher />
      <ModeToggle />
    </div>
  );
}
