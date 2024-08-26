
"use client";

import emailjs from '@emailjs/browser';
import React from "react";

export const ContactForm = () => {
    const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        emailjs.sendForm('service_6ky4x6u', 'template_q8s2t0x', event.currentTarget, "YFIMiRV6NjjYp8Kp7")
            .then(response => console.log('SUCCESS!', response.status, response.text))
            .catch(err => console.log('FAILED...', err));
    };

    return (
        <div className="w-full max-w-lg mx-auto p-4 text-base">
            <h2 className="text-2xl text-[#C778DD] mb-4">Contactame</h2>
            <form onSubmit={sendEmail} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {['user_name', 'user_email'].map((name, i) => (
                        <input
                            key={i}
                            type="text"
                            name={name}
                            className="mt-1 block w-full p-2 bg-transparent text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#C778DD] focus:border-transparent"
                            placeholder={name === 'user_name' ? 'Nombre' : 'Email'}
                        />
                    ))}
                </div>
                <textarea
                    name="user_message"
                    cols={30}
                    rows={5}
                    className="mt-1 block w-full p-2 bg-transparent text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#C778DD] focus:border-transparent"
                    placeholder="Mensaje"
                ></textarea>
                <button
                    type="submit"
                    className="w-full sm:w-auto py-2 px-4 bg-transparent border border-[#C778DD] text-white hover:border-white focus:outline-none focus:ring-2 focus:ring-[#C778DD] focus:ring-opacity-50 transition-all"
                >
                    Enviar
                </button>
            </form>
        </div>
    );
};
