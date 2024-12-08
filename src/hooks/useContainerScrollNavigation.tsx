import { useCallback, useRef, useState } from "react";

type Section = {
  id: string;
  label: string;
};

type UseScrollNavigationProps = {
  sections: Array<Section>;
};

export const useScrollableContainerNavigation = ({
  sections,
}: UseScrollNavigationProps) => {
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
    [sectionRefs]
  );

  const handleScroll = useCallback(
    (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
      console.log("scrolling");
      // const scrollPosition = e.currentTarget.scrollTop;
      const selected = sections.find(({ id }) => {
        const element = sectionRefs.current[id];
        if (!element) return null;

        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + scrollY;
        const elementBottom = elementTop + rect.height;

        // Check if bottom 50% of the section is in the viewport
        const bottomHalfStart = elementTop + rect.height / 2;
        const bottomHalfEnd = elementBottom;

        return (
          bottomHalfStart <= scrollY + e.currentTarget.clientHeight / 2 &&
          bottomHalfEnd >= scrollY + e.currentTarget.clientHeight / 2
        );
      });

      if (selected) {
        setActiveSection(selected.id);
      }
    },
    [sections, sectionRefs]
  );

  return {
    sectionRefs,
    activeSection,
    handleClick,
    handleScroll,
  };
};
