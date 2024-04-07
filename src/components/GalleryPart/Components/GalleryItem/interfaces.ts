import { IGalleryItem } from "../../../../data/interfaces";

export interface IGallerySliderProps {
  item: IGalleryItem,
}

export interface IGalleryImages {
  id: number,
  title: string,
  image: string,
}

export interface IGalleryProps {
  item: IGalleryItem,
  index: number,
  inView: boolean,
  setSelectedIndex: (index: number) => void,
}