import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import ReactPlayer from "react-player";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const heroImages = [
    "/assets/images/IMG_5620.JPG",
    "/assets/images/IMG_4148.JPG",
    "/assets/images/IMG_4822.JPG",
];

export function Home() {
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    };

    const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    };

    const outreachImages = [
        "/assets/images/87e1dc1a-e972-4c66-835e-e26bb5b93ac6.JPG",
        "/assets/images/92d073c6-5f2d-44a7-8912-ca1a0708f020.JPG",
        "/assets/images/46320bde-6a49-4f2f-8f11-e90928174e98.JPG",
        "/assets/images/ae8d9c2a-3ca9-410f-a604-8d666c31a046.JPG",
        "/assets/images/ba33ce0b-fc5a-4160-9f3f-44d1979a09de.JPG",
        "/assets/images/IMG_3193.JPG",
        "/assets/images/IMG_3344.JPG",
        "/assets/images/IMG_3345.JPG",
        "/assets/images/IMG_3646.JPG",
        "/assets/images/IMG_4147.JPG",
        "/assets/images/IMG_4148.JPG",
        "/assets/images/IMG_4789.JPG",
        "/assets/images/IMG_4790.JPG",
        "/assets/images/IMG_4822.JPG",
        "/assets/images/IMG_4829.JPG",
        "/assets/images/IMG_5258.JPG",
        "/assets/images/IMG_5620.JPG",
    ];

    const [currentImage, setCurrentImage] = useState(0);
    useEffect(() => {
        AOS.init({ duration: 1000 });

    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

    return (
        <section className="mrelative w-full min-h-screen text-white overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
            style={{backgroundImage: `url(${heroImages[currentImage]})`,}}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-6 text-center">
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
            </div>
            <div className="relative z-10 bg-gradient-to-br from-primary via-secondary to-accent pt-20 pb-10 px-6 md:px-12">
                <div className="max-w-6xl mx-auto mt-20 bg-white bg-opacity-80 p-8 rounded-2xl shadow-lg">
                    <h2 className="text-3xl font-bold text-primary mb-6 text-center">Our Journey</h2>
                    <ReactPlayer
                        url="/assets/videos/driving-to-town.mp4"
                        controls
                        width="100%"
                        height="auto"
                    />
                </div>
                <div className="max-w-6xl mx-auto mt-20 relative">
                    <h2 className="text-3xl font-bold text-primary mb-6 text-center">Our Impact</h2>
                    <button
                        onClick={scrollLeft}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-primary text-white p-3 rounded-full shadow-md hover:bg-secondary z-20"
                    >
                        <FaArrowLeft />
                    </button>

                    <button
                        onClick={scrollRight}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-primary text-white p-3 rounded-full shadow-md hover:bg-secondary z-20"
                    >
                        <FaArrowRight />
                    </button>

                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-hidden space-x-6 pb-4"
                    >
                        {outreachImages.map((src, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-80 h-60 relative rounded-lg overflow-hidden shadow-lg"
                        >
                            <img
                            src={src}
                            alt={`Outreach ${index + 1}`}
                            className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
