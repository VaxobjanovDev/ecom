import {IconType} from "../../types/utility.types";

export const RemoveIcon: IconType = ({width, height}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || "25"}
    height={height || "25"}
    fill={"#fff"}
    version="1"
    viewBox="0 0 50 50"
  >
    <path
      d="M187 474c-4-4-7-16-7-26 0-15-8-18-55-18-30 0-55-4-55-10 0-5 4-10 10-10s11-76 12-192l3-193h310l3 193c1 116 6 192 12 192s10 5 10 10c0 6-24 10-54 10-49 0-55 2-58 23-3 20-9 22-63 25-34 2-64 0-68-4zm113-29c0-11-12-15-50-15s-50 4-50 15 12 15 50 15 50-4 50-15zm90-220V40H110v370h280V225z"
      transform="matrix(.1 0 0 -.1 0 50)"
    ></path>
    <path
      d="M170 293c0-4 14-22 32-40l32-33-34-35c-44-45-30-59 15-15l35 34 35-34c19-18 38-30 42-27 3 4-9 23-27 42l-34 35 34 35c44 45 30 59-15 15l-35-34-33 32c-32 31-47 39-47 25z"
      transform="matrix(.1 0 0 -.1 0 50)"
    ></path>
  </svg>
);