import React from "react";

interface Props {
  width?: string;
}

const GreenArrow: React.FC<Props> = ({ width = "65" }) => {
  return (
    <svg width={width} height="16" viewBox="0 0 65 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M64.7071 8.70711C65.0976 8.31658 65.0976 7.68342 64.7071 7.29289L58.3431 0.928932C57.9526 0.538408 57.3195 0.538408 56.9289 0.928932C56.5384 1.31946 56.5384 1.95262 56.9289 2.34315L62.5858 8L56.9289 13.6569C56.5384 14.0474 56.5384 14.6805 56.9289 15.0711C57.3195 15.4616 57.9526 15.4616 58.3431 15.0711L64.7071 8.70711ZM0 9L64 9V7L0 7L0 9Z"
        fill="#61C9A8"
      />
    </svg>
  );
};

export default GreenArrow;
