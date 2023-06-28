import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import SunIcon from "../public/icons/sun.svg";
import MoonIcon from "../public/icons/moon.svg";
import Image from "next/image";

const ToggleButton = () => {
  //Delay rendeing  any theme toggling UI until mountedon the client. Hydration mismatch
  const [mounted, setMounted] = useState(false);
  const { systemTheme, resolvedTheme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  //Change theme use system theme changes
  useEffect(() => {
    setTheme(systemTheme);
  }, [systemTheme]);

  if (!mounted) {
    return null;
  }

  console.log("local", window.localStorage);
  console.log("systemTheme", systemTheme);
  console.log("current theme", resolvedTheme);

  return (
    <div className="">
      <button
        className="rounded-full w-100 h-14 mr-auto px-5 py-2.5 text-center inline-flex items-center mb-14 

        bg-gradient-to-bl from-cyan-300 to-blue-500 
        ring-cyan-300 ring-4
        hover:bg-gradient-to-br  focus:ring-4 focus:outline-none focus:ring-cyan-300
         
        dark:bg-gradient-to-br dark:from-purple-600 dark:to-blue-500
        dark:ring-blue-300 dark:ring-4
        dark:hover:bg-gradient-to-bl dark:focus:ring-4 dark:focus:outline-none dark:focus:ring-blue-300"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        <Image
          className="sun-icon w-10 h-10 mr-2 ease-out duration-150 
          dark:opacity-0 dark:translate-y-5"
          src={SunIcon}
          alt="sun icon"
          priority
        />
        <Image
          className="moon-icon w-10 h-10 translate-y-5 opacity-0 
          dark:opacity-100 ease-in duration-150 dark:translate-y-0"
          src={MoonIcon}
          alt="moon icon"
          priority
        />
      </button>
    </div>
  );
};

export default ToggleButton;
