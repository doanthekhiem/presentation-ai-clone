export type ColorKey = "primary" | "secondary" | "accent" | "background" | "text" | "heading" | "muted";

export interface ThemeFormValues {
  name: string;
  description: string;
  isPublic: boolean;
  themeBase: string;
  colors: {
    light: Record<ColorKey, string>;
    dark: Record<ColorKey, string>;
  };
  fonts: {
    heading: string;
    body: string;
  };
  borderRadius: string;
  transitions: {
    default: string;
  };
  shadows: {
    light: {
      card: string;
      button: string;
    };
    dark: {
      card: string;
      button: string;
    };
  };
} 