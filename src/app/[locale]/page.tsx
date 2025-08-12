import Header from "@/components/header";
import Main from "@/components/main";
import {useTranslations} from 'next-intl';

export default function Home() {
  return (
    <div className="flex flex-col items-start w-full px-20 py-10">
      <Header />
      <Main />
    </div>
  );
}
