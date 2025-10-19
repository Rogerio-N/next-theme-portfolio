import { useMessages, useTranslations } from "next-intl";
import Link from "next/link";

export default function Projects() {
    const translator = useTranslations('Home')
    const title = translator('Projects.title')
    const contentTranslator = useTranslations('Home.Projects.Content')
    const messages = useMessages()
    const projectKeys = Object.keys(messages.Home.Projects.Content)

    return <article className="mt-5 lg:mt-0 lg:w-1/2">
        <h2 className="text-textbase text-xl sm:text-2xl font-bold mb-2">{title}</h2>
        <nav className="static flex flex-col">
            {
                projectKeys.map((key, index) => (
                    <Link key={index} className="text-sm sm:text-base underline underline-offset-3 mt-2" href="https://github.com/Rogerio-N/java-rest-assured-test" target="_blank">{contentTranslator(`${key}.name`)}</Link>
                ))
            }
        </nav>
    </article>
}