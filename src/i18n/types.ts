export interface MetaCopy {
  title: string;
  description: string;
}

export interface Qa {
  q: string;
  a: string;
}

export interface Proof {
  title: string;
  text: string;
}

export interface Step {
  name: string;
  text: string;
}

export interface TimelineCopy {
  period: string;
  role: string;
  text: string;
}

export interface ParallelCopy {
  label: string;
  detail: string;
}

export interface ArticleCopy {
  date: string;
  title: string;
  excerpt: string;
}

export interface SchoolCopy {
  degree: string;
  place: string;
}

export interface Copy {
  meta: {
    home: MetaCopy;
    trajetoria: MetaCopy;
    formacao: MetaCopy;
    mentoria: MetaCopy;
    consultoria: MetaCopy;
    letramento: MetaCopy;
    contato: MetaCopy;
    missing: MetaCopy;
  };
  chrome: {
    skip: string;
    homeAria: string;
    sections: string;
    langButton: string;
    socialNav: string;
    social: { ig: string; igCompany: string; in: string; mail: string };
    country: string;
    ogAlt: string;
    langs: { pt: string; en: string; es: string; zh: string };
  };
  nav: {
    trajetoria: string;
    formacao: string;
    mentoria: string;
    consultoria: string;
    letramento: string;
    contato: string;
  };
  slogan: string;
  signature: string;
  cta: { mentoria: string; consultoria: string; letramento: string; whatsapp: string };
  wa: { template: string; mentoria: string; consultoria: string; letramento: string; decisao: string };
  home: {
    dek: string;
    ctaHow: string;
    proofsLabel: string;
    proofs: [Proof, Proof, Proof];
    methodTitle: string;
    methodLead: string;
    methodMuted: string;
    steps: [Step, Step, Step, Step];
    personTitle: string;
    personLead: string;
    personMuted: string;
    personLink: string;
    personCaption: string;
    personAlt: string;
    heroAlt: string;
    quoteNote: string;
    columnTitle: string;
    columnLead: string;
    columnMore: string;
    pathMentoriaTitle: string;
    pathMentoriaText: string;
    pathMentoriaLink: string;
    pathConsultoriaTitle: string;
    pathConsultoriaText: string;
    pathConsultoriaLink: string;
    pathLetramentoTitle: string;
    pathLetramentoText: string;
    pathLetramentoLink: string;
    closing: string;
  };
  letramento: {
    title: string;
    intro: string;
    lead: string;
    muted: string;
    forPeopleTitle: string;
    forPeople: string;
    forCompanyTitle: string;
    forCompany: string;
    endTitle: string;
    end: string;
    aside: string;
  };
  trajetoria: {
    title: string;
    intro: string;
    lead: string;
    photoAlt: string;
    caption: string;
    parallelTitle: string;
    parallelLead: string;
    columnLead: string;
    techDesk: string;
    techDeskLong: string;
  };
  timeline: [
    TimelineCopy,
    TimelineCopy,
    TimelineCopy,
    TimelineCopy,
    TimelineCopy,
    TimelineCopy,
    TimelineCopy,
  ];
  parallels: [ParallelCopy, ParallelCopy, ParallelCopy, ParallelCopy, ParallelCopy];
  articles: [
    ArticleCopy,
    ArticleCopy,
    ArticleCopy,
    ArticleCopy,
    ArticleCopy,
    ArticleCopy,
    ArticleCopy,
  ];
  formacao: {
    title: string;
    intro: string;
    schools: string;
    certs: string;
    certLead: string;
  };
  education: [SchoolCopy, SchoolCopy, SchoolCopy];
  mit: { place: string };
  mentoria: {
    title: string;
    intro: string;
    alt: string;
    caption: string;
    whoTitle: string;
    whoLead: string;
    whoMuted: string;
    whatTitle: string;
    what1: string;
    what2: string;
  };
  consultoria: {
    title: string;
    intro: string;
    lead: string;
    muted: string;
    withOlsenTitle: string;
    withOlsen: string;
    withCompanyTitle: string;
    withBefore: string;
    withAfter: string;
  };
  contato: {
    title: string;
    intro: string;
    email: string;
    instagramCompany: string;
    company: string;
    where: string;
  };
  missing: { title: string; lead: string; back: string };
  faq: {
    title: string;
    before: string;
    formacaoTitle: string;
    home: [Qa, Qa, Qa, Qa];
    mentoria: [Qa, Qa, Qa, Qa];
    consultoria: [Qa, Qa, Qa];
    letramento: [Qa, Qa, Qa, Qa];
    formacao: [Qa, Qa];
  };
  seo: {
    jobTitle: string;
    personDescription: string;
    nationality: string;
    knowsAbout: [string, string, string, string, string, string, string, string, string];
    breadcrumbHome: string;
    timelineName: string;
    articlesName: string;
    mentoriaService: string;
    mentoriaServiceText: string;
    consultoriaService: string;
    consultoriaServiceText: string;
    letramentoService: string;
    letramentoServiceText: string;
  };
}
