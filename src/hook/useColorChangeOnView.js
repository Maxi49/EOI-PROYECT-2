import { useEffect, useRef, useState } from "react";

export const useColorChangeOnView = (initialColor, targetColor) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsVisible(entry.isIntersecting));
    }, { threshold: 0.4 });

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
    } else {
      document.body.style.backgroundColor = initialColor;
    }
  }, [isVisible, initialColor, targetColor]);

  return ref;
};