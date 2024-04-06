import { IGalleryImages } from "../../../../types/types";

export interface IGallerySliderProps {
  item: IGalleryItem,
}

export interface IGalleryItem {
  id: number,
  name: string,
  image: string,
  date: string,
  images: IGalleryImages[];
}

export interface IGalleryProps {
  item: IGalleryItem,
  index: number,
  inView: boolean,
  setSelectedIndex: (index: number) => void,
}