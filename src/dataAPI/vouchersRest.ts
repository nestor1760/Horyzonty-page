import { IVoucherItem } from "../data/interfaces"
import { AppDispatch } from "../store"
import { vouchersError, vouchersLoading, vouchersSuccess } from "../store/vouchersSlice"


export const vouchersDataRest = (data: IVoucherItem[]) => async (dispatch: AppDispatch) => {
  dispatch(vouchersLoading())
  try {
    dispatch(vouchersSuccess(data))
  } catch (error) {
    dispatch(vouchersError(String(error)))
  }
}

