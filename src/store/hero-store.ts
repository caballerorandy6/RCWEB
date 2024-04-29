import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { YearsOfExperience } from "@/app/lib/interfaces";

// Creación del store usando create y devtools
export const useHeroStore = create<YearsOfExperience>()(
  devtools((set) => ({
    findYoe: () => new Date().getFullYear() - 2022,
  }))
);
