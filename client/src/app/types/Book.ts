export interface Book {
    objectId: string;
    bookName: string;
    author: string;
    imageUrl: string;
    cover: string;
    coverPrice: number;
    price: number;
    description: string;
    used: boolean;
    owner: any;
    boughtBy: string;
}