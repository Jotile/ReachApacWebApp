import React from "react";
import { motion } from "framer-motion";

export function About() {
    return (
        <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-primary via-secondary to-accent text-gray-900">
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto bg-white bg-opacity-90 p-10 rounded-2xl shadow-lg"
            >
                <motion.h2
                className="text-3xl md:text-4xl font-cinzel text-primary mb-6 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                >
                    About Us
                </motion.h2>
                <motion.p
                className="text-lg mb-8 text-justify"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                >
                    Reach APAC is a non-profit organization founded in November 2024 with a mission to
                    serve the underserved communities in Apac, Northern Uganda. We provide essential
                    healthcare services and address social determinants of health by empowering local
                    communities through medical care, surgical interventions, and educational support.
                </motion.p>
                <div className="space-y-6">
                    <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-semibold text-secondary mb-2">Mission</h3>
                        <p className="text-justify">
                            To provide state of the art healthcare services to underserved and forgotten
                            communities, empowering individuals to break the poverty cycle and build brighter
                            futures.
                        </p>
                    </motion.div>
                    <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-semibold text-secondary mb-2">Vision</h3>
                        <p className="text-justify">
                        A world with equitable access to quality healthcare for a vibrant community
                        filled with hope and opportunity.
                        </p>
                    </motion.div>
                    <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-semibold text-secondary mb-2">Core Values</h3>
                        <ul className="list-disc list-inside text-justify">
                            <li>Resourceful</li>
                            <li>Empathetic</li>
                            <li>Accessible</li>
                            <li>Compassionate</li>
                            <li>Humility</li>
                        </ul>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
