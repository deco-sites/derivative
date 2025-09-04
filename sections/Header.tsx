import type { ImageWidget, VideoWidget } from "apps/admin/widgets.ts";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Props {
  logo?: {
    src?: ImageWidget;
    alt?: string;
  };
  navigation?: {
    links: {
      label?: string;
      url?: string;
    }[];
  };
  backgroundVideo?: VideoWidget;
  title?: string;
  ctaButton?: CTA;
}

const generateLineStyles = (position: string) => `
  absolute ${position} z-50 block h-0.5 w-7 bg-white transition-all duration-200 ease-out 
`;

const lineStyles = [
  generateLineStyles("top-[-0.7rem]") +
  "peer-checked:translate-y-[0.7rem] peer-checked:rotate-[45deg]",
  generateLineStyles("top-[-0.35rem]") + "peer-checked:opacity-0",
  generateLineStyles("top-[0]") +
  "peer-checked:-translate-y-[0.2rem] peer-checked:-rotate-[45deg]",
];

export default function Header({
  logo = {
    src: "https://assets.decocache.com/derivative/63f2145a-4b99-403e-ba27-cf49104ea963/logo_deriva_horizontal_NO.svg",
    alt: "Deriva",
  },
  navigation = {
    links: [
      { label: "DERIVATIVE", url: "#derivative" },
      { label: "SISTEMA REGENERATIVO", url: "#sistema" },
      { label: "SOLUÇÕES", url: "#services" },
      { label: "MISSÃO", url: "#mission" },
    ],
  },
  backgroundVideo = "https://assets.decocache.com/derivative/d81f13fc-4f89-4c4c-a562-b434436f99bd/background2_header-(1).mp4",
  title = "Fortaleça sua marca enquanto regeneramos os oceanos",
  ctaButton = {
    id: "cta-movement",
    href: "#movimento",
    text: "JUNTAR-SE AO MOVIMENTO",
    outline: false,
  },
}: Props) {
  return (
    <header class="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <div class="absolute inset-0 z-0">
        <video
          class="w-full h-full object-cover"
          autoplay
          muted
          loop
          playsinline
          poster=""
        >
          <source src={backgroundVideo} type="video/mp4" />
          <p>Seu navegador não suporta o elemento de vídeo.</p>
        </video>
        {/* Dark overlay for better text readability */}
        <div class="absolute inset-0 bg-black/25"></div>
        
        {/* Gradient overlay at bottom to blend with #1d1b1d background */}
        <div 
          class="absolute bottom-0 left-0 right-0 z-10" 
          style="height: 80px; background: linear-gradient(to top, #1d1b1d 0%, rgba(29, 27, 29, 0.9) 30%, rgba(29, 27, 29, 0.6) 60%, rgba(29, 27, 29, 0.2) 85%, transparent 100%);"
        ></div>
      </div>

      {/* Navigation */}
      <nav class="relative z-20 container mx-auto px-6 lg:px-8">
        <div class="flex items-center py-6">
          {/* Logo - Left */}
          <a href="/" class="flex-shrink-0">
            <img 
              src={logo.src} 
              alt={logo.alt} 
              class="h-8 md:h-10 lg:h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation - Center */}
          <div class="hidden lg:flex items-center justify-center flex-1">
            <ul class="flex items-center space-x-8">
              {navigation.links.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    aria-label={link.label}
                    class="text-snow-white font-mono text-sm uppercase tracking-wider relative group"
                  >
                    {link.label}
                    <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-snow-white/70 to-snow-white/20 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Button - Right */}
          <div class="hidden lg:block">
            <a
              href="/contato"
              class="inline-block border-2 border-snow-white text-snow-white px-6 py-3 font-mono text-xs uppercase tracking-wider hover:bg-snow-white hover:text-mineral-black transition-all duration-200 rounded-lg"
            >
              CONTATO
            </a>
          </div>

          {/* Mobile Menu Button */}
          <label
            class="cursor-pointer lg:hidden relative z-50 ml-auto"
            for="menu-mobile"
            style="margin-right: 16px !important;"
          >
            <input class="hidden peer" type="checkbox" id="menu-mobile" />
            {lineStyles.map((style, index) => (
              <div key={index} class={style}></div>
            ))}
            
            {/* Mobile Menu Overlay */}
            <div class="backdrop-blur-sm bg-black/80 fixed h-full hidden inset-0 peer-checked:block w-full z-40">
              &nbsp;
            </div>
            
            {/* Mobile Menu */}
            <div class="duration-500 fixed h-full overflow-y-auto peer-checked:translate-x-0 right-0 top-0 transition translate-x-full w-full z-40">
              <div class="bg-mineral-black flex flex-col float-right gap-8 min-h-full pt-20 px-6 shadow-2xl w-4/5 max-w-sm">
                <ul class="flex flex-col gap-6">
                  {navigation?.links.map((link) => (
                    <li key={link.url}>
                      <a 
                        href={link.url} 
                        aria-label={link.label}
                        class="text-snow-white font-mono text-sm uppercase tracking-wider relative group"
                      >
                        {link.label}
                        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-snow-white/70 to-snow-white/20 transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    </li>
                  ))}
                </ul>
                <div class="mt-8">
                  <a
                    href="/contato"
                    class="inline-block border-2 border-snow-white text-snow-white px-6 py-3 font-mono text-xs uppercase tracking-wider hover:bg-snow-white hover:text-mineral-black transition-all duration-200 rounded-lg"
                  >
                    CONTATO
                  </a>
                </div>
              </div>
            </div>
          </label>
        </div>
      </nav>

      {/* Hero Content */}
      <div class="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)]">
        <div class="container mx-auto px-4 lg:px-8 text-center">
          <h1 class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-snow-white leading-tight mb-8 max-w-5xl mx-auto font-sans">
            {title}
          </h1>
          
          <div class="mt-12">
            <a
              href={ctaButton?.href}
              class="inline-block bg-snow-white text-mineral-black px-8 py-4 font-mono text-sm uppercase tracking-wider hover:bg-fog-gray transition-colors duration-200 shadow-lg rounded-lg"
            >
              {ctaButton?.text}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
