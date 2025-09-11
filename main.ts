import "deco/runtime/htmx/FreshHeadCompat.ts";
import { Layout } from "./_app.tsx";
import manifest, { Manifest } from "./manifest.gen.ts";
import { Deco as Deco } from "@deco/deco";
import { bindings as HTMX } from "@deco/deco/htmx";
const deco = await Deco.init<Manifest>({
  manifest,
  bindings: HTMX({
    Layout,
  }),
});
const envPort = Deno.env.get("PORT");

// // Enhanced handler with proper headers for social media crawlers
// const enhancedHandler = async (request: Request): Promise<Response> => {
//   const response = await deco.fetch(request);

//   // Add headers for better social media compatibility
//   const headers = new Headers(response.headers);

//   // Cache control for social media crawlers
//   headers.set("Cache-Control", "public, max-age=3600");
//   headers.set("X-Content-Type-Options", "nosniff");
//   headers.set("X-Frame-Options", "SAMEORIGIN");

//   // Ensure proper content type
//   if (!headers.has("Content-Type")) {
//     headers.set("Content-Type", "text/html; charset=utf-8");
//   }

//   return new Response(response.body, {
//     status: response.status,
//     statusText: response.statusText,
//     headers: headers
//   });
// };

// Deno.serve({ handler: enhancedHandler, port: envPort ? +envPort : 8000 });

Deno.serve({ handler: deco.fetch.bind(deco), port: envPort ? +envPort : 8000 });
