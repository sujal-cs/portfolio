interface titleProps {
  title: string;
}

export const SectionTitle: React.FC<titleProps> = ({ title }) => {
  return (
    <h2 className="relative border-b border-line pb-1 text-xl font-bold tracking-tight after:absolute after:bottom-[-1px] after:left-0 after:h-0.5 after:w-10 after:bg-accent md:text-2xl">
      {title}
    </h2>
  );
};
