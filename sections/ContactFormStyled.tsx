export interface Props {
  title?: string;
  subtitle?: string;
}

export default function ContactFormStyled({
  title = "Vamos conversar!",
  subtitle = "nos conte sobre o seu projeto e entenda como podemos colaborar."
}: Props) {
  return (
    <div class="w-full h-screen relative">
      {/* Imagem de fundo */}
      <div class="absolute inset-0">
        <img 
          src="https://assets.decocache.com/derivative/9c51b37a-0a0b-41e8-bebc-98bea5946f87/Jubarte-I-(1).jpg"
          alt="Background"
          class="w-full h-full object-cover"
        />
        {/* Overlay escuro para melhor legibilidade */}
        <div class="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Conteúdo */}
      <div class="relative z-10 flex items-center justify-center h-full">
        <div class="container mx-auto px-4">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Textos à esquerda */}
            <div class="text-white space-y-6">
              <h2 class="text-4xl lg:text-5xl font-bold leading-tight">
                {title}
              </h2>
              <p class="text-xl lg:text-2xl text-gray-200 leading-relaxed">
                {subtitle}
              </p>
            </div>

            {/* Formulário à direita */}
            <div class="bg-white rounded-2xl shadow-2xl p-8 lg:p-10 max-w-lg mx-auto lg:mx-0">
              <div id="message" class="mb-6 p-4 rounded-lg hidden"></div>

            {/* Formulário sem form tag - usando divs */}
            <div id="contactForm" class="space-y-6">
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

              <button
                type="button"
                id="submitBtn"
                class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Enviar Mensagem
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

      <script dangerouslySetInnerHTML={{
        __html: `
          console.log('🚀 Script carregado!');
          
          // Aguardar o DOM estar pronto
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initForm);
          } else {
            initForm();
          }
          
          function initForm() {
            console.log('🚀 Inicializando formulário...');
            
            const form = document.getElementById('contactForm');
            const messageDiv = document.getElementById('message');
            const submitBtn = document.getElementById('submitBtn');
            
            if (!form || !submitBtn) {
              console.error('❌ Elementos não encontrados!');
              return;
            }
            
            console.log('✅ Elementos encontrados!');
            
            // Usar onclick em vez de addEventListener para bypass do HTMX
            submitBtn.onclick = async function(e) {
              console.log('🚀 BOTÃO CLICADO!', e);
              e.preventDefault();
              e.stopPropagation();
              
              const nomeInput = document.getElementById('nome');
              const emailInput = document.getElementById('email');
              const mensagemInput = document.getElementById('mensagem');
              
              const data = {
                nome: nomeInput.value,
                email: emailInput.value,
                mensagem: mensagemInput.value
              };
              
              console.log('📝 Dados coletados:', data);
              
              // Validar dados
              if (!data.nome || !data.email || !data.mensagem) {
                showMessage('Todos os campos são obrigatórios.', false);
                return;
              }
              
              submitBtn.disabled = true;
              submitBtn.textContent = 'Enviando...';
              
              try {
                console.log('🔄 Enviando via Deco Action...');
                
                // Usar a action do Deco para bypass do CORS
                const response = await fetch('/live/invoke/site/actions/submitToConvex.ts', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    nome: data.nome.trim(),
                    email: data.email.trim().toLowerCase(),
                    mensagem: data.mensagem.trim()
                  })
                });
                
                console.log('📡 Resposta da Action:', response.status, response.statusText);
                
                if (!response.ok) {
                  const errorText = await response.text();
                  console.error('❌ Erro na Action:', errorText);
                  throw new Error('Erro na Action: ' + response.status);
                }
                
                const result = await response.json();
                console.log('✅ Sucesso via Action:', result);
                
                if (result.success) {
                  showMessage(result.message, true);
                  
                  // Limpar formulário
                  nomeInput.value = '';
                  emailInput.value = '';
                  mensagemInput.value = '';
                } else {
                  showMessage(result.message, false);
                }
                
              } catch (error) {
                console.error('❌ Erro:', error);
                showMessage('Erro ao enviar mensagem. Tente novamente.', false);
              } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Enviar Mensagem';
              }
            };
            
            function showMessage(text, isSuccess) {
              messageDiv.textContent = text;
              messageDiv.className = 'mb-6 p-4 rounded-lg ' + 
                (isSuccess ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200');
              messageDiv.classList.remove('hidden');
            }
          }
        `
      }} />
    </div>
  );
}
