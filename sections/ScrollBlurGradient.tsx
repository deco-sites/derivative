import { useEffect } from "preact/hooks";

export interface Props {
  /**
   * @description Intensidade do blur (0-20px)
   * @default 8
   */
  blurIntensity?: number;
  
  /**
   * @description Altura da área de gradiente em pixels
   * @default 200
   */
  gradientHeight?: number;
  
  /**
   * @description Cor de fundo para o gradiente
   * @default "#ffffff"
   */
  backgroundColor?: string;
  
  /**
   * @description Opacidade máxima do efeito (0-1)
   * @default 0.95
   */
  maxOpacity?: number;
  
  /**
   * @description A partir de que porcentagem da página começar o efeito (0-1)
   * @default 0.8
   */
  startThreshold?: number;
}

export default function ScrollBlurGradient({
  blurIntensity = 8,
  gradientHeight = 200,
  backgroundColor = "#ffffff",
  maxOpacity = 0.95,
  startThreshold = 0.8,
}: Props) {
  useEffect(() => {
    // Remove any existing overlay to prevent duplicates
    const existingOverlay = document.getElementById("scroll-blur-gradient");
    if (existingOverlay) {
      existingOverlay.remove();
    }

    // Create the blur gradient overlay
    const blurOverlay = document.createElement("div");
    blurOverlay.id = "scroll-blur-gradient";
    blurOverlay.style.cssText = `
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      height: ${gradientHeight}px;
      background: linear-gradient(
        to top,
        ${backgroundColor} 0%,
        ${backgroundColor}ee 15%,
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
    `;
    
    document.body.appendChild(blurOverlay);
    
    let ticking = false;
    
    const updateBlurEffect = () => {
      const scrollTop = globalThis.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = globalThis.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate scroll progress
      const scrollPercentage = (scrollTop + windowHeight) / documentHeight;
      
      if (scrollPercentage > startThreshold) {
        // Calculate progress within the blur zone
        const blurProgress = Math.min(
          (scrollPercentage - startThreshold) / (1 - startThreshold),
          1
        );
        
        // Apply smooth easing curve
        const easedProgress = blurProgress * blurProgress * (3.0 - 2.0 * blurProgress);
        
        // Update overlay opacity and blur
        const currentOpacity = easedProgress * maxOpacity;
        const currentBlur = easedProgress * blurIntensity;
        
        blurOverlay.style.opacity = currentOpacity.toString();
        blurOverlay.style.backdropFilter = `blur(${currentBlur}px)`;
        blurOverlay.style.setProperty('-webkit-backdrop-filter', `blur(${currentBlur}px)`);
      } else {
        blurOverlay.style.opacity = "0";
        blurOverlay.style.backdropFilter = "blur(0px)";
        blurOverlay.style.setProperty('-webkit-backdrop-filter', 'blur(0px)');
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
    globalThis.addEventListener("scroll", handleScroll, { passive: true });
    
    // Initial check
    updateBlurEffect();
    
    // Cleanup function
    return () => {
      globalThis.removeEventListener("scroll", handleScroll);
      const existingOverlay = document.getElementById("scroll-blur-gradient");
      if (existingOverlay) {
        existingOverlay.remove();
      }
    };
  }, [blurIntensity, gradientHeight, backgroundColor, maxOpacity, startThreshold]);

  return null; // This component doesn't render anything visible
}
