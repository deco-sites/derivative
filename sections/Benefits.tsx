import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface Benefit {
  title: string;
  description: string;
  image: string;
}

export interface Props {
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  title?: string;
  description?: string;
  benefits?: Benefit[];
}

export default function Benefits({
  title = "Benefícios exclusivos para sua marca",
  description = "Descubra como o Derivative pode transformar sua marca e criar conexões mais profundas com seus consumidores através de soluções regenerativas e sustentáveis.",
  benefits = [
    {
      title: "Potencialize o valor de marca",
      description: "Faça parte de um movimento global pela regeneração e cultura oceânica e adquira uma narrativa poderosa, que conecta impacto positivo com desejo de consumo, transformando a marca em agente de mudança.",
      image: "https://assets.decocache.com/derivative/7eb13cd6-0d93-405f-8792-df953f9d3474/movimento.svg"
    },
    {
      title: "Aplique em infinitas possibilidades",
      description: "Tenha acesso a um material único no Brasil, com aplicações que vão da moda ao design e arquitetura, ampliando as possibilidades criativas da sua marca de forma sustentável e inovadora.",
      image: "https://assets.decocache.com/derivative/fa4044d0-718a-4c3b-8fa4-ed396ca2deb7/possibilidades.svg"
    },
    {
      title: "Diferenciação fora do comum",
      description: "Gere objetos de desejo e soluções inteligentes com o nosso time, reforçando autenticidade e engajamento com consumidores cada vez mais atentos à origem e ao significado do que consomem.",
      image: "https://assets.decocache.com/derivative/7f311acf-49c1-4b4e-92fc-8befa267c68b/diferenciacao.svg"
    },
    {
      title: "Aumente sua performance ESG",
      description: "Amplie o acesso a investidores e consumidores que priorizam critérios ESG e se alavanque de vantagens competitivas ao garantir uma produção mais coerente e alinhada com os padrões globais de sustentabilidade.",
      image: "https://assets.decocache.com/derivative/ca704298-b22a-4570-9fb3-6637a0c4ffac/esg.svg"
    },
    {
      title: "Rastreie toda a cadeia",
      description: "Garanta segurança sobre a origem e etapas da cadeia, fortalecendo a reputação e criando uma conexão mais profunda e engajada com os consumidores através da transparência total.",
      image: "https://assets.decocache.com/derivative/e4099f66-5377-4140-a714-873fcc659a3c/rastreabilidade.svg"
    }
  ],
}: Props) {
  return (
    <div style="background-color: #1D1B1D; padding: 80px 0;">
      <div class="xl:container xl:mx-auto mx-5 md:mx-10">
        {/* Header Section */}
        <div class="text-center mb-16">
          <div
            class="font-medium inline-block leading-[100%] lg:text-[90px] text-4xl tracking-[-2.4px] text-white mb-6"
            dangerouslySetInnerHTML={{
              __html: title,
            }}
          />
          <p class="leading-[150%] md:text-lg text-lg text-white/80 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Benefits Bento Grid */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {/* First 3 cards (top row) - each takes 2 columns */}
          {benefits.slice(0, 3).map((benefit, index) => (
            <div
              key={index}
              class="lg:col-span-2 bg-[#282524] rounded-2xl overflow-hidden flex flex-col h-full"
            >
              <div class="p-8">
                <h3 class="text-2xl font-semibold text-white mb-4 leading-tight">
                  {benefit.title}
                </h3>
                <p class="text-white/80 text-base leading-relaxed mb-6">
                  {benefit.description}
                </p>
              </div>
              <div class="mt-auto">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  class="w-full h-auto object-contain"
                />
              </div>
            </div>
          ))}
          
          {/* Last 2 cards (bottom row) - each takes 3 columns for wider layout */}
          {benefits.slice(3, 5).map((benefit, index) => (
            <div
              key={index + 3}
              class="lg:col-span-3 bg-[#282524] rounded-2xl overflow-hidden flex flex-col h-full"
            >
              <div class="p-8">
                <h3 class="text-2xl font-semibold text-white mb-4 leading-tight">
                  {benefit.title}
                </h3>
                <p class="text-white/80 text-base leading-relaxed mb-6">
                  {benefit.description}
                </p>
              </div>
              <div class="mt-auto">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  class="w-full h-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
