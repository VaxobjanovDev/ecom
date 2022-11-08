import {IconType} from "../../types/utility.types";

export const SearchIcon: IconType = ({width, height, fill,}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={"25" || width}
    height={"25" || height}
    fill={"#fff" || fill}
    version="1"
    viewBox="0 0 50 50"
  >
    <path
      d="M165 411c-11-5-33-23-50-41-26-27-30-39-30-85 0-49 4-58 36-91 44-44 100-55 150-30l33 16 53-52c29-28 56-49 60-45s-17 31-45 60l-52 53 16 33c39 79-19 179-107 187-24 2-53 0-64-5zm106-16c63-33 86-112 49-172-50-82-160-82-210 0-36 59-18 130 43 167 39 24 78 25 118 5z"
      transform="matrix(.1 0 0 -.1 0 50)"
    ></path>
  </svg>
);