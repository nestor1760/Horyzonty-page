import { IGalleryItem } from "../data/interfaces"
import { AppDispatch } from "../store"
import { errorRequest, loadingRequest, successRequest } from "../store/gallerySlice"

export const galleryDataRest = (data: IGalleryItem[]) => async (dispatch: AppDispatch) => {
  dispatch(loadingRequest())
  try {
    dispatch(successRequest(data))
  } catch (error) {
    dispatch(errorRequest(String(error)))
  }
}

