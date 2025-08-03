import ThemeComponent from "@/components/header/ThemeComponent";
import Logo from "@/icons/logo";

export default function Header() {
    return <header className="flex w-full justify-between">
        <Logo />
        <ThemeComponent />
    </header>
    
}