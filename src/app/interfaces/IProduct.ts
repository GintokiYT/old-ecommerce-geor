import IProductColor from './IProductColor';

export default interface IProduct {
  image?: string;
  name?: string;
  price?: number;
  currency?: string;
  isNew?: boolean;
  oldPrice?: number;
  inOffert?: boolean;
  discountPercentage?: number;
  hasMinimumOrder?: boolean;
  minimumOrder?: number;
  hasFreeDelivery?: boolean;
  colors?: IProductColor[];
}
