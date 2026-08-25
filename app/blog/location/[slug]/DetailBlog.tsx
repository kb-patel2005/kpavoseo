'use client'

import { tripData } from '@/lib/mockData';
import React from 'react'

import { ArrowRightIcon, Clock, Compass } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function DetailBlog({ slug }: { slug: string }) {

    const data = tripData.find((e: any) => e.slug == slug);

    const { heading, description, sections, coverImage } = data || {};

    return (
        <article className="mx-auto w-full min-h-screen pb-16 bg-white">

            <section className="relative overflow-hidden w-full h-[350px] md:h-[500px]">

                <div className="absolute inset-0 z-0">
                    <Image
                        src={coverImage || ""}
                        alt="AAVORide Travel Guide"
                        fill
                        sizes="100vw"
                        priority
                        className="object-cover object-top object-center select-none"
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
                {description?.map((text, i) => (
                    <p key={i} className="text-slate-600 font-medium text-base md:text-base leading-relaxed mb-2">
                        {text}
                    </p>
                ))}


                {sections?.map((section, idx) => (
                    <div key={idx} className="mt-8">
                        {/* Subheading */}
                        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 py-4">
                            {section.subHeading}
                        </h2>

                        {/* Description */}
                        {section.description && (
                            Array.isArray(section.description)
                                ? section.description.map((para: string, i: number) => {
                                    if (para.includes(":")) {
                                        const [left, ...rest] = para.split(":");
                                        const right = rest.join(":");
                                        return (
                                            <p key={i} className="text-slate-600 font-medium text-base md:text-base leading-relaxed mb-2">
                                                <span className="font-bold">{left}:</span> {right}
                                            </p>
                                        );
                                    }
                                    return <p key={i} className="text-slate-600 font-medium text-base md:text-base leading-relaxed mb-2">{para}</p>;
                                })
                                : <p className="text-slate-600 font-medium text-base md:text-base leading-relaxed mb-2">{section.description}</p>
                        )}

                        {/* Grid for other keys */}
                        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                            {Object.entries(section).map(([key, value]) => {
                                if (["subHeading", "description"].includes(key)) return null;

                                // Full-width table
                                if (key === "table" && Array.isArray(value)) {
                                    return (
                                        <div key={key} className="col-span-1 lg:col-span-2 overflow-x-auto border rounded-lg shadow-sm bg-white p-4">
                                            <h3 className="text-lg font-semibold mb-2 capitalize">{key}</h3>
                                            <table className="min-w-full border-collapse rounded-lg">
                                                <thead>
                                                    <tr className="bg-slate-200 text-slate-800">
                                                        {Object.keys(value[0]).map((col) => (
                                                            <th key={col} className="p-3 text-left">{col}</th>
                                                        ))}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {value.map((row: any, i: number) => (
                                                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                                            {Object.values(row).map((cell, j) => (
                                                                <td key={j} className="p-3">{cell}</td>
                                                            ))}
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    );
                                }

                                // Handle nested object like oneWay
                                if (typeof value === "object" && !Array.isArray(value)) {
                                    return (
                                        <div key={key} className="col-span-1 lg:col-span-2 border rounded-lg p-6 bg-white shadow-sm">
                                            <h3 className="text-lg font-semibold mb-2 capitalize">{key}</h3>
                                            {value.description && <p className="text-sm text-gray-700 mb-2">{value.description}</p>}
                                            {value.comparisonTable && (
                                                <div className="overflow-x-auto">
                                                    <table className="min-w-full border-collapse rounded-lg">
                                                        <thead>
                                                            <tr className="bg-slate-200 text-slate-800">
                                                                {Object.keys(value.comparisonTable[0]).map((col) => (
                                                                    <th key={col} className="p-3 text-left">{col}</th>
                                                                ))}
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {value.comparisonTable.map((row: any, i: number) => (
                                                                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                                                    {Object.values(row).map((cell, j) => (
                                                                        <td key={j} className="p-3">{cell}</td>
                                                                    ))}
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            )}
                                        </div>
                                    );
                                }

                                // Arrays of strings
                                if (Array.isArray(value) && typeof value[0] === "string") {
                                    return (
                                        <div key={key} className="border rounded-lg p-6 bg-white shadow-sm">
                                            <h3 className="text-lg font-semibold mb-2 capitalize">{key}</h3>
                                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                                {value.map((d: string, i: number) => <li key={i}>{d}</li>)}
                                            </ul>
                                        </div>
                                    );
                                }

                                // Strings
                                if (typeof value === "string") {
                                    return (
                                        <div key={key} className="border rounded-lg p-6 bg-white shadow-sm">
                                            <h3 className="text-lg font-semibold mb-2 capitalize">{key}</h3>
                                            <p className="text-sm text-gray-700">{value}</p>
                                        </div>
                                    );
                                }

                                return null;
                            })}



                        </div> */}

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                            {Object.entries(section).map(([key, value], index, arr) => {
                                if (["subHeading", "description"].includes(key)) return null;

                                const isLastOdd = arr.length % 2 !== 0 && index === arr.length - 1;

                                if (key === "faqs" && Array.isArray(value)) {
                                    return (
                                        <div key={key} className='lg:col-span-2'>
                                            <div className="space-y-4">
                                                {value.map((faq: any, i: number) => (
                                                    <div key={i} className='pb-2'>
                                                        <p className="font-bold text-slate-800 mb-3">{faq.question}</p>
                                                        <p className="text-slate-600 font-medium text-base md:text-base leading-relaxed">{faq.answer}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                }

                                // Full-width table
                                if (key === "table" && Array.isArray(value)) {
                                    return (
                                        <div key={key} className="col-span-1 lg:col-span-2 overflow-x-auto border rounded-lg shadow-sm bg-white p-4">
                                            <h3 className="text-lg font-semibold mb-2 capitalize">{key}</h3>
                                            <table className="min-w-full border-collapse rounded-lg">
                                                <thead>
                                                    <tr className="bg-slate-200 text-slate-800">
                                                        {Object.keys(value[0]).map((col) => (
                                                            <th key={col} className="p-3 text-left">{col}</th>
                                                        ))}
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {value.map((row: any, i: number) => (
                                                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                                            {Object.values(row).map((cell: any, j) => (
                                                                <td key={j} className="p-3">{cell}</td>
                                                            ))}
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    );
                                }



                                // Nested object (like oneWay)
                                if (typeof value === "object" && !Array.isArray(value)) {
                                    return (
                                        <div key={key} className={`border rounded-lg p-6 bg-white shadow-sm ${isLastOdd ? "col-span-1 lg:col-span-2" : ""}`}>
                                            <h3 className="text-lg font-semibold mb-2 capitalize">{key}</h3>
                                            {value.description && <p className="text-slate-600 font-medium text-base md:text-base leading-relaxed mb-2">{value.description}</p>}
                                            {value.comparisonTable && (
                                                <div className="overflow-x-auto">
                                                    <table className="min-w-full border-collapse rounded-lg">
                                                        <thead>
                                                            <tr className="bg-slate-200 text-slate-800">
                                                                {Object.keys(value.comparisonTable[0]).map((col) => (
                                                                    <th key={col} className="p-3 text-left">{col}</th>
                                                                ))}
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {value.comparisonTable.map((row: any, i: number) => (
                                                                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                                                    {Object.values(row).map((cell: any, j) => (
                                                                        <td key={j} className="p-3">{cell}</td>
                                                                    ))}
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            )}
                                        </div>
                                    );
                                }

                                // Arrays of strings
                                if (Array.isArray(value) && typeof value[0] === "string") {
                                    return (
                                        <div key={key} className={`border rounded-xl p-6 bg-white shadow-sm ${isLastOdd ? "col-span-1 lg:col-span-2" : ""}`}>
                                            <h3 className="text-lg font-semibold mb-2 capitalize">{key}</h3>
                                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                                {Array.isArray(value)
                                                    ? value.map((para: string, i: number) => {
                                                        if (para.includes(":")) {
                                                            const [left, ...rest] = para.split(":");
                                                            const right = rest.join(":");
                                                            return (
                                                                <p key={i} className="text-slate-600 font-medium text-base md:text-base leading-relaxed mb-2">
                                                                    <span className="font-bold">{left}:</span> {right}
                                                                </p>
                                                            );
                                                        }
                                                        return <p key={i} className="text-slate-600 font-medium text-base md:text-base leading-relaxed mb-2">{para}</p>;
                                                    })
                                                    : <p className="text-slate-600 font-medium text-base md:text-base leading-relaxed mb-2">{section.description}</p>
                                                }
                                                {/* {value.map((d: string, i: number) => <li key={i} className='text-slate-600 font-medium text-base md:text-base leading-relaxed mb-2'>{d}</li>)} */}
                                            </ul>
                                        </div>
                                    );
                                }

                                // Strings
                                if (typeof value === "string" && key == "stop") {
                                    return (
                                        <div key={key} className={`border rounded-lg p-6 bg-white shadow-sm ${isLastOdd ? "col-span-1 lg:col-span-2" : ""}`}>
                                            <p className="text-sm text-gray-700">{value}</p>
                                        </div>
                                    );
                                }

                                return null;
                            })}
                        </div>


                    </div>
                ))}


                <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="flex flex-col mt-5 sm:flex-row items-center justify-between bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-sm space-y-4 sm:space-y-0 sm:space-x-6"
                >
                    <div className="flex items-center space-x-4">
                        <div className="rounded-full bg-orange-50 p-3.5 text-[#FF4D30] shrink-0 flex items-center justify-center">
                            <Compass className="h-6 w-6" />
                        </div>
                        <div className="text-center sm:text-left">
                            <h4 className="text-base font-extrabold text-slate-800 leading-snug">
                                Loved this destination?
                            </h4>
                            <p className="text-xs text-slate-500 font-semibold">
                                Get a personalized itinerary for your{" "}
                                {heading} trip.
                            </p>
                        </div>
                    </div>
                    <Link
                        href="https://play.google.com/store/apps/details?id=com.aavoride"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto"
                    >
                        <button className="rounded-full bg-[#FF4D30] hover:bg-[#e03d20] px-6 py-3.5 text-xs font-bold text-white shadow-md hover:shadow-lg transition-all w-full sm:w-auto shrink-0 select-none font-semibold">
                            Get AAVORide App
                        </button>
                    </Link>
                </motion.div>
            </div>
        </article>
    );

}