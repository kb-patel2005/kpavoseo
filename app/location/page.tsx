"use client"

// components/AhmedabadVadodaraTaxi.js
import { Clock } from "lucide-react";
import { ahmedabadVadodaraData } from "../../lib/mockData";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AhmedabadVadodaraTaxi() {
    const { heading, description, sections } = ahmedabadVadodaraData;

    return (
        <section className="mx-auto absolute w-full min-h-screen pb-16 bg-white">
            {/* Banner */}
            <section className="relative overflow-hidden w-full h-[350px] md:h-[500px]">
                {/* Banner cover image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/52/24/3b/lukshmi-vilas-palace.jpg?w=800&h=500&s=1"}
                        alt="AAVORide Travel Guide"
                        fill
                        sizes="100vw"
                        priority
                        className="object-cover select-none"
                    />
                    {/* Gradient overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                    <div className="absolute inset-0 bg-slate-950/20" />
                </div>

                {/* Content over banner */}
                <div className="absolute inset-0 z-10 flex items-center pt-16">
                    <div className="mx-auto max-w-7xl w-full px-6 md:px-8">
                        <div className="max-w-3xl space-y-4 text-left flex flex-col items-start">
                            <motion.h1
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight drop-shadow-sm font-sans"
                            >
                                {heading}
                            </motion.h1>

                            {/* Meta Tags (example placeholders, you can replace with real data) */}
                            <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm font-semibold text-slate-300">
                                <Clock className="h-4 w-4 shrink-0" />
                                <span>Ahmedabad → Vadodara</span>
                                <span>•</span>
                                <span>Taxi Service</span>
                                <span>•</span>
                                <span>By AAVORide</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <nav
                aria-label="Breadcrumb"
                className="mx-auto max-w-7xl px-6 py-4 text-sm"
            >
                <ol className="flex items-center gap-2 text-slate-500 flex-wrap">
                    <li>
                        <Link href="/" className="hover:text-[#FF4D30]">
                            Home
                        </Link>
                    </li>

                    <li>/</li>

                    <li>
                        <Link href="/blog" className="hover:text-[#FF4D30]">
                            Blog
                        </Link>
                    </li>

                    <li>/</li>

                    <li className="font-semibold text-slate-800">{heading}</li>
                </ol>
            </nav>
            {/* Main content */}
            <div className="mx-auto px-6 py-0 max-w-7xl">
                <h1 className="text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight py-4">{heading}</h1>
                <p className="mb-6">{description}</p>

                {sections.map((section, idx) => (
                    <div key={idx}>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight py-4">{section.subHeading}</h2>
                        {Array.isArray(section.description) ? (
                            section.description.map((para, i) => (
                                <p key={i} className="text-slate-600 font-medium text-base md:text-base leading-relaxed">{para}</p>
                            ))
                        ) : (
                            <p className="text-slate-600 font-medium text-base md:text-base leading-relaxed">{section.description}</p>
                        )}

                        {section.table && (
                            <table className="w-full border-collapse bg-[#FF4D30] mt-6 rounded-lg overflow-hidden shadow-md">
                                <thead>
                                    <tr className="bg-red-700 text-white">
                                        <th className="border bg-[#FF4D30] p-3">Vehicle</th>
                                        <th className="border bg-[#FF4D30] p-3">Model</th>
                                        <th className="border bg-[#FF4D30] p-3">Capacity</th>
                                        <th className="border bg-[#FF4D30] p-3">One Way Fare</th>
                                        <th className="border bg-[#FF4D30] p-3">Round Trip Fare</th>
                                        <th className="border bg-[#FF4D30] p-3">Best For</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {section.table.map((row, i) => (
                                        <tr
                                            key={i}
                                            className={`${i % 2 === 0 ? "bg-white text-black" : "bg-red-50 text-black"
                                                } hover:bg-red-100 transition`}
                                        >
                                            <td className=" p-3">{row.vehicle}</td>
                                            <td className=" p-3">{row.model}</td>
                                            <td className=" p-3">{row.capacity}</td>
                                            <td className=" p-3">{row.oneWay}</td>
                                            <td className=" p-3">{row.roundTrip}</td>
                                            <td className=" p-3">{row.bestFor}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>


                        )}

                        <div className="grid mt-5 grid-cols-1 lg:grid-cols-2 gap-6">
                            {section.packages && section.packages.map((pkg, i) => (
                                <div
                                    key={i}
                                    className="border rounded-lg p-6 shadow-sm bg-white"
                                >
                                    <h3 className="text-lg font-semibold mb-2">{pkg.title}</h3>
                                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                        {pkg.details.map((d, j) => (
                                            <li key={j}>{d}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                    </div>
                ))}

                <button className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-6 py-4 text-sm font-bold text-white h-[44px] w-full whitespace-nowrap bg-[linear-gradient(180deg,#ff3e1d_0%,#ff3e1d_100%)] px-[25px] py-0 text-[13px] font-semibold tracking-[-0.01em] sm:w-auto">
                    Book Cab
                </button>
            </div>
        </section>
    );
}
