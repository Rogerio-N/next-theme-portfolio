import Badge from "@/icons/badge";
import { useTranslations } from "next-intl";
import Skills from "./skills";
import Projects from "./projects";
import ContactMe from "./ContactMe";

export default function Main() {
    const translator = useTranslations('Home')

    return <main className="mt-4 sm:mt-8">
        <section className="flex">
            <h1 className="text-texthighlight text-xl sm:text-4xl sm:mr-2">Rogério Nakayama Bernardo</h1>
            <Badge />
        </section>
        <section>
            <article>
                <h2 className="text-textbase text-xl mt-2 sm:text-2xl sm:mt-4">{translator('role')}</h2>
                <p className="test-textbase text-sm sm:text-base mt-3 text-justify sm:mt-5">{translator('workDescription')}</p>
                <p className="text-textbase text-sm sm:text-base mt-3">{translator('personalTime')}</p>
                <ContactMe />
            </article>
        </section>
        <section className="flex justify-between flex-col lg:flex-row">
            <Skills />
            <Projects />
        </section>

    </main>
}