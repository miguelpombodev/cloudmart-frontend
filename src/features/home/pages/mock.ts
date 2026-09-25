import type { Category, Product } from "../types";

export const MOCK_CATEGORIES: Category[] = [
  {
    id: "1",
    name: "Eletronics",
    imageUrl:
      "https://img.magnific.com/fotos-gratis/arranjo-de-colecao-estacionario-moderno_23-2149309643.jpg",
  },
  {
    id: "2",
    name: "Moda",
    imageUrl:
      "https://img.magnific.com/fotos-gratis/loja-de-roupas-loja-de-roupas-em-cabide-na-boutique-loja-moderna_1150-8886.jpg",
  },
  {
    id: "3",
    name: "Housing & Garden",
    imageUrl:
      "https://img.magnific.com/fotos-gratis/mulher-jovem-e-atraente-trabalhando-com-plantas-decorativas-no-centro-de-jardim-supervisor-feminino-examinando-plantas-em-jardinagem-fora-na-natureza-de-verao-lindo-jardineiro-sorrindo-cuidados-com-as-plantas_1150-45788.jpg",
  },
  {
    id: "4",
    name: "Sports",
    imageUrl:
      "https://img.magnific.com/fotos-premium/equipamentos-esportivos-variados-sobre-gramado_436336-8357.jpg",
  },
  {
    id: "5",
    name: "Beauty",
    imageUrl:
      "https://img.magnific.com/fotos-gratis/duas-mulheres-felizes-aplicam-adesivos-de-beleza-usam-escovas-cosmeticas-e-escova-de-rosto-para-cuidar-de-si-mesmas-passam-por-rotinas-diarias-de-mimos-abracam-o-olhar-alegremente-longe-da-pose-contra-o-fundo-rosa_273609-59306.jpg",
  },
  {
    id: "6",
    name: "Books",
    imageUrl:
      "https://img.magnific.com/fotos-gratis/composicao-do-dia-do-livro-do-mundo-criativo_23-2148883781.jpg",
  },
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    title: "Essence Mascara Lash Princess",
    description:
      "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    category: "beauty",
    price: 9.99,
    imageUrl:
      "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
  },
  {
    id: 2,
    title: "Eyeshadow Palette with Mirror",
    description:
      "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
    category: "beauty",
    price: 19.99,
    imageUrl:
      "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp",
  },
  {
    id: 3,
    title: "Powder Canister",
    description:
      "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
    category: "beauty",
    price: 14.99,
    imageUrl:
      "https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp",
  },
  {
    id: 4,
    title: "Red Lipstick",
    description:
      "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
    category: "beauty",
    price: 12.99,
    imageUrl:
      "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp",
  },
  {
    id: 5,
    title: "Red Nail Polish",
    description:
      "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
    category: "beauty",
    price: 8.99,
    imageUrl:
      "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/1.webp",
  },
];

export const MOCK_OFFERS_BANNER = [
  {
    id: 1,
    title: "Liquidação",
    color: "#000",
    description: "Teste Banner 1",
    ctaString: "Veja as ofertas!",
    urlImg:
      "https://http2.mlstatic.com/D_NQ_676326-MLA115640316714_092026-OO.webp",
  },
  {
    id: 2,
    title: "Liquidação",
    color: "#000",
    description: "Teste Banner 2",
    ctaString: "Veja as ofertas!",
    urlImg:
      "https://http2.mlstatic.com/D_NQ_676326-MLA115640316714_092026-OO.webp",
  },
];
