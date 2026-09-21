'use client'

import MockDestinations from '@/components/blog/MockDestinations';
import { citydata } from '@/lib/citydata';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function Detailpage({ slug }: { slug: string }) {

    const data = citydata.find(e => e.slug == slug);

    if (!data) return <div>City not found</div>;
    return (
        <div>
            <article className="mx-auto w-full min-h-screen pb-16 bg-white">
                {/* Breadcrumb */}
                <nav
                    aria-label="Breadcrumb"
                    className="mx-auto max-w-7xl px-6 py-4 text-sm"
                >
                    <ol className="flex items-center gap-2 text-slate-500 flex-wrap">
                        <li>
                            <Link
                                href="/"
                                className="hover:text-[#FF4D30]"
                            >
                                Home
                            </Link>
                        </li>

                        <li>/</li>

                        <li>
                            <Link
                                href="/city"
                                className="hover:text-[#FF4D30]"
                            >
                                city
                            </Link>
                        </li>
                        <li>/</li>
                        <li className='text-[#FF4D30]'>
                            {slug}
                        </li>
                    </ol>
                </nav>

                {/* Main */}
                <div className="mx-auto px-6 py-0 max-w-7xl">
                    {/* Main Heading */}
                    <h1 className="text-2xl md:text-3xl font-extrabold text-slate-800 tracking-tight py-4">
                        {data.heading}
                    </h1>

                    {/* Main Description */}
                    {data.description?.map((text, i) => (
                        <p
                            key={i}
                            className="text-slate-600 font-medium text-base leading-relaxed mb-2"
                        >
                            {text}
                        </p>
                    ))}

                    {/* Sections */}
                    {data.sections?.map((section, idx) => (
                        <div
                            key={idx}
                            className="mt-3 lg:mt-8"
                        >
                            {/* Section Heading */}
                            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 py-2 lg:py-4">
                                {section.subHeading}
                            </h2>

                            {/* Section Description */}
                            {section.description && (
                                Array.isArray(section.description) ? (
                                    section.description.map(
                                        (para: string, i: number) => {
                                            if (para.includes(":")) {
                                                const [left, ...rest] =
                                                    para.split(":");

                                                return (
                                                    <p
                                                        key={i}
                                                        className="text-slate-600 font-medium text-base leading-relaxed mb-2"
                                                    >
                                                        <span className="font-bold">
                                                            {left}:
                                                        </span>{" "}
                                                        {rest.join(":")}
                                                    </p>
                                                );
                                            }

                                            return (
                                                <p
                                                    key={i}
                                                    className="text-slate-600 font-medium text-base leading-relaxed mb-2"
                                                >
                                                    {para}
                                                </p>
                                            );
                                        }
                                    )
                                ) : (
                                    <p className="text-slate-600 font-medium text-base leading-relaxed mb-2">
                                        {section.description}
                                    </p>
                                )
                            )}

                            {/* Dynamic Content */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mt-3 lg:mt-6">
                                {Object.entries(section)
                                    .filter(
                                        ([key]) =>
                                            !["subHeading", "description"].includes(key)
                                    )
                                    .map(([key, value], index, arr) => {

                                        const isLastOdd =
                                            arr.length % 2 !== 0 &&
                                            index === arr.length - 1;

                                        if (
                                            key === "faqs" &&
                                            Array.isArray(value)
                                        ) {
                                            return (
                                                <div
                                                    key={key}
                                                    className="lg:col-span-2"
                                                >
                                                    <div className="space-y-5">
                                                        {value.map((faq: any, i: number) => (
                                                            <div
                                                                key={i}
                                                                className="pb-2"
                                                            >
                                                                <p className="font-bold text-slate-800 mb-3">
                                                                    {faq.question}
                                                                </p>

                                                                <p className="text-slate-600 font-medium text-base leading-relaxed">
                                                                    {faq.answer}
                                                                </p>
                                                            </div>
                                                        )
                                                        )}
                                                    </div>
                                                </div>
                                            );
                                        }

                                        /*
                                         * ------------------------------------------------
                                         * CARDS
                                         * ------------------------------------------------
                                         */
                                        if (
                                            key === "cards" &&
                                            Array.isArray(value)
                                        ) {
                                            return (
                                                <div
                                                    key={key}
                                                    className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                                                >
                                                    {value.map(
                                                        (card: any, i: number) => (
                                                            <div
                                                                key={i}
                                                                className="border rounded-xl p-5 flex flex-col justify-between bg-white shadow-sm hover:shadow-md transition"
                                                            >
                                                                <div>
                                                                    <h3 className="font-bold text-xl text-slate-800 mb-3">
                                                                        {card.title}
                                                                    </h3>

                                                                    <div className="space-y-2 mb-2">
                                                                        {Array.isArray(card.description) &&
                                                                            card.description.map(
                                                                                (item: string, idx: number) => {
                                                                                    if (item.includes(":")) {
                                                                                        const [left, ...rest] =
                                                                                            item.split(":");

                                                                                        return (
                                                                                            <p
                                                                                                key={idx}
                                                                                                className="text-sm text-slate-600 leading-relaxed"
                                                                                            >
                                                                                                <span className="font-bold text-slate-800">
                                                                                                    {left}:
                                                                                                </span>{" "}
                                                                                                {rest.join(":")}
                                                                                            </p>
                                                                                        );
                                                                                    }

                                                                                    return (
                                                                                        <p
                                                                                            key={idx}
                                                                                            className="text-sm text-slate-600 leading-relaxed"
                                                                                        >
                                                                                            {item}
                                                                                        </p>
                                                                                    );
                                                                                }
                                                                            )}
                                                                    </div>
                                                                </div>

                                                                <Link
                                                                    href={card.link}
                                                                    className="mt-auto text-white rounded-2xl px-4 py-3 space-y-2 font-semibold text-sm text-center bg-[#ff3e1d]"
                                                                >
                                                                    BOOK CAB
                                                                </Link>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            );
                                        }

                                        /*
                                         * ------------------------------------------------
                                         * PART
                                         * ------------------------------------------------
                                         */
                                        if (
                                            key.toLowerCase() === "part" &&
                                            typeof value === "object" &&
                                            value !== null &&
                                            !Array.isArray(value)
                                        ) {
                                            return (
                                                <div
                                                    key={key}
                                                    className={`border rounded-lg p-6 bg-white shadow-sm ${isLastOdd
                                                        ? "col-span-1 lg:col-span-2"
                                                        : ""
                                                        }`}
                                                >
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                        {Object.entries(
                                                            value as Record<
                                                                string,
                                                                any
                                                            >
                                                        ).map(
                                                            ([
                                                                subKey,
                                                                subVal,
                                                            ]) => {
                                                                if (
                                                                    !Array.isArray(
                                                                        subVal
                                                                    )
                                                                ) {
                                                                    return null;
                                                                }

                                                                const mid =
                                                                    Math.ceil(
                                                                        subVal.length /
                                                                        2
                                                                    );

                                                                const firstHalf =
                                                                    subVal.slice(
                                                                        0,
                                                                        mid
                                                                    );

                                                                const secondHalf =
                                                                    subVal.slice(
                                                                        mid
                                                                    );

                                                                return (
                                                                    <div
                                                                        key={
                                                                            subKey
                                                                        }
                                                                        className="col-span-1 md:col-span-2"
                                                                    >
                                                                        <h3 className="text-lg font-semibold mb-4 capitalize">
                                                                            {
                                                                                subKey
                                                                            }
                                                                        </h3>

                                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 lg:gap-6">
                                                                            <ul className="list-disc list-inside space-y-1">
                                                                                {firstHalf.map(
                                                                                    (
                                                                                        item: any,
                                                                                        i: number
                                                                                    ) => (
                                                                                        <li
                                                                                            key={
                                                                                                i
                                                                                            }
                                                                                            className="text-slate-600 font-medium text-base leading-relaxed"
                                                                                        >
                                                                                            {
                                                                                                item
                                                                                            }
                                                                                        </li>
                                                                                    )
                                                                                )}
                                                                            </ul>

                                                                            <ul className="list-disc list-inside space-y-1">
                                                                                {secondHalf.map(
                                                                                    (
                                                                                        item: any,
                                                                                        i: number
                                                                                    ) => (
                                                                                        <li
                                                                                            key={
                                                                                                i
                                                                                            }
                                                                                            className="text-slate-600 font-medium text-base leading-relaxed"
                                                                                        >
                                                                                            {
                                                                                                item
                                                                                            }
                                                                                        </li>
                                                                                    )
                                                                                )}
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                );
                                                            }
                                                        )}
                                                    </div>
                                                </div>
                                            );
                                        }

                                        /*
                                         * ------------------------------------------------
                                         * TABLE
                                         * ------------------------------------------------
                                         */
                                        if (
                                            key === "table" &&
                                            Array.isArray(value) &&
                                            value.length > 0
                                        ) {
                                            return (
                                                <div
                                                    key={key}
                                                    className="col-span-1 lg:col-span-2 overflow-x-auto border rounded-lg shadow-sm bg-white p-4"
                                                >
                                                    <h3 className="text-lg font-semibold mb-2 capitalize">
                                                        {key}
                                                    </h3>

                                                    <table className="min-w-full border-collapse rounded-lg">
                                                        <thead>
                                                            <tr className="bg-slate-200 text-slate-800">
                                                                {Object.keys(
                                                                    value[0]
                                                                ).map(
                                                                    (col) => (
                                                                        <th
                                                                            key={
                                                                                col
                                                                            }
                                                                            className="p-3 text-left"
                                                                        >
                                                                            {col}
                                                                        </th>
                                                                    )
                                                                )}
                                                            </tr>
                                                        </thead>

                                                        <tbody>
                                                            {value.map(
                                                                (
                                                                    row: any,
                                                                    i: number
                                                                ) => (
                                                                    <tr
                                                                        key={i}
                                                                        className={
                                                                            i %
                                                                                2 ===
                                                                                0
                                                                                ? "bg-white"
                                                                                : "bg-slate-50"
                                                                        }
                                                                    >
                                                                        {Object.values(
                                                                            row
                                                                        ).map(
                                                                            (
                                                                                cell: any,
                                                                                j: number
                                                                            ) => (
                                                                                <td
                                                                                    key={
                                                                                        j
                                                                                    }
                                                                                    className="p-3"
                                                                                >
                                                                                    {
                                                                                        cell
                                                                                    }
                                                                                </td>
                                                                            )
                                                                        )}
                                                                    </tr>
                                                                )
                                                            )}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            );
                                        }

                                        /*
                                         * ------------------------------------------------
                                         * NESTED OBJECT
                                         * Example:
                                         *
                                         * "Vehicle Selection": {
                                         *    description: "...",
                                         *    comparisonTable: [...]
                                         * }
                                         * ------------------------------------------------
                                         */
                                        if (
                                            typeof value === "object" &&
                                            value !== null &&
                                            !Array.isArray(value)
                                        ) {
                                            const objectValue =
                                                value as Record<string, any>;

                                            return (
                                                <div
                                                    key={key}
                                                    className={`border rounded-lg p-6 bg-white shadow-sm ${isLastOdd
                                                        ? "col-span-1 lg:col-span-2"
                                                        : ""
                                                        }`}
                                                >
                                                    <h3 className="text-lg font-semibold mb-2 capitalize">
                                                        {key}
                                                    </h3>

                                                    {objectValue.description && (
                                                        <p className="text-slate-600 font-medium text-base leading-relaxed mb-4">
                                                            {
                                                                objectValue.description
                                                            }
                                                        </p>
                                                    )}

                                                    {Array.isArray(
                                                        objectValue.comparisonTable
                                                    ) &&
                                                        objectValue.comparisonTable
                                                            .length > 0 && (
                                                            <div className="overflow-x-auto">
                                                                <table className="min-w-full border-collapse rounded-lg">
                                                                    <thead>
                                                                        <tr className="bg-slate-200 text-slate-800">
                                                                            {Object.keys(
                                                                                objectValue
                                                                                    .comparisonTable[0]
                                                                            ).map(
                                                                                (
                                                                                    col
                                                                                ) => (
                                                                                    <th
                                                                                        key={
                                                                                            col
                                                                                        }
                                                                                        className="p-3 text-left"
                                                                                    >
                                                                                        {
                                                                                            col
                                                                                        }
                                                                                    </th>
                                                                                )
                                                                            )}
                                                                        </tr>
                                                                    </thead>

                                                                    <tbody>
                                                                        {objectValue.comparisonTable.map(
                                                                            (
                                                                                row: any,
                                                                                i: number
                                                                            ) => (
                                                                                <tr
                                                                                    key={
                                                                                        i
                                                                                    }
                                                                                    className={
                                                                                        i %
                                                                                            2 ===
                                                                                            0
                                                                                            ? "bg-white"
                                                                                            : "bg-slate-50"
                                                                                    }
                                                                                >
                                                                                    {Object.values(
                                                                                        row
                                                                                    ).map(
                                                                                        (
                                                                                            cell: any,
                                                                                            j: number
                                                                                        ) => (
                                                                                            <td
                                                                                                key={
                                                                                                    j
                                                                                                }
                                                                                                className="p-3"
                                                                                            >
                                                                                                {
                                                                                                    cell
                                                                                                }
                                                                                            </td>
                                                                                        )
                                                                                    )}
                                                                                </tr>
                                                                            )
                                                                        )}
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        )}
                                                </div>
                                            );
                                        }

                                        /*
                                         * ------------------------------------------------
                                         * ARRAY OF STRINGS
                                         *
                                         * This handles:
                                         *
                                         * "Our Airport Taxi Features:": [...]
                                         *
                                         * "Airport Transfer Pricing": [...]
                                         *
                                         * "Hourly Rental Packages": [...]
                                         *
                                         * "Popular one way Routes from Ahmedabad": [...]
                                         * ------------------------------------------------
                                         */
                                        if (
                                            Array.isArray(value) &&
                                            value.every(
                                                (item) =>
                                                    typeof item === "string"
                                            )
                                        ) {
                                            return (
                                                <div
                                                    key={key}
                                                    className={`border rounded-xl p-4 lg:p-6 bg-white shadow-sm ${isLastOdd
                                                        ? "col-span-1 lg:col-span-2"
                                                        : ""
                                                        }`}
                                                >
                                                    <h3 className="text-lg font-semibold mb-4 capitalize">
                                                        {key}
                                                    </h3>

                                                    <ul className="space-y-2">
                                                        {value.map(
                                                            (
                                                                item: string,
                                                                i: number
                                                            ) => {
                                                                if (
                                                                    item.includes(
                                                                        ":"
                                                                    )
                                                                ) {
                                                                    const [
                                                                        left,
                                                                        ...rest
                                                                    ] =
                                                                        item.split(
                                                                            ":"
                                                                        );

                                                                    return (
                                                                        <li
                                                                            key={i}
                                                                            className="text-slate-600 font-medium text-base leading-relaxed"
                                                                        >
                                                                            <span className="font-bold text-slate-800">
                                                                                {
                                                                                    left
                                                                                }
                                                                                :
                                                                            </span>{" "}
                                                                            {rest.join(
                                                                                ":"
                                                                            )}
                                                                        </li>
                                                                    );
                                                                }

                                                                return (
                                                                    <li
                                                                        key={i}
                                                                        className="text-slate-600 font-medium text-base leading-relaxed"
                                                                    >
                                                                        {item}
                                                                    </li>
                                                                );
                                                            }
                                                        )}
                                                    </ul>
                                                </div>
                                            );
                                        }

                                        /*
                                         * ------------------------------------------------
                                         * STRING
                                         * ------------------------------------------------
                                         */
                                        if (
                                            typeof value === "string" &&
                                            key === "stop"
                                        ) {
                                            return (
                                                <div
                                                    key={key}
                                                    className={`border rounded-lg p-6 bg-white shadow-sm ${isLastOdd
                                                        ? "col-span-1 lg:col-span-2"
                                                        : ""
                                                        }`}
                                                >
                                                    <p className="text-sm text-gray-700">
                                                        {value}
                                                    </p>
                                                </div>
                                            );
                                        }

                                        return null;
                                    })}
                            </div>
                        </div>
                    ))}
                </div>
            </article>
        </div>
    );
}