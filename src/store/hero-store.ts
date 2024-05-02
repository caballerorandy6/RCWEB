import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { YearsOfExperience, ActivesSectionsProps } from "@/app/lib/interfaces";

// Creación del store usando create y devtools
export const useHeroStore = create<YearsOfExperience>()(
  devtools((set) => ({
    findYoe: () => new Date().getFullYear() - 2022,
  }))
);

export const useActiveSectionStore = create<ActivesSectionsProps>()(
  devtools((set) => ({
    activeSection: "Home",
    setActiveSection: (section: string) => {
      set({ activeSection: section });
    },
    timeOfLastClick: 0,
    setTimeOfLastClick(time: number) {
      set({ timeOfLastClick: time });
    },
  }))
);
