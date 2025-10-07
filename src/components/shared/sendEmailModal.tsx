import { sendEmail } from "@/services/EmailService";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function SendEmailModal({ isOpen, onClose }: Readonly<{ isOpen: boolean; onClose: () => void }>) {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState<{ email?: string; message?: string }>({});
    const maxMessageLenght = 255
    const translator = useTranslations('Home.Modal')

    if (!isOpen) return null

    const closeModal = () => {
        setEmail("")
        setMessage("")
        setErrors({})
        onClose()
    }

    const validateEmail = (email: string) => {
        let emailError = ""
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

        if (!email.trim()) {
            emailError = translator("email_required");
        } else if (!emailRegex.test(email)) {
            emailError = translator("email_invalid");
        }

        return emailError
    }

    const validateMessage = (message: string) => {
        let messageError = ""
        if (!message.trim()) {
            messageError = translator("message_required");
        } else if(message.length > maxMessageLenght) {
            messageError = translator("message_lenght_error")
        }
        return messageError
    }

    const handleSend = async () => {
        const newErrors: { email?: string; message?: string } = {};

        const isValidEmail = validateEmail(email)
        const isValidMessage = validateMessage(message)

        if(isValidEmail.length > 0) newErrors.email = isValidEmail
        if(isValidMessage.length > 0) newErrors.message = isValidMessage
        
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const res = await sendEmail({
            content: message,
            from: email
        })
        
        if (!res.success) {
            // alert("Erro ao enviar o e-mail");
            return
        }

        alert("E-mail enviado com sucesso!");
        closeModal();
    };

    return (
        <div className="fixed inset-0 bg-gray-500/50 flex justify-center items-center z-50">
            <div className="bg-modal-bg p-6 rounded-lg shadow-lg w-11/12 max-w-md">
                <section className="flex justify-between">
                    <h2 className="text-textbase text-xl sm:text-2xl font-bold mb-2">{translator("title")}</h2>
                    <button 
                        className="w-6 h-6 sm:w-8 sm:h-8 hover:cursor-pointer"
                        onClick={closeModal}
                    >
                        <XMarkIcon />
                    </button>
                </section>
                <div className="mb-3">
                    <label htmlFor="email">{translator("email_label")}:</label>
                    <input 
                        id="email" 
                        type="email"
                        required={true}
                        className={
                            `w-full mt-1 p-2 border outline-none rounded ${errors.email ? "border-red-500" : ""}`
                        }
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={translator("email_placeholder")}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="content" className="mt-5">{translator("message_label")}:</label>
                    <textarea
                        className={`w-full mt-1 p-2 border rounded outline-none ${
                            errors.message ? "border-red-500" : ""
                        }`}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required={true}
                        placeholder={translator("message_placeholder")}
                        rows={4}
                    />
                    {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                </div>
                <p className="text-gray-400">{message.length}/{maxMessageLenght}</p>
                <div className="flex justify-end space-x-2 mt-3">
                    <button
                        type="submit"
                        className="bg-mainact text-white px-4 py-2 rounded hover:cursor-pointer"
                        onClick={handleSend}
                    >
                        {translator("send_button")}
                    </button>
                </div>
            </div>
        </div>
    );
}