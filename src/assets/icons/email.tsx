<<<<<<< HEAD
import { IIcons } from "../../shared/types";

const Email = ({ size }: IIcons) => {
=======
const Email = ({ size }: { size: number; color?: string }) => {
>>>>>>> 1b8f3a6d5b0fb276c101df424bdef1adb5144d51
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="20" fill="#DB4444" />
      <path
        d="M10 13L20 20L30 13M10 27H30V13H10V27Z"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Email;
