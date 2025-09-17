import { useEffect, useState } from "react"

function useTheme() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(()=>{
        localStorage.setItem("theme", theme);
        document.body.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    }

    return [theme, toggleTheme]
}

export default useTheme;