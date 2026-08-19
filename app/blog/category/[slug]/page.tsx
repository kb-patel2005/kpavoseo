
import React from "react";
import {  MOCK_BLOGS,  MOCK_FEATURED_STORIES } from "@/lib/mockData";
import { Metadata } from "next/types";
import CategoryWise from "./CategoryWise";

interface Props {
    params: { slug: string };
}

function getBlog(slug: string) {

    const newSlug = slug.replace(/\s+/g, "-")

    return (
        MOCK_BLOGS.find((b) => b.tag.toLowerCase() === newSlug.toLowerCase())
    );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;

    const blog = await getBlog(slug);

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
        title: `${blog.title}`,

        description: `${blog.excerpt}`,

        keywords: [
            blog.title,
            blog.tag,
            blog.author.role,
            "Travel Guide",
            "Road Trip",
            "Taxi Booking",
            "Outstation Cab",
            "Self Drive Car",
            "AAVORide"
        ],

        authors: [
            {
                name: blog.author.name,
            },
        ],

        creator: "AAVORide",

        publisher: "AAVORide",

        category: "Travel",

        alternates: {
            canonical: `https://aavoride.in/blog/${slug}`,
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

            url: `https://aavoride.in/blog/${slug}`,

            siteName: "AAVORide",

            locale: "en_IN",

            type: "article",

            publishedTime: blog.publishDate,

            authors: [blog.author.name],

            images: [
                {
                    url: blog.coverImage.startsWith("http")
                        ? blog.coverImage
                        : `https://aavoride.in${blog.coverImage}`,
                    width: 1200,
                    height: 630,
                    alt: blog.title,
                },
            ],
        },

        twitter: {
            card: "summary_large_image",

            images: [
                blog.coverImage.startsWith("http")
                    ? blog.coverImage
                    : `https://aavoride.in${blog.coverImage}`,
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