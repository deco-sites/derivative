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
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          
          {/* Coluna 1 - Conteúdo Dinâmico */}
          <div class="order-2 lg:order-1 flex flex-col justify-between h-full">
            {/* Conteúdo Principal que muda */}
            <div class="flex-1 flex flex-col justify-center space-y-8">
              {/* Eyebrow */}
              <p class="font-bold text-sm uppercase tracking-wider" style="color: #A1ACAA;">
                {eyebrow}
              </p>

              {/* Título Dinâmico */}
              <div id="step-title" class="transition-all duration-500 ease-in-out">
                <h2 class="text-snow-white font-mono font-normal text-4xl lg:text-5xl xl:text-6xl tracking-tight leading-none">
                  {steps[0].title}
                </h2>
              </div>

              {/* Subtitle Dinâmico */}
              <div id="step-subtitle" class="transition-all duration-500 ease-in-out">
                <p 
                  class="text-lg lg:text-xl leading-relaxed font-sans max-w-2xl"
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

          {/* Coluna 2 - Vídeo Dinâmico */}
          <div class="order-1 lg:order-2 flex items-center justify-center">
            <div class="w-full max-w-3xl">
              <div 
                class="relative w-full bg-mineral-black rounded-2xl overflow-hidden"
                style="aspect-ratio: 16/10; border: 2px solid rgba(255, 255, 255, 0.2);"
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

      {/* Script de Animação */}
      <script type="text/javascript">{`
            (function() {
              const steps = ${JSON.stringify(steps)};
              const stepDuration = ${stepDuration * 1000}; // converter para ms
              const totalSteps = ${totalSteps};
              let currentStep = 0;
              let progressInterval;
              let stepTimeout;

              function updateContent(stepIndex) {
                const step = steps[stepIndex];
                const titleElement = document.getElementById('step-title');
                const subtitleElement = document.getElementById('step-subtitle');
                const videoElement = document.getElementById('step-video');

                if (titleElement && subtitleElement && videoElement) {
                  // Fade out
                  titleElement.style.opacity = '0';
                  subtitleElement.style.opacity = '0';
                  videoElement.style.opacity = '0';

                  setTimeout(() => {
                    // Update content
                    titleElement.innerHTML = '<h2 class="text-snow-white font-mono font-normal text-4xl lg:text-5xl xl:text-6xl tracking-tight leading-none">' + step.title + '</h2>';
                    subtitleElement.innerHTML = '<p class="text-lg lg:text-xl leading-relaxed font-sans max-w-2xl" style="color: #A1ACAA;">' + step.subtitle + '</p>';
                    
                    // Update video source
                    videoElement.innerHTML = '<source src="' + step.videoUrl + '" type="video/mp4" />Seu navegador não suporta vídeos.';
                    videoElement.load();

                    // Fade in
                    titleElement.style.opacity = '1';
                    subtitleElement.style.opacity = '1';
                    videoElement.style.opacity = '1';
                  }, 250);
                }
              }

              function nextStep() {
                currentStep = (currentStep + 1) % totalSteps;
                updateContent(currentStep);
                updateStepProgress(currentStep);
              }

              function updateStepProgress(activeStep) {
                // Atualizar indicadores visuais dos steps
                for (let i = 0; i < totalSteps; i++) {
                  const stepDot = document.querySelector('[data-step="' + i + '"]');
                  const stepLine = document.querySelector('[data-line="' + i + '"]');
                  
                  if (stepDot) {
                    if (i === activeStep) {
                      stepDot.classList.add('active');
                    } else {
                      stepDot.classList.remove('active');
                    }
                  }

                  if (stepLine) {
                    stepLine.style.transform = 'scaleX(0)';
                    stepLine.style.transition = 'none';
                  }
                }

                // Animar a linha do step atual
                const currentLine = document.querySelector('[data-line="' + activeStep + '"]');
                if (currentLine) {
                  setTimeout(() => {
                    currentLine.style.transition = 'transform ' + (stepDuration / 1000) + 's linear';
                    currentLine.style.transform = 'scaleX(1)';
                  }, 100);
                }
              }

              function startAnimation() {
                // Inicializar primeiro step
                updateStepProgress(0);
                
                // Configurar intervalo para próximos steps
                stepTimeout = setInterval(nextStep, stepDuration);
              }

              // Iniciar quando DOM estiver pronto
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', startAnimation);
              } else {
                startAnimation();
              }

              // Cleanup ao sair da página
              window.addEventListener('beforeunload', () => {
                if (stepTimeout) clearInterval(stepTimeout);
                if (progressInterval) clearInterval(progressInterval);
              });
            })();
      `}</script>
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
