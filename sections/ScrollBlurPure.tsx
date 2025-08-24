export interface Props {
  /**
   * @description Intensidade máxima do blur (0-30px)
   * @default 20
   */
  maxBlurIntensity?: number;
  
  /**
   * @description Altura total da área de blur em pixels
   * @default 150
   */
  blurHeight?: number;
  
  /**
   * @description Z-index do overlay
   * @default 999
   */
  zIndex?: number;
}

export default function ScrollBlurPure({
  maxBlurIntensity = 20,
  blurHeight = 150,
  zIndex = 999,
}: Props) {
  const overlayId = `scroll-blur-pure-${Math.random().toString(36).substr(2, 9)}`;
  
  // Criar múltiplas camadas com diferentes intensidades de blur
  const blurLayers = [];
  const numLayers = 8; // Número de camadas para transição suave
  
  for (let i = 0; i < numLayers; i++) {
    const layerHeight = blurHeight / numLayers;
    const blurIntensity = maxBlurIntensity * ((numLayers - i) / numLayers);
    const opacity = 1 - (i / numLayers);
    
    blurLayers.push({
      height: layerHeight,
      blur: blurIntensity,
      opacity: opacity,
      bottom: i * layerHeight
    });
  }
  
  return (
    <div>
      {/* CSS para múltiplas camadas de blur */}
      <style>
        {`
          .blur-layer-container {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            height: ${blurHeight}px;
            pointer-events: none;
            z-index: ${zIndex};
          }
          
          ${blurLayers.map((layer, index) => `
            .blur-layer-${index} {
              position: absolute;
              bottom: ${layer.bottom}px;
              left: 0;
              right: 0;
              height: ${layer.height}px;
              backdrop-filter: blur(${layer.blur}px);
              -webkit-backdrop-filter: blur(${layer.blur}px);
              opacity: ${layer.opacity};
              pointer-events: none;
            }
          `).join('')}
        `}
      </style>
      
      {/* Container com múltiplas camadas */}
      <div className="blur-layer-container">
        {blurLayers.map((layer, index) => (
          <div key={index} className={`blur-layer-${index}`}></div>
        ))}
      </div>
    </div>
  );
}
