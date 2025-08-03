import Header from "@/components/header";
import ThemeComponent from "@/components/header/ThemeComponent";
import Image from "next/image";


export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Header />
      <p className="text-textbase hover:bg-hover hover:cursor-pointer">aaa</p>
    </div>
  );
}
