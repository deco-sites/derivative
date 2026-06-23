import Image from "apps/website/components/Image.tsx";
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Supporter {
  name: string;
  logo: ImageWidget;
}

export interface Props {
  title?: string;
  subtitle?: string;
  supporters?: Supporter[];
}

const DEFAULT_SUPPORTERS: Supporter[] = [
  {
    name: "Apoio Financeiro 1",
    logo: "https://decoims.com/derivative/2871bdcc-3e9e-4d4c-946a-9ef54fd149ba/Frame-2147224243.svg"
  },
  {
    name: "Apoio Financeiro 2", 
    logo: "https://decoims.com/derivative/b759e6b0-97e6-4164-8add-2d0b68d4034f/b3svg.svg"
  },
  {
    name: "Genesis",
    logo: "https://decoims.com/derivative/14036094-d27b-4be5-b5cc-c550d9d2b8bd/genesis.svg"
  },
  {
    name: "Artemisia",
    logo: "https://decoims.com/derivative/600c082c-a135-49c8-b68b-704f97811030/artemisia.svg"
  },
  {
    name: "Route",
    logo: "https://decoims.com/derivative/f423bf82-777f-4e2b-9da6-cacf7a99957e/route.svg"
  },
  {
    name: "Deco",
    logo: "https://decoims.com/derivative/098da79b-c27b-4f54-8cf1-8f043f95c6a9/deco.svg"
  }
];

export default function Supporters({
  title = "Apoiadores",
  subtitle = "Parceiros que acreditam no nosso propósito",
  supporters = DEFAULT_SUPPORTERS,
}: Props) {
  return (
    <div style="background-color: #1d1b1d; padding: 60px 0;">
      <div class="container mx-auto px-4 lg:px-8">
        <div class="text-center mb-12">
          {/* Título Sutil */}
          <h3 class="text-sm font-mono font-normal uppercase tracking-widest mb-2" style="color: rgba(255, 255, 255, 0.6);">
            {title}
          </h3>
        </div>

        {/* Logos Organizados Horizontalmente */}
        <div class="flex flex-wrap justify-center items-center gap-8 lg:gap-12 xl:gap-16">
          {supporters.map((supporter) => (
            <div 
              key={supporter.name}
              class="group relative"
            >
              <div class="relative p-4 lg:p-6 rounded-lg transition-all duration-300 group-hover:bg-white/5 group-hover:scale-105">
                <Image
                  src={supporter.logo}
                  alt={supporter.name}
                  width={100}
                  height={50}
                  class="object-contain filter brightness-0 invert opacity-60 group-hover:opacity-90 transition-all duration-300"
                  style="height: 50px; width: auto; min-width: 80px;"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
