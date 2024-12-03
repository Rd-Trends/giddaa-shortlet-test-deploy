"use client";

import { cn } from "@/utils/classname";
import Container from "../layouts/Container";

// Define section type
type Section = {
  id: string;
  label: string;
};

type ScrollNavigationProps = {
  activeSection: string;
  handleClick: (id: string) => void;
  sections: Array<Section>;
};

const ScrollNavigation = ({
  activeSection,
  handleClick,
  sections,
}: ScrollNavigationProps) => {
  return (
    <nav>
      <Container className="shadow-[inset_0_-1px_0_0_#F0F0F0] h-10 ">
        <ul className=" flex items-end px-0 h-full overflow-x-auto gap-6 ">
          {sections.map((section) => (
            <li key={section.id} className=" h-10 flex items-end ">
              <button
                key={section.id}
                onClick={() => handleClick(section.id)}
                className={cn(
                  "text-body-sm border-b-2 pb-0.5 pt-2 whitespace-nowrap  ",
                  {
                    "text-primary font-bold border-primary":
                      activeSection === section.id,
                    "text-charcoal-grey font-semibold border-transparent":
                      activeSection !== section.id,
                  }
                )}>
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
};

export default ScrollNavigation;
