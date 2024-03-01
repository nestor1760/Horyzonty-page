import { ReactNode } from "react";

//for Wrapper.tsx
export interface IWrapperProps {
  children: ReactNode;
}
//for Container.tsx
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
//for dataIntro.ts
export interface IDataIntroItem {
  id: number;
  image: string;
  title: string;
}

// for IntroImageSlider.tsx
export interface ISliderProps {
  data: IDataIntroItem[],
}

//for dataAbout.ts
export interface IAboutItem {
  id: number;
  data: number;
  title: string;
}

//for Button.jsx
export interface IButtonProps {
  children: ReactNode;
  padding?: string;
  margin?: string;
}

//for dataTours.ts
export interface ITourItem {
  id: number;
  title: string;
  description: string;
  image: string;
  duration: number;
  distance: number;
  people: number;
}

//for TourItem.tsx
export interface ITourItemProps {
  tour: ITourItem;
  index: number;
}