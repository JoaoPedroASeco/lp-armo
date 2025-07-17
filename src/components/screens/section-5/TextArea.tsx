import React, { TextareaHTMLAttributes, forwardRef } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ name, error, ...props }, ref) => (
    <div className="w-full">
      <textarea
        ref={ref}
        name={name}
        id={name}
        rows={4}
        className={`w-full rounded-md border p-1 max-h-[90px] text-gray-800 bg-[#CBCDF6] transition-all duration-300 focus:border-blue-500 focus:outline-none ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        {...props}
      ></textarea>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  )
);

Textarea.displayName = "Textarea";
