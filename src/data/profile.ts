export const site = {
  name: "Olsen Rodrigo",
  fullName: "Olsen Rodrigo Mott Silva",
  brand: "EAIOLSEN",
  url: "https://olsenrodrigo.com",
  locale: "pt-BR",
  email: "olsen@sintetiza.ai",
  whatsapp: "5516957823441",
  whatsappDisplay: "+55 16 95782-3441",
  instagram: "https://www.instagram.com/olsenrodrigo/",
  linkedin: "https://www.linkedin.com/in/olsen-rodrigo-mott-silva-cto/",
  sintetiza: "https://sintetiza.ai",
  city: "Ribeirão Preto",
  region: "São Paulo",
  country: "Brasil",
  slogan: "Menos hype. Mais inteligência.",
  signature: "A tecnologia só é inteligente quando gera decisões melhores.",
  ogImage: "https://olsenrodrigo.com/og.jpg",
} as const;

export function whatsappLink(topic: string) {
  const text = `Olá, Olsen. Vim pelo site e quero conversar sobre ${topic}.`;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const nav = [
  { href: "/trajetoria/", label: "Trajetória" },
  { href: "/formacao/", label: "Formação" },
  { href: "/mentoria/", label: "Mentoria" },
  { href: "/consultoria/", label: "Consultoria" },
  { href: "/contato/", label: "Contato" },
] as const;

export const timeline = [
  {
    period: "2004–2005",
    org: "Instituto Edumed",
    role: "Estágio",
    text: "Primeiro trabalho em tecnologia aplicada à educação médica. O pai tinha colocado o filho num curso de informática quando ele ainda preferia videogame. A porta abriu por ali.",
    logo: "/marcas/logo_edumed.gif",
  },
  {
    period: "2005–2008",
    org: "Hemocentro da USP Ribeirão Preto",
    role: "Estágio em TI",
    text: "Tecnologia da informação dentro do hemocentro, no mesmo período do bacharelado em Informática Biomédica.",
    logo: "/marcas/logo_hemocentro.png",
  },
  {
    period: "2009",
    org: "Instituto Edumed",
    role: "Tecnologia",
    text: "Retorno depois da formatura, já com o diploma da USP.",
    logo: "/marcas/logo_edumed.gif",
  },
  {
    period: "2009–2021",
    org: "Matrix Saúde",
    role: "Gestão de produto e tecnologia",
    text: "Doze anos. Arquitetou o maior sistema de gestão para clínicas do Brasil. A operação passou a alcançar mais de 25 milhões de vidas.",
    logo: "/marcas/logo_matrix.png",
  },
  {
    period: "2021–2025",
    org: "AmorSaúde",
    role: "CPO e CTO",
    text: "Liderança de produto, tecnologia e inovação numa das maiores redes de clínicas do país. No mesmo ciclo, consultoria para Hospital Albert Einstein, Rede D'Or, Hapvida e Fleury.",
    logo: "/marcas/logo_amorsaude.png",
  },
  {
    period: "2025",
    org: "Play Technology",
    role: "Sócio e CTO",
    text: "Co-fundador. Tecnologia aplicada a negócios para além do eixo da saúde.",
    logo: "/marcas/logo_playtech.png",
  },
  {
    period: "Desde dez/2025",
    org: "Sintetiza AI",
    role: "CEO e fundador",
    text: "Consultoria de inteligência artificial aplicada a negócios. A empresa existe para transformar processo complexo em decisão que a operação consegue sustentar.",
    logo: "/marcas/logo_sintetiza_dark.png",
    href: "https://sintetiza.ai",
  },
] as const;

export const parallels = [
  {
    label: "Professor",
    detail: "IA aplicada a negócios na Escola Prudem, em Ipatinga, Minas Gerais.",
    logo: "/marcas/logo_prudem.jpeg",
  },
  {
    label: "Conselheiro",
    detail: "Rede Líderes Digitais, com lideranças de tecnologia, gente, jurídico e compliance.",
  },
  {
    label: "Palestrante",
    detail: "Inteligência artificial, projetos, carreira em tecnologia e alta performance.",
  },
  {
    label: "Coautor",
    detail: "Como Decidem as Lideranças e Como Pensam as Lideranças.",
  },
] as const;

export const education = [
  {
    degree: "Bacharelado em Informática Biomédica",
    place: "USP Ribeirão Preto, turma 3",
    year: "2005–2008",
    logo: "/marcas/logo_usp.png",
  },
  {
    degree: "MBA Executivo em Saúde",
    place: "Gestão de Clínicas e Hospitais, FGV São Paulo",
    year: "2015",
    logo: "/marcas/logo_fgv.png",
  },
  {
    degree: "Especialização Executiva em CTO",
    place: "Insper, São Paulo",
    year: "2023",
    logo: "/marcas/logo_insper.png",
  },
] as const;

export const certifications = [
  { name: "PMP", place: "Project Management Institute", year: "2016", logo: "/marcas/logo_pmi.png" },
  { name: "Oracle Cloud", place: "Oracle", year: "2022", logo: "/marcas/logo_oracle.png" },
  { name: "ITIL 4", place: "PeopleCert / Axelos", year: "2022", logo: "/marcas/logo_itil.jpg" },
  { name: "PM3", place: "Produto", year: "2022", logo: "/marcas/logo_pm3.png" },
  { name: "AWS Cloud", place: "Amazon Web Services", year: "2025", logo: "/marcas/logo_aws.jpg" },
] as const;

export const mit = {
  name: "MIT CEO Summit 2026",
  full: "Human-Centered AI Leadership Immersion",
  when: "5 a 7 de outubro de 2026",
  where: "Boston e Cambridge, Massachusetts",
  summary:
    "Imersão por convite para um grupo de até 30 CEOs e fundadores da América Latina. Três dias com professores do MIT Sloan, visitas ao ecossistema de inovação de Boston e mesas fechadas entre pares.",
  questions: [
    "Como as organizações devem evoluir na era da inteligência artificial?",
    "O que continua sendo unicamente humano?",
  ],
  faculty: [
    "Roberto Rigobon, professor de economia aplicada e diretor do programa pelo MIT Sloan Latin American Office",
    "Vivek Farias, professor de gestão de operações",
    "Kate Kellogg, professora de estudos do trabalho e das organizações",
    "Zeynep Ton, professora de gestão de operações",
    "Isabella Loaiza, pesquisadora do MIT Sloan",
  ],
  visits: [
    "Abertura no MIT Museum, em 5 de outubro",
    "Sessões no MIT Sloan School of Management",
    "Visitas a Microsoft New England, Google Cambridge e Greentown Labs",
  ],
  note: "É formação executiva por seleção. Não é diploma, certificado acadêmico nem vínculo de ex-aluno do MIT.",
} as const;

export type Faq = { question: string; answer: string };

export const faqHome: Faq[] = [
  {
    question: "Quem é Olsen Rodrigo?",
    answer:
      "Olsen Rodrigo Mott Silva, da marca EAIOLSEN, é CEO e fundador da Sintetiza AI. Tem mais de 18 anos em tecnologia aplicada a negócios, com a carreira concentrada em saúde. Formou-se em Informática Biomédica na USP de Ribeirão Preto, fez MBA na FGV e especialização executiva de CTO no Insper. É pai, fala de fé, família e alta performance, e treina jiu-jitsu.",
  },
  {
    question: "Qual foi o resultado mais relevante da carreira dele?",
    answer:
      "Na Matrix Saúde, entre 2009 e 2021, arquitetou o maior sistema de gestão para clínicas do Brasil. A operação alcançou mais de 25 milhões de vidas. Depois foi CPO e CTO da AmorSaúde e consultor de instituições como Hospital Albert Einstein, Rede D'Or, Hapvida e Fleury.",
  },
  {
    question: "O que Olsen oferece neste site?",
    answer:
      "Mentoria para quem lidera e precisa de critério para usar inteligência artificial. Consultoria para a empresa que precisa decidir antes de construir. A construção de produto, quando cabe, acontece na Sintetiza AI.",
  },
];

export const faqMentoria: Faq[] = [
  {
    question: "Para quem é a mentoria?",
    answer:
      "Para fundadores, CEOs e lideranças de tecnologia ou de negócio que já têm responsabilidade real e precisam decidir o que automatizar, o que permanece humano e como cobrar governança de quem constrói. Não é um programa para quem está começando a estudar inteligência artificial do zero.",
  },
  {
    question: "A mentoria é um curso?",
    answer:
      "Não há turma, plataforma nem apostila. São conversas em profundidade, com a agenda combinada na primeira conversa. Quem quer aula encontra a Escola Prudem, onde Olsen dá a disciplina de IA aplicada a negócios.",
  },
  {
    question: "O que a pessoa leva da mentoria?",
    answer:
      "Critério. Uma forma de olhar um problema de inteligência artificial e sair com uma decisão: fazer, adiar ou recusar, com o risco nomeado. O objetivo é a pessoa decidir melhor na semana seguinte, dentro da empresa dela.",
  },
  {
    question: "A mentoria inclui construir o sistema?",
    answer:
      "A mentoria é sobre a decisão e sobre a liderança. Quando a empresa precisa de um time para desenhar e operar a solução, isso é consultoria e, na execução, é trabalho da Sintetiza AI.",
  },
];

export const faqConsultoria: Faq[] = [
  {
    question: "Qual a diferença entre esta consultoria e a Sintetiza AI?",
    answer:
      "Aqui a conversa é com Olsen, sobre a decisão: onde a inteligência artificial entra, o que não pode falhar, que governança o negócio aguenta. A Sintetiza AI é a empresa que ele fundou para construir e operar soluções com time, método e entrega. Muitos trabalhos começam numa conversa com ele e seguem na empresa.",
  },
  {
    question: "Para que tipo de empresa isso serve?",
    answer:
      "Para empresas em que erro operacional custa caro: saúde, serviços, varejo, financeiro e operações com muito atendimento. O método nasceu em missão crítica. O setor pode ser outro. A régua de responsabilidade permanece.",
  },
  {
    question: "Quanto custa e em quanto tempo começa?",
    answer:
      "Não há tabela neste site. A primeira conversa serve para entender a decisão que está em aberto. Formato, prazo e investimento saem desse contexto, por escrito.",
  },
];

export const faqFormacao: Faq[] = [
  {
    question: "Olsen é formado pelo MIT?",
    answer:
      "Não. A formação acadêmica é USP Ribeirão Preto, FGV e Insper. Em 2026 ele foi selecionado para o MIT CEO Summit, uma imersão por convite em Boston, de 5 a 7 de outubro, com professores do MIT Sloan e até 30 CEOs da América Latina. É sala de aula executiva. Não é diploma nem certificado de conclusão do MIT.",
  },
  {
    question: "Quais certificações profissionais ele tem?",
    answer:
      "PMP desde 2016, Oracle Cloud, ITIL 4 e PM3 em 2022, e AWS Cloud em 2025.",
  },
];
