import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    // retrieve an item from localStorage, call localStorage.getItem('foobar')
    const [storedValue, setStoredValue] = useState(() => {
        // get from local storage by key
        const item = window.localStorage.getItem(key);
        // parse and return stored json or initial value
        return item ? JSON.parse(item) : initialValue;
    })

    const setValue = value => {
        // save state
        setStoredValue(value);
        // save to local storage
        window.localStorage.setItem(key, JSON.stringify(value))
    };

    return [storedValue, setValue];
};