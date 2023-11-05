import { useEffect, useRef, useState } from "react";

export const useColorChangeOnView = (targetColor) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsVisible(entry.isIntersecting));
    }, { threshold: 0.05 });

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
    document.body.style.transition = 'background-color 1s ease';

    if (isVisible) {
      document.body.style.backgroundColor = targetColor;
    }
  }, [isVisible, targetColor]);

  return ref;
};
