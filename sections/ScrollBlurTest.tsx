export interface Props {
  /**
   * @description Intensidade do blur para teste (0-50px)
   * @default 20
   */
  testBlurIntensity?: number;
}

export default function ScrollBlurTest({
  testBlurIntensity = 20,
}: Props) {
  const testId = `blur-test-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div>
      {/* Teste simples de backdrop-filter */}
      <div
        id={testId}
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          height: '100px',
          backdropFilter: `blur(${testBlurIntensity}px)`,
          WebkitBackdropFilter: `blur(${testBlurIntensity}px)`,
          pointerEvents: 'none',
          zIndex: 1000,
          border: '2px solid red', // Para visualizar o elemento
        }}
      ></div>
      
      {/* Debug info */}
      <div
        style={{
          position: 'fixed',
          top: '10px',
          right: '10px',
          background: 'black',
          color: 'white',
          padding: '10px',
          fontSize: '12px',
          zIndex: 1001,
        }}
      >
        Teste Blur: {testBlurIntensity}px
        <br />
        Elemento: #{testId}
        <br />
        Backdrop-filter aplicado
      </div>
      
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            setTimeout(() => {
              const testElement = document.getElementById('${testId}');
              if (testElement) {
                const computedStyle = window.getComputedStyle(testElement);
                console.log('Backdrop-filter computed:', computedStyle.backdropFilter);
                console.log('Webkit-backdrop-filter computed:', computedStyle.webkitBackdropFilter);
                
                // Verificar suporte
                const supportsBackdrop = CSS.supports('backdrop-filter', 'blur(1px)');
                const supportsWebkit = CSS.supports('-webkit-backdrop-filter', 'blur(1px)');
                
                console.log('Suporte backdrop-filter:', supportsBackdrop);
                console.log('Suporte webkit-backdrop-filter:', supportsWebkit);
                
                if (!supportsBackdrop && !supportsWebkit) {
                  alert('Backdrop-filter não é suportado neste navegador!');
                }
              }
            }, 1000);
          `
        }}
      />
    </div>
  );
}
