export interface Props {
  title?: string;
  subtitle?: string;
}

export default function Derivative({
  title = "DERIVATIVE",
  subtitle = "Nosso material inovador transformando redes de pesca em soluções sustentáveis",
}: Props) {
  return (
    <section class="py-16 lg:py-24 bg-mineral-black">
      <div class="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div class="text-center mb-12 lg:mb-16">
          <h2 class="font-mono text-sm uppercase tracking-wider text-snow-white mb-4">
            {title}
          </h2>
          <p class="text-2xl lg:text-3xl font-medium text-snow-white max-w-4xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* UnicornStudio Interactive Component */}
        <div class="flex justify-center items-center">
          <div class="relative w-full max-w-7xl">
            {/* Responsive container for UnicornStudio */}
            <div 
              class="relative w-full overflow-hidden rounded-lg bg-gray-50"
              style="aspect-ratio: 1440/900;"
            >
              <div 
                data-us-project="8t4VhF7UB3HZWrq3qe1L" 
                class="absolute inset-0 w-full h-full"
                style="width: 100%; height: 100%;"
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* UnicornStudio Script - Load once per page */}
      <script 
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            !function(){
              if(!window.UnicornStudio){
                window.UnicornStudio={isInitialized:!1};
                var i=document.createElement("script");
                i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
                i.onload=function(){
                  window.UnicornStudio.isInitialized||(
                    UnicornStudio.init(),
                    window.UnicornStudio.isInitialized=!0
                  )
                };
                (document.head || document.body).appendChild(i)
              }
            }();
          `
        }}
      />
    </section>
  );
}
