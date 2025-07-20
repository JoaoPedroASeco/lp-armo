"use client";

import React, { InputHTMLAttributes, forwardRef } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, error, ...props }, ref) => {
    const containerClasses = `flex justify-center items-center w-full min-h-[52px] max-h-[52px] rounded-md border p-1 bg-[#CBCDF6] transition-all duration-300 focus:border-blue-500 focus:outline-none ${
      error ? "border-red-500" : "border-gray-300"
    }`;

    return (
      <>
        <div className={containerClasses}>
          <input
            ref={ref}
            name={name}
            id={name}
            {...props}
            className="flex w-full h-full px-4 text-[18px] max-[769px]:text-[16px] border-0 outline-0"
          />
        </div>
        {error && (
          <p className="mt-1 px-4 text-[12px] leading-[6px] text-red-600">
            {error}
          </p>
        )}
      </>
    );
  }
);

Input.displayName = "Input";
