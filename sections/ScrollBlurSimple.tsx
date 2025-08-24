export interface Props {
  /**
   * @description Intensidade do blur (0-40px)
   * @default 15
   */
  blurIntensity?: number;
  
  /**
   * @description Altura da área de blur em pixels
   * @default 150
   */
  blurHeight?: number;
  
  /**
   * @description Z-index do overlay
   * @default 999
   */
  zIndex?: number;
}

export default function ScrollBlurSimple({
  blurIntensity = 15,
  blurHeight = 150,
  zIndex = 999,
}: Props) {
  const overlayId = `scroll-blur-simple-${Math.random().toString(36).substr(2, 9)}`;
  
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
            backdrop-filter: blur(${blurIntensity}px);
            -webkit-backdrop-filter: blur(${blurIntensity}px);
            mask: linear-gradient(
              to top,
              black 0%,
              black 20%,
              rgba(0,0,0,0.8) 40%,
              rgba(0,0,0,0.6) 60%,
              rgba(0,0,0,0.3) 80%,
              transparent 100%
            );
            -webkit-mask: linear-gradient(
              to top,
              black 0%,
              black 20%,
              rgba(0,0,0,0.8) 40%,
              rgba(0,0,0,0.6) 60%,
              rgba(0,0,0,0.3) 80%,
              transparent 100%
            );
            pointer-events: none;
            z-index: ${zIndex};
          }
        `}
      </style>
      
      <div id={overlayId}></div>
    </div>
  );
}
