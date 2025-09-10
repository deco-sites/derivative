import { ComponentChildren } from "preact";
import { asset as asset, Head as Head } from "@deco/deco/htmx";
export const Layout = ({ children, revision, hmrUniqueId }: {
  children: ComponentChildren;
  revision: string;
  hmrUniqueId: string;
}) => {
  return (
    <>
      {/* Include Icons and manifest */}
      {/** @ts-ignore: ignore error */}
      <Head>
        {/* Basic Meta Tags */}
        <title>Deriva | Regenerando o oceano, transformando marcas</title>
        <meta name="description" content="O Deriva busca combater a pesca fantasma através de um sistema regenerativo, recuperando redes de pesca que seriam descartadas no oceano ou na terra. Articulamos comunidades pesqueiras e a indústria para transformar esse material em pellets de nylon reciclado de alta-performance." />
        <meta name="keywords" content="deriva, derivative, sustentabilidade, reciclagem, pesca fantasma, nylon reciclado, economia circular, regeneração oceânica" />
        <meta name="author" content="Deriva" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="utf-8" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Deriva | Regenerando o oceano, transformando marcas" />
        <meta property="og:description" content="O Deriva busca combater a pesca fantasma através de um sistema regenerativo, recuperando redes de pesca que seriam descartadas no oceano ou na terra. Articulamos comunidades pesqueiras e a indústria para transformar esse material em pellets de nylon reciclado de alta-performance." />
        <meta property="og:image" content="https://assets.decocache.com/derivative/31f980ff-f87d-4b44-bbbc-3b3b00c24591/seo_banner_deriva.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Deriva - Regenerando o oceano, transformando marcas" />
        <meta property="og:url" content="https://deriva.com.br" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Deriva" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:updated_time" content={new Date().toISOString()} />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Deriva | Regenerando o oceano, transformando marcas" />
        <meta name="twitter:description" content="O Deriva busca combater a pesca fantasma através de um sistema regenerativo, recuperando redes de pesca que seriam descartadas no oceano ou na terra." />
        <meta name="twitter:image" content="https://assets.decocache.com/derivative/31f980ff-f87d-4b44-bbbc-3b3b00c24591/seo_banner_deriva.png" />
        <meta name="twitter:site" content="@deriva" />
        <meta name="twitter:creator" content="@deriva" />
        
        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="facebookbot" content="index, follow" />
        <meta name="linkedinbot" content="index, follow" />
        <meta name="whatsapp" content="index, follow" />
        <link rel="canonical" href="https://deriva.com.br" />
        
        {/* WhatsApp Specific */}
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:secure_url" content="https://assets.decocache.com/derivative/31f980ff-f87d-4b44-bbbc-3b3b00c24591/seo_banner_deriva.png" />
        
        {/* Discord Specific */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        
        {/* Additional Open Graph for better compatibility */}
        <meta property="article:author" content="Deriva" />
        <meta property="article:publisher" content="Deriva" />
        <meta property="article:section" content="Sustentabilidade" />
        <meta property="article:tag" content="sustentabilidade" />
        <meta property="article:tag" content="reciclagem" />
        <meta property="article:tag" content="pesca fantasma" />
        
        {/* Enable View Transitions API */}
        <style
          dangerouslySetInnerHTML={{
            __html: `@view-transition { navigation: auto; }`,
          }}
        />

        {/* Tailwind v3 CSS file */}
        <link
          href={`/styles.css?revision=${revision}${hmrUniqueId}`}
          rel="stylesheet"
        />

        {/* Web Manifest */}
        <link rel="manifest" href={asset("/site.webmanifest")} />
        
        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="https://assets.decocache.com/derivative/6dacb3f2-1b14-4717-b058-e6c780cb8008/logo2-insta.png" />
        <link rel="apple-touch-icon" href="https://assets.decocache.com/derivative/6dacb3f2-1b14-4717-b058-e6c780cb8008/logo2-insta.png" />
      </Head>

      {/* Rest of Preact tree */}
      {children}
    </>
  );
};
