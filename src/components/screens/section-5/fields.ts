import { Select, SelectProps } from "./Select";
import { Input, InputProps } from "./Input";
import {
  COMPANY_ATUATION_AREA,
  COMPANY_SIZE_OPTIONS,
  ROLE_OPTIONS,
} from "./constants";
import { Textarea, TextareaProps } from "./TextArea";
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
    placeholder: "Seu Nome",
    fieldType: "input",
  },
  {
    name: "email",
    label: "Qual seu principal e-mail?",
    component: Input,
    type: "email",
    placeholder: "Email",
    fieldType: "input",
  },
  {
    name: "phone",
    label: "Celular",
    component: Input,
    mask: "(99) 99999-9999",
    placeholder: "Tel. Ex:(99) 99999-9999",
    fieldType: "input",
  },
  {
    name: "company",
    label: "Empresa",
    component: Input,
    placeholder: "Ex: ACME Corp",
    fieldType: "input",
  },
  {
    name: "role",
    label: "Cargo",
    component: Select,
    options: ROLE_OPTIONS,
    fieldType: "select",
  },
  {
    name: "companySize",
    label: "Tamanho da empresa",
    component: Select,
    options: COMPANY_SIZE_OPTIONS,
    fieldType: "select",
  },
  {
    name: "field",
    label: "Área de atuação",
    component: Select,
    layout: "col-span-1 md:col-span-2",
    fieldType: "select",
    options: COMPANY_ATUATION_AREA,
  },
  {
    name: "projectDetails",
    label: "Detalhes do projeto...",
    component: Textarea,
    placeholder: "Descreva brevemente sua necessidade ou projeto...",
    layout: "col-span-1 md:col-span-2",
    fieldType: "textarea",
  },
];
