import { AppDispatch } from "../store"
import { errorRequest, loadingRequest, successRequest } from "../store/gallerySlice"
import { IGalleryItem } from "../types/types"


export const galleryDataRest = (data: IGalleryItem[]) => async (dispatch: AppDispatch) => {
  dispatch(loadingRequest())
  try {
    dispatch(successRequest(data))
  } catch (error) {
    dispatch(errorRequest(String(error)))
  }
}

