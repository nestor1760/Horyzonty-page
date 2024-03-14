// import { useState, useEffect, useRef, MutableRefObject } from 'react';

// function useLazyRender(): MutableRefObject<HTMLDivElement | null> {
//   const [isVisible, setIsVisible] = useState<boolean>(false);
//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsVisible(entry.isIntersecting);
//       },
//       { threshold: 0.5 }
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, []);

//   return ref;
// }

// export default useLazyRender;