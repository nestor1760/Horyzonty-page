import { ReactNode } from "react";

//for Wrapper.tsx
export interface IWrapperProps {
  children: ReactNode;
  zIndex?: string,
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

//for ItemHeader.tsx
export interface IHeaderProps {
  children: ReactNode,
  display?: string,
  align?: string,
  justify?: string,
  width?: string,
  margin?: string,
  padding?: string,
}

//for NavigationItem.tsx
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

//for GuidesPart.tsx
export interface IGuideSliderProps {
  data: IDataGuides[]
}

//for Button.jsx
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

//for Modal.tsx
export interface IModal {
  children: ReactNode,
  show: boolean,
}

//for modalSlice.ts
export interface IModalState {
  show: boolean,
  scroll: boolean,
}

export interface IModalGalleryState {
  scroll: boolean,
  showGallery: boolean,
}

export interface ISidebarState {
  sidebar: boolean,
  scroll: boolean,
}

//for Select.tsx
export interface IOptionItem {
  value: string;
  name: string;
}

export interface ISelectProps {
  id?: string,
  options: IOptionItem[],
  defaultValue: string,
}

/////////////////////////

//for dataFood.ts
export interface IFoodItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

//for dataGalleryItem 
export interface IGalleryImages {
  id: number,
  title: string,
  image: string,
}

//for dataVouchers.ts
export interface IVoucherItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

//for dataGuides.ts
export interface IDataGuides {
  id: number,
  name: string,
  title: string,
  description: string,
  image: string,
}

//for dataNightStay.ts
export interface IDataNightStayItem {
  id: number,
  title: string,
  description: string,
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

//for dataAbout.ts
export interface IAboutItem {
  id: number;
  data: number;
  title: string;
}