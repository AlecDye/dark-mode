import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

const useDarkMode = key => {
    const [theme, setTheme] = useLocalStorage(key);

    // check value from useLocalStorage if true/false
    useEffect(() => {
        if (useLocalStorage(theme) === true) {
            return document.body.classList.add("dark-mode")
        } else {
            return document.body.classList.remove("dark-mode")
        }
    }, [theme])
    return [theme, setTheme]
}