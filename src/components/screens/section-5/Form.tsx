"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ContactFormData, contactSchema } from "./form-schema";
import { formFields } from "./fields";

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: yupResolver(contactSchema),
    defaultValues: {
      role: "",
      companySize: "",
    },
  });

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    console.log(data);
    return
    try { 
      await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
        }),
      });
      reset();
    } catch(error) {
      console.log(JSON.stringify(error))
      return 
    } finally {
      
    }

  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto w-full max-w-2xl space-y-6 rounded-lg bg-[#6064C9] p-8 shadow-md"
    >
      {/* 2. Mapeamento do array para renderizar os campos */}
      <div className="flex flex-col w-full gap-4">
        {formFields.map((field) => {
          const { name, component: Component, layout, ...props } = field;

          return (
            <div key={name} className={layout || ""}>
              <Component
                {...register(name)}
                {...props}
                error={errors[name]?.message}
              />
            </div>
          );
        })}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-gradient-to-r from-[#9A9EED] to-[#BFC2EE] px-6 py-3 font-semibold text-white uppercase font-bold transition-all duration-300  disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        {isSubmitting ? "Enviando..." : "Enviar Respostas"}
      </button>
    </form>
  );
};
