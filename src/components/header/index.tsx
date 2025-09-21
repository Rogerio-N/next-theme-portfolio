import ThemeComponent from "@/components/header/ThemeComponent";
import Logo from "@/icons/logo";
import LanguagePickerWrapper from "./LanguagePickerWrapper";

export default function Header() {
    return <header className="flex w-full justify-between">
        <Logo />
        <div className="flex">
            <ThemeComponent />
            <LanguagePickerWrapper />
        </div>
    </header>
    
}