import { MOCK_DESTINATIONS } from '@/lib/mockData'
import React, { useState } from 'react'
import DestinationCard from '../DestinationCard'
import { useRouter } from 'next/navigation'
import { Button } from '../about/ui/Button'
import Image from 'next/image'

export default function MockDestinations() {

    const router = useRouter()
    const [lastIdx, setLastIdx] = useState<number>(4)

    return (
        <>
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-7xl mt-3 mb-5 mx-auto">
                {MOCK_DESTINATIONS.slice(0, lastIdx).map((dest, idx) => (
                    <DestinationCard
                        key={dest.id}
                        destination={dest}
                        index={idx}
                        category={dest.category}
                        clickFunc={() => router.push(`/blog/category/${dest.category}`)}
                    />
                ))}
            </div>
            <center>
                {lastIdx < MOCK_DESTINATIONS.length &&
                    <button
                        onClick={() => setLastIdx(prev => prev + 4)}
                        className="inline-flex cursor-pointer items-center justify-center rounded-full border-2 border-slate-200 bg-white hover:border-[#FF4D30] hover:text-[#FF4D30] px-8 py-3.5 text-xs font-bold text-slate-600 shadow-sm transition-all duration-200 select-none disabled:opacity-75 disabled:cursor-not-allowed w-full sm:w-auto"
                    >Load More Travel Destnations</button>
                    }
            </center> */}
            <Image src="/android-chrome-512x512.png" height={200} width={200} alt="AVVORide"/>
        </>
    )
}
