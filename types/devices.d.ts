/* eslint-disable camelcase */
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
  handset_cat_promotion_sticker: null | string;
  promotion_label: null | string;
  promotion_slider_source: null | string;
  promotion_bg_color: PromotionBgColor | null;
  handset_cat_promotion_sticker_kz: null;
  promotion_label_kz: null | string;
  promotion_slider_source_kz: null | string;
  promotion_bg_color_kz: null;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  manufacturer: string;
  model: string;
  operating_system: OperatingSystem;
  sim_card_capacity: SimCardCapacity;
  refurbished: boolean;
  has_usp: boolean;
  has_5g: boolean;
  has_esim: boolean;
  colors: string[];
  sort_order: number;
  release_date: Date;
  default: string;
  variants: Variant[];
  attributes: Attributes;
  has_promotion: boolean;
}

export interface deviceColor {
  color: string,
  color_code: string;
  color_name: string;
}

export interface Devices {
  products: Product[];
  filteredProducts: Product[]
}
