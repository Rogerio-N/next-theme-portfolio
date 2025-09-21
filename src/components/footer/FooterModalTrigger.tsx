'use client'

import { useTranslations } from "next-intl";
import { useState } from "react";
import SendEmailModal from "../shared/sendEmailModal";

export default function FooterModalTrigger() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const translator = useTranslations('Footer')
    
    return (
        <section>
            <button
                onClick={() => setIsModalOpen(true)}
                className="text-textbase text-sm sm:text-base hover:cursor-pointer bg-transparent border-none p-0"
            >
                {translator("contact")}
            </button>
            <SendEmailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    )
}
