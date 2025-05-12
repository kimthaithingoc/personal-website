import React from "react";
import { Download } from "lucide-react";
import { useTranslations } from "next-intl";

const DownloadResume = () => {
  const t = useTranslations();
  return (
    <a
      href="/resume.pdf"
      download={`${t("config.myName")}_Resume.pdf`}
      className="text-xs md:text-base gap-1 font-semibold rounded-full shadow-inner bg-primary border-primary/10 hover:bg-primary/80 md:p-3 p-1 flex items-center justify-center md:gap-2 text-primary-foreground hover:text-primary-foreground"
    >
      {t("Button.downloadResume")}
      <Download className="w-4 h-4" />
    </a>
  );
};

export default DownloadResume;
