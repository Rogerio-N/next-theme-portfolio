import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

export default function ThemeComponent() {
    const {theme, setTheme} = useTheme()
    const translator = useTranslations("Header")

    const handleThemeChange = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    const isThemeLightActive = theme === "light"

    return (
        <button aria-label={translator("theme_button")} className="hover:cursor-pointer" onClick={handleThemeChange}>
            {isThemeLightActive ? <SunIcon className="w-6 sm:w-8 h-full align-middle"/> : <MoonIcon className="w-5 h-full align-middle rotate-270 sm:w-6"/>}
        </button>
    )
}