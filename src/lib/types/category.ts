import type { SubCategory } from "./subCategory";

export interface Category {
    id: number;
    name: string;
    url: string;
    description: string;
    subCategories: SubCategory[];
}