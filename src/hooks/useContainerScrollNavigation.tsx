import { useCallback, useEffect, useRef, useState } from "react";

type Section = {
  id: string;
  label: string;
};

type UseScrollNavigationProps = {
  sections: Array<Section>;
  offset?: number;
};

export const useScrollableContainerNavigation = ({
  sections,
  offset = 120,
}: UseScrollNavigationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Smooth scroll to section within the container
  const handleClick = useCallback(
    (id: string) => {
      const element = sectionRefs.current[id];
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    },
    [sectionRefs, offset, containerRef]
  );

  useEffect(() => {
    const checkActiveSection = () => {
      if (!containerRef.current) return; // Check if container ref exists

      const container = containerRef.current;
      const containerHeight = container.clientHeight;
      const scrollY = container.scrollTop;

      // Find the section that has its bottom 50% in the viewport
      const activeId = sections.find((section) => {
        const element = container.querySelector(`#${section.id}`);

        console.log(element);

        if (!element) return false;

        const rect = element.getBoundingClientRect();
        const elementTop = rect.top;
        const elementBottom = elementTop + rect.height;

        // Check if bottom 50% of the section is in the container's viewport
        const bottomHalfStart = elementTop + rect.height / 2;
        const bottomHalfEnd = elementBottom;

        return (
          bottomHalfStart >= scrollY &&
          bottomHalfEnd <= scrollY + containerHeight / 2
        );
      })?.id;

      if (activeId) {
        setActiveSection(activeId);
      }
    };

    console.log(containerRef.current);

    containerRef.current?.addEventListener("scroll", checkActiveSection);
    return () =>
      containerRef.current?.removeEventListener("scroll", checkActiveSection); // Cleanup
  }, [sections, offset, containerRef]);

  return {
    containerRef,
    sectionRefs,
    activeSection,
    handleClick,
  };
};
