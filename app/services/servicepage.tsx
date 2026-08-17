'use client'

import Image from "next/image";
import { motion } from "framer-motion";

export default function Servicepage() {
  const features = [
    {
      img: "/comparison11.png",
      title: "Multiple Quotes",
      description: "Submit one request and receive multiple competitive quotes.",
    },
    {
      img: "/comparison12.png",
      title: "Best Prices",
      description: "Compare driver and agency prices in one place.",
    },
    {
      img: "/comparison13.png",
      title: "Verified Drivers & Agencies",
      description: "Travel with trusted, verified drivers and agencies.",
    },
    {
      img: "/comparison14.png",
      title: "Zero Commission",
      description: "Enjoy transparent fares with zero commission charges.",
    },
    {
      img: "/comparison15.png",
      title: "Direct Communication",
      description: "Connect directly with drivers and agencies instantly.",
    },
    {
      img: "/comparison16.png",
      title: "Pre‑Book with AAVORide",
      description: "Reserve your ride in advance for a seamless experience.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black">
      <header className="py-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-red-600"
        >
          Our Services
        </motion.h1>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          Discover why AAVORide is the smarter way to book cabs and tempo
          travellers — competitive quotes, verified drivers, and flexible
          bookings.
        </p>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        {features.map((feature, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-100 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow text-center"
          >
            <div className="mb-4 flex justify-center">
              <Image
                src={feature.img}
                alt={feature.title}
                width={60}
                height={60}
                className="mx-auto"
              />
            </div>
            <h2 className="text-xl font-semibold mb-3 text-red-600">
              {feature.title}
            </h2>
            <p className="text-gray-800">{feature.description}</p>
          </motion.article>
        ))}
      </section>

      <footer className="text-center py-8 border-t border-gray-200">
        <p className="text-gray-600">
          © {new Date().getFullYear()} AavoRide. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
