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
      fullName: "",
      email: "",
      phone: "",
      company: "",
      field: "",
    },
  });

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    try {
      await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      reset();
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto w-full space-y-6 rounded-lg bg-[#6064C9] p-8 shadow-md max-w-[563px] max-[769px]:max-w-[90%]"
    >
      <div className="flex flex-col gap-3">
        {formFields.map((field) => {
          // A chave (key) deve estar no elemento mais externo do loop
          return (
            <div key={field.name} className={field.layout || "col-span-1"}>
              {(() => {
                // CORREÇÃO: Usamos um switch para garantir que o TypeScript saiba
                // exatamente qual tipo de campo está sendo renderizado.
                switch (field.fieldType) {
                  case "input": {
                    const { component: Component, fieldType, ...props } = field;
                    console.log(fieldType);
                    return (
                      <Component
                        {...register(field.name)}
                        {...props}
                        error={errors[field.name]?.message}
                      />
                    );
                  }
                  case "select": {
                    const { component: Component, fieldType, ...props } = field;
                    console.log(fieldType);
                    return (
                      <Component
                        {...register(field.name)}
                        {...props} // Agora o TS sabe que `props` contém `options`
                        error={errors[field.name]?.message}
                      />
                    );
                  }
                  case "textarea": {
                    const { component: Component, fieldType, ...props } = field;
                    console.log(fieldType);

                    return (
                      <Component
                        {...register(field.name)}
                        {...props}
                        error={errors[field.name]?.message}
                      />
                    );
                  }
                  default:
                    return null;
                }
              })()}
            </div>
          );
        })}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-gradient-to-r from-[#9A9EED] to-[#BFC2EE] px-6 py-3 font-semibold text-white uppercase font-bold transition-all duration-300 disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        {isSubmitting ? "Enviando..." : "Enviar Respostas"}
      </button>
    </form>
  );
};
