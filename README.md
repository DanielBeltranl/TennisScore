# TenisScore

Aplicación PWA de marcador de tenis con actualizaciones en tiempo real para espectadores. Permite configurar reglas de partido, llevar el puntaje juego a juego y compartir resultados en vivo mediante enlaces públicos o códigos privados.

## Stack Tecnológico

- **Frontend**: React 18 + TypeScript + Vite
- **Estilos**: Tailwind CSS
- **Backend**: Supabase (PostgreSQL + Realtime)
- **Estado**: React Context + Hooks personalizados
- **PWA**: vite-plugin-pwa + Workbox
- **Despliegue**: Vercel

## Comandos Principales

```bash
# Desarrollo
npm run dev

# Construcción para producción
npm run build

# Previsualizar build
npm run preview

# Verificación de tipos
npx tsc --noEmit
```

## Arquitectura

- **Lógica Core**: `src/lib/tennis-rules.ts` contiene los algoritmos de puntuación.
- **Flujo de Datos**: `MatchContext` maneja el estado global, `useTennisScore` la lógica local, y `useSupabase` la sincronización con la base de datos.
- **Componentes Clave**: Sistema modular organizado en componentes de partido (`match`), configuración (`config`) e historial (`history`).

## Estructura de Base de Datos

Utiliza Supabase con tres tablas principales:
- `matches`: Estado activo del partido y configuración.
- `sets`: Puntuaciones individuales de cada set.
- `match_history`: Resumen de partidos completados.

## Roadmap

El proyecto se desarrolla en 8 fases, abarcando desde la configuración inicial y lógica local, hasta la integración con backend, funciones en tiempo real y optimización PWA.
