import { IGalleryItem } from "../GalleryItem/interfaces";

export interface IGalleryNavProps {
  item: IGalleryItem,
  index: number,
  setSelectedIndex: (index: number) => void,
}