export interface IOptionItem {
  value: string;
  name: string;
}

export interface ISelectProps {
  id?: string,
  options: IOptionItem[],
  defaultValue: string,
}