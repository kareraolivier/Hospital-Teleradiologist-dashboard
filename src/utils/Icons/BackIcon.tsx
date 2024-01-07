import React from "react";

export const BackIcon = ({
  onClick,
}: {
  onClick: () => void;
}): React.JSX.Element => {
  return (
    <div>
      <svg
        fill="#000000"
        version="1.1"
        baseProfile="tiny"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        width="30px"
        height="20px"
        viewBox="0 0 42 42"
        onClick={onClick}
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0" />

        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <g id="SVGRepo_iconCarrier">
          <polygon
            fillRule="evenodd"
            points="27.066,1 7,21.068 26.568,40.637 31.502,35.704 16.865,21.068 32,5.933 "
          />
        </g>
      </svg>
    </div>
  );
};
