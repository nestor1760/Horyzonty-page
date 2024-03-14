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
  item: IDataNightStayItem
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
}

//for dataGalleryItem 
export interface IGalleryItem {
  id: number,
  name: string,
  image: string,
  date: string,
}

//for GalleryItem.tsx
export interface IGalleryProps {
  item: IGalleryItem,
  index: number,
}

//for GalleryNavigation.tsx
export interface IGalleryNavProps {
  item: IGalleryItem,
}
