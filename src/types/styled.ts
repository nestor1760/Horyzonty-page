import { ReactNode } from "react";

export interface IWrapperProps {
  children: ReactNode
}

export interface IContainerProps {
  children: ReactNode,
  display?: string,
  align?: string,
  justify?: string,
  direction?: string,
  width?: string,
  margin?: string,
  padding?: string,
}
