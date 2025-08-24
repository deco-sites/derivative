export interface Props {
  /**
   * @description Intensidade do blur (0-20px)
   * @default 8
   */
  blurIntensity?: number;
  
  /**
   * @description Altura da área de blur em pixels
   * @default 120
   */
  blurHeight?: number;
  
  /**
   * @description Opacidade do overlay (0-1)
   * @default 0.8
   */
  overlayOpacity?: number;
  
  /**
   * @description Cor de fundo do gradiente
   * @default "#ffffff"
   */
  backgroundColor?: string;
  
  /**
   * @description Z-index do overlay
   * @default 1000
   */
  zIndex?: number;
}

export default function ScrollBlurCSS({
  blurIntensity = 8,
  blurHeight = 120,
  overlayOpacity = 0.8,
  backgroundColor = "#ffffff",
  zIndex = 1000,
}: Props) {
  const overlayId = `scroll-blur-overlay-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <>
      {/* CSS-only blur effect */}
      <style>
        {`
          .scroll-blur-overlay {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            height: ${blurHeight}px;
            background: linear-gradient(
              to top,
              ${backgroundColor} 0%,
              ${backgroundColor}f0 10%,
              ${backgroundColor}e0 20%,
              ${backgroundColor}c0 35%,
              ${backgroundColor}90 50%,
              ${backgroundColor}60 65%,
              ${backgroundColor}30 80%,
              ${backgroundColor}10 90%,
              transparent 100%
            );
            backdrop-filter: blur(${blurIntensity}px);
            -webkit-backdrop-filter: blur(${blurIntensity}px);
            pointer-events: none;
            z-index: ${zIndex};
            opacity: 0;
            transition: opacity 0.3s ease-out;
            animation: fadeInOnScroll 0.1s ease-out forwards;
            animation-timeline: scroll();
            animation-range: 60% 100%;
          }
          
          @supports (animation-timeline: scroll()) {
            .scroll-blur-overlay {
              animation: blurFadeIn linear;
              animation-timeline: scroll();
              animation-range: 60% 100%;
            }
            
            @keyframes blurFadeIn {
              0% {
                opacity: 0;
                backdrop-filter: blur(0px);
                -webkit-backdrop-filter: blur(0px);
              }
              100% {
                opacity: ${overlayOpacity};
                backdrop-filter: blur(${blurIntensity}px);
                -webkit-backdrop-filter: blur(${blurIntensity}px);
              }
            }
          }
          
          /* Fallback for browsers without scroll-timeline */
          @supports not (animation-timeline: scroll()) {
            .scroll-blur-overlay {
              opacity: ${overlayOpacity * 0.6};
            }
            
            @media (min-height: 800px) {
              .scroll-blur-overlay {
                opacity: ${overlayOpacity * 0.8};
              }
            }
          }
        `}
      </style>
      
      {/* The actual overlay element */}
      <div id={overlayId} className="scroll-blur-overlay"></div>
    </>
  );
}
