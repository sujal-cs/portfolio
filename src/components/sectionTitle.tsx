interface screenProps {
  children: React.ReactNode,
}

export const sectionTitle: React.FC<screenProps> = ({children}) =>{
  return(
    <div className="font-bold text-2xl">{children}</div>
  );
}