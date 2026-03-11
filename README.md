# 🎾 TenisScore

> Aplicación PWA de marcador de tenis en tiempo real para árbitros y espectadores.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ECF8E?logo=supabase&logoColor=white)

---

## Descripción

**TenisScore** permite a árbitros o acompañantes registrar puntos de un partido de tenis en tiempo real. Los espectadores pueden seguir el marcador en vivo desde su propio dispositivo usando un código de partida o enlace público.

La app sigue las reglas oficiales de la ATP/WTA: puntuación (0–15–30–40–deuce–ventaja), tiebreaks, contador de games por set y gestión de sets múltiples.

---

## Stack Tecnológico

| Capa | Tecnología |
|------|-----------|
| UI | React 19 + TypeScript |
| Estilos | Tailwind CSS v4 |
| Animaciones | Framer Motion |
| Build | Vite 7 |
| Backend | Supabase (PostgreSQL + Realtime) |
| Despliegue | Vercel / cualquier hosting estático |

---

## Comandos

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Preview de producción
npm run preview

# Type checking
npx tsc --noEmit
```

### Variables de entorno

Crea un archivo `.env` en la raíz:

```env
VITE_SUPABASE_URL=tu_supabase_url
VITE_SUPABASE_ANON_KEY=tu_anon_key
```

---

## Estado Actual del Proyecto

### Lo que ya funciona

- **Lógica de puntuación completa**
  - Conteo de puntos: 0 / 15 / 30 / 40 / Deuce / Ventaja
  - Detección de ganador de game con ventaja
  - Tiebreak estándar (primero en 7 con diferencia de 2)
  - Función de deshacer punto (`score down`)

- **Gestión de games y sets**
  - Contador de games por set
  - Detección automática de fin de set (6–4, 7–5, 6–7 con tiebreak)
  - Creación dinámica de sets nuevos al completarse el anterior

- **Interfaz visual animada**
  - Marcador principal con indicador de saque (brillo animado)
  - Botones de punto con efectos hover (Framer Motion)
  - Historial de sets cerrados con animación de entrada
  - Marcador de set en curso

- **Estado global con Context API**
  - `MatchContext` centraliza toda la sesión de partido
  - Reducer para el marcador del game actual

---

### Estructura de carpetas

```
src/
├── components/
│   ├── match/              # Marcador principal (completo)
│   │   ├── Buttoms/        # Botones de punto +/-
│   │   ├── fullScoreboard/ # Componente raíz del marcador
│   │   ├── gameScoreBoard/ # Display del game actual
│   │   ├── setsScoreBoard/ # Historial de sets
│   │   ├── playersName/    # Nombres de jugadores
│   │   └── utils/          # Lógica de scoring y reducers
│   ├── config/             # [PENDIENTE] Formulario de configuración
│   ├── history/            # [PENDIENTE] Historial de partidos
│   └── ui/                 # [PENDIENTE] Componentes reutilizables
├── context/
│   └── scoreContext/       # Context + Provider del partido
├── hooks/
│   └── matchSessionContext/ # Hooks para actualizar games y sets
├── lib/                    # [PENDIENTE] Cliente Supabase y utilidades
├── pages/                  # [PENDIENTE] Páginas completas
└── types/
    ├── index.ts            # Tipos de la app
    └── database.ts         # Tipos auto-generados de Supabase
```

---

## Hoja de Ruta

### Fase 1 — Marcador Local `(en progreso)`
- [x] Lógica de puntuación (games, sets, tiebreak)
- [x] UI del marcador animada
- [x] Gestión de sets múltiples
- [x] Función deshacer punto
- [ ] Pantalla de configuración previa al partido (jugadores, nº de sets, tiebreak on/off)
- [ ] Pantalla de fin de partido con resultado final

### Fase 2 — Persistencia con Supabase `(pendiente)`
- [ ] Conectar cliente Supabase
- [ ] Guardar partido en base de datos al iniciarlo
- [ ] Sincronizar puntuación en tiempo real con Supabase Realtime
- [ ] Cargar partido guardado para continuar

### Fase 3 — Modo Espectador `(pendiente)`
- [ ] Generar código de partida / enlace público
- [ ] Vista de solo lectura para espectadores (`/view/:shareCode`)
- [ ] Actualización en vivo sin recargar la página

### Fase 4 — PWA y extras `(pendiente)`
- [ ] Configurar service worker y manifest (vite-plugin-pwa)
- [ ] Soporte offline con sincronización al reconectar
- [ ] Historial de partidos anteriores
- [ ] Soporte para dobles
- [ ] Estadísticas por partido (% de primeros saques, puntos ganados, etc.)

---

## Schema de Base de Datos

Tres tablas en Supabase con Realtime habilitado:

```
players  → id, name, country, birthdate
matches  → estado completo del partido (jugadores, puntuación, config, share_code)
sets     → set_number, t1_games, t2_games, tiebreak_points por partido
```

---

## Equipo

| Área | Responsable |
|------|------------|
| Base de datos / SQL | Samuel |
| Lógica de tenis | Samuel |
| Componentes UI | Daniel |
| Páginas / rutas | Daniel |
| Tipos compartidos | Ambos |
| Hooks | Ambos |

---

## Seguimiento de tareas

[GitHub Project Board](https://github.com/DanielBeltranl/TennisScore)
