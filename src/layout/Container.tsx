import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn("mx-auto max-w-7xl px-5 py-4", className)}>
      {children}
    </div>
  );
};
