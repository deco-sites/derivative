import { useSignal } from "@preact/signals";

export interface Props {
  title?: string;
  description?: string;
}

export default function ContactFormDebug({
  title = "Debug Formulário",
  description = "Testando se o problema é com eventos."
}: Props) {
  const isLoading = useSignal(false);
  const message = useSignal("");
  const isSuccess = useSignal(false);

  const handleClick = () => {
    console.log("🚀 CLIQUE DETECTADO!");
    message.value = "Clique funcionou!";
    isSuccess.value = true;
  };

  const handleSubmit = (e: Event) => {
    console.log("🚀 SUBMIT DETECTADO!", e);
    e.preventDefault();
    message.value = "Submit funcionou!";
    isSuccess.value = true;
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
            {/* Teste 1: Botão simples */}
            <div>
              <h3 class="text-lg font-semibold mb-2">Teste 1: Botão Simples</h3>
              <button
                type="button"
                onClick={handleClick}
                class="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200"
              >
                Clique Aqui (Teste)
              </button>
            </div>

            {/* Teste 2: Formulário simples */}
            <div>
              <h3 class="text-lg font-semibold mb-2">Teste 2: Formulário Simples</h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Digite algo aqui"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4"
                />
                <button
                  type="submit"
                  class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200"
                >
                  Enviar (Teste)
                </button>
              </form>
            </div>

            {/* Teste 3: Formulário completo */}
            <div>
              <h3 class="text-lg font-semibold mb-2">Teste 3: Formulário Completo</h3>
              <form onSubmit={handleSubmit} class="space-y-4">
                <input
                  type="text"
                  name="nome"
                  placeholder="Nome"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
                <textarea
                  name="mensagem"
                  placeholder="Mensagem"
                  rows={3}
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg"
                ></textarea>
                <button
                  type="submit"
                  class="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200"
                >
                  Enviar Formulário Completo
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
