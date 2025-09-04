import { AppContext } from "../apps/site.ts";

export interface Props {
  nome: string;
  email: string;
  mensagem: string;
}

export default async function SubmitContactAction(
  props: Props,
  req: Request,
  ctx: AppContext,
) {
  try {
    console.log("SubmitContactAction chamada com:", props);
    
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

    // Chamar a API do Convex
    const convexResponse = await fetch(process.env.CONVEX_URL + "/api/mutations/contatos/submitContactForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.CONVEX_TOKEN}`,
      },
      body: JSON.stringify({
        nome: props.nome.trim(),
        email: props.email.trim().toLowerCase(),
        mensagem: props.mensagem.trim(),
      }),
    });

    if (!convexResponse.ok) {
      throw new Error(`Convex API error: ${convexResponse.status}`);
    }

    const result = await convexResponse.json();
    console.log("Resposta do Convex:", result);

    return {
      success: true,
      message: "Mensagem enviada com sucesso! Entraremos em contato em breve.",
      id: result.id,
    };
  } catch (error) {
    console.error("Erro ao enviar para Convex:", error);
    return {
      success: false,
      message: "Erro ao enviar mensagem. Tente novamente em alguns instantes.",
    };
  }
}
