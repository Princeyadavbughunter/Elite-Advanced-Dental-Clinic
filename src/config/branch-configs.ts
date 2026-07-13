export type DoctorConfig = {
  name: string;
  title: string;
  image: string;
  description: string;
  highlights: string[];
  footer: string;
};

export type BranchConfig = {
  slug: string;
  name: string;
  doctors: DoctorConfig[];
  clinicImages: { src: string; alt: string }[];
  contact: {
    phones: string[];
    timings: string;
    address: string;
    email: string;
    googleMapEmbed: string;
    googleMapsLink: string;
  };
  usps: string[];
  pricing: {
    implant: string;
  };
  heroTitle: string;
  heroVideo: string;
  reviews: { name: string; initials: string; title: string; review: string; meta: string }[];
};

export const branches: Record<string, BranchConfig> = {
  elite: {
    slug: 'elite',
    name: 'Gurunanak Colony',
    doctors: [
      {
        name: "Dr. Surya Deep Chaganti",
        title: "Implantologist — Elite Advanced Dental Implants and Aligners Clinic",
        image: "/elitedr.png",
        description: "Our lead dentist is a highly experienced and skilled dental professional, having completed BDS from Dr. Sudha & Nageswara Rao Siddhartha Institute of Dental Sciences (2010 batch). With over 10+ years of clinical experience in delivering advanced and patient-centered dental care. With a strong focus on precision, quality, and long-term results, the doctor has successfully performed more than 3000 dental implant procedures and over 100 full mouth rehabilitation cases, making them a trusted expert in complex dental treatments. Known for a gentle and patient-friendly approach, the doctor emphasizes pain-free procedures, personalized treatment planning, and the use of modern dental technology to ensure safe, effective, and comfortable care.",
        highlights: [
          "BDS from Dr. Sudha & Nageswara Rao Siddhartha Institute (2010)",
          "10+ years of clinical experience",
          "3000+ dental implants & 100+ full mouth rehabilitations",
          "Pain-free procedures & modern dental technology",
        ],
        footer: "By continuously updating skills and staying aligned with the latest advancements in dentistry, Dr. Surya Deep Chaganti is committed to providing high-quality, affordable dental solutions that help patients achieve healthy, confident, and long-lasting smiles."
      }
    ],
    clinicImages: [
      { src: "/clinic1.jpg", alt: "Elite Advanced Dental Clinic Reception" },
      { src: "/clinic2.jpg", alt: "State-of-the-art Clinic Room" },
      { src: "/clinic3.jpg", alt: "Modern Dental Chair" },
      { src: "/clinic4.jpg", alt: "Advanced Dental Equipment" }
    ],
    contact: {
      phones: ["8696186969", "8963939896"],
      timings: "Daily: 10:00 AM – 9:00 PM",
      address: "4th Floor, Elite Dental Clinic, Gurunanak Colony",
      email: "suryaelitedentalclinic@gmail.com",
      googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15301.806036919888!2d80.66591!3d16.503288!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fb006e3e9a97%3A0xc2ad2cdcef14dbf1!2sElite%20dental%20clinic%20%7C%20best%20dental%20clinic%20in%20gurunanak%20colony!5e0!3m2!1sen!2sus!4v1783277062523!5m2!1sen!2sus",
      googleMapsLink: "https://www.google.com/maps/place/Elite+dental+clinic+%7C+best+dental+clinic+in+gurunanak+colony/@16.503288,80.66591,15z"
    },
    usps: [
      "10 years of trusted implant expertise",
      "Dental Implants starting from ₹25,000",
      "UPI, POS/Card payments accepted",
      "World's best B class sterilization autoclave",
      "Technology-driven precision dentistry",
      "Advanced clear aligners for a confident smile"
    ],
    pricing: {
      implant: "₹25,000 onwards*"
    },
    heroTitle: "Advanced Dental Implants & Clear Aligners in Gurunanak Colony",
    heroVideo: "/implant.mp4",
    reviews: [
      {
        name: "Amit Sharma",
        initials: "A",
        title: "Best Implant Experience!",
        meta: "Local Guide · 12 reviews · 3 months ago",
        review: "I had my dental implant done by Dr. Surya Deep Chaganti and the entire experience was exceptional. He is extremely professional and highly skilled. The clinic is very well-equipped with technology-driven precision dentistry. Highly recommend Elite Advanced Dental Implants for anyone looking for quality dental care."
      },
      {
        name: "Priya Singh",
        initials: "P",
        title: "Transformed My Smile with Aligners!",
        meta: "Local Guide · 5 reviews · 1 month ago",
        review: "I got my clear aligner treatment done at Elite Advanced Dental Implants and Aligners Clinic and I couldn't be happier. The clinic is modern, hygienic, and the staff is very warm and helpful. My smile has completely transformed and I feel so much more confident."
      },
      {
        name: "Rahul Verma",
        initials: "R",
        title: "Excellent Customer Service!",
        meta: "5 reviews · 2 months ago",
        review: "After researching multiple dental clinics, I chose Dr. Surya Deep Chaganti for my implant procedure. The consultation was very thorough, and Dr. Surya explained every step clearly. The implant pricing starting from ₹25,000 is very reasonable for the quality of care you receive. A 5-star experience from start to finish!"
      }
    ]
  }
};
