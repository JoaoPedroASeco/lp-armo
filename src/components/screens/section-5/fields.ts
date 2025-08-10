import { SelectProps } from "./Select";
import { Input, InputProps } from "./Input";
import { TextareaProps } from "./TextArea";
import { ContactFormData } from "./form-schema";
import React from "react";

// Interface base com propriedades comuns
interface BaseFieldConfig {
  name: keyof ContactFormData;
  label: string;
  layout?: string;
}

// Configurações específicas para cada tipo de campo
interface InputConfig extends BaseFieldConfig {
  fieldType: "input";
  component: React.ComponentType<InputProps>;
  placeholder?: string;
  type?: string;
  mask?: string;
}

interface SelectConfig extends BaseFieldConfig {
  fieldType: "select";
  component: React.ComponentType<SelectProps>;
  options: { value: string; label: string }[]; // CORREÇÃO: "options" agora é obrigatório para Select
  placeholder?: string;
}

interface TextareaConfig extends BaseFieldConfig {
  fieldType: "textarea";
  component: React.ComponentType<TextareaProps>;
  placeholder?: string;
}

// Union Type: A configuração de um campo é um destes três tipos
type FieldConfig = InputConfig | SelectConfig | TextareaConfig;

// O array de campos agora é totalmente seguro em tipos
export const formFields: FieldConfig[] = [
  // ... (o resto do seu array de campos permanece o mesmo)
  {
    name: "fullName",
    label: "Qual é seu nome e sobrenome?",
    component: Input,
    placeholder: "Qual é seu nome e sobrenome?",
    fieldType: "input",
  },
  {
    name: "email",
    label: "Qual seu principal e-mail?",
    component: Input,
    type: "email",
    placeholder: "Qual seu principal e-mail?",
    fieldType: "input",
  },
  {
    name: "phone",
    label: "Celular",
    component: Input,
    placeholder: "Celular",
    fieldType: "input",
  },
  {
    name: "company",
    label: "Empresa",
    component: Input,
    placeholder: "Empresa",
    fieldType: "input",
  },
  {
    name: "field",
    label: "Área de atuação",
    placeholder: "Área de atuação",
    component: Input,
    layout: "col-span-1 md:col-span-2",
    fieldType: "input",
  },
];
