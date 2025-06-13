"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50 border-solid border-gray-500"
      {...props}
    />
  );
};

export { Toaster };
