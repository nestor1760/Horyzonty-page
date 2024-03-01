import { ITourItem } from "../types/types";

export const dataTours:ITourItem[] = [
  {
    id: 1,
    title: 'Podbój Rysy w 1 dzień',
    description: `Wyruszając wcześnie rano z wygodnego punktu startowego, nasi doświadczeni przewodnicy zapewnią Ci bezpieczną i ekscytującą wędrówkę na szczyt. Trasa prowadzi przez malownicze lasy, wodospady i karpackie łąki, obdarowując niezapomnianymi chwilami z natury. Na szczycie Rysy będziesz pod wrażeniem zapierającego dech w piersiach panoramicznego widoku obejmującego otaczające górskie grzbiety. Podróż na Rysy to nie tylko ekscytująca przygoda, ale także możliwość podziwiania piękna polskich Tatr. Dołącz do naszej wycieczki i zgromadź niezapomniane wspomnienia o najwyższym dziele przyrody w Polsce`,
    distance: 9,
    duration: 1,
    people: 10,
    image: '/media/tour1day.png',
  },
  {
    id: 2,
    title: 'Trzydniowa wycieczka na Rysy',
    description: 'Zapraszamy na trzydniową wycieczkę na Rysy - ekscytującą podróż po górskich szczytach Tatr! Pierwszy dzień: Poranny wyjazd do Zakopanego, naszego punktu startowego. Rozpoczynamy naszą przygodę. Drugi dzień: Wysokogórski trekking do Schroniska pod Rysami. Trzeci dzień: Wspinaczka na szczyt Rysy. Niezapomniane emocje i panoramiczne widoki. Dołącz do naszej wycieczki i zdobądź niezapomniane wrażenia w objęciach karpackich szczytów!',
    distance: 22,
    duration: 3,
    people: 10,
    image: '/media/tour3days.png',
  },
]