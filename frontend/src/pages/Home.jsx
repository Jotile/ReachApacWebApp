import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

export function Home() {
    return (
        <section className="min-h-screen relative text-gray-900 py-20 px-6 md:px-12 bg-gradient-to-br from-primary via-secondary to-accent">
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl mx-auto bg-white bg-opacity-80 p-10 rounded-2xl shadow-lg relative"
            >
                <motion.img
                    src={logo}
                    alt="Reach APAC Logo"
                    className="mx-auto w-40 mb-6"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                />
                <motion.h1
                    className="text-4xl md:text-5xl font-cinzel mb-4 text-primary text-center"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.7 }}
                >
                    Restoring Lives
                </motion.h1>
                <motion.p
                    className="text-lg md:text-xl mb-8 mx-auto max-w-2xl text-justify"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    Reach Apac is a non-profit organization founded in November 2024 with a mission to serve the underserved communities in Apac, Northern Uganda, by providing essential healthcare services and addressing social determinants of health. 
                    We focus on empowering local communities through offering medical care, surgical interventions, and efforts to strengthen the healthcare infrastructure through education. 
                    Our work has been made possible by the generous support of our friends and partners, enabling us to bring healing to children and families suffering from preventable diseases and painful conditions, helping them regain their health and well-being.
                </motion.p>
                <motion.div
                className="flex justify-center space-x-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                >
                    <Link
                        to="/get-involved"
                        className="bg-primary text-white px-6 py-3 rounded-2xl shadow hover:bg-opacity-90 transition"
                    >
                        Get Involved
                    </Link>
                    <Link
                        to="/about"
                        className="border-2 border-primary text-primary px-6 py-3 rounded-2xl hover:bg-primary hover:text-white transition"
                    >
                        Learn More
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}
