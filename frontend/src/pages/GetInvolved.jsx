import React from "react";
import { motion } from "framer-motion";

export function GetInvolved() {
  return (
    <section className="min-h-screen py-20 px-6 md:px-12 bg-gradient-to-br from-primary via-secondary to-accent text-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto bg-white bg-opacity-90 p-10 rounded-2xl shadow-lg"
      >
        <h2 className="text-3xl md:text-4xl font-cinzel text-primary mb-6 text-center">
          Get Involved
        </h2>
        <p className="text-lg text-center mb-10">
          Support our mission by volunteering, donating, or sponsoring medical care and education.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-secondary mb-3">Volunteer with Us</h3>
            <ul className="list-disc list-inside">
              <li>Join our medical camps</li>
              <li>Support logistics and organization</li>
              <li>Provide training and mentorship</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-secondary mb-3">Donation Options</h3>
            <ul className="list-disc list-inside">
              <li>One-time donations</li>
              <li>Monthly or quarterly donations</li>
              <li>Sponsor surgeries (orthopedics, burns, cleft palate, women's health)</li>
              <li>Sponsor future healthcare workers</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-secondary mb-3">Support Our Camps</h3>
            <ul className="list-disc list-inside">
              <li>Sponsor a venue</li>
              <li>Facilitate volunteer travel</li>
              <li>Support surgical equipment</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-secondary mb-3">Buy Reach APAC Gear</h3>
            <ul className="list-disc list-inside">
              <li>T-shirts</li>
              <li>Caps</li>
              <li>Jumpers</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
