import React from "react";

interface Props {
  height: string;
}

const HeroArrow: React.FC<Props> = ({ height }) => {
  return (
    <div className="mt-10">
      <svg width="8" height={height} viewBox="0 0 8 65" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3.64645 64.3536C3.84171 64.5488 4.15829 64.5488 4.35355 64.3536L7.53553 61.1716C7.7308 60.9763 7.7308 60.6597 7.53553 60.4645C7.34027 60.2692 7.02369 60.2692 6.82843 60.4645L4 63.2929L1.17157 60.4645C0.976311 60.2692 0.659728 60.2692 0.464466 60.4645C0.269204 60.6597 0.269204 60.9763 0.464466 61.1716L3.64645 64.3536ZM3.5 0V64H4.5V0H3.5Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default HeroArrow;
