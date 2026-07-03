import { BookOpenIcon } from "lucide-react";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { ROUTES } from "@/constants/routes";

export function Logo() {
  return (
    <Link href={ROUTES.home} className="group flex items-center gap-2">
      <span
        className="flex size-8 items-center justify-center bg-primary text-primary-foreground transition-transform duration-300 ease-out group-hover:-rotate-6 group-hover:scale-105"
        style={{
          clipPath: "polygon(22% 0, 100% 0, 100% 100%, 0 100%, 0 22%)",
        }}
      >
        <BookOpenIcon className="size-4.5" />
      </span>
      <span className="font-heading text-base font-semibold tracking-tight">
        {siteConfig.name}
      </span>
    </Link>
  );
}
