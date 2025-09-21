import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Projects() {
    const translator = useTranslations('Home')

    return <article className="mt-5 lg:mt-0 lg:w-1/2">
        <h2 className="text-textbase text-xl sm:text-2xl font-bold mb-2">{translator('projects')}</h2>
        <nav className="static flex flex-col">
            <Link className="text-sm sm:text-base underline underline-offset-3 mt-2" href="https://github.com/Rogerio-N/java-rest-assured-test" target="_blank">Java + RestAssured integration testing</Link>
            <Link className="text-sm sm:text-base underline underline-offset-3 mt-2" href="https://github.com/Rogerio-N/k6-js-test" target="_blank">K6 + JavaScript load testing the QuickkPizza</Link>
            <Link className="text-sm sm:text-base underline underline-offset-3 mt-2" href="https://github.com/Rogerio-N/cypress-ts-test" target="_blank">Cypress + Typescript e2e testing the Real World App</Link>
        </nav>
    </article>
}