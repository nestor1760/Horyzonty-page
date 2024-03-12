import { AppDispatch } from "../store"
import { guideError, guideLoading, guideSuccess } from "../store/guideSlice"
import { IDataGuides } from "../types/types"


export const guideDataRest = (data: IDataGuides[]) => async (dispatch: AppDispatch) => {
  dispatch(guideLoading())
  try {
    dispatch(guideSuccess(data))
  } catch (error) {
    dispatch(guideError(String(error)))
  }
}

