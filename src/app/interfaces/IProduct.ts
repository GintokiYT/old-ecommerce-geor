import IProductColor from './IProductColor';

export default interface IProduct {
  image?: string;
  name?: string;
  price?: number | string;
  currency?: string;
  isNew?: boolean;
  oldPrice?: number | string;
  inOffert?: boolean;
  discountPercentage?: number;
  hasMinimumOrder?: boolean;
  minimumOrder?: number;
  hasFreeDelivery?: boolean;
  colors?: IProductColor[];
}
