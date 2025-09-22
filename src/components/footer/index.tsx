import Logo from "@/icons/logo";
import Link from "next/link";
import FooterModalTrigger from "./FooterModalTrigger";

export default function Footer() {

    return (
        <footer className="justify-items-center mt-auto mx-auto">
            <Logo />
            <nav className="flex gap-3 sm:gap-5">
                <Link className="text-textbase text-sm sm:text-base" href="https://www.linkedin.com/in/rog%C3%A9rio-nakayama-566a391a4/" target="_blank">Linkedin</Link>
                <Link className="text-textbase text-sm sm:text-base" href="https://github.com/Rogerio-N" target="_blank">Github</Link>
                <FooterModalTrigger />
            </nav>
        </footer>
    )
}
