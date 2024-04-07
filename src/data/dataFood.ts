import { IFoodItem } from "./interfaces";

export const dataFood:IFoodItem[] = [
  {
    id: 1,
    image: 'media/breakfast.png',
    title: 'Śniadanie',
    description: 'Omlet górski z warzywami. Świeże owoce i górski miód. Pachnąca kawa lub gorąca herbata.',
  },
  {
    id: 2,
    image: 'media/lunch.png',
    title: 'Obiad',
    description: 'Kasza górska z warzywami. Zupa górska. Racuchy ziemniaczane. Sałatka z świeżych warzyw i ziołami',
  },
  {
    id: 3,
    image: 'media/dinner.png',
    title: 'Kolacja',
    description: 'Pieczeń z mięsa wieprzowego duszona z cebulą i czosnkiem. Kasza jaglana mieszana z duszonymi warzywami. Mieszanka świeżych warzyw',
  },
]
