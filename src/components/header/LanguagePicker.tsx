export default function LanguagePicker() {
    return (<div className="outline-solid outline-mainact outline-3 px-5 ml-5">
        <select name="language" id="language-picker" className="text-textbase bg-transparent align-middle w-full h-full outline-none">
            <option value="pt-br" className="text-ltext">PT-BR</option>
            <option value="en-us" className="text-ltext">EN-US</option>
        </select>
    </div>)
}