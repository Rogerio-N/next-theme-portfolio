import { cookies } from "next/headers";
import LanguagePicker from "./LanguagePicker";

export default async function LanguagePickerWrapper() {
    const store = await cookies();
    const locale = store.get("locale")?.value || "en";

    return <LanguagePicker initialLocale={locale} />;
}