import type { Product } from "../types/product";

export const products: Product[] = [
    { id: 1, name: "Proteinpulver1", subCategoryIds: [1], price: 299, image: "/product.jpg" },
    { id: 2, name: "Proteinpulver2", subCategoryIds: [1], price: 299, image: "/product.jpg" },
    { id: 3, name: "Kreatin1", price: 199, subCategoryIds: [2], image: "/product.jpg" },
    { id: 4, name: "Kreatin2", price: 199, subCategoryIds: [2], image: "/product.jpg" },
    { id: 5, name: "Weight gainer1", subCategoryIds: [3], price: 199, image: "/product.jpg" },
    { id: 6, name: "Weight gainer2", subCategoryIds: [3], price: 199, image: "/product.jpg" },
    { id: 7, name: "Pre workout1", subCategoryIds: [4], price: 199, image: "/product.jpg" },
    { id: 8, name: "Pre workout2", subCategoryIds: [4], price: 199, image: "/product.jpg" },
    { id: 9, name: "Proteinbar1", subCategoryIds: [5], price: 49, image: "/product.jpg" },
    { id: 10, name: "Proteinbar2", subCategoryIds: [5], price: 49, image: "/product.jpg" },
    { id: 11, name: "Elektrolytter1", subCategoryIds: [6], price: 149, image: "/product.jpg" },
    { id: 12, name: "Elektrolytter2", subCategoryIds: [6], price: 149, image: "/product.jpg" },
];