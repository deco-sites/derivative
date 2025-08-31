import Icon from "site/components/ui/Icon.tsx";
import { asset } from "@deco/deco/htmx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Service {
  title: string;
  subtitle?: string;
  /** @format rich-text */
  description: string;
  tags?: string[];
  icon?: string;
}

export interface Props {
  title?: string;
  subtitle?: string;
  description?: string;
  cta?: CTA;
  services?: Service[];
}

export default function Services({
  title = "Para marcas que querem fazer diferente",
  subtitle = "Soluções B2B",
  description = "Existem muitas formas de se conectar ao Deriva e te convidamos a criar junto um futuro regenerativo onde inovação, estética e impacto caminham lado a lado",
  cta,
  services = [
    {
      title: "Derivative",
      subtitle: "Fornecimento de material regenerativo",
      description: "Fornecimento de Derivative para marcas que querem inovar seus produtos com um material exclusivo, regenerativo e cheio de significado.",
      icon: "https://assets.decocache.com/derivative/6563a34f-62c5-4a35-a71d-3a1e44bc0170/services_1.svg",
      tags: ["Material Exclusivo", "Impacto Regenerativo", "Narrativa de Propósito"]
    },
    {
      title: "Deriva Estúdio",
      subtitle: "Co-criação de soluções inteligentes",
      description: "Nossa frente criativa une design, engenharia, biologia e tecnologia para desenvolver soluções inteligentes e objetos de desejo usando o Derivative.",
      icon: "https://assets.decocache.com/derivative/e9d8f699-07d8-4ccb-a376-b3ed527b3ea8/services_2.svg",
      tags: ["Design Multidisciplinar", "Ciclo de Vida Completo", "Objetos de Desejo"]
    },
    {
      title: "Deriva Way",
      subtitle: "Circularidade completa",
      description: "Desenvolvemos um Derivative exclusivo utilizando os resíduos têxteis pré-consumo das fábricas, permitindo que o resíduo retorne para a cadeia como produto do ecossistema da marca.",
      icon: "https://assets.decocache.com/derivative/3d02652f-4c28-4d48-aacd-7ca319460042/services_3.svg",
      tags: ["Economia Circular", "Resíduos Próprios", "Conexão Oceânica"]
    }
  ],
}: Props) {
  return (
    <div style="background-color: #1d1b1d; min-height: 100vh; padding: 80px 0;">
      {/* Lottie Player CDN */}
      <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
      
      {/* CSS for animations */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .spinner-loading {
          animation: spin 1s linear infinite !important;
        }
        lottie-player {
          width: 100%;
          height: 100%;
        }
        .chevron-visible {
          color: #ffffff !important;
          stroke: currentColor !important;
          stroke-width: 3 !important;
          opacity: 1 !important;
          fill: none !important;
        }
        .eyebrow-text {
          font-family: 'Geist Mono', 'JetBrains Mono', monospace !important;
          font-size: 12px !important;
          font-weight: 500 !important;
          letter-spacing: 0.1em !important;
          text-transform: uppercase !important;
          color: rgba(255, 255, 255, 0.7) !important;
        }
        .title-text {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-weight: 400 !important;
          line-height: 1.1 !important;
          font-size: clamp(3rem, 6vw, 5rem) !important;
          max-width: 900px !important;
          margin: 0 auto !important;
        }
        .subtitle-text {
          max-width: 800px !important;
          margin: 0 auto !important;
        }
        .service-description-short {
          max-width: 384px !important; /* Same as max-w-sm */
        }
        @media (min-width: 1024px) {
          .title-text {
            margin: 0 auto !important;
          }
          .subtitle-text {
            margin: 0 auto !important;
          }
        }
        .cta-button {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          padding: 12px 24px !important;
          background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%) !important;
          color: #000000 !important;
          border: none !important;
          border-radius: 6px !important;
          font-weight: 500 !important;
          font-size: 14px !important;
          text-decoration: none !important;
          transition: all 0.3s ease !important;
          text-align: center !important;
          min-height: 44px !important;
        }
        .cta-button:hover {
          background: linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%) !important;
          transform: translateY(-1px) !important;
          box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2) !important;
        }
      `}</style>
      
      {/* SVG Gradient Definition */}
      <svg width="0" height="0" style="position: absolute;">
        <defs>
          <linearGradient id="chevron-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:rgba(255,255,255,0.9);stop-opacity:1" />
            <stop offset="100%" style="stop-color:rgba(255,255,255,1);stop-opacity:1" />
          </linearGradient>
        </defs>
      </svg>
      <div class="container lg:mx-auto mx-4 text-sm">
        <div class="flex flex-col gap-10 lg:gap-16">
          {/* Header Content */}
          <div class="text-center space-y-8">
            <div class="space-y-12">
              <p class="eyebrow-text">
                {subtitle}
              </p>
              <h2 class="text-white title-text">
                {title}
              </h2>
            </div>
            <div style="margin-top: 32px;">
              <p class="text-lg leading-relaxed subtitle-text" style="color: rgba(255, 255, 255, 0.85);">
                {description}
              </p>
            </div>
            {cta && (
              <a
                key={cta?.id}
                id={cta?.id}
                href={cta?.href}
                target={cta?.href.includes("http") ? "_blank" : "_self"}
                class="cta-button"
              >
                {cta?.text}
              </a>
            )}
          </div>

          {/* Services Accordion */}
          <div class="w-full">
            <div class="space-y-4">
              {services?.map((service, index) => (
                <details 
                  key={index}
                  class="group bg-white/5 rounded-lg transition-all duration-300 relative overflow-hidden"
                >
                  {/* Background image when expanded */}
                  {service.icon && (
                    <div class="absolute inset-0 opacity-0 group-open:opacity-100 transition-opacity duration-700 ease-out pointer-events-none">
                      <img 
                        src={service.icon}
                        alt=""
                        class="w-full h-full object-cover scale-150 group-open:scale-100 transition-transform duration-700 ease-out"
                      />
                    </div>
                  )}
                  
                  <summary class="cursor-pointer p-6 flex items-center justify-between relative z-10">
                    {/* Conteúdo principal (ícone + título + subtítulo) */}
                    <div class="flex items-center gap-6 flex-1">
                      {/* Container circular com imagem */}
                      <div 
                        id="service-icon-container"
                        class="flex-shrink-0 rounded-full bg-white/10 border border-white/20 overflow-hidden group-open:opacity-30 transition-opacity duration-700" 
                        style="width: 80px !important; height: 80px !important; min-width: 80px !important; min-height: 80px !important; max-width: 80px !important; max-height: 80px !important; background-color: rgba(255,255,255,0.1) !important; border: 2px solid rgba(255,255,255,0.2) !important; border-radius: 50% !important;"
                      >
                        {service.icon && (
                          <img 
                            src={service.icon}
                            alt={`Ícone ${service.title}`}
                            class="w-full h-full object-cover group-open:scale-110 transition-transform duration-700 ease-out"
                          />
                        )}
                      </div>
                      {/* Título do serviço */}
                      <h3 class="text-xl font-mono font-normal text-white group-open:text-white/90 transition-colors uppercase tracking-wide whitespace-nowrap">
                        {service.title}
                      </h3>
                      
                      {/* Subtítulo do serviço */}
                      <p class="text-base font-sans italic ml-12" style="color: rgba(243, 245, 245, 0.7);">
                        {service.subtitle || ""}
                      </p>
                    </div>
                    
                    {/* Chevron */}
                    <span class="flex-none transition-transform duration-300 group-open:rotate-180">
                      <Icon
                        id="ChevronDown"
                        width={24}
                        height={24}
                        strokeWidth={3}
                        class="chevron-visible"
                      />
                    </span>
                  </summary>
                  
                   <div class="px-6 pb-8 group-open:animate-fadeIn relative z-10" style="margin-left: 104px !important; min-height: 200px;">
                    <div class="flex gap-8 items-start">
                      {/* Lottie Animation Area */}
                      <div class="flex-shrink-0 flex items-center justify-center" style="width: 300px; height: 250px; min-width: 300px; min-height: 250px; background: transparent;">
                                <div
          id={`lottie-container-${index}`}
          style="width: 280px; height: 230px; overflow: hidden;"
          dangerouslySetInnerHTML={{
            __html: `<lottie-player
              src="${index === 0 ? asset("/Scene_derivative.json") : index === 2 ? asset("/Scene-way.json") : asset("/Scene-1.json")}"
              background="transparent"
              speed="1"
              style="width: 140%; height: 140%; transform: translate(-14.3%, -14.3%);"
              loop
              autoplay>
            </lottie-player>`
          }}
        ></div>
                      </div>
                      
                      {/* Content Area */}
                      <div class="flex-1 space-y-6">
                        <p class="leading-relaxed max-w-sm service-description-short" style="color: #F3F5F5;">
                          {service.description}
                        </p>
                        
                        {/* Tags */}
                        {service.tags && service.tags.length > 0 && (
                          <div class="flex flex-wrap gap-3 mt-6 mb-8">
                            {service.tags.map((tag, tagIndex) => (
                              <span 
                                key={tagIndex}
                                class="px-4 py-2 text-xs font-medium rounded-full border"
                                style="color: #F3F5F5; border-color: rgba(255,255,255,0.2); background-color: rgba(255,255,255,0.05);"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Lottie Player Monitor */}
      <script type="text/javascript">{`
        console.log('Services: Script loaded');
        
        document.addEventListener('DOMContentLoaded', function() {
          console.log('Services: DOM loaded');
          
          // Wait for lottie-player elements to be ready
          setTimeout(() => {
            const lottieElements = document.querySelectorAll('lottie-player');
            console.log('Services: Found', lottieElements.length, 'lottie-player elements');
            
            lottieElements.forEach((player, index) => {
              console.log('Services: Monitoring lottie player', index);
              
              // Add error handler
              player.addEventListener('error', () => {
                console.log('Services: Lottie player', index, 'failed to load');
              });
              
              // Add ready handler
              player.addEventListener('ready', () => {
                console.log('Services: Lottie player', index, 'is ready and playing');
              });
              
              // Force play if needed
              if (player.play && typeof player.play === 'function') {
                player.play();
              }
            });
          }, 1000);
        });
      `}</script>
    </div>
  );
}
