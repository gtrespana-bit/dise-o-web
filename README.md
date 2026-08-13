# Diseño Web Venezuela — Estudio Boutique

Web de captación para servicios de diseño web medio-alto.
Posicionamiento: **Tu negocio ya factura. Tu web debería demostrarlo. Y si necesitas más que una web, también podemos con una plataforma.**

## Análisis completo de tu nivel (ahora sí, con VendeT)

Analicé **todos** tus repos públicos con gh CLI:

### 1. Nivel Landing / HTML (20+ repos)
`vanity-face`, `ggbeautyPremium`, `euroklinik`, `pododent`, `axularvet`, `artekasa`, etc.
HTML + video + WhatsApp. Funcional para negocio local pero plantilla básica.

### 2. Nivel Medio-Alto SEO — Astro (tu mejor carta para esta web)
`reformat-venezuela`, `reformat-houston`
- Astro con 80+ landings locales
- sitemap con prioridades por Carabobo (`sitemapPriority()` con `PRIMARY_CARABOBO`)
- Scripts: `check-images`, `shorten-meta`, `check-seo`, `inject-image-dimensions`, `indexnow`
- Performance 98, viewTransitions, i18n.

**Esto es lo que usaremos para Diseño Web Venezuela** porque genera leads solo.

### 3. Nivel Premium Visual — Next.js 14 + 3D
`Majestic` / `majesticweb-sandbox`
- Next.js 14 + Tailwind + Framer Motion + Radix + lucide + Spline 3D robot
- Magnetic buttons, HoloCard, GradientBorder, ParallaxLayer
- Visualmente muy caro, pero demasiado techy/oscuro para clínica/inmobiliaria tradicional.
- Lo usamos solo como toque sutil.

### 4. NIVEL ENORME — PLATAFORMAS (lo que faltaba incluir)
**`vendet-inmuebles` y `Marketplace-vzla` — PROYECTOS ENORMES**

**vendet-inmuebles:**
- Next.js 14 + ` @supabase/ssr ` + `@supabase/supabase-js` + S3 AWS SDK (`@aws-sdk/client-s3`) + Sharp
- DB: `inmuebles`, `inmueble_imagenes`, `inmueble_caracteristicas`, `caracteristicas`, `perfiles`, `pagos`, `suscripciones`, `destacados`, `mensajes`, `operaciones`, `tipos_inmueble`
- Vista crítica: `vw_propiedades_publicas` con JOINs complejos
- `[locale]` routing con `next-intl`, middleware, i18n, Sentry, Vercel Analytics/Speed Insights
- 37 carpetas de rutas: admin, blog, chat, publicar-inmueble, propiedades, test-*, vendedor...
- PWA + Push web-push + email nodemailer

**Marketplace-vzla:**
- Mismo core pero general: vehiculos, tecnologia, moda, hogar...
- `src/lib/categorias.ts` con 8 categorías, subs con marcas[] y campos[] dinámicos (año con ñ!)
- Chat Realtime Supabase + polling 5s + sessionStorage cache
- Sistema créditos, verificado, reputación, favoritos, dashboard con lazy tabs
- Moderación automática (`moderacion.ts`), rate-limit, tasa BCV, email, telegram webhook
- Service Worker stale-while-revalidate TTL 7 días para imágenes Supabase
- Manifest scope, screenshots, offline page

**presupuestos (Python):**
- Desktop App con `pywebview`, FastAPI-like en `main.py` + SQLite + Jinja2
- ReportLab PDF con Lato embebida, caja empresa navy, banda capítulos, mediciones, marca de agua estado
- Import CYPE .xlsx: detecta recursos, rendimiento × precio unitario, subtotales, directos complementarios
- Firma digital, WhatsApp wa.me, facturas F-, backup ZIP, instalador Inno Setup
- No es web, es **software** — demuestra que no eres solo front.

**Conclusión nivel:** Eres **full-stack boutique capaz de escalar de landing 98 performance a marketplace con 10 tablas RLS + S3 + Realtime + PWA + Sentry**. Eso es medio-alto de verdad. No g agency de WP.

## Lo que construí en este repo (v2)

**Stack:** Astro 4 + Tailwind (igual que ReformaT) — para que esta web sola genere clientes SEO.

**Hero actualizado:** "Desde landing que convierte hasta plataforma que escala. VendeT demuestra músculo."

**Sección Trabajos enorme (nueva):**
- 2 cards gigantes oscuras: VendeT Inmuebles y Marketplace VZLA con stats de DB, tags S3, Realtime
- Debajo: 4 cards boutique: ReformaT, Presupuestos Python, Majestic, Colección clínicas

**Servicios ahora 4:**
01 Web a medida $1.200
02 Re-Diseño $900
03 Plataformas & Marketplaces $5k+ (nuevo, basado en VendeT)
04 SEO + Performance + PWA incluido

**FAQ actualizado** para responder objeción: "¿Solo haces landings? Vi VendeT gigante"

**Trust strip:** Ahora muestra stack real: Next.js 14, Astro SEO 98, Supabase SSR, S3+Sharp, Realtime Chat, PWA+Push, Python PDF

## Qué falta
- Cambiar waLink con tu número real
- Capturas reales de VendeT (ahora Unsplash)
- Añadir case study largo /vendet-inmuebles explicando arquitectura DB_SCHEMA_COMPLETE.md
- Página /proceso con detalle como en ReformaT

## Run
```
npm install
npm run dev -> http://localhost:4321
```

Deploy Vercel auto-detecta Astro.
