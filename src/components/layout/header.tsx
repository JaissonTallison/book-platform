"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  BookCopyIcon,
  BookOpenIcon,
  GraduationCapIcon,
  type LucideIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { landingNavItems } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { ROUTES } from "@/constants/routes";
import { useAuth } from "@/hooks/use-auth";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

import { Logo } from "./logo";

const resourceItems = [
  {
    role: "reader",
    icon: BookOpenIcon,
    title: "Para leitores",
    description: "Monte sua biblioteca e acompanhe seu progresso.",
  },
  {
    role: "publisher",
    icon: BookCopyIcon,
    title: "Para editoras",
    description: "Publique e gerencie seus títulos com métricas.",
  },
  {
    role: "school",
    icon: GraduationCapIcon,
    title: "Para escolas",
    description: "Organize acervos e acompanhe suas turmas.",
  },
] as const;

const menuListVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.04 } },
};

const menuItemVariants = {
  hidden: { opacity: 0, y: -6 },
  show: { opacity: 1, y: 0 },
};

const NAV_ITEM_CLASS =
  "relative z-10 flex h-9 items-center gap-2 rounded-lg px-3.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground";

function ResourcesMenu({
  active,
  onEnter,
  icon: Icon,
}: {
  active: boolean;
  onEnter: () => void;
  icon: LucideIcon;
}) {
  return (
    <div onMouseEnter={onEnter} className="relative">
      {active && (
        <motion.span
          layoutId="nav-hover-pill"
          className="absolute inset-0 rounded-lg bg-accent"
          transition={{ type: "spring", stiffness: 400, damping: 32 }}
        />
      )}
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn(
                NAV_ITEM_CLASS,
                "h-9 bg-transparent hover:bg-transparent focus:bg-transparent data-open:bg-transparent data-open:text-foreground data-open:hover:bg-transparent data-open:focus:bg-transparent data-popup-open:bg-transparent data-popup-open:hover:bg-transparent"
              )}
            >
              <Icon className="size-4 text-primary" />
              <span>Recursos</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <motion.ul
                variants={menuListVariants}
                initial="hidden"
                animate="show"
                className="grid w-72 gap-1 p-1.5"
              >
                {resourceItems.map((item) => (
                  <motion.li key={item.role} variants={menuItemVariants}>
                    <NavigationMenuLink asChild>
                      <Link href={`${ROUTES.register}?role=${item.role}`}>
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <item.icon className="size-4.5 text-primary" />
                        </span>
                        <span className="flex flex-col gap-0.5">
                          <span className="font-heading text-sm font-semibold text-foreground">
                            {item.title}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {item.description}
                          </span>
                        </span>
                      </Link>
                    </NavigationMenuLink>
                  </motion.li>
                ))}
              </motion.ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

function DesktopNav() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <nav
      onMouseLeave={() => setHovered(null)}
      className="flex items-center gap-1"
    >
      {landingNavItems.map((item, index) => {
        if (item.label === "Recursos") {
          return (
            <ResourcesMenu
              key={item.href}
              active={hovered === index}
              onEnter={() => setHovered(index)}
              icon={item.icon}
            />
          );
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            onMouseEnter={() => setHovered(index)}
            className={NAV_ITEM_CLASS}
          >
            {hovered === index && (
              <motion.span
                layoutId="nav-hover-pill"
                className="absolute inset-0 rounded-lg bg-accent"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span className="relative flex items-center gap-2">
              <item.icon className="size-4 text-primary" />
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}

const [HomeNavIcon, ResourcesNavIcon, AboutNavIcon] = landingNavItems.map(
  (item) => item.icon
);

export function Header() {
  const isMobile = useIsMobile();
  const { user, isAuthenticated, logout } = useAuth();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleLogout() {
    logout();
    router.push(ROUTES.home);
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn(
        "sticky top-0 z-40 border-b transition-colors duration-300",
        scrolled
          ? "border-border/60 bg-background/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />

        {!isMobile && <DesktopNav />}

        {!isMobile && (
          <div className="flex items-center gap-1.5">
            {isAuthenticated ? (
              <>
                <span className="mr-1 text-sm text-muted-foreground">
                  Olá, {user?.name}
                </span>
                <Button variant="outline" onClick={handleLogout}>
                  Sair
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link href={ROUTES.login}>Entrar</Link>
                </Button>
                <Button asChild>
                  <Link href={ROUTES.register}>Cadastrar</Link>
                </Button>
              </>
            )}
          </div>
        )}

        {isMobile && (
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
              onClick={() => setMobileOpen((open) => !open)}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={mobileOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex"
                >
                  {mobileOpen ? <XIcon /> : <MenuIcon />}
                </motion.span>
              </AnimatePresence>
            </Button>

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>{siteConfig.name}</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 px-4">
                  <SheetClose asChild>
                    <Link
                      href={ROUTES.home}
                      className="flex items-center gap-2 text-sm font-medium"
                    >
                      <HomeNavIcon className="size-4 text-primary" />
                      {landingNavItems[0].label}
                    </Link>
                  </SheetClose>

                  <div className="flex flex-col gap-3">
                    <span className="flex items-center gap-2 text-sm font-medium">
                      <ResourcesNavIcon className="size-4 text-primary" />
                      {landingNavItems[1].label}
                    </span>
                    <div className="flex flex-col gap-3 border-l pl-3">
                      {resourceItems.map((item) => (
                        <SheetClose asChild key={item.role}>
                          <Link
                            href={`${ROUTES.register}?role=${item.role}`}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <item.icon className="size-4 text-primary" />
                            {item.title}
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  </div>

                  <SheetClose asChild>
                    <Link
                      href="#about"
                      className="flex items-center gap-2 text-sm font-medium"
                    >
                      <AboutNavIcon className="size-4 text-primary" />
                      {landingNavItems[2].label}
                    </Link>
                  </SheetClose>
                </nav>
                <div className="mt-auto flex flex-col gap-2 p-4">
                  {isAuthenticated ? (
                    <SheetClose asChild>
                      <Button variant="outline" onClick={handleLogout}>
                        Sair
                      </Button>
                    </SheetClose>
                  ) : (
                    <>
                      <SheetClose asChild>
                        <Button variant="outline" asChild>
                          <Link href={ROUTES.login}>Entrar</Link>
                        </Button>
                      </SheetClose>
                      <SheetClose asChild>
                        <Button asChild>
                          <Link href={ROUTES.register}>Cadastrar</Link>
                        </Button>
                      </SheetClose>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        )}
      </div>
    </motion.header>
  );
}
