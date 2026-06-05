import { SITE } from "@/lib/constants";

export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.name,
    jobTitle: "Event Coordinator & Strategic Partnerships",
    description: SITE.description,
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.phone,
    sameAs: [SITE.linkedin],
    worksFor: {
      "@type": "Organization",
      name: "Education Growth Network (EGN)",
    },
    knowsAbout: [
      "Higher Education",
      "Strategic Partnerships",
      "Conference Management",
      "International Engagement",
      "Stakeholder Management",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
