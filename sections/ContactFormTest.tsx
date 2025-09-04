export interface Props {
  title?: string;
  subtitle?: string;
}

export default function ContactFormTest({
  title = "Vamos conversar!",
  subtitle = "nos conte sobre o seu projeto e entenda como podemos colaborar."
}: Props) {
  return (
    <div class="w-full h-screen relative">
      {/* Teste 1: Imagem simples */}
      <div class="absolute inset-0 bg-red-500">
        <img 
          src="https://assets.decocache.com/derivative/9c51b37a-0a0b-41e8-bebc-98bea5946f87/Jubarte-I-(1).jpg"
          alt="Teste"
          class="w-full h-full object-cover"
        />
      </div>
      
      {/* Teste 2: Conteúdo sobreposto */}
      <div class="relative z-10 flex items-center justify-center h-full">
        <div class="bg-white p-8 rounded-lg shadow-lg max-w-md">
          <h2 class="text-2xl font-bold mb-4">{title}</h2>
          <p class="text-gray-600 mb-6">{subtitle}</p>
          
          {/* Formulário simples */}
          <div class="space-y-4">
            <input 
              type="text" 
              placeholder="Nome" 
              class="w-full p-3 border rounded-lg"
            />
            <input 
              type="email" 
              placeholder="Email" 
              class="w-full p-3 border rounded-lg"
            />
            <textarea 
              placeholder="Mensagem" 
              rows={3}
              class="w-full p-3 border rounded-lg"
            ></textarea>
            <button class="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}