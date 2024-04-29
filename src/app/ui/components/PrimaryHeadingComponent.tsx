import { PrimaryHeadingProps } from "@/app/lib/interfaces";

const PrimaryHeadingComponent = ({ children }: PrimaryHeadingProps) => {
  return (
    <h1 className="text-gold font-concertOne opacity-80 text-6xl mb-8">
      {children}
    </h1>
  );
};

export default PrimaryHeadingComponent;
