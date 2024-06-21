import * as React from "react";

interface IconProps {
  size?: "md" | "sm";
}

function IconSleep({ size = "md" }: IconProps) {
  return (
    <>
      {size === "md" ? (
        <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="currentColor"
            d="M16 20v1H8v-1zM12.385 13.678c-.056 0-.096-.01-.119-.028-.019-.019-.028-.056-.028-.112v-.252c0-.06.007-.105.021-.133a.93.93 0 01.098-.154l2.387-3.521c.037-.06.019-.091-.056-.091h-2.142c-.047 0-.08-.01-.098-.028a.208.208 0 01-.021-.105v-.651c0-.08.033-.119.098-.119h3.871c.07 0 .105.037.105.112v.287c0 .042-.007.08-.021.112a.934.934 0 01-.077.119l-2.443 3.57c-.023.033-.026.056-.007.07.019.01.042.014.07.014h2.324c.084 0 .126.035.126.105v.679a.123.123 0 01-.035.091c-.019.023-.051.035-.098.035h-3.955zM17.495 8.678c-.072 0-.123-.012-.153-.036-.024-.024-.036-.072-.036-.144v-.324c0-.078.009-.135.027-.171.018-.042.06-.108.126-.198l3.069-4.527c.048-.078.024-.117-.072-.117h-2.754c-.06 0-.102-.012-.126-.036a.268.268 0 01-.027-.135v-.837c0-.102.042-.153.126-.153h4.977c.09 0 .135.048.135.144v.369a.363.363 0 01-.027.144 1.21 1.21 0 01-.1.153L19.52 7.4c-.03.042-.033.072-.01.09a.2.2 0 00.09.018h2.989c.108 0 .162.045.162.135v.873a.158.158 0 01-.045.117c-.024.03-.066.045-.126.045h-5.085z"
          />
          <path d="M16 4H4a1 1 0 00-1 1v12a1 1 0 001 1h16a1 1 0 001-1v-6h-1.2v5.8H4.2V5.2H16V4z" fill="currentColor" />
        </svg>
      ) : (
        ""
      )}
      {size === "sm" ? (
        <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="currentColor"
            d="M13.333 16.666v.833H6.666v-.833zM10.321 11.398c-.047 0-.08-.007-.1-.023-.015-.015-.023-.047-.023-.093v-.21c0-.05.006-.088.018-.111a.775.775 0 01.082-.128l1.989-2.935c.03-.05.015-.075-.047-.075h-1.785c-.039 0-.066-.008-.082-.024a.173.173 0 01-.017-.087v-.543c0-.066.027-.099.082-.099h3.226c.058 0 .087.031.087.093v.24a.234.234 0 01-.018.093.79.79 0 01-.064.1l-2.036 2.974c-.019.027-.02.047-.005.058a.13.13 0 00.058.012h1.937c.07 0 .105.03.105.088v.565c0 .032-.01.057-.03.076-.015.02-.042.03-.081.03H10.32zM14.58 7.232c-.06 0-.103-.01-.128-.03-.02-.02-.03-.06-.03-.12v-.27c0-.065.007-.113.022-.143a.995.995 0 01.105-.165l2.558-3.772c.04-.065.02-.098-.06-.098h-2.295c-.05 0-.085-.01-.105-.03a.223.223 0 01-.023-.112v-.698c0-.085.035-.127.105-.127h4.148c.075 0 .112.04.112.12v.307a.302.302 0 01-.022.12c-.015.03-.043.073-.083.128l-2.617 3.825c-.025.035-.028.06-.008.075.02.01.045.015.075.015h2.49c.09 0 .135.037.135.112v.728c0 .04-.012.072-.037.097-.02.025-.055.038-.105.038h-4.238z"
          />
          <path
            d="M13.333 3.333h-10a.833.833 0 00-.833.834v10c0 .46.373.833.833.833h13.334c.46 0 .833-.373.833-.833v-5h-1V14h-13V4.333h9.833v-1z"
            fill="currentColor"
          />
        </svg>
      ) : (
        ""
      )}
    </>
  );
}

export default IconSleep;
