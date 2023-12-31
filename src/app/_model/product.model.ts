import { Category } from "./category.model";
import { FileHandle } from "./file-handle.model";
import { Promotion } from "./promotion.model";

export interface Product {
  id: number;
  productLibelle: string;
  productDescription: string;
  productPrice: number;
  productDiscountedPrice: number;
  category: Category;
  promotion: Promotion;
  image: FileHandle
}