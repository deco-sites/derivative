export interface Props {
  /**
   * @description Intensidade máxima do blur na base (0-50px)
   * @default 25
   */
  maxBlurIntensity?: number;
  
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

export default function ScrollBlurDynamic({
  maxBlurIntensity = 25,
  blurHeight = 150,
  zIndex = 999,
}: Props) {
  const containerId = `blur-dynamic-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div>
      {/* Container para as camadas de blur */}
      <div id={containerId} style={{ 
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: `${blurHeight}px`,
        pointerEvents: 'none',
        zIndex: zIndex
      }}></div>
      
      {/* Script para criar múltiplas camadas dinamicamente */}
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              const container = document.getElementById('${containerId}');
              if (!container) return;
              
              const config = {
                maxBlur: ${maxBlurIntensity},
                height: ${blurHeight},
                numLayers: 15
              };
              
              // Limpar qualquer conteúdo existente
              container.innerHTML = '';
              
              // Criar múltiplas camadas de blur com gradação aprimorada
              for (let i = 0; i < config.numLayers; i++) {
                const progress = i / (config.numLayers - 1); // 0 to 1
                const layer = document.createElement('div');
                
                // Altura das camadas com distribuição mais concentrada na base
                const heightCurve = Math.pow(1 - progress, 0.6);
                const layerHeight = config.height * heightCurve;
                
                // Blur diminui com curva mais acentuada para melhor gradação
                const blurCurve = Math.pow(1 - progress, 1.5);
                const blurAmount = config.maxBlur * blurCurve;
                
                // Opacidade com fade-out muito suave
                const opacityCurve = Math.pow(1 - progress, 4);
                const opacity = opacityCurve * 0.7;
                
                // Pular camadas com blur/opacity muito baixos para performance
                if (blurAmount < 1 || opacity < 0.01) continue;
                
                layer.style.cssText = \`
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  right: 0;
                  height: \${layerHeight}px;
                  backdrop-filter: blur(\${blurAmount}px);
                  -webkit-backdrop-filter: blur(\${blurAmount}px);
                  opacity: \${opacity};
                  pointer-events: none;
                  z-index: \${${zIndex} - i};
                \`;
                
                container.appendChild(layer);
              }
              
              // Teste se backdrop-filter está funcionando
              const testDiv = document.createElement('div');
              testDiv.style.backdropFilter = 'blur(10px)';
              if (!testDiv.style.backdropFilter && !testDiv.style.webkitBackdropFilter) {
                console.warn('Backdrop-filter não é suportado neste navegador');
              }
            })();
          `
        }}
      />
    </div>
  );
}
