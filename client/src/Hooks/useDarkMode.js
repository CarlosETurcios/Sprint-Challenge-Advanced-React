import React, { useEffect } from 'react';
import { LocalStorage } from "./LocalStorage";

export const useDarkmode = (DM) => {
    const [darkMode, setDarkMode] = LocalStorage("dark mode is on", DM)

    useEffect(() => {
        const body = document.querySelector("body");
        if (darkMode) {
            body.className = "dark-mode";
        } else (body.className = "");
    }, [darkMode])

    return [darkMode, setDarkMode];


}
export default useDarkmode;