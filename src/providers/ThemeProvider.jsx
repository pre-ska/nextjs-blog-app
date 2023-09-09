"use client";

import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeProvider = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // ! osiguram se da sam u browseru, na na serveru
  }, []);

  if (mounted) {
    return <div className={theme}>{children}</div>;
  }
};

export default ThemeProvider;
