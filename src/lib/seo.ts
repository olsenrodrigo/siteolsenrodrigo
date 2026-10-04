import {
  certifications,
  education,
  faqConsultoria,
  faqFormacao,
  faqHome,
  faqMentoria,
  zummArticles,
  mit,
  site,
  timeline,
  type Faq,
} from "../data/profile";

const personId = `${site.url}/#olsen`;
const websiteId = `${site.url}/#website`;

const person = {
  "@type": "Person",
  "@id": personId,
  name: site.name,
  alternateName: [site.brand, site.fullName],
  givenName: "Olsen",
  familyName: "Rodrigo Mott Silva",
  url: site.url,
  image: `${site.url}/fotos/olsen-retrato.jpg`,
  jobTitle: "CEO e fundador da Sintetiza AI",
  description:
    "Gerente de projetos certificado PMP. Mais de 18 anos em tecnologia aplicada a negócios, com foco em saúde. Mentoria e consultoria para decidir o uso de inteligência artificial com método de projeto. Ribeirão Preto.",
  email: site.email,
  telephone: `+${site.whatsapp}`,
  nationality: { "@type": "Country", name: "Brasil" },
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
    ...education.map((item) => ({
      "@type": "EducationalOccupationalCredential",
      name: item.degree,
      credentialCategory: "degree",
      recognizedBy: { "@type": "Organization", name: item.place },
    })),
    {
      "@type": "EducationalOccupationalCredential",
      name: mit.name,
      credentialCategory: "executive education",
      description: mit.place,
    },
  ],
  knowsAbout: [
    "Inteligência artificial aplicada a negócios",
    "Decisão executiva",
    "Tecnologia em saúde",
    "Gerenciamento de projetos",
    "PMP",
    "Gestão de produto",
    "Liderança de tecnologia",
    "Governança de inteligência artificial",
  ],
  sameAs: [site.instagram, site.linkedin, site.sintetiza, `${site.url}/`],
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

function faqNode(items: Faq[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
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

export function graphFor(page: string) {
  const website = {
    "@type": "WebSite",
    "@id": websiteId,
    name: `${site.name} — ${site.brand}`,
    url: site.url,
    inLanguage: "pt-BR",
    description: site.signature,
    publisher: { "@id": personId },
  };

  const nodes: object[] = [person, website];

  if (page === "home") {
    nodes.push({
      "@type": "ProfilePage",
      "@id": `${site.url}/#profile`,
      url: `${site.url}/`,
      name: site.name,
      inLanguage: "pt-BR",
      mainEntity: { "@id": personId },
      primaryImageOfPage: `${site.url}/fotos/olsen-retrato.jpg`,
    });
    nodes.push(faqNode(faqHome));
  }

  if (page === "trajetoria") {
    nodes.push(breadcrumb([
      { name: "Início", path: "/" },
      { name: "Trajetória", path: "/trajetoria/" },
    ]));
    nodes.push({
      "@type": "ItemList",
      name: "Trajetória profissional de Olsen Rodrigo",
      itemListElement: timeline.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: `${item.period} ${item.org}`,
        description: `${item.role}. ${item.text}`,
      })),
    });
    nodes.push({
      "@type": "ItemList",
      name: "Textos de Olsen Rodrigo na editoria de Tecnologia do Portal Zumm",
      itemListElement: zummArticles.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Article",
          headline: item.title,
          datePublished: item.published,
          inLanguage: "pt-BR",
          url: item.href,
          author: { "@id": personId },
          description: item.excerpt,
        },
      })),
    });
  }

  if (page === "formacao") {
    nodes.push(breadcrumb([
      { name: "Início", path: "/" },
      { name: "Formação", path: "/formacao/" },
    ]));
    nodes.push(faqNode(faqFormacao));
  }

  if (page === "mentoria") {
    nodes.push(breadcrumb([
      { name: "Início", path: "/" },
      { name: "Mentoria", path: "/mentoria/" },
    ]));
    nodes.push(faqNode(faqMentoria));
    nodes.push(serviceNode(
      "Mentoria com Olsen Rodrigo",
      "Mentoria para fundadores e lideranças que precisam decidir como usar inteligência artificial com responsabilidade.",
      "/mentoria/",
    ));
  }

  if (page === "consultoria") {
    nodes.push(breadcrumb([
      { name: "Início", path: "/" },
      { name: "Consultoria", path: "/consultoria/" },
    ]));
    nodes.push(faqNode(faqConsultoria));
    nodes.push(serviceNode(
      "Consultoria com Olsen Rodrigo",
      "Consultoria para empresas que precisam da decisão de inteligência artificial antes de construir a solução.",
      "/consultoria/",
    ));
  }

  if (page === "contato") {
    nodes.push(breadcrumb([
      { name: "Início", path: "/" },
      { name: "Contato", path: "/contato/" },
    ]));
    nodes.push({
      "@type": "ContactPage",
      url: `${site.url}/contato/`,
      mainEntity: { "@id": personId },
    });
  }

  return { "@context": "https://schema.org", "@graph": nodes };
}

export function jsonLd(page: string) {
  return JSON.stringify(graphFor(page)).replace(/</g, "\\u003c");
}
