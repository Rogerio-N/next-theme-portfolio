import Footer from "@/components/footer";
import Header from "@/components/header";
import Main from "@/components/main";
import ToastContainerWrapper from "@/components/shared/ToastContainerWrapper";

export default function Home() {
  return (
    <div className="flex flex-col items-start w-full px-10 py-5 sm:px-20 sm:py-10 min-h-screen">
      <Header />
      <Main />
      <Footer />
      <ToastContainerWrapper />
    </div>
  );
}
