import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

type Section = {
  id: string;
  label: string;
};

type UseWindowScrollNavigationProps = {
  sections: Array<Section>;
  offset?: number;
  queryKey?: string;
};

export const useWindowScrollNavigation = ({
  sections,
  offset = 120,
  queryKey = "Tab",
}: UseWindowScrollNavigationProps) => {
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const searchParams = useSearchParams();
  const queryValue = searchParams.get(queryKey);

  // Initialize active section from URL or first section
  const [activeSection, setActiveSection] = useState<string>(
    queryValue || sections[0].id
  );

  // Smooth scroll to section
  const handleClick = useCallback(
    (id: string) => {
      const element = sectionRefs.current[id];
      if (element) {
        window.scrollTo({
          top: element.offsetTop - offset,
          behavior: "smooth",
        });
      }
    },
    [sectionRefs, offset]
  );

  useEffect(() => {
    const checkActiveSection = () => {
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // Find the section that has its bottom 50% in the viewport
      const activeId = sections.find((section) => {
        const element = sectionRefs.current[section.id];
        if (!element) return false;

        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + scrollY;
        const elementBottom = elementTop + rect.height;

        // Check if bottom 50% of the section is in the viewport
        const bottomHalfStart = elementTop + rect.height / 2;
        const bottomHalfEnd = elementBottom;

        return (
          bottomHalfStart <= scrollY + viewportHeight &&
          bottomHalfEnd >= scrollY + viewportHeight / 2
        );
      })?.id;

      if (activeId) {
        setActiveSection(activeId);
      }
    };

    window.addEventListener("scroll", checkActiveSection);
    return () => window.removeEventListener("scroll", checkActiveSection);
  }, [sections, offset]);

  return {
    sectionRefs,
    activeSection,
    handleClick,
  };
};
