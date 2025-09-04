import { AppContext } from "../apps/site.ts";

export interface Props {
  name: string;
  email: string;
  message: string;
}

export default async function ContactFormAction(
  props: Props,
  req: Request,
  ctx: AppContext,
) {
  try {
    console.log("ContactFormAction chamada com:", props);
    
    // Validar dados de entrada
    if (!props.name || !props.email || !props.message) {
      return {
        success: false,
        message: "Todos os campos são obrigatórios.",
      };
    }

    // Validar formato do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(props.email)) {
      return {
        success: false,
        message: "Por favor, insira um email válido.",
      };
    }

    // Por enquanto, vamos apenas retornar sucesso para testar
    // Depois implementaremos o Deco Records
    console.log("Dados validados:", {
      name: props.name.trim(),
      email: props.email.trim().toLowerCase(),
      message: props.message.trim(),
    });

    return {
      success: true,
      message: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
      id: Date.now(), // ID temporário
    };
  } catch (error) {
    console.error("Erro ao salvar formulário:", error);
    return {
      success: false,
      message: "Erro ao enviar mensagem. Tente novamente em alguns instantes.",
    };
  }
}
