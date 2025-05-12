"use client";

import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { MoveLeft } from "lucide-react";
import { useTranslations } from "next-intl";

interface Props {
  text?: string;
}
const BackToList = ({ text }: Props) => {
  const router = useRouter();
  const t = useTranslations();
  return (
    <Button
      onClick={() => router.back()}
      type="button"
      className="bg-transparent text-primary hover:bg-transparent hover:opacity-80"
    >
      <MoveLeft />
      {text ? <span>{text}</span> : <span>{t("Common.goBack")}</span>}
    </Button>
  );
};

export default BackToList;
