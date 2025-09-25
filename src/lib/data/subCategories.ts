import type { SubCategory } from "$lib/types/subCategory";

export const subCategories: SubCategory[] = [
    {
        id: 1,
        name: "Proteinpulver",
        categoryIds: [1],
        url: "/proteinpulver",
        image: "/proteinpowder.jpg",
    },
    {
        id: 2,
        name: "Kreatin",
        categoryIds: [1],
        url: "/kreatin",
        image: "/kreatin.jpg",
    },
    {
        id: 3,
        name: "Weight gainer",
        categoryIds: [1],
        url: "/weight-gainer",
        image: "/weight-gainer.jpg",
    },
    {
        id: 4,
        name: "Pre workout",
        categoryIds: [1, 3],
        url: "/pre-workout",
        image: "/pre-workout.jpg",
    },
    {
        id: 5,
        name: "Proteinbarer",
        categoryIds: [1, 2],
        url: "/proteinbarer",
        image: "/proteinbar.jpg",
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
        image: "/gel.jpg",
    },
    {
        id: 8,
        name: "Shaker",
        categoryIds: [4],
        url: "/shaker",
        image: "/accessories.jpg",
    },
];