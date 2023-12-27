// import React from "react";
// import { useContext } from "react";
// // import  ThemeContext  from "./ThemeContext";
// import ThemeContext from "./ThemeContext";


// function box() {
//   const theme = useContext(ThemeContext);
//   return (
//     <div style={{ backgroundColor: theme.primary.main }}> Theme context</div>
//   );
// }

// export default box;

import React from "react";
import { useContext } from "react";
import ThemeContext from "./ThemeContext"; // Make sure this import is correct

function Box() { // Renamed the function to start with an uppercase letter
  const theme = useContext(ThemeContext);
  return (
    <div style={{ backgroundColor: theme.primary.main }}>Theme context</div>
  );
}

export default Box;
