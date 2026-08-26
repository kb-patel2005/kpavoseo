import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { MOCK_BLOGS, MOCK_FEATURED_STORIES } from "@/lib/mockData";
import BlogDetailClient from "./BlogDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}


async function getBlog(slug: string) {

  let newSlug = generateSlug(slug);

  return (
    MOCK_FEATURED_STORIES.find((b) => b.slug === newSlug)||
    MOCK_BLOGS.find((b) => b.slug === slug) 
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const blog = await getBlog(slug);

  console.log(blog)

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

      publishedTime: blog.publishDate,

      authors: [blog.author.name],

      images: [
        {
          url: blog.coverImage.startsWith("http")
            ? blog.coverImage
            : `https://www.aavoride.in${blog.coverImage}`,
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
          : `https://www.aavoride.in${blog.coverImage}`,
      ],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",

    headline: blog.title,

    description: blog.excerpt,

    image: [blog.coverImage],

    author: {
      "@type": "Person",
      name: blog.author.name,
    },

    publisher: {
      "@type": "Organization",
      name: "AAVORide",
      logo: {
        "@type": "ImageObject",
        url: "https://www.aavoride.in/icon.png",
      },
    },

    datePublished: blog.publishDate,

    mainEntityOfPage: `https://www.aavoride.in/blog/${slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",

        position: 1,

        name: "Home",

        item: "https://www.aavoride.in",
      },

      {
        "@type": "ListItem",

        position: 2,

        name: "Blog",

        item: "https://www.aavoride.in/blog",
      },

      {
        "@type": "ListItem",

        position: 3,

        name: blog.title,

        item: `https://www.aavoride.in/blog/${slug}`,
      },
    ],
  };

  console.log(params)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <BlogDetailClient params={(await params).slug} />
    </>
  );
}
