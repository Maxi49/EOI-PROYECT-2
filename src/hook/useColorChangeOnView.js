import { useEffect, useRef, useState } from "react";

export const useColorChangeOnView = (targetColor) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;

    // Crea una nueva instancia de IntersectionObserver dentro del useEffect
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
  }, []); // No hay dependencias, por lo que el efecto sólo se ejecuta una vez

  useEffect(() => {
    document.body.style.transition = 'background-color 0.5s ease';

    // Sólo cambia el color de fondo si es diferente del color actual
    if (isVisible && document.body.style.backgroundColor !== targetColor) {
      document.body.style.backgroundColor = targetColor;
    }
  }, [isVisible, targetColor]);

  return ref;
};

/*
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

    // Sólo cambia el color de fondo si es diferente del color actual
    if (isVisible && document.body.style.backgroundColor !== targetColor) {
      document.body.style.backgroundColor = targetColor;
    }
  }, [isVisible, targetColor]);

  return ref;
};*/