import { certifications, education, mit, site, timeline, zummArticles } from "../data/profile";
import { copy, localePath, type Lang } from "../i18n";

const personId = `${site.url}/#olsen`;
const websiteId = `${site.url}/#website`;

const inLanguage: Record<Lang, string> = {
  pt: "pt-BR",
  en: "en",
  es: "es",
  zh: "zh-Hans",
};

function breadcrumb(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

function faqNode(items: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

function serviceNode(name: string, description: string, path: string) {
  return {
    "@type": "Service",
    name,
    description,
    url: `${site.url}${path}`,
    serviceType: name,
    areaServed: ["BR", "LATAM"],
    provider: { "@id": personId },
  };
}

export function graphFor(page: string, lang: Lang = "pt") {
  const t = copy(lang);
  const language = inLanguage[lang];
  const homePath = localePath(lang, "/");

  const person = {
    "@type": "Person",
    "@id": personId,
    name: site.name,
    alternateName: [site.brand, site.fullName],
    givenName: "Olsen",
    familyName: "Rodrigo Mott Silva",
    url: site.url,
    image: `${site.url}/fotos/olsen-retrato.jpg`,
    jobTitle: t.seo.jobTitle,
    description: t.seo.personDescription,
    email: site.email,
    telephone: `+${site.whatsapp}`,
    nationality: { "@type": "Country", name: t.seo.nationality },
    homeLocation: {
      "@type": "Place",
      name: `${site.city}, ${site.region}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: site.city,
        addressRegion: "SP",
        addressCountry: "BR",
      },
    },
    worksFor: {
      "@type": "Organization",
      name: "Sintetiza AI",
      url: site.sintetiza,
    },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Universidade de São Paulo, Ribeirão Preto" },
      { "@type": "CollegeOrUniversity", name: "Fundação Getulio Vargas" },
      { "@type": "CollegeOrUniversity", name: "Insper" },
    ],
    hasCredential: [
      ...certifications.map((item) => ({
        "@type": "EducationalOccupationalCredential",
        name: `${item.name} (${item.year})`,
        credentialCategory: "certification",
        recognizedBy: { "@type": "Organization", name: item.place },
      })),
      ...education.map((item, index) => ({
        "@type": "EducationalOccupationalCredential",
        name: t.education[index].degree,
        credentialCategory: "degree",
        recognizedBy: { "@type": "Organization", name: t.education[index].place },
      })),
      {
        "@type": "EducationalOccupationalCredential",
        name: mit.name,
        credentialCategory: "executive education",
        description: t.mit.place,
      },
    ],
    knowsAbout: t.seo.knowsAbout,
    sameAs: [site.instagram, site.linkedin, site.sintetiza, `${site.url}/`],
  };

  const website = {
    "@type": "WebSite",
    "@id": websiteId,
    name: `${site.name} — ${site.brand}`,
    url: site.url,
    inLanguage: language,
    description: t.signature,
    publisher: { "@id": personId },
  };

  const nodes: object[] = [person, website];

  if (page === "home") {
    nodes.push({
      "@type": "ProfilePage",
      "@id": `${site.url}/#profile`,
      url: `${site.url}${homePath}`,
      name: site.name,
      inLanguage: language,
      mainEntity: { "@id": personId },
      primaryImageOfPage: `${site.url}/fotos/olsen-retrato.jpg`,
    });
    nodes.push(faqNode(t.faq.home));
  }

  if (page === "trajetoria") {
    nodes.push(breadcrumb([
      { name: t.seo.breadcrumbHome, path: homePath },
      { name: t.nav.trajetoria, path: localePath(lang, "/trajetoria/") },
    ]));
    nodes.push({
      "@type": "ItemList",
      name: t.seo.timelineName,
      itemListElement: timeline.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: `${t.timeline[index].period} ${item.org}`,
        description: `${t.timeline[index].role}. ${t.timeline[index].text}`,
      })),
    });
    nodes.push({
      "@type": "ItemList",
      name: t.seo.articlesName,
      itemListElement: zummArticles.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Article",
          headline: t.articles[index].title,
          datePublished: item.published,
          inLanguage: "pt-BR",
          url: item.href,
          author: { "@id": personId },
          description: t.articles[index].excerpt,
        },
      })),
    });
  }

  if (page === "formacao") {
    nodes.push(breadcrumb([
      { name: t.seo.breadcrumbHome, path: homePath },
      { name: t.nav.formacao, path: localePath(lang, "/formacao/") },
    ]));
    nodes.push(faqNode(t.faq.formacao));
  }

  if (page === "mentoria") {
    nodes.push(breadcrumb([
      { name: t.seo.breadcrumbHome, path: homePath },
      { name: t.nav.mentoria, path: localePath(lang, "/mentoria/") },
    ]));
    nodes.push(faqNode(t.faq.mentoria));
    nodes.push(serviceNode(
      t.seo.mentoriaService,
      t.seo.mentoriaServiceText,
      localePath(lang, "/mentoria/"),
    ));
  }

  if (page === "consultoria") {
    nodes.push(breadcrumb([
      { name: t.seo.breadcrumbHome, path: homePath },
      { name: t.nav.consultoria, path: localePath(lang, "/consultoria/") },
    ]));
    nodes.push(faqNode(t.faq.consultoria));
    nodes.push(serviceNode(
      t.seo.consultoriaService,
      t.seo.consultoriaServiceText,
      localePath(lang, "/consultoria/"),
    ));
  }

  if (page === "contato") {
    nodes.push(breadcrumb([
      { name: t.seo.breadcrumbHome, path: homePath },
      { name: t.nav.contato, path: localePath(lang, "/contato/") },
    ]));
    nodes.push({
      "@type": "ContactPage",
      url: `${site.url}${localePath(lang, "/contato/")}`,
      mainEntity: { "@id": personId },
    });
  }

  return { "@context": "https://schema.org", "@graph": nodes };
}

export function jsonLd(page: string, lang: Lang = "pt") {
  return JSON.stringify(graphFor(page, lang)).replace(/</g, "\\u003c");
}
