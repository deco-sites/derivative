export interface Props {
  title?: string;
  description?: string;
}

export default function ContactFormHybrid({
  title = "Vamos conversar!",
  description = "nos conte sobre o seu projeto e entenda como podemos colaborar."
}: Props) {
  return (
    <div class="relative min-h-screen">
      {/* Imagem de fundo simples */}
      <img 
        src="https://assets.decocache.com/derivative/9c51b37a-0a0b-41e8-bebc-98bea5946f87/Jubarte-I-(1).jpg"
        alt="Background"
        class="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      {/* Conteúdo */}
      <div class="container mx-auto px-4 py-16 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-8">
          {/* Textos à esquerda */}
          <div class="text-left order-2 lg:order-1">
            <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {title}
            </h2>
            <p class="text-lg sm:text-xl lg:text-2xl text-white leading-relaxed">
              {description}
            </p>
          </div>

          {/* Formulário à direita */}
          <div class="flex justify-center lg:justify-end order-1 lg:order-2">
            <div class="rounded-2xl shadow-lg p-8 w-full max-w-md" style="background-color: #FCFAFA;">
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
                  class="w-full px-4 py-3 border-0 rounded-xl focus:bg-transparent focus:border focus:border-gray-400 focus:outline-none"
                  style="background-color: #F5F5F5; color: #1F2937;"
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
                  class="w-full px-4 py-3 border-0 rounded-xl focus:bg-transparent focus:border focus:border-gray-400 focus:outline-none"
                  style="background-color: #F5F5F5; color: #1F2937;"
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
                  class="w-full px-4 py-3 border-0 rounded-xl focus:bg-transparent focus:border focus:border-gray-400 focus:outline-none resize-none"
                  style="background-color: #F5F5F5; color: #1F2937;"
                  placeholder="Conte-nos sobre seu projeto ou dúvida..."
                ></textarea>
              </div>

              <button
                type="button"
                id="submitBtn"
                class="w-full bg-black hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-xl transition-all duration-200"
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
          console.log('🚀 Script carregado! - HYBRID VERSION');
          console.log('🔍 Verificando se estamos no arquivo correto...');
          
          // Aguardar o DOM estar pronto
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initForm);
          } else {
            initForm();
          }
          
          function initForm() {
            console.log('🚀 Inicializando formulário...');
            
            const submitBtn = document.getElementById('submitBtn');
            
            if (!submitBtn) {
              console.error('❌ Botão não encontrado!');
              return;
            }
            
            console.log('✅ Botão encontrado!');
            
            // Usar addEventListener em vez de onclick inline
            submitBtn.addEventListener('click', async function(e) {
            console.log('🚀 HANDLE SUBMIT CHAMADO!', e);
            e.preventDefault();
            e.stopPropagation();
            
            const nomeInput = document.getElementById('nome');
            const emailInput = document.getElementById('email');
            const mensagemInput = document.getElementById('mensagem');
            const submitBtn = document.getElementById('submitBtn');
            const messageDiv = document.getElementById('message');
            
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
            });
            
            function showMessage(text, isSuccess) {
              const messageDiv = document.getElementById('message');
              messageDiv.textContent = text;
              messageDiv.className = 'mb-6 p-4 rounded-lg ' + 
                (isSuccess ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200');
              messageDiv.classList.remove('hidden');
            }
          }
          
          console.log('✅ Script configurado! Formulário inicializado.');
        `
      }} />
    </div>
  );
}
