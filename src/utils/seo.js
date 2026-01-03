// SEO Configuration and Constants for Elite Barber Studio

export const BUSINESS_INFO = {
  name: "Elite Barber Studio",
  tagline: "Premium Men's Grooming Experience",
  description:
    "Experience precision cuts, expert fades & premium grooming in Nikol, Ahmedabad. Master barbers with 10+ years experience. Book your appointment today!",

  // Contact Information
  phone: "(555) 123-4567",
  email: "info@elitebarberstudio.com",

  // Location
  address: {
    street: "Nikol",
    city: "Ahmedabad",
    state: "Gujarat",
    country: "India",
    postalCode: "",
    region: "IN-GJ",
  },

  // Hours
  openingHours: ["Mo-Fr 09:00-20:00", "Sa-Su 10:00-18:00"],

  // Social Media (update with real URLs)
  social: {
    facebook: "https://facebook.com/elitebarberstudio",
    instagram: "https://instagram.com/elitebarberstudio",
    twitter: "https://twitter.com/elitebarberstudio",
  },

  // Pricing
  priceRange: "300-5000",

  // Rating
  rating: {
    value: 4.9,
    count: 500,
  },
};

// Default SEO Configuration
export const DEFAULT_SEO = {
  siteName: BUSINESS_INFO.name,
  siteUrl: "https://barber-client.onrender.com/", // Update with your actual domain
  defaultTitle: `${BUSINESS_INFO.name} | ${BUSINESS_INFO.tagline}`,
  description: BUSINESS_INFO.description,
  keywords:
    "barber shop Ahmedabad, men's haircut Nikol, beard grooming Gujarat, premium fade Ahmedabad, signature haircut, barbershop near me",
  author: BUSINESS_INFO.name,
  twitterHandle: "@elitebarberstudio",
  ogImage: "/og-image.jpg", // Add this image to your public folder
  twitterImage: "/twitter-image.jpg",
};

// Page-specific SEO Data
export const PAGE_SEO = {
  home: {
    title: `${BUSINESS_INFO.name} | Premium Men's Grooming in Ahmedabad`,
    description:
      "Experience precision cuts, expert fades & premium grooming in Nikol, Ahmedabad. Master barbers with 10+ years experience. Book your appointment today!",
    keywords:
      "barber shop Ahmedabad, men's haircut Nikol, beard grooming Gujarat, premium fade Ahmedabad, signature haircut, best barber Ahmedabad",
    path: "/",
  },
  gallery: {
    title: `Gallery - ${BUSINESS_INFO.name} | Haircut Styles & Examples`,
    description:
      "Browse our gallery of signature haircuts, premium fades, and beard sculpting work. See why we're Ahmedabad's premier barbershop.",
    keywords:
      "barbershop gallery Ahmedabad, haircut styles, fade examples, men's hairstyle inspiration, barber portfolio",
    path: "/gallery",
  },
};

// Schema.org Structured Data Templates

export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: BUSINESS_INFO.name,
  description: BUSINESS_INFO.description,
  image: `${DEFAULT_SEO.siteUrl}${DEFAULT_SEO.ogImage}`,
  url: DEFAULT_SEO.siteUrl,
  telephone: BUSINESS_INFO.phone,
  email: BUSINESS_INFO.email,
  priceRange: BUSINESS_INFO.priceRange,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS_INFO.address.street,
    addressLocality: BUSINESS_INFO.address.city,
    addressRegion: BUSINESS_INFO.address.state,
    addressCountry: BUSINESS_INFO.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "23.0225", // Update with actual coordinates
    longitude: "72.5714",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "10:00",
      closes: "18:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: BUSINESS_INFO.rating.value,
    reviewCount: BUSINESS_INFO.rating.count,
    bestRating: "5",
    worstRating: "1",
  },
});

export const getServiceSchema = (serviceName, price, description) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: serviceName,
  provider: {
    "@type": "HairSalon",
    name: BUSINESS_INFO.name,
  },
  areaServed: {
    "@type": "City",
    name: BUSINESS_INFO.address.city,
  },
  offers: {
    "@type": "Offer",
    price: price.replace("$", ""),
    priceCurrency: "USD",
  },
  description: description,
});

export const getReviewSchema = (reviews) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: reviews.map((review, index) => ({
    "@type": "Review",
    position: index + 1,
    author: {
      "@type": "Person",
      name: review.author,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
    reviewBody: review.text,
    datePublished: review.date || "2024-01-01",
  })),
});

export const getBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${DEFAULT_SEO.siteUrl}${item.path}`,
  })),
});

// Helper function to generate meta tags
export const generateMetaTags = (pageData) => {
  const seoData = { ...DEFAULT_SEO, ...pageData };
  const fullUrl = `${DEFAULT_SEO.siteUrl}${seoData.path || ""}`;

  return {
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.keywords,
    canonical: fullUrl,
    ogTitle: seoData.title,
    ogDescription: seoData.description,
    ogUrl: fullUrl,
    ogImage: `${DEFAULT_SEO.siteUrl}${DEFAULT_SEO.ogImage}`,
    twitterCard: "summary_large_image",
    twitterTitle: seoData.title,
    twitterDescription: seoData.description,
    twitterImage: `${DEFAULT_SEO.siteUrl}${DEFAULT_SEO.twitterImage}`,
  };
};
