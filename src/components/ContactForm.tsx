"use client";

import emailjs from '@emailjs/browser';
import React, { useState } from "react";

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        user_message: '',
    });
    const [errors, setErrors] = useState({
        user_name: '',
        user_email: '',
        user_message: '',
    });

    const validateForm = () => {
        const newErrors = { user_name: '', user_email: '', user_message: '' };
        let isValid = true;

        if (!formData.user_name.trim()) {
            newErrors.user_name = 'El nombre es obligatorio.';
            isValid = false;
        }
        if (!formData.user_email.trim()) {
            newErrors.user_email = 'El email es obligatorio.';
            isValid = false;
        } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.user_email)) {
            newErrors.user_email = 'El email no es válido.';
            isValid = false;
        }
        if (!formData.user_message.trim()) {
            newErrors.user_message = 'El mensaje es obligatorio.';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!validateForm()) return;

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
                        <div key={i} className="relative">
                            <input
                                type={name === 'user_email' ? 'email' : 'text'}
                                name={name}
                                value={formData[name as keyof typeof formData]}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 bg-transparent text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#C778DD] focus:border-transparent"
                                placeholder={name === 'user_name' ? 'Nombre' : 'Email'}
                            />
                            {errors[name as keyof typeof errors] && (
                                <p className="text-red-500 text-sm mt-1">{errors[name as keyof typeof errors]}</p>
                            )}
                        </div>
                    ))}
                </div>
                <div className="relative">
                    <textarea
                        name="user_message"
                        value={formData.user_message}
                        onChange={handleChange}
                        cols={30}
                        rows={5}
                        className="mt-1 block w-full p-2 bg-transparent text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#C778DD] focus:border-transparent"
                        placeholder="Mensaje"
                    ></textarea>
                    {errors.user_message && (
                        <p className="text-red-500 text-sm mt-1">{errors.user_message}</p>
                    )}
                </div>
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
