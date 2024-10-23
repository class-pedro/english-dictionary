import { createContext, ReactNode, useContext, useState } from "react";
import { FontFamily, IFontContext } from "../types/types";

const FontContext = createContext<IFontContext | undefined>(undefined);

export const FontProvider = ({ children }: { children: ReactNode }) => {
  const [fontFamily, setFontFamily] = useState<FontFamily>('font-sans');

  const toggleFontFamily = (value: FontFamily) => {
    setFontFamily(value);
  };

  return (
    <FontContext.Provider value={{ fontFamily, toggleFontFamily }}>
      {children}
    </FontContext.Provider>
  )
}

export const useFont = () => {
  const context = useContext(FontContext);

  if (!context) {
    throw new Error("useTheme must be used within a FontProvider");
  }

  return context;
};