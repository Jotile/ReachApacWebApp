import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { Popup } from "../components/Popup";

export function Contact() {
    const formRef = useRef();
    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [popupType, setPopupType] = useState('');

    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const data = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value,
        };

        try {
            const response = await fetch("https://reachapacservice.azurewebsites.net/send-email", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setSent(true);
                formRef.current.reset();
                setPopupMessage("Message sent successfully!");
                setPopupType("success");
                setShowPopup(true);
            } else {
                const result = await response.json();
                setError(result.message || "Failed to send message.");
                setPopupMessage(result.message || "Failed to send message.");
                setPopupType("error");
                setShowPopup(true);
            }
        } 
        catch (error) {
            setError("Something went wrong, please try again.");
            setPopupMessage("Something went wrong, please try again.");
            setPopupType("error");
            setShowPopup(true);
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    };

    const closePopup = () => {
        setShowPopup(false);
    };
    
    return (
        <section className="min-h-screen py-20 px-6 md:px-12 bg-gradient-to-br from-primary via-secondary to-accent text-gray-900">
            <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto bg-white bg-opacity-90 p-10 rounded-2xl shadow-lg"
            >
                <h2 className="text-3xl md:text-4xl font-cinzel text-primary mb-6 text-center">
                    Contact Us
                </h2>
                <p className="text-lg text-center mb-10">
                    Have questions or want to connect? Reach out using the form or contact info below.
                </p>
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <MdEmail className="text-2xl text-primary" />
                            <span>otilejacob17@gmail.com</span>
                        </div>
                        <div className="flex items-start gap-4">
                            <MdLocationOn className="text-2xl text-primary" />
                            <span>P.O. Box 4, Unionville, IN 47468, USA</span>
                        </div>
                        {sent && <p className="text-green-600 font-medium">Message sent successfully!</p>}
                        {error && <p className="text-red-600 font-medium">{error}</p>}
                    </div>

                    <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block mb-1 font-semibold">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                ref={nameRef}
                                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Your name"
                            />
                        </div>
                            <div>
                                <label htmlFor="email" className="block mb-1 font-semibold">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    ref={emailRef}
                                    className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Your email"
                                />
                            </div>
                        <div>
                            <label htmlFor="message" className="block mb-1 font-semibold">
                                Message
                            </label>
                            <textarea
                                id="message"
                                ref={messageRef}
                                rows="5"
                                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                placeholder="Your message"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-primary text-white px-6 py-3 rounded-md shadow hover:bg-opacity-90 transition"
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </motion.div>
            {showPopup && (
                <Popup
                message={popupMessage}
                onClose={closePopup}
                type={popupType}
                />
            )}
        </section>
    );
}