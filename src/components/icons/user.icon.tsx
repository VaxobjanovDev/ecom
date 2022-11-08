import { IconType } from "../../types/utility.types";

export const UserIcon: IconType = ({width,height, fill, }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 27 29"
    fill={fill ?? "white"}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_525_2485)">
      <path
        d="M19.5 9C19.5 14 16.5 18 13.5 18C10.5 18 7.5 14 7.5 9C7.5 4 9.5 1 13.5 1C17.5 1 19.5 4 19.5 9ZM1.5 28H25.5C25.5 19 19.5 18 13.5 18C7.5 18 1.5 19 1.5 28Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_525_2485">
        <rect width="26" height="29" transform="translate(0.5)" />
      </clipPath>
    </defs>
  </svg>
);