# Diseño Web Venezuela — Estudio Boutique

Web de captación para servicios de diseño web medio-alto.
Posicionamiento: **Tu negocio ya factura. Tu web debería demostrarlo.**

## Stack elegido (basado en tu portfolio)
- **Astro 4** — como `reformat-venezuela` y `reformat-houston` (tu mejor trabajo en SEO)
- **Tailwind** — mismo que Majestic
- **Performance 95+** — sin WordPress, sin peso
- Hosting recomendado: Vercel (ya lo usas en ReformaT)

## Por qué este estilo mixto?
Analicé todos tus repos públicos (30):

- **Base HTML (vanity-face, ggbeauty, etc):** nivel básico plantilla
- **Nivel medio-alto REAL:** ReformaT Venezuela con SEO programático, sitemap inteligente, scripts de IndexNow, 80 landings locales, performance 98.
- **Nivel premium wow:** Majestic Web Studio — Next.js 14 + Spline 3D + Framer Motion + magnetic UI — muy caro visualmente pero demasiado oscuro/tech para una clínica.

Para Diseño Web Boutique tomamos:
- Paleta clara de ReformaT: #FFFEFB papel, #0E0E10 tinta, #F5F2ED piedra
- Tipografía serif grande (Instrument Serif) + sans técnica (Geist)
- Mucho whitespace, hairlines, grids sutiles
- Toques Majestic súper sutiles: blur blobs, glass cards, hover lift, sin neón.

## Estructura copy (pensada para generar cliente solo)
1. **Hero:** filtro directo "No hacemos webs de $200. Hacemos webs que cierran clientes de $2.000"
2. **El problema:** web barata pierde clientes caros
3. **Trabajos:** muestra tus 4 repos reales (ReformaT VE, ReformaT Houston, Majestic, colección clínicas)
4. **Diferencia:** tabla mental Otros vs Nosotros
5. **Servicios:** 3 paquetes desde $900
6. **Proceso:** 01 Diagnóstico → 04 Lanzamiento
7. **Filtro honesto:** no para todos
8. **FAQ** y **CTA WhatsApp**

## Qué falta configurar
- [ ] Cambiar `waLink` en `src/pages/index.astro` con tu número real
- [ ] Cambiar `site:` en `astro.config.mjs` al dominio final
- [ ] Fotos reales de tus proyectos (ahora Unsplash placeholders)
- [ ] Conectar formulario o dejar solo WhatsApp
- [ ] Página /gracias, /aviso-legal si quieres SEO

## Para correr
```
npm install
npm run dev
```

Deploy: `npm run build` → Vercel auto-detecta Astro.

## Siguientes pasos sugeridos
1. Te gusta el tono directo filtrador? Quieres más suave o más agresivo?
2. Añadimos página /portfolio con case studies largos de ReformaT?
3. Añadimos calculadora o formulario multi-step como en Majestic?

---
Hecho para generar clientes de ticket medio-alto, no volumen barato.
