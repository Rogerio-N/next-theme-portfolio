import {useLocale, useTranslations} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/navigation';
import { useParams } from "next/navigation";

export default function LanguagePicker() {
    
    const locale = useLocale()
    const pathname = usePathname();
    const router = useRouter();
    const params = useParams();
    const translator = useTranslations('Header')

    function handleLanguageChange(value:string) {
        router.replace(
            // @ts-expect-error -- TypeScript will validate that only known `params` are used in combination with a given `pathname`. Since the two will always match for the current route, we can skip runtime checks.
            {pathname, params},
            {locale: value}
        )
    }

    return (<div className="outline-solid outline-mainact outline-3 px-2 ml-3 sm:px-5 sm:ml-5">
        <select 
            value={locale} 
            aria-label={translator("language_label")}
            name="language" 
            id="language-picker" 
            className="text-sm sm:text-base text-textbase bg-transparent align-middle w-full h-full outline-none" 
            onChange={(e) => handleLanguageChange(e.target.value)}
        >
            <option value="pt-BR" className="text-ltext">Português</option>
            <option value="en" className="text-ltext">English</option>
        </select>
    </div>)
}