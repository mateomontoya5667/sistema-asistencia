// ──────────────────────────────────────────────
// Configuración local del sistema de asistencia
// ──────────────────────────────────────────────

// Duración de una sesión activa en milisegundos (default 5 min para demo)
const SESSION_DURATION_MS = 5 * 60 * 1000;

// Lista de coordinadores locales (fallback si Firestore no responde)
// role: 'admin' | 'coordinator'
const COORDINATORS = [
  { username: 'admin',   password: 'admin123',  name: 'Administrador', role: 'admin'       },
  { username: 'coord1',  password: 'coord123',  name: 'Coordinador 1', role: 'coordinator' },
];

// URL base de la app (se sobreescribe automáticamente si hay hostname)
const APP_URL = (location.hostname === 'localhost' || location.hostname === '')
  ? location.href.replace(/\/[^/]*$/, '')
  : 'https://asistencia-juventudes-cv.web.app';
