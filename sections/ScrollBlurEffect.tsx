export interface Props {
  /**
   * @description Intensidade do blur (0-20px)
   * @default 10
   */
  blurIntensity?: number;
  
  /**
   * @description Altura da área de blur em pixels
   * @default 100
   */
  blurHeight?: number;
  
  /**
   * @description Opacidade do overlay (0-1)
   * @default 0.8
   */
  overlayOpacity?: number;
  
  /**
   * @description Cor do overlay
   * @default "white"
   */
  overlayColor?: string;
  
  /**
   * @description Distância do bottom em pixels onde o efeito começa
   * @default 0
   */
  bottomOffset?: number;
  
  /**
   * @description A partir de que porcentagem da página começar o efeito (0-1)
   * @default 0.75
   */
  startThreshold?: number;
}

export default function ScrollBlurEffect({
  blurIntensity = 10,
  blurHeight = 100,
  overlayOpacity = 0.8,
  overlayColor = "white",
  bottomOffset = 0,
  startThreshold = 0.75,
}: Props) {
  return (
    <>
      {/* Inline script for better compatibility with deco.cx HTMX */}
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              // Configuration
              const config = {
                blurIntensity: ${blurIntensity},
                blurHeight: ${blurHeight},
                overlayOpacity: ${overlayOpacity},
                overlayColor: "${overlayColor}",
                bottomOffset: ${bottomOffset},
                startThreshold: ${startThreshold}
              };
              
              // Remove any existing overlay to prevent duplicates
              const existingOverlay = document.getElementById("scroll-blur-overlay");
              if (existingOverlay) {
                existingOverlay.remove();
              }

              // Create the blur overlay element
              const blurOverlay = document.createElement("div");
              blurOverlay.id = "scroll-blur-overlay";
              blurOverlay.style.cssText = \`
                position: fixed;
                bottom: \${config.bottomOffset}px;
                left: 0;
                right: 0;
                height: \${config.blurHeight}px;
                background: linear-gradient(to top, \${config.overlayColor} 0%, transparent 100%);
                backdrop-filter: blur(\${config.blurIntensity}px);
                -webkit-backdrop-filter: blur(\${config.blurIntensity}px);
                pointer-events: none;
                z-index: 1000;
                opacity: 0;
                transition: opacity 0.3s ease-out;
                will-change: opacity;
              \`;
              
              document.body.appendChild(blurOverlay);
              
              let ticking = false;
              
              const updateBlurEffect = () => {
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const windowHeight = window.innerHeight;
                const documentHeight = document.documentElement.scrollHeight;
                
                // Calculate how close we are to the bottom
                const scrollPercentage = (scrollTop + windowHeight) / documentHeight;
                
                if (scrollPercentage > config.startThreshold) {
                  // Calculate opacity based on scroll position with smooth easing
                  const blurProgress = Math.min(
                    (scrollPercentage - config.startThreshold) / (1 - config.startThreshold),
                    1
                  );
                  
                  // Apply ease-out curve for smoother animation
                  const easedProgress = 1 - Math.pow(1 - blurProgress, 3);
                  
                  blurOverlay.style.opacity = (easedProgress * config.overlayOpacity).toString();
                } else {
                  blurOverlay.style.opacity = "0";
                }
                
                ticking = false;
              };
              
              const handleScroll = () => {
                if (!ticking) {
                  requestAnimationFrame(updateBlurEffect);
                  ticking = true;
                }
              };
              
              // Add scroll listener
              window.addEventListener("scroll", handleScroll, { passive: true });
              
              // Initial check after DOM is ready
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', updateBlurEffect);
              } else {
                updateBlurEffect();
              }
              
              // Cleanup on page unload
              window.addEventListener('beforeunload', () => {
                window.removeEventListener("scroll", handleScroll);
                const overlay = document.getElementById("scroll-blur-overlay");
                if (overlay) {
                  overlay.remove();
                }
              });
            })();
          `
        }}
      />
    </>
  );
}
