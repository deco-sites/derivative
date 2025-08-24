export interface Props {
  /**
   * @description Intensidade do blur (0-20px)
   * @default 10
   */
  blurIntensity?: number;
  
  /**
   * @description Altura da área de blur em pixels
   * @default 120
   */
  blurHeight?: number;
  
  /**
   * @description Opacidade do overlay (0-1)
   * @default 0.85
   */
  overlayOpacity?: number;
  
  /**
   * @description Cor de fundo do gradiente (suporte a hex, rgb, rgba)
   * @default "#ffffff"
   */
  backgroundColor?: string;
  
  /**
   * @description A partir de que porcentagem da página começar o efeito (0-100)
   * @default 70
   */
  startPercentage?: number;
}

export default function ScrollBlurHybrid({
  blurIntensity = 10,
  blurHeight = 120,
  overlayOpacity = 0.85,
  backgroundColor = "#ffffff",
  startPercentage = 70,
}: Props) {
  const overlayId = `scroll-blur-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div>
      {/* CSS base styles */}
      <style>
        {`
          #${overlayId} {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            height: ${blurHeight}px;
            background: linear-gradient(
              to top,
              ${backgroundColor} 0%,
              ${backgroundColor}e6 15%,
              ${backgroundColor}cc 30%,
              ${backgroundColor}99 50%,
              ${backgroundColor}66 70%,
              ${backgroundColor}33 85%,
              transparent 100%
            );
            backdrop-filter: blur(0px);
            -webkit-backdrop-filter: blur(0px);
            pointer-events: none;
            z-index: 999;
            opacity: 0;
            transition: all 0.3s ease-out;
            will-change: opacity, backdrop-filter;
          }
        `}
      </style>
      
      {/* Hidden overlay element */}
      <div id={overlayId}></div>
      
      {/* Progressive enhancement script */}
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              const overlay = document.getElementById('${overlayId}');
              if (!overlay) return;
              
              const config = {
                blurIntensity: ${blurIntensity},
                overlayOpacity: ${overlayOpacity},
                startPercentage: ${startPercentage}
              };
              
              let ticking = false;
              
              function updateBlur() {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const windowHeight = window.innerHeight;
                const documentHeight = document.documentElement.scrollHeight;
                const scrollPercentage = (scrollTop + windowHeight) / documentHeight * 100;
                
                if (scrollPercentage >= config.startPercentage) {
                  const progress = Math.min(
                    (scrollPercentage - config.startPercentage) / (100 - config.startPercentage),
                    1
                  );
                  
                  // Smooth easing
                  const easedProgress = progress * progress * (3.0 - 2.0 * progress);
                  
                  const opacity = easedProgress * config.overlayOpacity;
                  const blur = easedProgress * config.blurIntensity;
                  
                  overlay.style.opacity = opacity.toString();
                  overlay.style.backdropFilter = 'blur(' + blur + 'px)';
                  overlay.style.webkitBackdropFilter = 'blur(' + blur + 'px)';
                } else {
                  overlay.style.opacity = '0';
                  overlay.style.backdropFilter = 'blur(0px)';
                  overlay.style.webkitBackdropFilter = 'blur(0px)';
                }
                
                ticking = false;
              }
              
              function onScroll() {
                if (!ticking) {
                  requestAnimationFrame(updateBlur);
                  ticking = true;
                }
              }
              
              window.addEventListener('scroll', onScroll, { passive: true });
              updateBlur(); // Initial check
              
              // Cleanup
              window.addEventListener('beforeunload', function() {
                window.removeEventListener('scroll', onScroll);
              });
            });
          `
        }}
      />
    </div>
  );
}
