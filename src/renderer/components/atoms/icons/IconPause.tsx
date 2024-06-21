import * as React from "react";

interface IconProps {
  size?: "xl";
}

function IconPause({ size = "xl" }: IconProps) {
  return (
    <>
      {size === "xl" ? (
        <svg width={16} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width={6} height={24} rx={2} fill="#FE007C" />
          <rect x={10} width={6} height={24} rx={2} fill="#FE007C" />
        </svg>
      ) : (
        ""
      )}
    </>
  );
}

export default IconPause;
