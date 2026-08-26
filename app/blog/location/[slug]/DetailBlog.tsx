'use client'

import { CATEGORIES, MOCK_DESTINATIONS, tripData } from '@/lib/mockData';
import React, { useState } from 'react'

import { ArrowRightIcon, Clock, Compass, Loader2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import DestinationCard from '@/components/DestinationCard';
import SmallCard from './SmallCard';
import { Skeleton } from '@/components/ui/skeleton';
import { useInfiniteBlogs } from '@/hooks/useBlogs';
import BlogRow from '@/components/BlogRow';
import { useRouter } from 'next/navigation';
import MockDestinations from '@/components/blog/MockDestinations';

export default function DetailBlog({ slug }: { slug: string }) {

    const data = tripData.find((e: any) => e.slug == slug);

    const [activeCategory, setActiveCategory] = useState<string>("All Stories");

    // React Query Fetch using Infinite Scroll
    const {
        data: recentData,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading: isRecentLoading,
    } = useInfiniteBlogs(activeCategory, "", 3);

    // const recentBlogs = recentData?.pages.flatMap((page) => page.blogs) || [];

    const { heading, description, sections, coverImage } = data || {};
    const router = useRouter()

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
                        className="object-cover  select-none"
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

            <section className="mx-auto w-full px-4 py-8 md:px-8 space-y-8 z-10 relative">

                <div className="w-full overflow-x-auto flex scrollbar-none space-x-2 py-2 border-b-0 md:border-b border-slate-200 justify-start md:justify-center">
                    {CATEGORIES.map((category) => {
                        const isActive = activeCategory === category;
                        return (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`relative px-4 py-2 text-xs md:text-sm cursor-pointer font-bold rounded-full transition-all duration-200 shrink-0 select-none ${isActive
                                    ? "text-white bg-[#FF4D30] shadow-md"
                                    : "text-slate-500 hover:text-slate-800 hover:bg-slate-100"
                                    }`}
                            >
                                <span>{category}</span>
                                {isActive && (
                                    <motion.div
                                        layoutId="activeDetailCategoryIndicator"
                                        className="absolute inset-0 bg-[#FF4D30] rounded-full -z-10 shadow-sm"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>

                <div className="flex items-center justify-between max-w-7xl mx-auto">
                    <h2 className="text-2xl font-black text-slate-800 tracking-tight flex items-center space-x-2 text-center">
                        <span className="block h-6 w-1 bg-[#FF4D30] rounded-full" />
                        <span>Related Travel Guides</span>
                    </h2>
                </div>

                {isRecentLoading ? (
                    <div className="space-y-4">
                        {[1, 2].map((s) => (
                            <div
                                key={s}
                                className="bg-white rounded-3xl p-5 border border-slate-100 flex flex-col md:flex-row gap-6 items-center"
                            >
                                <Skeleton className="w-full md:w-56 h-36 rounded-2xl shrink-0" />
                                <div className="flex-grow space-y-3 w-full">
                                    <div className="flex space-x-2">
                                        <Skeleton className="h-4 w-16 rounded-full" />
                                        <Skeleton className="h-4 w-24" />
                                    </div>
                                    <Skeleton className="h-6 w-3/4" />
                                    <Skeleton className="h-4 w-full" />
                                    <div className="flex justify-between items-center pt-2">
                                        <div className="flex items-center space-x-2">
                                            <Skeleton className="h-8 w-8 rounded-full" />
                                            <Skeleton className="h-4 w-20" />
                                        </div>
                                        <Skeleton className="h-4 w-16" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="space-y-4 max-w-7xl mx-auto">
                        <AnimatePresence mode="popLayout">
                            {tripData.length > 0 &&
                                tripData.map((blog, idx) =>
                                    ((blog.tag.toLocaleLowerCase() == activeCategory.toLocaleLowerCase() || activeCategory == "All Stories") &&  (blog.slug != slug) ) &&
                                    <SmallCard blog={blog} index={idx} key={blog.heading} />
                                )}
                            {/* {recentBlogs.length > 0 && (
                                    recentBlogs.map((rBlog, idx) => (
                                        <BlogRow key={rBlog.id} blog={rBlog} index={idx} />
                                    ))
                                )} */}
                        </AnimatePresence>
                    </div>
                )}

                {hasNextPage && (
                    <div className="flex justify-center pt-2">
                        <button
                            onClick={() => fetchNextPage()}
                            disabled={isFetchingNextPage}
                            className="inline-flex cursor-pointer items-center justify-center rounded-full border-2 border-slate-200 bg-white hover:border-[#FF4D30] hover:text-[#FF4D30] px-8 py-3.5 text-xs font-bold text-slate-600 shadow-sm transition-all duration-200 select-none disabled:opacity-75 disabled:cursor-not-allowed w-full sm:w-auto"
                        >
                            {isFetchingNextPage ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin text-[#FF4D30]" />
                                    <span>Loading Inspiring Stories...</span>
                                </>
                            ) : (
                                <span>Load More Inspiring Stories</span>
                            )}
                        </button>
                    </div>
                )}
            </section>
            
            <MockDestinations/>
        </article>
    );

}