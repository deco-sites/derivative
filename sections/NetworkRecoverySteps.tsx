export interface RecoveryStep {
  id: number;
  title: string;
  subtitle: string;
  videoUrl: string;
}

export interface Props {
  eyebrow?: string;
  steps?: RecoveryStep[];
  stepDuration?: number; // duração em segundos para cada etapa
}

export default function NetworkRecoverySteps({
  eyebrow = "Nosso Sistema",
  steps = [
    {
      id: 1,
      title: "INTERCEPTAR",
      subtitle: "Redes de pesca danificadas são recuperadas diretamente com membros de comunidades pesqueiras no Rio de Janeiro, evitando que sigam à deriva no oceano ou acabem em aterros.",
      videoUrl: "https://assets.decocache.com/derivative/e3b7a657-a775-4fec-9de8-8c11a87cec3f/rede.mov"
    },
    {
      id: 2,
      title: "PRÉ-PROCESSAR", 
      subtitle: "As redes passam por um processo de triagem, classificação e limpeza, garantindo que estejam prontas para serem recicladas e convertidas em matéria-prima de alta qualidade.",
      videoUrl: "https://assets.decocache.com/derivative/e3b7a657-a775-4fec-9de8-8c11a87cec3f/rede.mov"
    },
    {
      id: 3,
      title: "TRANSFORMAR",
      subtitle: "O nylon das redes é reciclado e transformado em uma nova matéria-prima, pronta para ser aplicada em novos produtos, reduzindo a demanda por plástico virgem.",
      videoUrl: "https://assets.decocache.com/derivative/e3b7a657-a775-4fec-9de8-8c11a87cec3f/rede.mov"
    },
    {
      id: 4,
      title: "COLLAB",
      subtitle: "Empresas comprometidas com impacto positivo utilizam nosso material para criar produtos inovadores e sustentáveis, ampliando o ciclo de regeneração dos oceanos.",
      videoUrl: "https://assets.decocache.com/derivative/e3b7a657-a775-4fec-9de8-8c11a87cec3f/rede.mov"
    }
  ],
  stepDuration = 4 // 4 segundos por etapa
}: Props) {
  const totalSteps = steps.length;

  return (
    <section 
      class="relative min-h-screen py-20 lg:py-32" 
      style="background-color: #1d1b1d;"
    >
      <div class="container mx-auto px-2 lg:px-4 relative z-10">
        <div class="grid lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-12 items-center min-h-[80vh]">
          
          {/* Coluna 1 - Conteúdo Dinâmico - Reduzida */}
          <div class="order-2 lg:order-1 flex flex-col justify-between h-full">
            {/* Conteúdo Principal que muda */}
            <div class="flex-1 flex flex-col justify-center space-y-8">
              {/* Eyebrow */}
              <p class="font-bold text-sm uppercase tracking-wider" style="color: #A1ACAA;">
                {eyebrow}
              </p>

              {/* Título Dinâmico */}
              <div id="step-title" class="transition-all duration-500 ease-in-out">
                <h2 class="text-snow-white font-mono font-normal text-3xl lg:text-4xl xl:text-5xl tracking-tight leading-none">
                  {steps[0].title}
                </h2>
              </div>

              {/* Subtitle Dinâmico */}
              <div id="step-subtitle" class="transition-all duration-500 ease-in-out">
                <p 
                  class="text-base lg:text-lg leading-relaxed font-sans max-w-lg"
                  style="color: #A1ACAA;"
                >
                  {steps[0].subtitle}
                </p>
              </div>
            </div>

            {/* Componente Steps no rodapé */}
            <div class="mt-16">
              <StepsProgress 
                totalSteps={totalSteps} 
                stepDuration={stepDuration}
              />
            </div>
          </div>

          {/* Coluna 2 - Vídeo Dinâmico - Ampliada */}
          <div class="order-1 lg:order-2 flex items-center justify-center">
            <div class="w-full max-w-4xl">
              <div 
                class="relative w-full bg-mineral-black rounded-2xl overflow-hidden"
                style="aspect-ratio: 16/9; border: 2px solid rgba(255, 255, 255, 0.2);"
              >
                <video 
                  id="step-video"
                  class="w-full h-full object-cover transition-opacity duration-500"
                  autoplay 
                  muted 
                  loop 
                  playsinline
                >
                  <source src={steps[0].videoUrl} type="video/mp4" />
                  Seu navegador não suporta vídeos.
                </video>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Script de Animação - Versão Simplificada */}
      <script type="text/javascript" dangerouslySetInnerHTML={{
        __html: `
          (function() {
            console.log('🚀 NetworkRecoverySteps: NOVA VERSÃO iniciada - ${Date.now()}');
            
            const steps = ${JSON.stringify(steps)};
            const stepDuration = ${stepDuration * 1000};
            const totalSteps = steps.length;
            let currentStep = 0;
            let animationInterval;

            console.log('📊 Configuração:', { totalSteps, stepDuration });

            function forceUpdateContent(stepIndex) {
              const stepStartTime = Date.now();
              console.log('🔄 Forçando update para step:', stepIndex, 'às', stepStartTime);
              
              const step = steps[stepIndex];
              const titleEl = document.getElementById('step-title');
              const subtitleEl = document.getElementById('step-subtitle');
              const videoEl = document.getElementById('step-video');

              if (!titleEl || !subtitleEl || !videoEl) {
                console.error('❌ Elementos não encontrados!');
                return;
              }

              console.log('✅ Elementos encontrados, atualizando para:', step.title);

              // Update imediato sem fade
              titleEl.innerHTML = '<h2 class="text-snow-white font-mono font-normal text-3xl lg:text-4xl xl:text-5xl tracking-tight leading-none">' + step.title + '</h2>';
              subtitleEl.innerHTML = '<p class="text-base lg:text-lg leading-relaxed font-sans max-w-lg" style="color: #A1ACAA;">' + step.subtitle + '</p>';
              
              // Force video update
              videoEl.src = step.videoUrl;
              videoEl.load();
              
              const updateEndTime = Date.now();
              console.log('📝 Conteúdo atualizado para:', step.title, 'em', updateEndTime - stepStartTime, 'ms');
            }

            function advanceStep() {
              const previousStep = currentStep;
              currentStep = (currentStep + 1) % totalSteps;
              
              const now = Date.now();
              console.log('⏭️ Avançando de step', previousStep, 'para', currentStep, 'às', now);
              console.log('⏱️ Próxima troca em', stepDuration, 'ms');
              
              forceUpdateContent(currentStep);
              updateProgressIndicators(currentStep);
            }

            function updateProgressIndicators(activeStep) {
              for (let i = 0; i < totalSteps; i++) {
                const dot = document.querySelector('[data-step="' + i + '"]');
                if (dot) {
                  if (i === activeStep) {
                    dot.classList.add('active');
                  } else {
                    dot.classList.remove('active');
                  }
                }
              }
            }

            function startCycle() {
              console.log('🎬 Iniciando ciclo de animação...');
              
              // Limpar qualquer intervalo existente
              if (animationInterval) {
                clearInterval(animationInterval);
                console.log('🧹 Intervalo anterior limpo');
              }
              
              // Inicializar
              updateProgressIndicators(0);
              
              // Começar ciclo após 2 segundos
              setTimeout(() => {
                console.log('🚀 Primeira troca de step em', stepDuration, 'ms');
                animationInterval = setInterval(() => {
                  console.log('⏰ Intervalo executado - tempo configurado:', stepDuration, 'ms');
                  advanceStep();
                }, stepDuration);
                console.log('✨ Intervalo iniciado com', stepDuration, 'ms');
              }, 2000);
            }

            // Inicialização única e controlada
            let isInitialized = false;
            
            function safeInit() {
              if (!isInitialized) {
                isInitialized = true;
                console.log('🔒 Inicialização única executada');
                startCycle();
              }
            }
            
            // Tentar inicializar quando DOM estiver pronto
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', safeInit);
            } else {
              safeInit();
            }

            // Cleanup
            window.addEventListener('beforeunload', () => {
              if (animationInterval) clearInterval(animationInterval);
            });

            // Debug helper - manual advance
            window.debugAdvanceStep = () => {
              console.log('🔧 Debug: Forçando próximo step');
              advanceStep();
            };
          })();
        `
      }} />
    </section>
  );
}

// Componente Steps Progress 
function StepsProgress({ totalSteps }: { totalSteps: number; stepDuration: number }) {
  return (
    <div class="flex items-center justify-center space-x-2">
      {Array.from({ length: totalSteps }, (_, index) => (
        <div key={index} class="flex items-center">
          {/* Step Dot */}
          <div 
            data-step={index}
            class={`w-4 h-4 rounded-full border-2 border-snow-white transition-all duration-300 ${index === 0 ? 'active bg-snow-white' : 'bg-transparent'}`}
            style="position: relative;"
          >
          </div>
          
          {/* Connecting Line (não mostrar na última) */}
          {index < totalSteps - 1 && (
            <div class="relative w-16 h-0.5 bg-fog-gray mx-2 overflow-hidden">
              <div 
                data-line={index}
                class="absolute top-0 left-0 h-full bg-snow-white origin-left transform scale-x-0"
                style="transition: transform 0s linear;"
              ></div>
            </div>
          )}
        </div>
      ))}

      <style>{`
        [data-step].active {
          background-color: white;
          box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
}
