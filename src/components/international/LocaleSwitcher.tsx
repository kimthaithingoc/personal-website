import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { SelectItem } from "../ui/select";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";

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
