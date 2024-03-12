import { AppDispatch } from "../store"
import { aboutError, aboutLoading, aboutSuccess } from "../store/aboutSlice"
import { IAboutItem } from "../types/types"


export const aboutDataRest = (data: IAboutItem[]) => async (dispatch: AppDispatch) => {
  dispatch(aboutLoading())
  try {
    dispatch(aboutSuccess(data))
  } catch (error) {
    dispatch(aboutError(String(error)))
  }
}

