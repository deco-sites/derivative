export interface Props {
  title?: string;
  description?: string;
}

export default function ContactFormSimple({
  title = "Teste Simples",
  description = "Testando se o JavaScript funciona."
}: Props) {
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
          <div id="message" class="mb-6 p-4 rounded-lg hidden"></div>

          <div class="space-y-6">
            <div>
              <label for="nome" class="block text-sm font-medium text-gray-700 mb-2">
                Nome Completo
              </label>
              <input
                type="text"
                id="nome"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Seu nome completo"
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label for="mensagem" class="block text-sm font-medium text-gray-700 mb-2">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                rows={5}
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                placeholder="Conte-nos sobre seu projeto ou dúvida..."
              ></textarea>
            </div>

            <button
              type="button"
              id="submitBtn"
              class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200"
            >
              Enviar Mensagem
            </button>
          </div>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{
        __html: `
          console.log('🚀 Script carregado!');
          
          // Teste simples primeiro
          setTimeout(function() {
            console.log('🚀 Timeout executado!');
            
            const submitBtn = document.getElementById('submitBtn');
            const messageDiv = document.getElementById('message');
            
            if (!submitBtn) {
              console.error('❌ Botão não encontrado!');
              return;
            }
            
            console.log('✅ Botão encontrado!');
            
            submitBtn.onclick = function() {
              console.log('🚀 CLIQUE DETECTADO!');
              
              const nome = document.getElementById('nome').value;
              const email = document.getElementById('email').value;
              const mensagem = document.getElementById('mensagem').value;
              
              console.log('📝 Dados:', { nome, email, mensagem });
              
              if (!nome || !email || !mensagem) {
                showMessage('Todos os campos são obrigatórios.', false);
                return;
              }
              
              showMessage('Dados coletados com sucesso! JavaScript funcionando.', true);
            };
            
            function showMessage(text, isSuccess) {
              messageDiv.textContent = text;
              messageDiv.className = 'mb-6 p-4 rounded-lg ' + 
                (isSuccess ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200');
              messageDiv.classList.remove('hidden');
            }
          }, 1000);
        `
      }} />
    </div>
  );
}
