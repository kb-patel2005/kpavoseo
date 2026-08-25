'use client'

import { handleWhatsApp } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'


export default function Whatsapp() {
    return (
        <div className="rounded fixed -right-1 bottom-21 bg-transparent z-50 animate-pulse-slow" onClick={handleWhatsApp}>
            <a
                href="https://wa.me/919712387840"
                target="_blank"
                rel="noopener noreferrer"

            >
                <Image
                    src="/whatsapp_icon.png"
                    alt="WhatsApp Chat"
                    height={100}
                    width={100}
                />
            </a>
        </div>
    )
}
