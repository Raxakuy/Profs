import React, { useState, useEffect } from "react";
import "./App.css";
import { Theme } from "@radix-ui/themes";
import Navbar from "./components/navbar";
import { Flex, Box } from "@radix-ui/themes";

export const ThemeContext = React.createContext({
  theme: "light",
  toggleTheme: () => {},
});

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Theme appearance={theme}>
        <div className="App">
          <Navbar />
          <Flex
            direction="row"
            gap="4"
            align="center"
            justify="center"
            style={{ minHeight: "100vh" }}
          >
            <Box width="50%" p="4">
              <img
                src="./profile.jpeg"
                alt="Profile"
                style={{ width: "100%", borderRadius: "8px" }}
              />
            </Box>
            <Box width="50%" p="4">
              <h1>M.Rafliansyah</h1>
              <p>Mahasiswa Teknik Informatika</p>
              <p>
                Hai, Nama saya M.Rafliansyah biasa dipanggil Rafli. Saya adalah seorang mahasiswa Teknik Informatika dari USTI
                (Universitas Sains dan Teknologi Indonesia)
              </p>
              <p>
                <strong>Email:</strong> raxaraxa61@gmail.com
              </p>
            </Box>
          </Flex>
        </div>
      </Theme>
    </ThemeContext.Provider>
  );
}

export default App;
