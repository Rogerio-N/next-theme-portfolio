import ThemeComponent from "@/components/header/ThemeComponent";
import Logo from "@/icons/logo";
import LanguagePicker from "./LanguagePicker";

export default function Header() {
    return <header className="flex w-full justify-between">
        <Logo />
        <div className="flex">
            <ThemeComponent />
            <LanguagePicker />
        </div>
    </header>
    
}