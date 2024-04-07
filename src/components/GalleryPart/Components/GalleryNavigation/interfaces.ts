import { IGalleryItem } from "../../../../data/interfaces";

export interface IGalleryNavProps {
  item: IGalleryItem,
  index: number,
  setSelectedIndex: (index: number) => void,
}