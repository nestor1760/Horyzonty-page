import { IVoucherItem } from "../../../../data/interfaces";

export interface IVoucherItemProps {
  voucher: IVoucherItem;
  index: number;
  inView: boolean;
}