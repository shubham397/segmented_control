// components/SegmentedControl.tsx
import React, { useState } from "react";
import "./segmentedControl.css";

interface SegmentedControlProps {
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
}

const SegmentedControl: React.FC<SegmentedControlProps> = ({
  options,
  selected,
  onSelect,
}) => {
  const [active, setActive] = useState(selected);

  const handleClick = (option: string) => {
    setActive(option);
    onSelect(option);
  };

  return (
    <div className="segmented-control">
      {options.map((option) => (
        <button
          key={option}
          className={`segment ${active === option ? "active" : ""}`}
          onClick={() => handleClick(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default SegmentedControl;
