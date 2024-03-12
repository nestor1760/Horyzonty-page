import { AppDispatch } from "../store"
import { foodError, foodLoading, foodSuccess } from "../store/foodSlice"
import { IFoodItem } from "../types/types"


export const foodDataRest = (data: IFoodItem[]) => async (dispatch: AppDispatch) => {
  dispatch(foodLoading())
  try {
    dispatch(foodSuccess(data))
  } catch (error) {
    dispatch(foodError(String(error)))
  }
}

