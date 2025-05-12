"use client";

import { ReactNode, useTransition } from "react";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useParams } from "next/navigation";
import { Locale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

interface Props {
  children: ReactNode;
  defaultValue: string;
}
const LocaleSwitcherSelect = ({ children, defaultValue }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const [isPending, startTransition] = useTransition();

  const onSelectChange = (value: string) => {
    const nextLocale = value as Locale;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        { pathname, params },
        { locale: nextLocale }
      );
    });
  };

  return (
    <div>
      <Label>
        <Select
          disabled={isPending}
          onValueChange={onSelectChange}
          defaultValue={defaultValue}
        >
          <SelectTrigger className="cursor-pointer border-0 bg-secondary">
            <SelectValue />
          </SelectTrigger>
          <SelectContent align="end">
            <SelectGroup>{children}</SelectGroup>
          </SelectContent>
        </Select>
      </Label>
    </div>
  );
};

export default LocaleSwitcherSelect;
