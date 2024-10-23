import { createContext, ReactNode, useContext, useState } from "react";
import { IThemeContext } from "../types/types";

const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isLight, setIsLight] = useState(true);


  const darkTheme = {
    main_bg: 'bg-gray-50',
    sec_bg: 'bg-gray-200',
    text_sec: 'text-gray-300',
    text_terc: 'text-gray-500',
    text_bw: 'text-black',
    meaning_text: 'text-gray-600',
    hover_play_btn: 'hover:shadow-blue-200 hover:border-solid hover:border-1 hover:border-blue-100'
  }

  const lightTheme = {
    main_bg: 'bg-gray-900',
    sec_bg: 'bg-gray-800',
    text_sec: 'text-gray-700',
    text_terc: 'text-gray-400',
    text_bw: 'text-gray-300',
    hover_play_btn: 'hover:shadow-gray-800 hover:border-solid hover:border-1 hover:border-blue-900',
    meaning_text: 'text-gray-100',
  }

  const theme = isLight ? lightTheme : darkTheme;

  const toggleTheme = () => {
    setIsLight(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isLight, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
