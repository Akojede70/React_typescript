
// import React, { createContext } from "react";
// import theme from "./theme"



// type ThemeContextProviderProps = {
//        children: React.ReactNode;
//      };

//      const ThemeContext = createContext(theme);
// function themeContext() {

//     const themeContextProvider = ({
//            children,
//          }: ThemeContextProviderProps) => {
//            return (
//              <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
//            );
//          };
//         }

// export default themeContextProvider



import React, { createContext } from "react";
import theme from "./theme";


type ThemeContextProviderProps = {
  children: React.ReactNode;
};

const ThemeContext = createContext(theme);

const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
