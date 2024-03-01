import { useEffect, useState } from "react"

export const useEvenItem = (index: number) => {
  const [isEven, setIsEven] = useState<boolean | undefined>(undefined)

    useEffect(() => {
      (index % 2 === 0) ? setIsEven(true) : setIsEven(false)
    }, [index])

  return isEven 
}