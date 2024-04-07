import { IFoodItem } from "../../../../data/interfaces";

export interface IFoodItemProps {
  food: IFoodItem;
  index: number;
  inView: boolean;
}