export interface TProduct {
   id?: number | string;
   title: string;
   short_description: string;
   long_description: string;
   price: number;
   image: string;
   category: string;
}
export type fromType = Pick<TProduct, "title" | "price" | "image" | "category">;
