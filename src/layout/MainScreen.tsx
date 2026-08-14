interface mainScreenProps {
  children: React.ReactNode;
}

export const MainScreen: React.FC<mainScreenProps> = ({ children }) => {
  return <main className="main-screen">{children}</main>;
};
