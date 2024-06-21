import * as React from "react";

interface IconProps {
  size?: "md" | "xs";
}

function IconClone({ size = "md" }: IconProps) {
  return (
    <>
      {size === "md" ? (
        <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19 3H9a2 2 0 00-1.996 1.867H8.21A.8.8 0 019 4.2h10a.8.8 0 01.8.8v10a.8.8 0 01-.667.789v1.207A2 2 0 0021 15V5a2 2 0 00-2-2z"
            fill="currentColor"
          />
          <path
            d="M15 20.4H5A1.4 1.4 0 013.6 19V9A1.4 1.4 0 015 7.6h10A1.4 1.4 0 0116.4 9v10a1.4 1.4 0 01-1.4 1.4z"
            stroke="currentColor"
            strokeWidth={1.2}
          />
        </svg>
      ) : (
        ""
      )}
      {size === "xs" ? (
        <svg width={10} height={10} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 1L5 5m0 0L1 9m4-4l4 4M5 5L1 1" stroke="currentColor" strokeWidth={1.2} />
        </svg>
      ) : (
        ""
      )}
    </>
  );
}

export default IconClone;
