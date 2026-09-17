import Detailpage from '@/components/city/Detailpage'
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
        <Detailpage slug={uri.slug} />
    )
}
