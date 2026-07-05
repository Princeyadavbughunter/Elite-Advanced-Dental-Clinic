import type { Metadata } from "next";
import { branches } from "@/config/branch-configs";
import BranchPageClient from "@/components/BranchPageClient";

const branch = branches.elite;

export const metadata: Metadata = {
  title: `${branch.heroTitle} | Elite Advanced Dental Implants and Aligners Clinic`,
  description: `${branch.doctors.map((d) => d.name).join(" & ")} at Elite Advanced Dental Implants and Aligners Clinic, ${branch.name}. 10 years of trusted implant dentistry, clear aligners, dental implants from ₹25,000. ${branch.contact.timings}.`,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${branch.heroTitle} | Elite Advanced Dental Implants and Aligners Clinic`,
    description: `10 years of trusted implant expertise by ${branch.doctors[0].name} in ${branch.name}. Implants from ₹25,000, Clear Aligners.`,
    url: "/",
    siteName: "Elite Advanced Dental Implants and Aligners Clinic",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: `Elite Advanced Dental Implants and Aligners Clinic – ${branch.name}`,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${branch.heroTitle} | Elite Advanced Dental Implants and Aligners Clinic`,
    description: `10 years of trusted implant expertise by ${branch.doctors[0].name} in ${branch.name}. Implants from ₹25,000, Clear Aligners.`,
    images: ["/logo.png"],
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Elite Advanced Dental Implants and Aligners Clinic",
    image: "/logo.png",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://elitedentalclinic.org",
    telephone: branch.contact.phones[0],
    email: branch.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "4th Floor, Elite Dental Clinic",
      addressLocality: "Gurunanak Colony",
      addressRegion: "MH",
      postalCode: "",
      addressCountry: "IN",
    },
    priceRange: "₹₹",
    openingHours: branch.contact.timings,
    sameAs: [branch.contact.googleMapsLink],
    medicalSpecialty: [
      "Dentistry",
      "DentalImplants",
      "Prosthodontics",
      "Orthodontics",
      "CosmeticDentistry",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BranchPageClient branch={branch} />
    </>
  );
}
