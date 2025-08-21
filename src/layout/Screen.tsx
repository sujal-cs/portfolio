interface screenProps {
  children: React.ReactNode
}

export const Screen: React.FC<screenProps> = ({children}) => {
  return(
    <div className="screen">{children}</div>
  );
}