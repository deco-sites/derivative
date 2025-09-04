export interface Props {
  title?: string;
  description?: string;
}

export default function ContactFormVanilla({
  title = "Formulário Vanilla JS",
  description = "Testando com JavaScript vanilla."
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
          {/* Mensagem de feedback */}
          <div id="message" class="mb-6 p-4 rounded-lg hidden"></div>

          <form id="contactForm" class="space-y-6">
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
              id="submitBtn"
              class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:transform-none disabled:cursor-not-allowed"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            console.log('🚀 Script carregado!');
            
            const form = document.getElementById('contactForm');
            const messageDiv = document.getElementById('message');
            const submitBtn = document.getElementById('submitBtn');
            
            if (!form) {
              console.error('❌ Formulário não encontrado!');
              return;
            }
            
            form.addEventListener('submit', async function(e) {
              console.log('🚀 Submit detectado!');
              e.preventDefault();
              e.stopPropagation();
              
              const formData = new FormData(form);
              const data = {
                nome: formData.get('nome'),
                email: formData.get('email'),
                mensagem: formData.get('mensagem')
              };
              
              console.log('📝 Dados coletados:', data);
              
              // Validar dados
              if (!data.nome || !data.email || !data.mensagem) {
                showMessage('Todos os campos são obrigatórios.', false);
                return;
              }
              
              // Validar email
              const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
              if (!emailRegex.test(data.email)) {
                showMessage('Por favor, insira um email válido.', false);
                return;
              }
              
              submitBtn.disabled = true;
              submitBtn.textContent = 'Enviando...';
              
              try {
                console.log('🔄 Enviando para Convex...');
                
                const response = await fetch('https://precise-cassowary-240.convex.site/api/mutations/contatos/submitContactForm', {
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
                
                console.log('📡 Resposta:', response.status, response.statusText);
                
                if (!response.ok) {
                  const errorText = await response.text();
                  console.error('❌ Erro:', errorText);
                  throw new Error('Erro na API: ' + response.status);
                }
                
                const result = await response.json();
                console.log('✅ Sucesso:', result);
                
                showMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.', true);
                form.reset();
                
              } catch (error) {
                console.error('❌ Erro:', error);
                showMessage('Erro ao enviar mensagem. Tente novamente.', false);
              } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Enviar Mensagem';
              }
            });
            
            function showMessage(text, isSuccess) {
              messageDiv.textContent = text;
              messageDiv.className = 'mb-6 p-4 rounded-lg ' + 
                (isSuccess ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200');
              messageDiv.classList.remove('hidden');
            }
          });
        `
      }} />
    </div>
  );
}
