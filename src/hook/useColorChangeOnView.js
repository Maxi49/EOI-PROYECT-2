import { useEffect, useRef, useState } from "react";

export const useColorChangeOnView = (targetColor) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsVisible(entry.isIntersecting));
    }, { threshold: 0.08 });

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    document.body.style.transition = 'background-color 0.5s ease';

    if (isVisible) {
      document.body.style.backgroundColor = targetColor;
    }

    // Intervalo para verificar y corregir el color de fondo
    const intervalId = setInterval(() => {
      if (isVisible && document.body.style.backgroundColor !== targetColor) {
        document.body.style.backgroundColor = targetColor;
      }
    }, 500); // Verifica cada segundo

    return () => {
      clearInterval(intervalId); // Limpia el intervalo cuando el componente se desmonta
    };
  }, [isVisible, targetColor]);

  return ref;
};
