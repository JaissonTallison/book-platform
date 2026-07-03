"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 6000;

export interface CarouselSlideImage {
  src: string;
  alt: string;
}

interface PhotoCarouselProps {
  slides: CarouselSlideImage[];
  onIndexChange?: (index: number) => void;
}

export function PhotoCarousel({ slides, onIndexChange }: PhotoCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const handleSelect = useCallback(
    (nextApi: CarouselApi) => {
      if (!nextApi) return;
      const index = nextApi.selectedScrollSnap();
      setCurrent(index);
      onIndexChange?.(index);
    },
    [onIndexChange]
  );

  useEffect(() => {
    if (!api) return;

    // Syncs the initial slide index from the embla API on mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    handleSelect(api);
    api.on("select", () => handleSelect(api));
  }, [api, handleSelect]);

  useEffect(() => {
    if (!api || isHovering) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, AUTOPLAY_MS);

    return () => clearInterval(interval);
  }, [api, isHovering]);

  return (
    <div
      className="absolute inset-0"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        className="h-full w-full **:data-[slot=carousel-content]:h-full"
      >
        <CarouselContent className="ml-0 h-full">
          {slides.map((slide, index) => (
            <CarouselItem key={slide.src} className="h-full pl-0">
              <div className="relative h-full w-full overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  animate={{ scale: current === index ? 1.08 : 1 }}
                  transition={{
                    duration: current === index ? AUTOPLAY_MS / 1000 : 0,
                    ease: "linear",
                  }}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    priority={index === 0}
                    sizes="100vw"
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-t from-[#1a0f08]/85 via-[#1a0f08]/45 to-[#1a0f08]/60"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 65% 55% at 50% 48%, rgba(10,6,4,0.5), transparent 72%)",
        }}
      />

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 sm:bottom-8">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Ir para o slide ${index + 1}`}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "h-1.5 rounded-full transition-all",
              current === index ? "w-6 bg-white" : "w-1.5 bg-white/40"
            )}
          />
        ))}
      </div>
    </div>
  );
}
