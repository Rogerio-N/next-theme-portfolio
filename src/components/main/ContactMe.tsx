'use client'

import { useTranslations } from "next-intl";
import { useState } from "react";
import SendEmailModal from "../shared/sendEmailModal";

export default function ContactMe() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const translator = useTranslations('Home')


    return(
        <section>
            <button
                className="text-mainact border-mainact border-3 py-2 px-4 sm:py-3 sm:px-7 my-5 hover:bg-hover hover:cursor-pointer active:bg-hover"
                onClick={() => setIsModalOpen(true)}
            >
                {translator('contactButton')}
            </button>
            <SendEmailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    )
}
