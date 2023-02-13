import React, { useState, useEffect, Dispatch, SetStateAction } from "react";

export interface IGlobalContext {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  handleDarkMode: (mode: boolean) => void;
}

export const GlobalContext = React.createContext({} as IGlobalContext);

export const GlobalProvider = ({ children }: any) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode");
    if (isDarkMode === "true") {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  // Handle dark mode
  const handleDarkMode = (mode: boolean) => {
    if (!mode) {
      localStorage.setItem("darkMode", "false");
      setDarkMode(false);
    } else {
      localStorage.setItem("darkMode", "true");
      setDarkMode(true);
    }
  };

  return (
    <GlobalContext.Provider value={{ darkMode, setDarkMode, handleDarkMode }}>
      {children}
    </GlobalContext.Provider>
  );
};
