import { IDataNightStayItem } from "../data/interfaces"
import { AppDispatch } from "../store"
import { nightError, nightLoading, nightSuccess } from "../store/nightStaySlice"


export const nightStayDataRest = (data: IDataNightStayItem[]) => async (dispatch: AppDispatch) => {
  dispatch(nightLoading())
  try {
    dispatch(nightSuccess(data))
  } catch (error) {
    dispatch(nightError(String(error)))
  }
}

