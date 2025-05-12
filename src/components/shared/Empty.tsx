import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { Url } from "url";

interface EmptyProps {
  item: string;
  href?: Url;
}
const Empty = ({ item, href }: EmptyProps) => {
  const t = useTranslations(`Empty.${item}`);
  return (
    <div
      className="absolute top-1/2 left-1/2"
      style={{ transform: "translate(-50%)" }}
    >
      <div className="flex flex-col justify-center items-center w-full">
        <h3>{t("title")}</h3>
        <span>{t("description")}</span>
        {href && <Link href={href}>{t("action")}</Link>}
      </div>
    </div>
  );
};

export default Empty;
