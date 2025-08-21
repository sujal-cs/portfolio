interface titleProps {
  title: string,
}

export const SectionTitle: React.FC<titleProps> = ({title}) => {
  return(
    <h2 className="font-bold text-2xl border-b border-gray-300 dark:border-primary-accent">{title}</h2>
  );
}