"use client";

import React, { InputHTMLAttributes, forwardRef } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, error, ...props }, ref) => {
    const inputClasses = `flex w-full rounded-md border p-1 bg-[#CBCDF6] transition-all duration-300 focus:border-blue-500 focus:outline-none ${
      error ? "border-red-500" : "border-gray-300"
    }`;

    return (
      <div className="w-full">
        <input
          ref={ref}
          name={name}
          id={name}
          className={inputClasses}
          {...props}
        />
        {error && <p className="mt-1 text-[12px] leading-[6px] text-red-600">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
