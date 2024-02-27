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
  height?: string,
  margin?: string,
  padding?: string,
  background?: string,
}

export interface IDataIntroItems {
  id: number;
  image: string;
  title: string;
}