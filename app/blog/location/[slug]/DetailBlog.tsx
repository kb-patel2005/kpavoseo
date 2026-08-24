'use client'

import { tripData } from '@/lib/mockData';
import React from 'react'

import { ArrowRightIcon, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function DetailBlog({ slug }: { slug: string }) {

    const data = tripData.find((e: any) => e.slug == slug);

    const { heading, description, sections } = data || {};

    return (
        <section className="mx-auto w-full min-h-screen pb-16 bg-white">

            <section className="relative overflow-hidden w-full h-[350px] md:h-[500px]">

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
                                                            {Object.values(row).map((cell:any, j) => (
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
                                                                    {Object.values(row).map((cell:any, j) => (
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
                                        <div key={key} className={`border rounded-lg p-6 bg-white shadow-sm ${isLastOdd ? "col-span-1 lg:col-span-2" : ""}`}>
                                            <h3 className="text-lg font-semibold mb-2 capitalize">{key}</h3>
                                            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                                                {value.map((d: string, i: number) => <li key={i} className='text-slate-600 font-medium text-base md:text-base leading-relaxed mb-2'>{d}</li>)}
                                            </ul>
                                        </div>
                                    );
                                }

                                // Strings
                                if (typeof value === "string") {
                                    return (
                                        <div key={key} className={`border rounded-lg p-6 bg-white shadow-sm ${isLastOdd ? "col-span-1 lg:col-span-2" : ""}`}>
                                            <h3 className="text-lg font-semibold mb-2 capitalize">{key}</h3>
                                            <p className="text-sm text-gray-700">{value}</p>
                                        </div>
                                    );
                                }

                                return null;
                            })}
                        </div>


                    </div>
                ))}


                <a
                    href="https://play.google.com/store/apps/details?id=com.aavoride"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex h-[44px] w-full sm:w-[180px] shrink-0 items-center justify-center gap-2 rounded-full bg-[var(--primary)] text-[14px] font-semibold text-white shadow-[0_12px_24px_rgba(255,62,29,0.2)] md:bg-[var(--primary)]"
                >
                    Book Cab
                    <ArrowRightIcon className="h-4 w-4" />
                </a>
            </div>
        </section>
    );

}