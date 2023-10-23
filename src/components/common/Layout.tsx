import { ReactNode } from "react";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="h-screen relative flex justify-center items-center">
      {children}
    </main>
  );
};

interface LayoutProps {
  children: ReactNode;
}
