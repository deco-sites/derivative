export interface Props {
  /**
   * @description Intensidade do blur (0-30px)
   * @default 12
   */
  blurIntensity?: number;
  
  /**
   * @description Altura da área de blur em pixels
   * @default 120
   */
  blurHeight?: number;
  
  /**
   * @description Opacidade máxima do efeito (0-1)
   * @default 0.6
   */
  maxOpacity?: number;
  
  /**
   * @description Cor de fundo base (sem alpha)
   * @default "#ffffff"
   */
  baseColor?: string;
  
  /**
   * @description Sempre visível (true) ou só quando rola (false)
   * @default true
   */
  alwaysVisible?: boolean;
  
  /**
   * @description Z-index do overlay
   * @default 999
   */
  zIndex?: number;
}

export default function ScrollBlurAlwaysOn({
  blurIntensity = 12,
  blurHeight = 120,
  maxOpacity = 0.6,
  baseColor = "#ffffff",
  alwaysVisible = true,
  zIndex = 999,
}: Props) {
  const overlayId = `scroll-blur-always-${Math.random().toString(36).substr(2, 9)}`;
  
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
            /* Gradiente muito mais sutil, concentrado na base */
            background: linear-gradient(
              to top,
              ${baseColor} 0%,
              rgba(255, 255, 255, 0.85) 3%,
              rgba(255, 255, 255, 0.65) 8%,
              rgba(255, 255, 255, 0.45) 15%,
              rgba(255, 255, 255, 0.28) 25%,
              rgba(255, 255, 255, 0.15) 35%,
              rgba(255, 255, 255, 0.08) 45%,
              rgba(255, 255, 255, 0.04) 55%,
              rgba(255, 255, 255, 0.02) 65%,
              rgba(255, 255, 255, 0.01) 75%,
              rgba(255, 255, 255, 0.005) 85%,
              transparent 95%,
              transparent 100%
            );
            /* Blur mais sutil para evitar glow */
            backdrop-filter: ${alwaysVisible ? `blur(${blurIntensity}px) saturate(1.1)` : 'none'};
            -webkit-backdrop-filter: ${alwaysVisible ? `blur(${blurIntensity}px) saturate(1.1)` : 'none'};
            pointer-events: none;
            z-index: ${zIndex};
            opacity: ${alwaysVisible ? maxOpacity : 0};
            transition: opacity 0.6s ease-out;
            will-change: opacity;
          }
          
          /* Máscara adicional para transição ainda mais suave */
          #${overlayId}::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(
              to top,
              transparent 0%,
              transparent 70%,
              rgba(255, 255, 255, 0.01) 80%,
              rgba(255, 255, 255, 0.02) 90%,
              rgba(255, 255, 255, 0.03) 95%,
              transparent 100%
            );
            pointer-events: none;
            mix-blend-mode: normal;
          }
        `}
      </style>
      
      {/* Hidden overlay element */}
      <div id={overlayId}></div>
      
      {/* Enhancement script for dynamic effects if needed */}
      {!alwaysVisible && (
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                const overlay = document.getElementById('${overlayId}');
                if (!overlay) return;
                
                const config = {
                  blurIntensity: ${blurIntensity},
                  overlayOpacity: ${maxOpacity}
                };
                
                let ticking = false;
                
                function updateBlur() {
                  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                  
                  // Always show some blur, increase with scroll
                  const baseBlur = config.blurIntensity * 0.4;
                  const maxBlur = config.blurIntensity;
                  const scrollBlur = Math.min(scrollTop / 600, 1) * (maxBlur - baseBlur);
                  const totalBlur = baseBlur + scrollBlur;
                  
                  const baseOpacity = config.overlayOpacity * 0.3;
                  const maxOpacity = config.overlayOpacity;
                  const scrollOpacity = Math.min(scrollTop / 400, 1) * (maxOpacity - baseOpacity);
                  const totalOpacity = baseOpacity + scrollOpacity;
                  
                  overlay.style.opacity = totalOpacity.toString();
                  overlay.style.backdropFilter = 'blur(' + totalBlur + 'px)';
                  overlay.style.webkitBackdropFilter = 'blur(' + totalBlur + 'px)';
                  
                  ticking = false;
                }
                
                function onScroll() {
                  if (!ticking) {
                    requestAnimationFrame(updateBlur);
                    ticking = true;
                  }
                }
                
                window.addEventListener('scroll', onScroll, { passive: true });
                updateBlur(); // Initial setup
                
                // Cleanup
                window.addEventListener('beforeunload', function() {
                  window.removeEventListener('scroll', onScroll);
                });
              });
            `
          }}
        />
      )}
    </div>
  );
}
