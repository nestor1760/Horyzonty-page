import { AppDispatch } from "../store"
import { tourError, tourLoading, tourSuccess } from "../store/tourSlice"
import { ITourItem } from "../types/types"


export const tourDataRest = (data: ITourItem[]) => async (dispatch: AppDispatch) => {
  dispatch(tourLoading())
  try {
    dispatch(tourSuccess(data))
  } catch (error) {
    dispatch(tourError(String(error)))
  }
}

