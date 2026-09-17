import Detailpage from '@/components/city/Detailpage'
import { FooterSection } from '@/components/landing/footer-section';
import React from 'react'

export default async function page(
    {
        params,
    }: {
        params: { slug: string };
    }
) {

    const uri = await params;

    return (
        <main>
        <Detailpage slug={uri.slug} />
        <FooterSection/>
        </main>
    )
}
