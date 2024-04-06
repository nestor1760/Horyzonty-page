import { IVoucherItem } from "../../../../types/types";

export interface IVoucherItemProps {
  voucher: IVoucherItem;
  index: number;
  inView: boolean;
}