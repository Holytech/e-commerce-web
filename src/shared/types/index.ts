export interface IProductCategory {
  id: string;
  name: string;
  icon: { dark: string; light: string };
}

export interface IProductCard {
  id: string;
  name: string;
  img: string;
  color?: string[];
  star: number;
  price: number;
  isNew?: boolean;
  isLiked?: boolean;
  discountPrice?: string | number;
  discountPercentage?: string | number;
  totalSold?: number;
}

export interface IIcons {
  size?: number;
  color?: string;
  fillColor?: string;
}
