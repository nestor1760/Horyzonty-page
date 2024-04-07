import { ITourItem } from "../../../../data/interfaces";

export interface ITourItemProps {
  tour: ITourItem;
  index: number;
  inView: boolean;
}