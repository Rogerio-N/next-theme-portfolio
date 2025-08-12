'use client'

import {useLocale} from 'next-intl';
import {usePathname, useRouter} from '@/i18n/navigation';
import { useParams } from "next/navigation";

export default function LanguagePicker() {
    
    const locale = useLocale()
    const pathname = usePathname();
    const router = useRouter();
    const params = useParams();

    function handleLanguageChange(value:string) {
        router.replace(
            // @ts-expect-error
            {pathname, params},
            {locale: value}
        )
    }

    return (<div className="outline-solid outline-mainact outline-3 px-5 ml-5">
        <select 
            value={locale} 
            name="language" 
            id="language-picker" 
            className="text-textbase bg-transparent align-middle w-full h-full outline-none" 
            onChange={(e) => handleLanguageChange(e.target.value)}
        >
            <option value="pt-BR" className="text-ltext">PT-BR</option>
            <option value="en" className="text-ltext">EN</option>
        </select>
    </div>)
}