import { IFoodItem } from "../../../../types/types";

export interface IFoodItemProps {
  food: IFoodItem;
  index: number;
  inView: boolean;
}