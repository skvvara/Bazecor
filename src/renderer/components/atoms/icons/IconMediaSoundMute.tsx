import * as React from "react";

interface IconProps {
  size?: "md" | "sm";
}

function IconMediaSoundMute({ size = "md" }: IconProps) {
  return (
    <>
      {size === "md" ? (
        <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.98 5.261l-3.302 3.3H2.891A.89.89 0 002 9.453v5.344c0 .492.399.89.89.89h3.788l3.302 3.302c.557.557 1.52.165 1.52-.63V5.89c0-.797-.963-1.187-1.52-.63zm9.151 6.863l1.694-1.693a.6.6 0 000-.847l-.847-.847a.599.599 0 00-.847 0l-1.694 1.694-1.693-1.694a.599.599 0 00-.847 0l-.847.847a.6.6 0 000 .847l1.694 1.693-1.694 1.694a.599.599 0 000 .846l.847.847a.599.599 0 00.847 0l1.693-1.693 1.694 1.694a.599.599 0 00.847 0l.847-.847a.599.599 0 000-.847l-1.694-1.694z"
            fill="currentColor"
          />
        </svg>
      ) : (
        ""
      )}
      {size === "sm" ? (
        <svg width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.316 4.384l-2.752 2.75H2.408a.742.742 0 00-.742.743v4.453c0 .41.332.742.742.742h3.156l2.752 2.751c.465.465 1.267.138 1.267-.525V4.908c0-.663-.803-.988-1.267-.524zm7.626 5.72l1.412-1.412a.5.5 0 000-.706l-.706-.705a.5.5 0 00-.706 0l-1.411 1.411-1.412-1.411a.5.5 0 00-.705 0l-.706.705a.499.499 0 000 .706l1.411 1.412-1.41 1.41a.499.499 0 000 .706l.705.706a.5.5 0 00.706 0l1.41-1.411 1.412 1.411c.195.195.511.195.706 0l.706-.705a.5.5 0 000-.706l-1.412-1.412z"
            fill="currentColor"
          />
        </svg>
      ) : (
        ""
      )}
    </>
  );
}

export default IconMediaSoundMute;
