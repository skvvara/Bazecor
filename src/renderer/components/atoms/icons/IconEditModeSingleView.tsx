import * as React from "react";

interface IconProps {
  size?: "md" | "sm";
}

function IconEditModeSingleView({ size = "md" }: IconProps) {
  return (
    <>
      {size === "md" ? (
        <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#prefix__clip0_2181_164829)">
            <path
              d="M.6 6V1C.6.779.78.6 1 .6h5.2c.22 0 .4.179.4.4v5a.4.4 0 01-.4.4H1A.4.4 0 01.6 6zm8.8 0V1c0-.221.18-.4.4-.4H15c.22 0 .4.179.4.4v5a.4.4 0 01-.4.4H9.8a.4.4 0 01-.4-.4zm0 9v-5c0-.221.18-.4.4-.4H15c.22 0 .4.179.4.4v5a.4.4 0 01-.4.4H9.8a.4.4 0 01-.4-.4zm-2.8-5v5a.4.4 0 01-.4.4H1a.4.4 0 01-.4-.4v-5c0-.221.18-.4.4-.4h5.2c.22 0 .4.179.4.4z"
              stroke="currentColor"
              strokeWidth={1.2}
            />
          </g>
          <defs>
            <clipPath id="prefix__clip0_2181_164829">
              <path fill="currentColor" d="M0 0h16v16H0z" />
            </clipPath>
          </defs>
        </svg>
      ) : (
        ""
      )}
      {size === "sm" ? (
        <svg width={14} height={14} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.45 5.5V1.75a.3.3 0 01.3-.3h3.9a.3.3 0 01.3.3V5.5a.3.3 0 01-.3.3h-3.9a.3.3 0 01-.3-.3zm6.6 0V1.75a.3.3 0 01.3-.3h3.9a.3.3 0 01.3.3V5.5a.3.3 0 01-.3.3h-3.9a.3.3 0 01-.3-.3zm0 6.75V8.5a.3.3 0 01.3-.3h3.9a.3.3 0 01.3.3v3.75a.3.3 0 01-.3.3h-3.9a.3.3 0 01-.3-.3zM5.95 8.5v3.75a.3.3 0 01-.3.3h-3.9a.3.3 0 01-.3-.3V8.5a.3.3 0 01.3-.3h3.9a.3.3 0 01.3.3z"
            stroke="currentColor"
            strokeWidth={0.9}
          />
        </svg>
      ) : (
        ""
      )}
    </>
  );
}

export default IconEditModeSingleView;
