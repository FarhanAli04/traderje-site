"use client";

import { createContext, useState, useContext, ReactNode, SetStateAction, Dispatch } from "react";
import { type UseEmblaCarouselType } from "embla-carousel-react";

type CarouselContextType = {
  carouselApi: UseEmblaCarouselType[0] | null;
  setCarouselApi: Dispatch<SetStateAction<UseEmblaCarouselType[0] | null>>;
};

const CarouselContext = createContext<CarouselContextType | undefined>(undefined);

export function CarouselProvider({ children }: { children: ReactNode }) {
  const [carouselApi, setCarouselApi] = useState<UseEmblaCarouselType[0] | null>(null);

  return (
    <CarouselContext.Provider value={{ carouselApi, setCarouselApi }}>
      {children}
    </CarouselContext.Provider>
  );
}

export function useCarousel() {
  const context = useContext(CarouselContext);
  if (context === undefined) {
    throw new Error("useCarousel must be used within a CarouselProvider");
  }
  return context;
}
