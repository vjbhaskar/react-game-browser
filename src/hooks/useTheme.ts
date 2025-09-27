import { createTheme } from "@mui/material/styles";
import { useState } from "react";

const useTheme = () => {
  let theme;

  const [isDark, setToggleTheme] = useState(true);
  theme = createTheme({
    colorSchemes: {
      dark: isDark,
    },
  });
  const onToggleTheme = () => {
    setToggleTheme(!isDark);
  };
  return { theme, isDark, onToggleTheme };
};

export default useTheme;
