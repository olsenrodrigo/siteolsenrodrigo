export const site = {
  name: "Olsen Rodrigo",
  fullName: "Olsen Rodrigo Mott Silva",
  brand: "EAIOLSEN",
  url: "https://olsenrodrigo.com",
  email: "olsen@olsenrodrigo.com",
  whatsapp: "5516957823441",
  whatsappDisplay: "+55 16 95782-3441",
  instagram: "https://www.instagram.com/olsenrodrigo/",
  instagramCompany: "https://www.instagram.com/sintetizaai/",
  linkedin: "https://www.linkedin.com/in/olsen-rodrigo-mott-silva-cto/",
  sintetiza: "https://sintetiza.ai",
  city: "Ribeirão Preto",
  region: "São Paulo",
  ogImage: "https://olsenrodrigo.com/og.jpg",
} as const;

export const navItems = [
  { href: "/trajetoria/", key: "trajetoria" },
  { href: "/formacao/", key: "formacao" },
  { href: "/letramento/", key: "letramento" },
  { href: "/mentoria/", key: "mentoria" },
  { href: "/consultoria/", key: "consultoria" },
  { href: "/contato/", key: "contato" },
] as const;

export const zummCategory = "https://portalzumm.com.br/category/tecnologia/";

/** Logos, organizations, and URLs. Prose lives in src/i18n and stays aligned by index. */
export const timeline = [
  { org: "Instituto Edumed", logo: "/marcas/logo_edumed.png" },
  { org: "Hemocentro da USP Ribeirão Preto", logo: "/marcas/logo_hemocentro.png" },
  { org: "Instituto Edumed", logo: "/marcas/logo_edumed.png" },
  { org: "Matrix Saúde", logo: "/marcas/logo_matrix.png" },
  { org: "AmorSaúde Brasil", logo: "/marcas/logo_amorsaude.png" },
  { org: "Play Technology", logo: "/marcas/logo_playtech.png" },
  { org: "Sintetiza AI", logo: "/marcas/logo_sintetiza_dark.png", href: "https://sintetiza.ai" },
] as const;

export const parallels: { href?: string; logo?: string }[] = [
  { href: zummCategory },
  {},
  {},
  { logo: "/marcas/logo_prudem.png" },
  {},
];

export const zummArticles = [
  {
    published: "2026-09-24",
    href: "https://portalzumm.com.br/as-big-techs-de-ia-combinaram-de-frear-mas-a-questao-que-importa-e-outra/",
  },
  {
    published: "2026-09-10",
    href: "https://portalzumm.com.br/o-preco-de-um-sonho/",
  },
  {
    published: "2026-08-26",
    href: "https://portalzumm.com.br/chat-ou-agente-a-diferenca-de-perguntar-para-a-ia-e-colocar-a-ia-para-trabalhar/",
  },
  {
    published: "2026-08-10",
    href: "https://portalzumm.com.br/a-meta-matou-a-segmentacao-de-publico-o-que-mudou-para-quem-vende-com-anuncio/",
  },
  {
    published: "2026-07-28",
    href: "https://portalzumm.com.br/vibe-coding-a-moda-de-criar-sistemas-conversando-com-a-ia-e-o-que-ela-nao-te-conta/",
  },
  {
    published: "2026-07-15",
    href: "https://portalzumm.com.br/seo-e-geo-o-que-sao-e-por-que-estao-mudando-o-faturamento-do-seu-negocio/",
  },
  {
    published: "2026-07-01",
    href: "https://portalzumm.com.br/o-que-mudou-nomercado-de-tecnologia-e-por-que-isso-importa-para-a-sua-empresa/",
  },
] as const;

export const education = [
  { year: "2005–2008", logo: "/marcas/logo_usp.png" },
  { year: "2015", logo: "/marcas/logo_fgv.png" },
  { year: "2023", logo: "/marcas/logo_insper.png" },
] as const;

export const certifications = [
  { name: "PMP", place: "Project Management Institute", year: "2016", logo: "/marcas/logo_pmi.png" },
  { name: "Oracle Cloud", place: "Oracle", year: "2022", logo: "/marcas/logo_oracle.png" },
  { name: "ITIL 4", place: "PeopleCert / Axelos", year: "2022", logo: "/marcas/logo_itil.png" },
  { name: "PM3", place: "Produto", year: "2022", logo: "/marcas/logo_pm3.png" },
  {
    name: "AWS Certified AI Practitioner",
    place: "Amazon Web Services",
    year: "2023",
    logo: "/marcas/logo_aws_ai.png",
    badge: true,
  },
  { name: "AWS Cloud", place: "Amazon Web Services", year: "2025", logo: "/marcas/logo_aws.png" },
] as const;

export const mit = {
  name: "MIT CEO Summit 2026",
  year: "2026",
  logo: "/marcas/logo_mit.png",
} as const;
