"use client";

import { BriefcaseBusiness, Camera, Mail, MapPin, Play, Send, Users } from "lucide-react";
import { Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { SectionContainer } from "./shared";
import { StatusPill } from "./status-pill";
import Link from "next/link";
const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-and-conditions" },
  // { label: "Sitemap", href: "#" }
];

const socialLinks = [
  { label: "Instagram", url: "https://www.instagram.com/aavoride.in?igsh=NXNydWM3amRpdHZi", icon: <Camera className="h-3.5 w-3.5" strokeWidth={1.9} /> },
  { label: "Twitter", url: "https://twitter.com/aavoride", icon: <Send className="h-3.5 w-3.5" strokeWidth={1.9} /> },
  { label: "LinkedIn", url: "https://www.linkedin.com/company/aavoride", icon: <BriefcaseBusiness className="h-3.5 w-3.5" strokeWidth={1.9} /> },
  { label: "Facebook", url: "https://www.facebook.com/profile.php?id=61592583702589", icon: <Users className="h-3.5 w-3.5" strokeWidth={1.9} /> },
  { label: "YouTube", url: "https://www.youtube.com/@aavoride", icon: <Play className="h-3.5 w-3.5 fill-current" strokeWidth={1.9} /> },
];

export function FooterSection() {
  const pathname = usePathname();

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Our Services", href: "/services" },
    { label: "Become a Partner", href: "/about/partner" },
    { label: "Blog", href: "/blog" },
    {
      label: "FAQ",
      href: "/faq"
    },
  ];

  return (
    <footer aria-label="Site footer" className="relative z-10 overflow-hidden border-t border-[rgba(255,62,29,0.12)] bg-[#FFF1EF] pt-10 md:pt-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 overflow-hidden"
      >
        <div className="footer-watermark">
          AAVORide
        </div>
      </div>

      <SectionContainer className="relative z-10 max-w-[1268px]">
        <div className="grid gap-10 pb-8 md:grid-cols-2 md:gap-10 lg:grid-cols-[1.2fr_0.75fr_0.95fr] lg:gap-12">
          <div className="max-w-[370px]">
            <p className="text-[32px] font-extrabold leading-none tracking-[-0.04em] text-[var(--primary)] md:text-[36px]">
              AAVORide
            </p>
            <p className="mt-1 text-[14px] font-medium text-[#968d89]">
              Powered by AAVORide Premium Mobility.
            </p>
            <p className="mt-5 text-[15px] leading-7 text-[#605a57] md:text-[16px]">
              Book affordable cabs with transparent pricing, verified drivers, and
              smooth rides across India. From quick city trips to long-distance
              journeys, AAVORide makes every ride stress-free and budget-friendly.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <Link
                  key={item.label}
                  aria-label={item.label}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(255,62,29,0.14)] bg-white text-[var(--primary)] shadow-[0_10px_18px_rgba(255,62,29,0.06)] transition-colors hover:bg-[rgba(255,62,29,0.08)]"
                  href={item.url}
                  target="_blank"
                  rel={item.label}
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          <nav aria-label="Quick links">
            <h3 className="text-[15px] font-bold tracking-[-0.02em] text-[#4d4745]">
              Quick Links
            </h3>
            <div className="mt-5 flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  className="group inline-flex items-center gap-1.5 text-[15px] text-[#5d5754] transition-colors duration-300 hover:text-[var(--primary)]"
                  href={link.href}
                >
                  <span
                    className="inline-block w-0 shrink-0 overflow-hidden font-semibold text-[var(--primary)] opacity-0 transition-all duration-300 group-hover:w-[0.7rem] group-hover:opacity-100"
                  >
                    –
                  </span>
                  <span className="transition-[font-weight,color] duration-300 group-hover:font-semibold">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </nav>

          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-[15px] font-bold tracking-[-0.02em] text-[#4d4745]">
              Contact Us
            </h3>
            <div className="mt-5 space-y-4">

              <a
                href="mailto:aavoride@gmail.com"
                className="group motion-card-hover flex cursor-pointer items-center gap-3 rounded-[20px] border border-[#f2e6df] bg-white px-4 py-4 shadow-[0_12px_24px_rgba(31,27,24,0.04)]"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[rgba(255,62,29,0.08)] text-[var(--primary)] transition-colors duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
                  <Mail className="h-4 w-4" strokeWidth={2.2} />
                </div>

                <div className="min-w-0">
                  <p className="text-[12px] font-semibold tracking-[0.06em] text-[#9a918d]">
                    EMAIL SUPPORT
                  </p>

                  <p className="mt-1 break-all text-[15px] font-bold text-[#4a4442]">
                    aavoride@gmail.com
                  </p>
                </div>
              </a>


              {/* Headquarter */}
              <div className="group motion-card-hover flex cursor-pointer items-center gap-3 rounded-[20px] border border-[#f2e6df] bg-white px-4 py-4 shadow-[0_12px_24px_rgba(31,27,24,0.04)]">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[rgba(255,62,29,0.08)] text-[var(--primary)] transition-colors duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
                  <MapPin className="h-4 w-4" strokeWidth={2.2} />
                </div>

                <div className="min-w-0">
                  <p className="text-[12px] font-semibold tracking-[0.06em] text-[#9a918d]">
                    HEADQUARTER
                  </p>

                  <p className="mt-1 text-[15px] font-bold text-[#4a4442]">
                    Ahmedabad, India
                  </p>
                </div>
              </div>


              {/* Phone */}
              <a
                href="tel:+919712387840"
                className="group motion-card-hover flex cursor-pointer items-center gap-3 rounded-[20px] border border-[#f2e6df] bg-white px-4 py-4 shadow-[0_12px_24px_rgba(31,27,24,0.04)]"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[rgba(255,62,29,0.08)] text-[var(--primary)] transition-colors duration-300 group-hover:bg-[var(--primary)] group-hover:text-white">
                  <Phone className="h-4 w-4" strokeWidth={2.2} />
                </div>

                <div className="min-w-0">
                  <p className="text-[12px] font-semibold tracking-[0.06em] text-[#9a918d]">
                    CONTACT US
                  </p>

                  <p className="mt-1 text-[15px] font-bold text-[#4a4442]">
                    +91 9712387840
                  </p>
                </div>
              </a>

            </div>
          </div>
        </div>

        <div className="relative z-10 grid gap-4 border-t border-[#f2dfd7] py-5 text-[15px] text-[#7d7672] lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-center">
          <p className="text-center leading-7 lg:text-left">
            © 2026 AAVORide Premium Mobility.
            <br className="lg:hidden" />
            All rights reserved.
          </p>

          <div className="flex items-center justify-center">
            <StatusPill
              className="border-[rgba(255,62,29,0.12)] bg-[rgba(255,255,255,0.92)]"
              color="primary"
              text="AAVORide"
              textClassName="tracking-[0.05em]"
            />
          </div>

          <nav aria-label="Legal links" className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[15px] leading-7 lg:justify-end">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                className="transition-colors duration-300 hover:text-[var(--primary)] hover:font-semibold"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </SectionContainer>
    </footer>
  );
}
