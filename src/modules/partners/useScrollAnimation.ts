import { useEffect, RefObject } from "react";

export const useScrollAnimation = (scrollRef: RefObject<HTMLDivElement>, speed: number = 1) => {
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAnimationFrame: number;

    if (scrollContainer) {
      // Duplicate content to create an infinite scrolling illusion
      const scrollContent = scrollContainer.innerHTML;
      scrollContainer.innerHTML += scrollContent;

      const scrollAnimation = () => {
        if (scrollContainer) {
          // Scroll horizontally by the specified speed
          scrollContainer.scrollLeft += speed;

          // If we've scrolled past the original content length, reset to the middle to create seamless loop
          if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
            scrollContainer.scrollLeft = 0;
          }

          // Keep the animation going
          scrollAnimationFrame = requestAnimationFrame(scrollAnimation);
        }
      };

      // Start the animation
      scrollAnimationFrame = requestAnimationFrame(scrollAnimation);
    }

    // Cleanup the animation when the component unmounts
    return () => cancelAnimationFrame(scrollAnimationFrame);
  }, [scrollRef, speed]);
};