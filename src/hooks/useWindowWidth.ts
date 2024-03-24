import { useEffect, useState } from "react";

interface IWindowWidth {
  windowWidth: number;
}

export const useWindowWidth = (): IWindowWidth => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  return {windowWidth}
}