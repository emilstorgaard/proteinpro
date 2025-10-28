export interface PagedProducts {
    totalPages: number;
    currentPage: number;
    products: Product[];
}

export interface Product {
    id: number;
    retailer: string;
    brand: string;
    name: string;
    price: string;
    originalPrice: string;
    description: string;
    image: string;
    url: string;
}