interface hoverInfoProps {
  text: string;
  children: React.ReactNode;
}

export const HoverInfo = ({ children, text }: hoverInfoProps) => {
  return (
    <div className="relative inline-flex items-center select-none">
      <div className="group relative inline-block">
        {children}
        <span className="absolute bottom-9 left-1/2 mb-2 w-max -translate-x-1/2 scale-0 transform rounded-md bg-ink px-1.5 py-1 text-sm font-medium text-canvas shadow-lg shadow-stone-950/15 transition-all duration-100 group-hover:scale-100">
          {text}
          <span className="absolute top-full left-1/2 -translate-x-1/2 transform border-8 border-transparent border-t-ink"></span>
        </span>
      </div>
    </div>
  );
};
