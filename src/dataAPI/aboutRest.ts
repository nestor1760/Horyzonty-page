import { IAboutItem } from "../data/interfaces"
import { AppDispatch } from "../store"
import { aboutError, aboutLoading, aboutSuccess } from "../store/aboutSlice"

export const aboutDataRest = (data: IAboutItem[]) => async (dispatch: AppDispatch) => {
  dispatch(aboutLoading())
  try {
    dispatch(aboutSuccess(data))
  } catch (error) {
    dispatch(aboutError(String(error)))
  }
}

