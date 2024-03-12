import { AppDispatch } from "../store"
import { nightError, nightLoading, nightSuccess } from "../store/nightStaySlice"
import { IDataNightStayItem } from "../types/types"


export const nightStayDataRest = (data: IDataNightStayItem[]) => async (dispatch: AppDispatch) => {
  dispatch(nightLoading())
  try {
    dispatch(nightSuccess(data))
  } catch (error) {
    dispatch(nightError(String(error)))
  }
}

