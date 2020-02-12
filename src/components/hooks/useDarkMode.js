import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

const useDarkMode = key => {
    const [light, setLight] = useLocalStorage(key);

    // check value from useLocalStorage if true/false
    useEffect(() => {

    })
}