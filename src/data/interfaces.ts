import { IGalleryImages } from "../components/GalleryPart/Components/GalleryItem/interfaces";

export interface IFoodItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

export interface IVoucherItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

export interface IDataGuides {
  id: number,
  name: string,
  title: string,
  description: string,
  image: string,
}

export interface IDataNightStayItem {
  id: number,
  title: string,
  description: string,
}

export interface ITourItem {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: number;
  distance: number;
  people: number;
}

export interface IAboutItem {
  id: number;
  data: number;
  title: string;
}

export interface IDataIntroItem {
  id: number;
  image: string;
  title: string;
}

export interface IGalleryItem {
  id: number,
  name: string,
  image: string,
  date: string,
  images: IGalleryImages[];
}