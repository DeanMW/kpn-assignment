
export enum SimCardCapacity {
  DualSIM = 'Dual SIM',
  HybrideDualSIM = 'Hybride Dual SIM',
  Overig = 'Overig',
  SingleSIM = 'Single SIM',
}

export enum OperatingSystem {
  Android = 'ANDROID',
  Ios = 'IOS',
}

export interface UspOffer {
}

export interface Variant {
  id: number;
  name: string;
  slug: string;
  nextShipDate: null | string;
  uspOffer: UspOffer;
  attributes: { [key: string]: null | string };
  uiSuggestedSortOrder: number;
}

export enum PromotionBgColor {
  Green = 'green',
}

export interface Attributes {
  handsetCatPromotionSticker: null | string;
  promotionLabel: null | string;
  promotionSliderSource: null | string;
  promotionBgColor: PromotionBgColor | null;
  handsetCatPromotionStickerKz: null;
  promotionLabelKz: null | string;
  promotionSliderSourceKz: null | string;
  promotionBgColorKz: null;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  manufacturer: string;
  model: string;
  operatingSystem: OperatingSystem;
  simCardCapacity: SimCardCapacity;
  refurbished: boolean;
  hasUsp: boolean;
  has5G: boolean;
  hasEsim: boolean;
  colors: string[];
  sortOrder: number;
  releaseDate: Date;
  default: string;
  variants: Variant[];
  attributes: Attributes;
  hasPromotion: boolean;
}

export interface deviceColor {
  color: string,
  colorCode: string;
  colorName: string;
}

export interface Devices {
  products: Product[];
  filteredProducts: Product[]
}
