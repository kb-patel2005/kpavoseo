
import React from "react";
import { Metadata } from "next/types";
import CategoryWise from "./CategoryWise";
import { tripData } from "@/lib/mockData";

interface Props {
    params: { slug: string };
}

// function getBlog(slug: string) {

//     const newSlug = slug.replace(/\s+/g, "-")

//     return (
//         MOCK_BLOGS.find((b) => b.tag.toLowerCase() === newSlug.toLowerCase())
//     );
// }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;

    // const blog = await getBlog(slug);
    const blog = tripData.find( e => e.slug == slug)

    if (!blog) {
        return {
            title: "Article Not Found | AAVORide Blog",

            description: "The requested article could not be found.",

            robots: {
                index: false,
                follow: false,
            },
        };
    }

    return {
        title: `${blog.heading}`,

        description: `${blog.description}`,

        keywords: [
            blog.heading,
            blog.tag,
            "Travel Guide",
            "Road Trip",
            "Taxi Booking",
            "Outstation Cab",
            "Self Drive Car",
            "AAVORide"
        ],

        authors: [
            {
                name: "Priya Verma",
            },
        ],

        creator: "AAVORide",

        publisher: "AAVORide",

        category: "Travel",

        alternates: {
            canonical: `https://www.aavoride.in/blog/${slug}`,
        },

        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-image-preview": "large",
                "max-video-preview": -1,
                "max-snippet": -1,
            },
        },

        openGraph: {

            url: `https://www.aavoride.in/blog/${slug}`,

            siteName: "AAVORide",

            locale: "en_IN",

            type: "article",


            images: [
                {
                    url: blog.coverImage.startsWith("http")
                        ? blog.coverImage
                        : `https://www.aavoride.in/${blog.coverImage}`,
                    width: 1200,
                    height: 630,
                    alt: blog.heading,
                },
            ],
        },

        twitter: {
            card: "summary_large_image",

            images: [
                blog.coverImage.startsWith("http")
                    ? blog.coverImage
                    : `https://www.aavoride.in${blog.coverImage}`,
            ],
        },
    };
}

export default async function BlogCategory({
    params,
}: {
    params: { slug: string };
}) {
    const {slug} = await params;
    
    return (
        <CategoryWise slug={slug}/>
    );
}