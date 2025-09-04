import { useSignal } from "@preact/signals";

export interface Props {
  title?: string;
  description?: string;
}

export default function ContactFormDirect({
  title = "Formulário Direto",
  description = "Versão que funciona sem HTMX."
}: Props) {
  const isLoading = useSignal(false);
  const message = useSignal("");
  const isSuccess = useSignal(false);

  const handleSubmit = async (e: Event) => {
    console.log("🚀 handleSubmit chamado!", e);
    e.preventDefault();
    e.stopPropagation();
    
    isLoading.value = true;
    message.value = "";

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const data = {
      nome: formData.get("nome") as string,
      email: formData.get("email") as string,
      mensagem: formData.get("mensagem") as string,
    };

    console.log("📝 Dados do formulário:", data);

    try {
      console.log("🔄 Enviando diretamente para Convex...");
      
      // Chamar diretamente a API do Convex
      const response = await fetch("https://precise-cassowary-240.convex.site/api/mutations/contatos/submitContactForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: data.nome?.trim(),
          email: data.email?.trim().toLowerCase(),
          mensagem: data.mensagem?.trim(),
        }),
      });

      console.log("📡 Resposta do Convex:", response.status, response.statusText);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("❌ Erro da API Convex:", errorText);
        throw new Error(`Convex API error: ${response.status} - ${errorText}`);
      }

      const result = await response.json();
      console.log("✅ Dados salvos no Convex:", result);

      isSuccess.value = true;
      message.value = "Mensagem enviada com sucesso! Entraremos em contato em breve.";
      form.reset();
      
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

          <form onSubmit={handleSubmit} class="space-y-6">
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
              type="submit"
              disabled={isLoading.value}
              class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:transform-none disabled:cursor-not-allowed"
            >
              {isLoading.value ? "Enviando..." : "Enviar Mensagem"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
