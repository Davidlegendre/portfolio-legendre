import { IconHome } from "@tabler/icons-react";

export type IconType = typeof IconHome;
export const Entorno = process.env.NEXT_PUBLIC_ENVIRONMENT || 'development'
export const prefixStorage = process.env.NEXT_PUBLIC_PREFIX_STORAGE || "portleg_prod"
export const hostApi = process.env.NEXT_PUBLIC_API_URL || '';
export const radiusStyle = "8px"

// Datos de contacto y perfiles externos reutilizados en el portfolio.
export const portfolioLinks = {
  whatsapp: "https://wa.me/51914847720",
  github: "https://github.com/Davidlegendre",
  linkedin: "https://www.linkedin.com/in/legendre-david",
  cv: "https://drive.google.com/file/d/1ehtFYRuiuieZqJiUdUg5FK-KyubUpSEs/view?usp=sharing",
  suno: "https://suno.com/@pluralisticsymphony230"
} as const;

// Recursos externos compartidos por el layout global.
export const externalResources = {
  favicon: "https://res.cloudinary.com/dflatec/image/upload/v1792907375/Monograma_DP_degradado_sobre_fondo_oscuro_iyobgs.png",
  googleFonts: {
    api: "https://fonts.googleapis.com",
    static: "https://fonts.gstatic.com",
    hankenGrotesk: "https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700;800&display=swap",
  },
} as const;

export const portfolioIdentity = {
  name: "David Legendre",
  fullName: "David Fernando Legendre Albites",
  role: "Desarrollador Full Stack .NET",
  whatsappNumber: "+51 914 847 720",
} as const;

// ─── Configuración de escala de UI (resolusción objetivo: 1366×720) ────────────
// Modifica estos valores para ajustar el tamaño global de la interfaz.
// Son consumidos por el tema Mantine en layoutComponent.global.tsx.
export const uiScale = {
  /** Tamaño de fuente base del documento (rem root). Reduce para hacer todo más pequeño. */
  htmlFontSize: 14, // px — estándar Mantine es 16px

  /** Tamaños de fuente de los componentes Mantine */
  fontSizes: {
    xs: "10px",
    sm: "11px",
    md: "10px",
    lg: "12px",
    xl: "14px",
  },

  /** Espaciado interno de los componentes (padding, gap, etc.) */
  spacing: {
    xs: "6px",
    sm: "9px",
    md: "12px",
    lg: "16px",
    xl: "20px",
  },

  /** Tamaño de los íconos de Tabler usados en la app */
  iconSize: 16, // px

  /** Altura de los inputs, selects y botones */
  lineHeights: {
    xs: "1.3",
    sm: "1.35",
    md: "1.4",
    lg: "1.45",
    xl: "1.5",
  },

  /** Tamaño por defecto del componente Text (usa claves de fontSizes) */
  textDefaultSize: "sm" as const, // xs | sm | md | lg | xl

  /** Tamaño por defecto de inputs: TextInput, Select, Combobox, etc. */
  inputDefaultSize: "xs" as const, // xs | sm | md | lg | xl

  /** Tamaño por defecto de Button */
  buttonDefaultSize: "xs" as const, // xs | sm | md | lg | xl

  /** Tamaños de los headings Title order=1..6 */
  headingSizes: {
    h1: "20px",
    h2: "17px",
    h3: "15px",
    h4: "13px",
    h5: "12px",
    h6: "11px",
  },
};