import React, { SelectHTMLAttributes, forwardRef } from "react";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  error?: string;
  options: { value: string; label: string }[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ name, error, options, ...props }, ref) => (
    <div className="w-full">
      <select
        ref={ref}
        name={name}
        id={name}
        className={`w-full rounded-md border bg-[#CBCDF6] p-3 text-gray-800 transition-all duration-300 focus:border-blue-500 focus:outline-none ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        {...props}
        defaultValue={options[0].value} // Define o valor padrão como o primeiro item da lista
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  )
);

Select.displayName = "Select";
