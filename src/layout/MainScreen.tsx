interface mainScreenProps {
  children: React.ReactNode,
}

export const MainScreen: React.FC<mainScreenProps> = ({children}) => {
  return(
    <div className="main-screen">{children}</div>
  );
}