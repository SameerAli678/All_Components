// src/Components/inputs/input.tsx
"use client";

// React import
import React from "react";
import Arrow from "@/../public/icons/downArrow.svg";
import location from "@/../public/icons/location.svg";
import Image from "next/image";

// Use interface InputProps
interface InputProps {
  label?: string;
  error?: string;
  icon?: string;
}

const FilterInput = ({
  label,
  type,
  className,
  ...res
}: React.InputHTMLAttributes<HTMLInputElement> & InputProps) => {
  return (
    // Label
    <label htmlFor="input" className="space-y-1 ">
      {label && <p className="text-md  capitalize line-clamp-1">{label}</p>}
      <div
        className={`flex justify-between items-center w-full bg-white border !border-border rounded-xl shadow-box-shadow pr-3 ${className}`}
      >
        {/* Input  */}
        <input
          type={type}
          id="input"
          className="w-full h-full px-3 py-4 outline-none ring-0 rounded-xl"
          {...res}
        />
        {type === "text" ? <Image src={Arrow} alt="" /> : <div></div>}
        {type === "location" ? <Image src={location} alt="" /> : <div></div>}
      </div>
    </label>
  );
};

export default FilterInput;
