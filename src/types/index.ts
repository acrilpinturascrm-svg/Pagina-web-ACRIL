// Tipos centralizados para la aplicación ACRIL Pinturas

export interface Color {
  name: string;
  value: string; // Código hexadecimal
  types: string[];
}

export interface Product {
  name: string;
  description: string;
  colors: Color[];
}

export interface ProductLine {
  name: string;
  description: string;
  products: Product[];
}

export interface Surface {
  key: string;
  name: string;
  icon: string;
  gradient: string;
  imageUrl?: string; // URL de imagen real de la superficie
}

// Tipos para formularios
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface FormErrors {
  [key: string]: string;
}

// Tipos para props de componentes
export interface HeaderProps {
  onSectionChange: (section: string) => void;
  activeSection?: string;
}

export interface SearchableColorDropdownProps {
  colors: Color[];
  selectedColor: string;
  setSelectedColor: (color: string) => void;
}

export interface SurfaceImagePreviewProps {
  surface: Surface;
  selectedColor: string;
  className?: string;
}

// Tipos para secciones de navegación
export interface NavigationSection {
  key: string;
  label: string;
}

// Tipos para EmailJS
export interface EmailJSConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}
