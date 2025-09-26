import type { SubCategory } from "$lib/types/subCategory";

export const subCategories: SubCategory[] = [
    {
        id: 1,
        name: "Proteinpulver",
        categoryIds: [1],
        url: "/proteinpulver",
        image: "/proteinpowder.png",
    },
    {
        id: 2,
        name: "Kreatin",
        categoryIds: [1],
        url: "/kreatin",
        image: "/kreatin.png",
    },
    {
        id: 3,
        name: "Weight gainer",
        categoryIds: [1],
        url: "/weight-gainer",
        image: "/weight-gainer.png",
    },
    {
        id: 4,
        name: "Pre workout",
        categoryIds: [1, 3],
        url: "/pre-workout",
        image: "/pre-workout.png",
    },
    {
        id: 5,
        name: "Proteinbarer",
        categoryIds: [1, 2],
        url: "/proteinbarer",
        image: "/proteinbar.png",
    },
    {
        id: 6,
        name: "Elektrolytter",
        categoryIds: [3],
        url: "/elektrolytter",
        image: "/elektrolytter.png",
    },
    {
        id: 7,
        name: "Gel",
        categoryIds: [3],
        url: "/gel",
        image: "/gel.png",
    },
    {
        id: 8,
        name: "Shaker",
        categoryIds: [4],
        url: "/shaker",
        image: "/shaker.png",
    },
    {
        id: 9,
        name: "Udenfor kategori",
        categoryIds: [5],
        url: "/other",
        image: "/accessories.png",
    },
    {
        id: 10,
        name: "Snacks",
        categoryIds: [2],
        url: "/snacks",
        image: "/snacks.png",
    },
];