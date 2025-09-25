export interface Product {
    id: number;
    retailer: string;
    brand: string;
    name: string;
    description: string;
    subCategoryIds: number[];
    price: number;
    image: string;
    url: string;
}