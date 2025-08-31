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
      videoUrl: "https://assets.decocache.com/derivative/55b1853a-e446-4934-998d-7161d0b9869d/interceptar_lp.mov"
    },
    {
      id: 2,
      title: "PRÉ-PROCESSAR", 
      subtitle: "As redes passam por um processo de triagem, classificação e limpeza, garantindo que estejam prontas para serem recicladas e convertidas em matéria-prima de alta qualidade.",
      videoUrl: "https://assets.decocache.com/derivative/d716a957-cf79-4ec6-9ec5-7b2186654888/limpandorede_lp.mov"
    },
    {
      id: 3,
      title: "TRANSFORMAR",
      subtitle: "O nylon das redes é reciclado e transformado em uma nova matéria-prima, pronta para ser aplicada em novos produtos, reduzindo a demanda por plástico virgem.",
      videoUrl: "https://assets.decocache.com/derivative/90115802-fa45-4928-b89d-85e55dda5fc6/transformar_lp.mov"
    },
    {
      id: 4,
      title: "COLLAB",
      subtitle: "Empresas comprometidas com impacto positivo utilizam nosso material para criar produtos inovadores e sustentáveis, ampliando o ciclo de regeneração dos oceanos.",
      videoUrl: "https://assets.decocache.com/derivative/73bedff9-93dd-4a36-9797-9506365ac2b6/collab_lp.mov"
    }
  ],
  stepDuration = 12 // 12 segundos por etapa
}: Props) {
  const totalSteps = steps.length;

  return (
    <section 
      class="relative min-h-screen py-20 lg:py-32" 
      style="background-color: #1d1b1d;"
    >
      <div class="container mx-auto px-2 lg:px-4 relative z-10">
        <div class="grid lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-12 items-start min-h-[80vh]">
          
          {/* Coluna 1 - Conteúdo Dinâmico - Reduzida */}
          <div class="order-2 lg:order-1 flex flex-col justify-between h-full">
            {/* Container que simula a altura do vídeo */}
            <div class="relative" style="aspect-ratio: 16/9;">
              {/* Layout flexível para distribuir elementos verticalmente */}
              <div class="h-full flex flex-col justify-between py-4">
                {/* Conteúdo Principal que muda - Posicionado no topo */}
                <div class="flex flex-col space-y-4 max-w-sm">
                  {/* Eyebrow */}
                  <p class="font-bold text-sm uppercase tracking-wider" style="color: #A1ACAA;">
                    {eyebrow}
                  </p>

                  {/* Título Dinâmico */}
                  <div id="step-title" class="transition-all duration-500 ease-in-out">
                    <h2 class="text-snow-white font-mono font-normal text-2xl lg:text-3xl xl:text-4xl tracking-tight leading-none">
                      {steps[0].title}
                    </h2>
                  </div>

                  {/* Subtitle Dinâmico */}
                  <div id="step-subtitle" class="transition-all duration-500 ease-in-out">
                    <p 
                      class="text-sm lg:text-base leading-relaxed font-sans max-w-sm"
                      style="color: #A1ACAA;"
                    >
                      {steps[0].subtitle}
                    </p>
                  </div>
                </div>

                {/* Componente Steps no rodapé - Com margem superior */}
                <div class="flex justify-start mt-8">
                  <StepsProgress 
                    totalSteps={totalSteps} 
                    stepDuration={stepDuration}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Coluna 2 - Vídeo Dinâmico - Ampliada */}
          <div class="order-1 lg:order-2 flex items-start justify-center">
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
              // Atualizar dots lineares
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
              
              // Atualizar setores ativos do radial controller
              for (let i = 0; i < totalSteps; i++) {
                const activeSector = document.querySelector('[data-active-sector="' + i + '"]');
                if (activeSector) {
                  if (i === activeStep) {
                    activeSector.classList.add('active');
                  } else {
                    activeSector.classList.remove('active');
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
              
              // Inicializar com o primeiro step ativo
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
            
            // Ativar o primeiro setor imediatamente
            setTimeout(() => {
              updateProgressIndicators(0);
            }, 100);

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

// Componente Steps Progress - NOVO DESIGN RADIAL CORRIGIDO
function StepsProgress({ totalSteps, stepDuration }: { totalSteps: number; stepDuration: number }) {
  // Ícones para cada etapa (usando SVG inline para simplicidade)
  const stepIcons = [
    // INTERCEPTAR - Rede de pesca (ícone de grade)
    `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 3H21V21H3V3Z" stroke="currentColor" stroke-width="2"/>
      <path d="M3 9H21M3 15H21M9 3V21M15 3V21" stroke="currentColor" stroke-width="2"/>
    </svg>`,
    // PRÉ-PROCESSAR - Triagem/Classificação (ícone de lista)
    `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 6H21M8 12H21M8 18H21M3 6H3.01M3 12H3.01M3 18H3.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    // TRANSFORMAR - Reciclagem (ícone de ciclo)
    `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z" stroke="currentColor" stroke-width="2"/>
      <path d="M12 3C14.5013 3 16.8911 3.79018 18.6685 5.1967C20.4459 6.60322 21.5 8.53409 21.5 10.6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <path d="M12 21C9.49872 21 7.10892 20.2098 5.33148 18.8033C3.55404 17.3968 2.5 15.4659 2.5 13.4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>`,
    // COLLAB - Colaboração/Empresas (ícone de pessoas)
    `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="2"/>
      <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  ];

  return (
    <div class="flex flex-col items-center space-y-6">
      {/* Radial Controller */}
      <div class="relative w-48 h-48">
        {/* Círculo externo com preenchimento */}
        <div class="absolute inset-0 w-full h-full rounded-full bg-[#282524] border-2 border-snow-white/30"></div>
        
        {/* Linhas divisórias (vertical e horizontal) */}
        <div class="absolute top-0 left-1/2 w-0.5 h-full bg-snow-white/30 transform -translate-x-1/2 z-10"></div>
        <div class="absolute left-0 top-1/2 w-full h-0.5 bg-snow-white/30 transform -translate-y-1/2 z-10"></div>
        
        {/* Círculo central com cor sólida e z-index alto */}
        <div class="absolute inset-12 w-24 h-24 rounded-full bg-[#2F2D2C] flex items-center justify-center z-20">
          <span class="text-snow-white text-xs font-medium">SISTEMA</span>
        </div>
        
        {/* Setor ativo - apenas no arco externo */}
        <div class="absolute inset-0 w-full h-full">
          {/* Top-left (INTERCEPTAR) - Setor ativo fino */}
          <div 
            data-segment="0"
            class="absolute top-0 left-0 w-24 h-24"
          >
            <div class="absolute top-0 left-0 w-24 h-24 rounded-tl-full border-l-4 border-t-4 border-snow-white opacity-0 transition-all duration-500" data-active-sector="0"></div>
          </div>
          
          {/* Top-right (PRÉ-PROCESSAR) - Setor ativo fino */}
          <div 
            data-segment="1"
            class="absolute top-0 right-0 w-24 h-24"
          >
            <div class="absolute top-0 right-0 w-24 h-24 rounded-tr-full border-r-4 border-t-4 border-snow-white opacity-0 transition-all duration-500" data-active-sector="1"></div>
          </div>
          
          {/* Bottom-right (TRANSFORMAR) - Setor ativo fino */}
          <div 
            data-segment="2"
            class="absolute bottom-0 right-0 w-24 h-24"
          >
            <div class="absolute bottom-0 right-0 w-24 h-24 rounded-br-full border-r-4 border-b-4 border-snow-white opacity-0 transition-all duration-500" data-active-sector="2"></div>
          </div>
          
          {/* Bottom-left (COLLAB) - Setor ativo fino */}
          <div 
            data-segment="3"
            class="absolute bottom-0 left-0 w-24 h-24"
          >
            <div class="absolute bottom-0 left-0 w-24 h-24 rounded-bl-full border-l-4 border-b-4 border-snow-white opacity-0 transition-all duration-500" data-active-sector="3"></div>
          </div>
        </div>
        
        {/* Ícones centralizados entre os círculos - REPOSICIONADOS */}
        {/* Top-left (INTERCEPTAR) */}
        <div class="absolute top-2 left-2 w-20 h-20 flex items-center justify-center">
          <div class="w-5 h-5 text-snow-white">
            <div dangerouslySetInnerHTML={{ __html: stepIcons[0] }}></div>
          </div>
        </div>
        
        {/* Top-right (PRÉ-PROCESSAR) */}
        <div class="absolute top-2 right-2 w-20 h-20 flex items-center justify-center">
          <div class="w-5 h-5 text-snow-white">
            <div dangerouslySetInnerHTML={{ __html: stepIcons[1] }}></div>
          </div>
        </div>
        
        {/* Bottom-right (TRANSFORMAR) */}
        <div class="absolute bottom-2 right-2 w-20 h-20 flex items-center justify-center">
          <div class="w-5 h-5 text-snow-white">
            <div dangerouslySetInnerHTML={{ __html: stepIcons[2] }}></div>
          </div>
        </div>
        
        {/* Bottom-left (COLLAB) */}
        <div class="absolute bottom-2 left-2 w-20 h-20 flex items-center justify-center">
          <div class="w-5 h-5 text-snow-white">
            <div dangerouslySetInnerHTML={{ __html: stepIcons[3] }}></div>
          </div>
        </div>
      </div>

      <style>{`
        [data-segment] {
          transition: all 0.5s ease-in-out;
        }
        
        [data-active-sector].active {
          opacity: 1 !important;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
        }
        
        /* Animação de rotação suave para o radial controller */
        .radial-controller {
          transition: transform 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}