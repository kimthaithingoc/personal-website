import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  const t = useTranslations("Error.NotFound");
  return (
    <div>
      <h2>{t("title")}</h2>
      <p>{t("description")}</p>
      <Link href="/">{t("button.returnHome")}</Link>
    </div>
  );
};

export default NotFound;
