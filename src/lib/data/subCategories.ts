import type { SubCategory } from "$lib/types/subCategory";

export const subCategories: SubCategory[] = [
    {
        id: 1,
        name: "Proteinpulver",
        categoryIds: [1],
        url: "/proteinpulver",
        image: "/product.jpg",
    },
    {
        id: 2,
        name: "Kreatin",
        categoryIds: [1],
        url: "/kreatin",
        image: "/product.jpg",
    },
    {
        id: 3,
        name: "Weight gainer",
        categoryIds: [1],
        url: "/weight-gainer",
        image: "/product.jpg",
    },
    {
        id: 4,
        name: "Pre workout",
        categoryIds: [1, 3],
        url: "/pre-workout",
        image: "/product.jpg",
    },
    {
        id: 5,
        name: "Proteinbarer",
        categoryIds: [1, 2],
        url: "/proteinbarer",
        image: "/product.jpg",
    },
    {
        id: 6,
        name: "Elektrolytter",
        categoryIds: [3],
        url: "/elektrolytter",
        image: "/product.jpg",
    },
];