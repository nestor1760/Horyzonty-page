import { ReactNode } from "react";

export interface IWrapperProps {
  children: ReactNode;
  zIndex?: string,
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
  wrap?: string,
}

export interface IHeaderProps {
  children: ReactNode,
  display?: string,
  align?: string,
  justify?: string,
  width?: string,
  margin?: string,
  padding?: string,
}

export interface INavItemProps {
  children: ReactNode,
  width?: string,
  margin?: string,
  color?: string,
  textTransform?: string,
  fontWeight?: string,
  fontSize?: string,
  id?: string,
}