import { AppContext } from "../apps/site.ts";

export interface Props {
  nome: string;
  email: string;
  mensagem: string;
}

export default async function ContactFormSimpleAction(
  props: Props,
  req: Request,
  ctx: AppContext,
) {
  try {
    console.log("🚀 ContactFormSimpleAction chamada com:", props);
    
    // Validar dados de entrada
    if (!props.nome || !props.email || !props.mensagem) {
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

    // Por enquanto, vamos simular o sucesso e mostrar os dados
    console.log("📝 Dados validados e prontos para salvar no Convex:", {
      nome: props.nome.trim(),
      email: props.email.trim().toLowerCase(),
      mensagem: props.mensagem.trim(),
    });

    // Simular delay de rede
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      success: true,
      message: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
      id: Date.now(),
    };
  } catch (error) {
    console.error("❌ Erro ao processar formulário:", error);
    return {
      success: false,
      message: "Erro ao enviar mensagem. Tente novamente em alguns instantes.",
    };
  }
}
