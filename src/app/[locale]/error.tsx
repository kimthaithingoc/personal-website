"use client";

import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}
const Error = ({ error, reset }: Props) => {
  const t = useTranslations("Error");
  const router = useRouter();
  useEffect(() => console.error(error), [error]);
  return (
    <div>
      <h2>{t("title")}</h2>
      <div className="flex items-center gap-2">
        <Button variant="outline" onClick={() => reset()}>
          {t("button.tryAgain")}
        </Button>
        <Button onClick={() => router.replace("/")}>
          {t("button.goHome")}
        </Button>
      </div>
    </div>
  );
};

export default Error;
