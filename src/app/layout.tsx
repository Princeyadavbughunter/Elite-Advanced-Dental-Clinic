import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Elite Advanced Dental Implants and Aligners Clinic | Implant Specialist",
    template: "%s | Elite Advanced Dental Implants and Aligners Clinic",
  },
  description:
    "Elite Advanced Dental Implants and Aligners Clinic — 10 years of trusted implant dentistry. Dental implants from ₹25,000, Clear Aligners, and technology-driven precision dentistry. Visit us at Gurunanak Colony.",
  keywords:
    "dental implants Gurunanak Colony, implant specialist, clear aligners, Dr. Surya Deep Chaganti, Elite Advanced Dental Implants, affordable implants, teeth implant, best dentist, smile transformation",
  authors: [{ name: "Elite Advanced Dental Implants and Aligners Clinic" }],
  creator: "Elite Advanced Dental Implants and Aligners Clinic",
  publisher: "Elite Advanced Dental Implants and Aligners Clinic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://elitedentalclinic.org'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Elite Advanced Dental Implants and Aligners Clinic | Implant Specialist",
    description:
      "10 years of trusted implant dentistry. Dental implants from ₹25,000, Clear Aligners. Technology-driven precision dentistry.",
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://elitedentalclinic.org',
    siteName: "Elite Advanced Dental Implants and Aligners Clinic",
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: "Elite Advanced Dental Implants and Aligners Clinic",
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Elite Advanced Dental Implants and Aligners Clinic | Implant Specialist",
    description:
      "10 years of trusted implant dentistry. Dental implants from ₹25,000, Clear Aligners.",
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#22468c" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
