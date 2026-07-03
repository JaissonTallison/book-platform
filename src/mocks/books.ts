import type { Book } from "@/types/book";

export const mockBooks: Book[] = [
  {
    id: "bk_guardiao",
    code: "LV-3F92K",
    title: "O Guardião das Palavras",
    author: "Marina Ferraz",
    coverUrl: "/images/book00.jpg",
    synopsis:
      "Uma ficção juvenil sobre uma biblioteca escondida e o último guardião capaz de proteger as histórias que ela contém.",
    chapters: [
      {
        id: "bk_guardiao_ch1",
        bookId: "bk_guardiao",
        order: 1,
        title: "O chamado",
        description:
          "A protagonista encontra um bilhete misterioso escondido nas páginas de um livro antigo.",
        resources: [
          { id: "bk_guardiao_ch1_r1", type: "video", title: "Trailer do livro" },
          { id: "bk_guardiao_ch1_r2", type: "quiz", title: "Quiz: primeiras impressões" },
        ],
      },
      {
        id: "bk_guardiao_ch2",
        bookId: "bk_guardiao",
        order: 2,
        title: "A trilha esquecida",
        description:
          "Uma trilha que só aparece à noite leva a protagonista a um lugar que não deveria existir.",
        resources: [
          { id: "bk_guardiao_ch2_r1", type: "audio", title: "Narração do capítulo" },
          { id: "bk_guardiao_ch2_r2", type: "image", title: "Mapa da trilha" },
        ],
      },
      {
        id: "bk_guardiao_ch3",
        bookId: "bk_guardiao",
        order: 3,
        title: "O enigma da torre",
        description:
          "Para avançar, é preciso decifrar um enigma guardado há décadas no topo da torre.",
        resources: [
          { id: "bk_guardiao_ch3_r1", type: "quiz", title: "Desafio: decifre o enigma" },
          { id: "bk_guardiao_ch3_r2", type: "pdf", title: "Material complementar" },
        ],
      },
      {
        id: "bk_guardiao_ch4",
        bookId: "bk_guardiao",
        order: 4,
        title: "O retorno",
        description: "O desfecho da jornada e o preço de proteger uma história.",
        resources: [
          { id: "bk_guardiao_ch4_r1", type: "video", title: "Bastidores da escrita" },
        ],
      },
    ],
  },
  {
    id: "bk_ciencia",
    code: "LV-7A21P",
    title: "Ciência para Curiosos",
    author: "Rafael Dutra",
    coverUrl: "/images/book01.jpg",
    synopsis:
      "Um livro educacional que explica conceitos de ciência do dia a dia com experimentos simples e linguagem acessível.",
    chapters: [
      {
        id: "bk_ciencia_ch1",
        bookId: "bk_ciencia",
        order: 1,
        title: "O método científico",
        description: "Como cientistas transformam curiosidade em conhecimento.",
        resources: [
          { id: "bk_ciencia_ch1_r1", type: "video", title: "Introdução ao método" },
          { id: "bk_ciencia_ch1_r2", type: "quiz", title: "Quiz: hipótese ou teoria?" },
        ],
      },
      {
        id: "bk_ciencia_ch2",
        bookId: "bk_ciencia",
        order: 2,
        title: "Energia e movimento",
        description: "Experimentos simples para observar energia cinética em ação.",
        resources: [
          { id: "bk_ciencia_ch2_r1", type: "video", title: "Experimento: energia cinética" },
          { id: "bk_ciencia_ch2_r2", type: "pdf", title: "Roteiro de experimento" },
        ],
      },
      {
        id: "bk_ciencia_ch3",
        bookId: "bk_ciencia",
        order: 3,
        title: "O mundo microscópico",
        description: "Uma viagem pelo que os olhos não conseguem ver sozinhos.",
        resources: [
          { id: "bk_ciencia_ch3_r1", type: "image", title: "Galeria: células ao microscópio" },
          { id: "bk_ciencia_ch3_r2", type: "audio", title: "Podcast: descobertas" },
        ],
      },
      {
        id: "bk_ciencia_ch4",
        bookId: "bk_ciencia",
        order: 4,
        title: "Química do dia a dia",
        description: "Reações químicas escondidas na cozinha e no banheiro de casa.",
        resources: [
          { id: "bk_ciencia_ch4_r1", type: "quiz", title: "Quiz: reações comuns" },
          { id: "bk_ciencia_ch4_r2", type: "pdf", title: "Ficha de segurança" },
        ],
      },
      {
        id: "bk_ciencia_ch5",
        bookId: "bk_ciencia",
        order: 5,
        title: "O universo em números",
        description: "Dimensionando o cosmos com comparações do cotidiano.",
        resources: [
          { id: "bk_ciencia_ch5_r1", type: "video", title: "Documentário: escala do universo" },
        ],
      },
    ],
  },
  {
    id: "bk_contos",
    code: "LV-9K44X",
    title: "Contos do Rio Doce",
    author: "Beatriz Nunes",
    coverUrl: "/images/book02.jpg",
    synopsis:
      "Uma coletânea de contos regionais inspirados nas margens do Rio Doce, entre cheias, pescadores e serenatas.",
    chapters: [
      {
        id: "bk_contos_ch1",
        bookId: "bk_contos",
        order: 1,
        title: "A cheia",
        description: "Uma família se reorganiza durante a maior cheia em anos.",
        resources: [
          { id: "bk_contos_ch1_r1", type: "audio", title: "Narração: A cheia" },
        ],
      },
      {
        id: "bk_contos_ch2",
        bookId: "bk_contos",
        order: 2,
        title: "O pescador e a lua",
        description: "Um pescador aposta uma noite de pesca contra a maré alta.",
        resources: [
          { id: "bk_contos_ch2_r1", type: "image", title: "Ilustrações do conto" },
          { id: "bk_contos_ch2_r2", type: "quiz", title: "Quiz: personagens" },
        ],
      },
      {
        id: "bk_contos_ch3",
        bookId: "bk_contos",
        order: 3,
        title: "Serenata",
        description: "Uma serenata inesperada muda o rumo de duas famílias vizinhas.",
        resources: [
          { id: "bk_contos_ch3_r1", type: "audio", title: "Narração: Serenata" },
          { id: "bk_contos_ch3_r2", type: "pdf", title: "Glossário regional" },
        ],
      },
    ],
  },
  {
    id: "bk_matematica",
    code: "LV-2Q88M",
    title: "Matemática em Movimento",
    author: "Diego Castro",
    coverUrl: "/images/book03.jpg",
    synopsis:
      "Um livro didático que conecta frações, geometria e gráficos a situações reais do cotidiano do aluno.",
    chapters: [
      {
        id: "bk_matematica_ch1",
        bookId: "bk_matematica",
        order: 1,
        title: "Frações no cotidiano",
        description: "Frações aplicadas a receitas, divisão de contas e medidas.",
        resources: [
          { id: "bk_matematica_ch1_r1", type: "video", title: "Aula: frações" },
          { id: "bk_matematica_ch1_r2", type: "quiz", title: "Quiz: pratique frações" },
        ],
      },
      {
        id: "bk_matematica_ch2",
        bookId: "bk_matematica",
        order: 2,
        title: "Geometria ao redor",
        description: "Reconhecendo formas geométricas em objetos do dia a dia.",
        resources: [
          { id: "bk_matematica_ch2_r1", type: "image", title: "Galeria: formas geométricas" },
          { id: "bk_matematica_ch2_r2", type: "pdf", title: "Lista de exercícios" },
        ],
      },
      {
        id: "bk_matematica_ch3",
        bookId: "bk_matematica",
        order: 3,
        title: "Gráficos e dados",
        description: "Como ler e interpretar gráficos em notícias e pesquisas.",
        resources: [
          { id: "bk_matematica_ch3_r1", type: "video", title: "Aula: leitura de gráficos" },
          { id: "bk_matematica_ch3_r2", type: "quiz", title: "Quiz: interprete o gráfico" },
        ],
      },
      {
        id: "bk_matematica_ch4",
        bookId: "bk_matematica",
        order: 4,
        title: "Desafios finais",
        description: "Uma revisão geral com exercícios que combinam todos os temas.",
        resources: [
          { id: "bk_matematica_ch4_r1", type: "pdf", title: "Simulado final" },
        ],
      },
    ],
  },
  {
    id: "bk_atlas",
    code: "LV-5T77J",
    title: "Atlas da Vida Selvagem",
    author: "Helena Prado",
    coverUrl: "/images/book00.jpg",
    synopsis:
      "Um atlas ilustrado que percorre florestas, oceanos, savanas e desertos para mostrar como a vida selvagem se adapta.",
    chapters: [
      {
        id: "bk_atlas_ch1",
        bookId: "bk_atlas",
        order: 1,
        title: "Florestas tropicais",
        description: "A densa biodiversidade das florestas tropicais em close-up.",
        resources: [
          { id: "bk_atlas_ch1_r1", type: "video", title: "Expedição: floresta" },
          { id: "bk_atlas_ch1_r2", type: "image", title: "Galeria: fauna tropical" },
        ],
      },
      {
        id: "bk_atlas_ch2",
        bookId: "bk_atlas",
        order: 2,
        title: "Oceanos profundos",
        description: "Criaturas adaptadas à escuridão e à pressão das grandes profundezas.",
        resources: [
          { id: "bk_atlas_ch2_r1", type: "video", title: "Documentário: abismo oceânico" },
          { id: "bk_atlas_ch2_r2", type: "audio", title: "Podcast: vida marinha" },
        ],
      },
      {
        id: "bk_atlas_ch3",
        bookId: "bk_atlas",
        order: 3,
        title: "Savanas e desertos",
        description: "Estratégias de sobrevivência em climas extremos.",
        resources: [
          { id: "bk_atlas_ch3_r1", type: "quiz", title: "Quiz: adaptações animais" },
          { id: "bk_atlas_ch3_r2", type: "pdf", title: "Ficha: bioma savana" },
        ],
      },
      {
        id: "bk_atlas_ch4",
        bookId: "bk_atlas",
        order: 4,
        title: "Espécies ameaçadas",
        description: "Um panorama sobre conservação e espécies em risco de extinção.",
        resources: [
          { id: "bk_atlas_ch4_r1", type: "image", title: "Galeria: espécies em risco" },
          { id: "bk_atlas_ch4_r2", type: "quiz", title: "Quiz: conservação" },
        ],
      },
    ],
  },
];
