import { useEffect, useState } from "react";

const CheckboxSVG = ({ clearFilters }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (clearFilters) {
      setIsChecked(false);
    }
  }, [clearFilters]);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="cursor-pointer">
      <svg
        width="30"
        height="30"
        viewBox="0 0 21 21"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        onClick={handleClick}
      >
        <rect
          x="1"
          y="5"
          width="12"
          height="12"
          rx="1"
          fill="white"
          stroke="#9CA38F"
          strokeWidth="0.5"
        />
        <g transform={isChecked ? "translate(-1, -2)" : ""}>
          {isChecked && (
            <path
              d="M5 10.75L8.5 14.25L15 7.75"
              stroke="#E1261C"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
        </g>
      </svg>
    </div>
  );
};

export default CheckboxSVG;
