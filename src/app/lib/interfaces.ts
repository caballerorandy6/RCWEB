export interface TooltipComponentProps {
  children: React.ReactNode;
  icon: React.ReactNode;
}

export interface YearsOfExperience {
  findYoe: () => number;
}

export interface BadgeProps {
  children?: React.ReactNode;
}

export interface PrimaryHeadingProps {
  children: React.ReactNode;
}

export interface TextProps {
  children: React.ReactNode;
}

export interface ContactsProps {
  href: "email" | "phone";
  icon: React.ReactNode;
  download?: string;
  target?: string;
}

export interface ActivesSectionsProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  timeOfLastClick?: number;
  setTimeOfLastClick?: (time: number) => void;
}
