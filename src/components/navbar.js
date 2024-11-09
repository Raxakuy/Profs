import React from "react";
import { SegmentedControl } from "@radix-ui/themes";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { ThemeContext } from "../App";

function Navbar() {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <nav className="navbar">
      <div className="theme-toggle-container">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </nav>
  );
}

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <SegmentedControl.Root value={theme} onValueChange={toggleTheme}>
      <SegmentedControl.Item value="light">
        <SunIcon />
      </SegmentedControl.Item>
      <SegmentedControl.Item value="dark">
        <MoonIcon />
      </SegmentedControl.Item>
    </SegmentedControl.Root>
  );
}

export default Navbar;
