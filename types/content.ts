// types/content.ts

export interface FooterContent {
  heading_uk: string;
  heading_en: string;
  description_uk: string;
  description_en: string;
  email: string;
  nameLabel_uk: string;
  nameLabel_en: string;
  emailLabel_uk: string;
  emailLabel_en: string;
  phoneLabel_uk: string;
  phoneLabel_en: string;
  submitButton_uk: string;
  submitButton_en: string;
  copyright_uk: string;
  copyright_en: string;
}

export interface ProductContent {
  id: number;
  name_uk: string;
  name_en: string;
  description_uk: string;
  description_en: string;
  features_uk: string[];
  features_en: string[];
  image: string;
}

export interface ForWhomContent {
  id: number;
  title_uk: string;
  title_en: string;
  image: string;
}

export interface AboutUsContent {
  heading_uk: string;
  heading_en: string;
  description1_uk: string;
  description1_en: string;
  description2_uk: string;
  description2_en: string;
  video: string;
}

export interface SupportUnit {
  id: number;
  name_uk: string;
  name_en: string;
  logo: string;
}

export interface SupportContent {
  heading_uk: string;
  heading_en: string;
  description_uk: string;
  description_en: string;
  units: SupportUnit[];
}

export interface ContentData {
  footer: FooterContent;
  products: ProductContent[];
  forWhom: ForWhomContent[];
  aboutUs: AboutUsContent;
  support: SupportContent;
}