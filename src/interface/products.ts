export default interface TProduct {
   id?: number | string;
   name: string;
   image: string;
   price: number;
   category: string;
}
export type fromType = Pick<TProduct, "name" | "price" | "image" | "category">;
