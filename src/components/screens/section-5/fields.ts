import { Select } from "./Select";
import { Input } from "./Input";
import { COMPANY_SIZE_OPTIONS, ROLE_OPTIONS } from "./constants";
import { Textarea } from "./TextArea";
import { ContactFormData } from "./form-schema";

interface FormFieldProps {
  name: keyof ContactFormData;
  label: string;
  error?: string;
  placeholder?: string;
  options?: { value: string; label: string }[];
  type?: string;
  mask?: string;
}

type FieldConfig = FormFieldProps & {
  component: React.ComponentType<any>; // Usamos 'any' para simplicidade ou podemos usar FormFieldProps
  layout?: string;
};

export const formFields: FieldConfig[] = [
  {
    name: "fullName" as const,
    label: "Qual é seu nome e sobrenome?",
    component: Input,
    placeholder: "Ex: João da Silva",
  },
  {
    name: "email" as const,
    label: "Qual seu principal e-mail?",
    component: Input,
    type: "email",
    placeholder: "Ex: joao.silva@email.com",
  },
  {
    name: "phone" as const,
    label: "Celular",
    component: Input,
    mask: "(99) 99999-9999",
    placeholder: "(99) 99999-9999",
  },
  {
    name: "company" as const,
    label: "Empresa",
    component: Input,
    placeholder: "Ex: ACME Corp",
  },
  {
    name: "role" as const,
    label: "Cargo",
    component: Select,
    options: ROLE_OPTIONS,
  },
  {
    name: "companySize" as const,
    label: "Tamanho da empresa",
    component: Select,
    options: COMPANY_SIZE_OPTIONS,
  },
  {
    name: "field" as const,
    label: "Área de atuação",
    component: Input,
    placeholder: "Ex: Tecnologia, Marketing, Vendas",
    // Propriedade para controlar o layout no grid
    layout: "col-span-1 md:col-span-2",
  },
  {
    name: "projectDetails" as const,
    label: "Detalhes do projeto...",
    component: Textarea,
    placeholder: "Descreva brevemente sua necessidade ou projeto...",
    layout: "col-span-1 md:col-span-2",
  },
];
