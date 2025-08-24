export interface Props {
  /**
   * @description Intensidade máxima do blur na base (0-40px)
   * @default 25
   */
  maxBlurIntensity?: number;
  
  /**
   * @description Altura da área de blur em pixels
   * @default 120
   */
  blurHeight?: number;
  
  /**
   * @description Z-index do overlay
   * @default 999
   */
  zIndex?: number;
}

export default function ScrollBlurGradient2({
  maxBlurIntensity = 25,
  blurHeight = 120,
  zIndex = 999,
}: Props) {
  const overlayId = `scroll-blur-grad-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div>
      <style>
        {`
          #${overlayId} {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            height: ${blurHeight}px;
            pointer-events: none;
            z-index: ${zIndex};
          }
          
          /* Camada base com blur máximo */
          #${overlayId}::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 100%;
            backdrop-filter: blur(${maxBlurIntensity}px);
            -webkit-backdrop-filter: blur(${maxBlurIntensity}px);
            mask: linear-gradient(
              to top,
              rgba(0,0,0,1) 0%,
              rgba(0,0,0,0.95) 8%,
              rgba(0,0,0,0.85) 16%,
              rgba(0,0,0,0.7) 25%,
              rgba(0,0,0,0.5) 35%,
              rgba(0,0,0,0.3) 50%,
              rgba(0,0,0,0.15) 65%,
              rgba(0,0,0,0.05) 80%,
              rgba(0,0,0,0.01) 90%,
              transparent 100%
            );
            -webkit-mask: linear-gradient(
              to top,
              rgba(0,0,0,1) 0%,
              rgba(0,0,0,0.95) 8%,
              rgba(0,0,0,0.85) 16%,
              rgba(0,0,0,0.7) 25%,
              rgba(0,0,0,0.5) 35%,
              rgba(0,0,0,0.3) 50%,
              rgba(0,0,0,0.15) 65%,
              rgba(0,0,0,0.05) 80%,
              rgba(0,0,0,0.01) 90%,
              transparent 100%
            );
          }
        `}
      </style>
      
      <div id={overlayId}></div>
    </div>
  );
}
