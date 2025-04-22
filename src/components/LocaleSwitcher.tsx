import React from "react";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";
import { useLocale, useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import { SelectItem } from "./ui/select";
import { cn } from "@/lib/utils";

const LocaleSwitcher = () => {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  return (
    <LocaleSwitcherSelect defaultValue={locale}>
      {routing.locales.map((cur) => (
        <SelectItem
          className={cn("cursor-pointer", cur === locale && "bg-secondary")}
          key={cur}
          value={cur}
        >
          {t("locale", { locale: cur })}
        </SelectItem>
      ))}
    </LocaleSwitcherSelect>
  );
};

export default LocaleSwitcher;
