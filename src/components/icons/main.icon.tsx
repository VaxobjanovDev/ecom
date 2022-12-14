import { IconType } from "../../types/utility.types";

export const MainIcon: IconType = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={"25" || width}
      height={"25" || height}
      fill={"#fff"}
      version="1"
      viewBox="0 0 96 96"
    >
      <path
        d="M410 849c-35-22-220-180-253-217-31-34-35-83-22-267 13-190 18-204 79-249 22-17 42-21 99-21h72l5 93c5 87 7 95 33 118 36 31 78 31 114 0 26-23 28-31 33-118l5-93h72c57 0 77 4 99 21 62 46 66 59 79 251s9 232-27 270c-40 44-212 190-248 212-44 27-95 27-140 0zm167-96c154-129 182-156 191-181 10-30-9-345-22-375-11-23-57-47-91-47-24 0-25 2-25 60 0 106-61 180-150 180s-150-74-150-180c0-58-1-60-25-60-34 0-80 24-91 47-13 30-32 345-22 374 5 15 63 72 134 133 152 129 155 130 251 49z"
        transform="matrix(.1 0 0 -.1 0 96)"
      ></path>
    </svg>
  )
};