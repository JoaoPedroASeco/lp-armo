import * as yup from "yup";

export const contactSchema = yup.object().shape({
  fullName: yup.string().required("O nome completo é obrigatório."),
  email: yup
    .string()
    .email("Digite um e-mail válido.")
    .required("O e-mail é obrigatório."),
  phone: yup
    .string()
    .required("O celular é obrigatório.")
    .matches(/^\(\d{2}\) \d{5}-\d{4}$/, "Formato de celular inválido."),
  company: yup.string().required("O nome da empresa é obrigatório."),
  role: yup.string().required("O cargo é obrigatório."),
  companySize: yup.string().required("O tamanho da empresa é obrigatório."),
  field: yup.string().required("A área de atuação é obrigatória."),
  projectDetails: yup
    .string()
    .required("Os detalhes do projeto são obrigatórios.")
    .min(20, "Descreva o projeto com mais detalhes (mínimo 20 caracteres)."),
});

export type ContactFormData = yup.InferType<typeof contactSchema>;
