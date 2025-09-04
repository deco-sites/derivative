import { useSignal } from "@preact/signals";
import { invoke } from "../runtime.ts";

export interface Props {
  title?: string;
  description?: string;
}

export default function ContactFormWorking({
  title = "Entre em Contato",
  description = "Envie sua mensagem e entraremos em contato em breve."
}: Props) {
  const isLoading = useSignal(false);
  const message = useSignal("");
  const isSuccess = useSignal(false);

  const handleButtonClick = async () => {
    console.log("🚀 Botão clicado!");
    
    // Buscar os valores dos campos diretamente
    const nomeInput = document.getElementById("nome") as HTMLInputElement;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const mensagemInput = document.getElementById("mensagem") as HTMLTextAreaElement;

    if (!nomeInput?.value || !emailInput?.value || !mensagemInput?.value) {
      message.value = "Todos os campos são obrigatórios.";
      isSuccess.value = false;
      return;
    }

    isLoading.value = true;
    message.value = "";

    const data = {
      nome: nomeInput.value,
      email: emailInput.value,
      mensagem: mensagemInput.value,
    };

    console.log("📝 Dados coletados:", data);

    try {
      console.log("🔄 Chamando action do Convex...");
      const result = await invoke("site/actions/contactFormConvex.ts", data);
      console.log("✅ Resultado:", result);
      
      if (result.success) {
        isSuccess.value = true;
        message.value = result.message;
        // Limpar formulário
        nomeInput.value = "";
        emailInput.value = "";
        mensagemInput.value = "";
      } else {
        isSuccess.value = false;
        message.value = result.message;
      }
    } catch (error) {
      console.error("❌ Erro:", error);
      isSuccess.value = false;
      message.value = "Erro ao enviar mensagem. Tente novamente.";
    } finally {
      isLoading.value = false;
    }
  };

  return (
    <div class="container mx-auto px-4 py-16">
      <div class="max-w-2xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p class="text-lg text-gray-600">
            {description}
          </p>
        </div>

        <div class="bg-white rounded-lg shadow-lg p-8">
          {/* Mensagem de feedback */}
          {message.value && (
            <div class={`mb-6 p-4 rounded-lg ${
              isSuccess.value 
                ? "bg-green-100 text-green-800 border border-green-200" 
                : "bg-red-100 text-red-800 border border-red-200"
            }`}>
              {message.value}
            </div>
          )}

          <div class="space-y-6">
            {/* Nome */}
            <div>
              <label for="nome" class="block text-sm font-medium text-gray-700 mb-2">
                Nome Completo
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Seu nome completo"
              />
            </div>

            {/* Email */}
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="seu@email.com"
              />
            </div>

            {/* Mensagem */}
            <div>
              <label for="mensagem" class="block text-sm font-medium text-gray-700 mb-2">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={5}
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                placeholder="Conte-nos sobre seu projeto ou dúvida..."
              ></textarea>
            </div>

            {/* Botão */}
            <button
              type="button"
              onClick={handleButtonClick}
              disabled={isLoading.value}
              class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:transform-none disabled:cursor-not-allowed"
            >
              {isLoading.value ? "Enviando..." : "Enviar Mensagem"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
