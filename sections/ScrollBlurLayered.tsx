export interface Props {
  /**
   * @description Intensidade máxima do blur na base (0-50px)
   * @default 30
   */
  maxBlurIntensity?: number;
  
  /**
   * @description Altura da área de blur em pixels
   * @default 180
   */
  blurHeight?: number;
  
  /**
   * @description Z-index do overlay
   * @default 999
   */
  zIndex?: number;
}

export default function ScrollBlurLayered({
  maxBlurIntensity = 30,
  blurHeight = 180,
  zIndex = 999,
}: Props) {
  const overlayId = `scroll-blur-layered-${Math.random().toString(36).substr(2, 9)}`;
  
  // Criar múltiplas camadas sobrepostas para gradiente de blur
  const layers = [];
  const numLayers = 12; // Mais camadas = transição mais suave
  
  for (let i = 0; i < numLayers; i++) {
    const progress = i / (numLayers - 1); // 0 a 1
    const layerHeight = blurHeight * (1 - progress * 0.7); // Camadas menores conforme sobem
    const blurIntensity = maxBlurIntensity * (1 - progress); // Blur diminui conforme sobe
    const opacity = Math.pow(1 - progress, 1.5); // Opacidade diminui exponencialmente
    
    layers.push({
      height: layerHeight,
      blur: blurIntensity,
      opacity: opacity,
      zIndex: zIndex - i // Camadas inferiores ficam na frente
    });
  }
  
  return (
    <div>
      <style>
        {`
          .blur-container-${overlayId} {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            height: ${blurHeight}px;
            pointer-events: none;
            z-index: ${zIndex};
          }
          
          ${layers.map((layer, index) => `
            .blur-layer-${overlayId}-${index} {
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              height: ${layer.height}px;
              backdrop-filter: blur(${layer.blur}px);
              -webkit-backdrop-filter: blur(${layer.blur}px);
              opacity: ${layer.opacity};
              pointer-events: none;
              z-index: ${layer.zIndex};
            }
          `).join('')}
        `}
      </style>
      
      <div className={`blur-container-${overlayId}`}>
        {layers.map((layer, index) => (
          <div 
            key={index} 
            className={`blur-layer-${overlayId}-${index}`}
          ></div>
        ))}
      </div>
    </div>
  );
}
