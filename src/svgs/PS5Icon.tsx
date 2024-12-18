import * as React from "react";
import { SVGProps } from "react";

const PS5Icon = ({
  color = "currentColor",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={27}
    viewBox="0 0 28 27"
    fill="none"
    {...props}>
    <path
      fill={color}
      d="M13.834 12.609c-1.434-6-2.043-10.087-1.87-12.13V.303L11.921.26c0-.044-.043-.044-.043-.087V.13s-.044 0-.044-.043c-.043 0-.043-.044-.087-.044-.043 0-.043 0-.087-.043h-.26c-.043 0-.043 0-.086.043-.044 0-.044.044-.088.044h-.043c-1 1-1.696.956-1.913.913-.217-.565-.826-1-1.522-1h-2.74c-.652 0-1.217.391-1.522.913C2.573.87 1.921.565 1.4.087 1.356.043 1.27 0 1.14 0h-.087C.965 0 .878 0 .79.087a.701.701 0 0 0-.13.391c.043.87.086 1.652.13 2.348.348 7.913-.218 15.391-.783 22.609-.043.391.087.782.391 1.087.261.304.653.478 1.044.478h2.87c.39 0 .782-.174 1.043-.478.217-.218.348-.522.348-.826l2.26.043a1.63 1.63 0 0 0 1.566 1.217h3.522c.782 0 1.434-.652 1.434-1.434v-7.174c.044-1.913-.217-3.87-.652-5.74ZM3.313 1.783v8.521c-.087-.217-.13-.434-.218-.608-.739-2.13-1.13-3.348-1.391-6.913-.044-.522-.087-1-.087-1.479.478.261 1 .392 1.696.479Zm1.39 24.174c-.086.13-.26.173-.39.173h-2.87a.55.55 0 0 1-.391-.174.623.623 0 0 1-.174-.434c.434-5.478.87-11.13.913-16.957.13.435.304.913.478 1.392.391 1.217.913 2.739 1.565 5.13.218.87.392 1.74.435 2.652l.609 7.826a.607.607 0 0 1-.174.391Zm2.088-10.435c0 .26-.218.434-.435.434-.26 0-.435-.173-.435-.434v-1.609c0-.217.174-.435.435-.435.217 0 .435.218.435.435v1.609Zm.695-3.566c0 .261-.173.435-.434.435H5.617c-.261 0-.435-.174-.435-.434v-1.914c0-.217.174-.434.435-.434h1.435c.26 0 .434.217.434.434v1.914Zm0-4.217c0 .261-.173.435-.434.435H5.617c-.261 0-.435-.174-.435-.435V5.261c0-.218.174-.435.435-.435h1.435c.26 0 .434.217.434.435v2.478Zm1.957-5.782h.087c.348 0 .783-.087 1.304-.392L9.443 8.174V1.957Zm4.217 23.608c0 .305-.26.565-.565.565H9.573a.78.78 0 0 1-.782-.782v-3.87c0-4.043.435-8.087 1.26-12.043l1.218-5.522c.26 2.217.826 5.174 1.74 8.913a23.44 23.44 0 0 1 .651 5.522v7.217Z"
    />
    <path
      fill={color}
      d="M12.269 18.478v5.13a.436.436 0 0 1-.435.435h-1.435a.436.436 0 0 1-.435-.434v-5.13c0-.218.174-.436.435-.436h1.435c.26 0 .435.218.435.435Zm15.391 2.783c-.391-2.218-1.435-4.696-2.782-4.913h-6.783c-1.391.217-2.435 2.695-2.826 4.913-.435 2.652-.13 5.434 1.391 5.695 1 .174 2.087-1.043 2.74-3.087a1.12 1.12 0 0 0 1.086-.826H22.4c.13.479.566.826 1.087.826.652 1.957 1.565 3.13 2.565 3.13h.218c1.478-.303 1.826-3.086 1.391-5.738Zm-1.522 4.87c-.478.086-1.26-.87-1.826-2.61a1.11 1.11 0 0 0 .348-.826c0-.652-.522-1.173-1.13-1.173-.435 0-.826.26-1.044.608h-2.043c-.174-.348-.566-.608-1.044-.608-.652 0-1.13.521-1.13 1.174 0 .347.13.608.348.826-.566 1.695-1.348 2.652-1.783 2.565-.565-.087-1.13-1.957-.652-4.696.435-2.565 1.478-4.087 2.087-4.217h6.478c.609.087 1.652 1.608 2.087 4.217.435 2.74-.13 4.609-.696 4.74Z"
    />
    <path
      fill={color}
      d="M20.53 18.304h1.826c.26 0 .435-.173.435-.434s-.174-.435-.435-.435H20.53c-.261 0-.435.174-.435.435 0 .26.218.434.435.434Zm1.826 2.479H20.53c-.261 0-.435.174-.435.434 0 .261.174.435.435.435h1.826c.26 0 .435-.174.435-.435 0-.26-.174-.434-.435-.434Zm-2.826-1.435h-.609v-.609c0-.26-.174-.435-.435-.435-.26 0-.434.174-.434.435v.609h-.609c-.26 0-.435.174-.435.435 0 .26.174.434.435.434h.609v.61c0 .26.174.434.434.434.261 0 .435-.174.435-.435v-.609h.609c.26 0 .435-.173.435-.434a.436.436 0 0 0-.435-.435Zm4.348-.565h.391c.26 0 .435-.174.435-.435s-.174-.435-.435-.435h-.391c-.261 0-.435.174-.435.435 0 .26.174.435.435.435ZM24.269 20h-.391c-.261 0-.435.174-.435.435 0 .26.174.435.435.435h.391c.26 0 .435-.174.435-.435a.436.436 0 0 0-.435-.435Zm-.826-.783c0-.26-.174-.434-.435-.434-.26 0-.435.174-.435.434v.348c0 .261.174.435.435.435s.435-.174.435-.435v-.348Zm1.652-.434c-.26 0-.435.174-.435.434v.348c0 .261.174.435.435.435s.435-.174.435-.435v-.391c0-.217-.174-.391-.435-.391Z"
    />
  </svg>
);
export default PS5Icon;
