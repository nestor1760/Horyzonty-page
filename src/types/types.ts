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

//for dataNightStay.ts
export interface IDataNightStayItem {
  id: number,
  title: string,
  description: string,
}

//for NightItem.tsx
export interface INightStayProps {
  item: IDataNightStayItem,
  inView: boolean,
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

//for dataGuides.ts
export interface IDataGuides {
  id: number,
  name: string,
  title: string,
  description: string,
  image: string,
}

//for GuidesPart.tsx
export interface IGuideSliderProps {
  data: IDataGuides[]
}

//for GuideItem.tsx
export interface IGuideItemProps {
  guide: IDataGuides,
}

//for dataVouchers.ts
export interface IVoucherItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

//for VoucherItem.tsx
export interface IVoucherItemProps {
  voucher: IVoucherItem;
  index: number;
  inView: boolean;
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
  width?: string,
  height?: string,
  background?: string,
  color?: string,
  radius?: string,
  transform?: string,
  size?: string,
  onClick?: () => void;
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
  inView: boolean;
}

//for dataFood.ts
export interface IFoodItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

//for FoodItem.tsx
export interface IFoodItemProps {
  food: IFoodItem;
  index: number;
  inView: boolean;
}


//for dataGalleryItem 
export interface IGalleryImages {
  id: number,
  title: string,
  image: string,
}

export interface IGalleryItem {
  id: number,
  name: string,
  image: string,
  date: string,
  images: IGalleryImages[];
}

//for gallerySlider.tsx
export interface IGallerySliderProps {
  item: IGalleryItem,
}

//for GalleryItem.tsx
export interface IGalleryProps {
  item: IGalleryItem,
  index: number,
  inView: boolean,
  setSelectedIndex: (index: number) => void,
}

//for GalleryNavigation.tsx
export interface IGalleryNavProps {
  item: IGalleryItem,
  index: number,
  setSelectedIndex: (index: number) => void,
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

export interface ITestState {
  test: boolean,
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

//for Footer.tsx
export type FooterProps = {
  id: string,
}

//for NightStayPart.tsx
export type TImage = {
  top?: string,
  right?: string,
  left?: string,
  bottom?: string,
  margin?: string,
  inView: boolean,
}