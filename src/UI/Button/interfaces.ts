import { ReactNode } from "react";

export interface IButtonProps {
  children: ReactNode;
  padding?: string;
  margin?: string;
  width?: string,
  height?: string,
  background?: string,
  color?: string,
  radius?: string,
  transform?: string,
  size?: string,
  onClick?: () => void;
}
