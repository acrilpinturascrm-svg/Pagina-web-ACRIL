// Colores específicos por línea de producto

// Tipo para colores base
type ColorBase = {
  name: string;
  value: string;
};


// SEDACRIL - Línea de Satinados (24 colores completos)
const SEDACRIL_COLORS: ColorBase[] = [
  { name: 'Blanco Crema', value: '#eeeee3' },
  { name: 'Blanco Perla', value: '#dbe0de' },
  { name: 'Gris Claro', value: '#babdbb' },
  { name: 'Gris Perla', value: '#999d9f' },
  { name: 'Gris Piedra', value: '#94a5ac' },
  { name: 'Gris Lobo', value: '#4c4f51' },
  { name: 'Negro', value: '#000000' },
  { name: 'Gray Claro', value: '#c5bdb8' },
  { name: 'Gray Oscuro', value: '#a99f99' },
  { name: 'Beige', value: '#c0b7a1' },
  { name: 'Marfil', value: '#eed9b9' },
  { name: 'Coral Suave', value: '#efdacf' },
  { name: 'Durazno', value: '#e9ad95' },
  { name: 'Salmon', value: '#ec9f8f' },
  { name: 'Rosado', value: '#f0c0c8' },
  { name: 'Azul Claro', value: '#99d0e6' },
  { name: 'Azul Invernal', value: '#5b909b' },
  { name: 'Azul Rey', value: '#176b97' },
  { name: 'Turquesa', value: '#4db8ad' },
  { name: 'Verde Menta', value: '#a3c8b6' },
  { name: 'Verde Manzana', value: '#8c975a' },
  { name: 'Lila', value: '#afa8bb' },
  { name: 'Naranja', value: '#d16c3a' },
  { name: 'Rojo', value: '#943a37' },
];

// DECOCRIL Caucho - Línea de Caucho Mate (32 colores completos)
const DECOCRIL_CAUCHO_COLORS: ColorBase[] = [
  { name: 'Blanco Crema', value: '#eeeee3' },
  { name: 'Blanco Perla', value: '#dbe0de' },
  { name: 'Gris Claro', value: '#babdbb' },
  { name: 'Gris Perla', value: '#999d9f' },
  { name: 'Gris Piedra', value: '#94a5ac' },
  { name: 'Gris Cemento', value: '#5a6160' },
  { name: 'Gris Lobo', value: '#4c4f51' },
  { name: 'Gray Claro', value: '#c5bdb8' },
  { name: 'Gray Oscuro', value: '#a99f99' },
  { name: 'Nispero', value: '#a2877a' },
  { name: 'Terracota', value: '#976051' },
  { name: 'Beige', value: '#c0b7a1' },
  { name: 'Amarillo Bandera', value: '#e69d0d' },
  { name: 'Ocre', value: '#ba8342' },
  { name: 'Ocre Suave', value: '#d19b5e' },
  { name: 'Marfil', value: '#eed9b9' },
  { name: 'Durazno', value: '#e9ad95' },
  { name: 'Salmon', value: '#ec9f8f' },
  { name: 'Coral Suave', value: '#efdacf' },
  { name: 'Rosado', value: '#f0c0c8' },
  { name: 'Azul Claro', value: '#99d0e6' },
  { name: 'Azul Invernal', value: '#5b909b' },
  { name: 'Azul Jade', value: '#55676a' },
  { name: 'Azul Rey', value: '#176b97' },
  { name: 'Zafiro', value: '#2a5875' },
  { name: 'Turquesa', value: '#4db8ad' },
  { name: 'Verde Menta', value: '#a3c8b6' },
  { name: 'Verde Rafia', value: '#879275' },
  { name: 'Verde Manzana', value: '#8c975a' },
  { name: 'Lila', value: '#afa8bb' },
  { name: 'Naranja', value: '#d16c3a' },
  { name: 'Rojo', value: '#943a37' },
];

// Línea Elastomérica - Productos específicos
const IMPECRIL_COLORS: ColorBase[] = [
  { name: 'Rojo', value: '#7e4235' },
  { name: 'Verde', value: '#374f3d' },
  { name: 'Blanco', value: '#ffffff' },
  { name: 'Gris', value: '#606263' },
];

const DECOCRIL_ELASTOMERICO_COLORS: ColorBase[] = [
  { name: 'Blanco Crema', value: '#eeeee3' },
  { name: 'Blanco Perla', value: '#dbe0de' },
  { name: 'Gris Claro', value: '#babdbb' },
  { name: 'Gris Perla', value: '#999d9f' },
  { name: 'Gris Piedra', value: '#94a5ac' },
  { name: 'Gris Cemento', value: '#5a6160' },
  { name: 'Gris Lobo', value: '#4c4f51' },
  { name: 'Gray Claro', value: '#c5bdb8' },
  { name: 'Gray Oscuro', value: '#a99f99' },
  { name: 'Nispero', value: '#a2877a' },
  { name: 'Terracota', value: '#976051' },
  { name: 'Beige', value: '#c0b7a1' },
  { name: 'Amarillo Bandera', value: '#e69d0d' },
  { name: 'Ocre', value: '#ba8342' },
  { name: 'Ocre Suave', value: '#d19b5e' },
  { name: 'Marfil', value: '#eed9b9' },
  { name: 'Durazno', value: '#e9ad95' },
  { name: 'Salmon', value: '#ec9f8f' },
  { name: 'Coral Suave', value: '#efdacf' },
  { name: 'Rosado', value: '#f0c0c8' },
  { name: 'Azul Claro', value: '#99d0e6' },
  { name: 'Azul Invernal', value: '#5b909b' },
  { name: 'Azul Jade', value: '#55676a' },
  { name: 'Azul Rey', value: '#176b97' },
  { name: 'Zafiro', value: '#2a5875' },
  { name: 'Turquesa', value: '#4db8ad' },
  { name: 'Verde Menta', value: '#a3c8b6' },
  { name: 'Verde Rafia', value: '#879275' },
  { name: 'Verde Manzana', value: '#8c975a' },
  { name: 'Lila', value: '#afa8bb' },
  { name: 'Naranja', value: '#d16c3a' },
  { name: 'Rojo', value: '#943a37' },
];

const DEPOCRIL_COLORS: ColorBase[] = [
  { name: 'Blanco', value: '#ffffff' },
  { name: 'Gris', value: '#606263' },
  { name: 'Amarillo', value: '#e69d0d' },
  { name: 'Azul', value: '#176b97' },
  { name: 'Rojo', value: '#7e4235' },
  { name: 'Verde', value: '#4e5743' },
  { name: 'Naranja', value: '#d16c3a' },
];

const TRAFICRIL_ELASTOMERICO_COLORS: ColorBase[] = [
  { name: 'Blanco', value: '#ffffff' },
  { name: 'Gris', value: '#6a7073' },
  { name: 'Amarillo', value: '#e69d0d' },
  { name: 'Azul', value: '#176b97' },
  { name: 'Negro', value: '#000000' },
];

// Línea de Solvente - Productos específicos
const ESMACRIL_COLORS: ColorBase[] = [
  { name: 'Blanco', value: '#ffffff' },
  { name: 'Gris claro', value: '#c3c8c0' },
  { name: 'Gris Hielo', value: '#96a7a5' },
  { name: 'Aluminio Difuso', value: '#8b8c87' },
  { name: 'Gris', value: '#6a7073' },
  { name: 'Gris Plomo', value: '#61676b' },
  { name: 'Amarillo', value: '#cf8900' },
  { name: 'Beige', value: '#e5d8b6' },
  { name: 'Marfil', value: '#dbb98b' },
  { name: 'Azul Zafiro', value: '#003e5e' },
  { name: 'Azul', value: '#29556d' },
  { name: 'Azrul Claro', value: '#50aecb' },
  { name: 'Rojo', value: '#7c241e' },
  { name: 'Naranja', value: '#b85d22' },
  { name: 'Verde', value: '#3a5124' },
  { name: 'Verde Claro', value: '#8a9875' },
  { name: 'Marrón Oscuro', value: '#492f1f' },
  { name: 'Caoba', value: '#452a25' },
  { name: 'Avellana', value: '#9e7665' },
  { name: 'Morado', value: '#655f83' },
  { name: 'Negro', value: '#000000' },
];

const ESMACRIL_PISCINAS_COLORS: ColorBase[] = [
  { name: 'Blanco', value: '#ffffff' },
  { name: 'Azul Oscuro', value: '#008dc4' },
  { name: 'Azul Claro', value: '#50aecb' },
  { name: 'Arena', value: '#d2cab6' },
];

const TRAFICRIL_ALTO_TRAFICO_COLORS: ColorBase[] = [
  { name: 'Amarillo', value: '#e69d0d' },
  { name: 'Azul Claro', value: '#50aecb' },
  { name: 'Gris', value: '#6a7073' },
  { name: 'Negro', value: '#000000' },
  { name: 'Blanco', value: '#ffffff' },
];

const HIERROCRIL_COLORS: ColorBase[] = [
  { name: 'Blanco', value: '#ffffff' },
  { name: 'Negro', value: '#000000' },
  { name: 'Gris', value: '#636a6e' },
];


export const PRODUCT_LINES = [
  {
    name: 'Línea Elastomérica',
    description: 'Pinturas elastoméricas de alta resistencia',
    products: [
      {
        name: 'IMPECRIL',
        description: 'Impermeabilizante elastomérico',
        colors: IMPECRIL_COLORS.map(color => ({ ...color, types: ['elastomerico', 'impermeabilizante'] }))
      },
      {
        name: 'DECOCRIL Elastomérico',
        description: 'Pintura elastomérica decorativa',
        colors: DECOCRIL_ELASTOMERICO_COLORS.map(color => ({ ...color, types: ['elastomerico', 'decorativo'] }))
      },
      {
        name: 'DEPOCRIL',
        description: 'Pintura elastomérica para canchas deportivas',
        colors: DEPOCRIL_COLORS.map(color => ({ ...color, types: ['elastomerico', 'Canchas'] }))
      },
      {
        name: 'TRAFICRIL Elastomérico',
        description: 'Pintura elastomérica para tráfico',
        colors: TRAFICRIL_ELASTOMERICO_COLORS.map(color => ({ ...color, types: ['elastomerico', 'trafico'] }))
      }
    ]
  },
  {
    name: 'Línea de Caucho Mate',
    description: 'Pinturas de caucho con acabado mate',
    products: [
      {
        name: 'DECOCRIL Caucho',
        description: 'Pintura de caucho mate decorativa',
        colors: DECOCRIL_CAUCHO_COLORS.map(color => ({ ...color, types: ['mate', 'caucho'] }))
      }
    ]
  },
  {
    name: 'Línea de Satinados',
    description: 'Pinturas con acabado brillante',
    products: [
      {
        name: 'SEDACRIL',
        description: 'Pintura satinada de alta calidad',
        colors: SEDACRIL_COLORS.map(color => ({ ...color, types: ['satinado', 'brillante', 'brillo de seda'] }))
      }
    ]
  },
  {
    name: 'Línea de Solvente',
    description: 'Pinturas base solvente para uso industrial',
    products: [
      {
        name: 'ESMACRIL',
        description: 'Esmalte sintético de solvente',
        colors: ESMACRIL_COLORS.map(color => ({ ...color, types: ['esmalte', 'solvente'] }))
      },
      {
        name: 'ESMACRIL Piscinas',
        description: 'Esmalte especial para piscinas',
        colors: ESMACRIL_PISCINAS_COLORS.map(color => ({ ...color, types: ['esmalte', 'piscinas', 'solvente'] }))
      },
      {
        name: 'TRAFICRIL Alto Tráfico',
        description: 'Pintura para zonas de alto tráfico',
        colors: TRAFICRIL_ALTO_TRAFICO_COLORS.map(color => ({ ...color, types: ['trafico', 'solvente', 'resistente'] }))
      },
      {
        name: 'HIERROCRIL',
        description: 'Pintura anticorrosiva para hierro',
        colors: HIERROCRIL_COLORS.map(color => ({ ...color, types: ['anticorrosivo', 'hierro', 'solvente'] }))
      }
    ]
  },
  {
    name: 'Línea de Tratamientos',
    description: 'Productos especializados para tratamiento de superficies',
    products: [
      {
        name: 'Base Antialcalino',
        description: 'Base neutralizadora de alcalinidad',
        colors: [{ name: 'Transparente', value: '#f8f9fa', types: ['base', 'tratamiento'] }]
      },
      {
        name: 'DOXICRIL',
        description: 'Sellador y endurecedor de superficies',
        colors: [{ name: 'Transparente', value: '#f8f9fa', types: ['sellador', 'tratamiento'] }]
      },
      {
        name: 'PASTACRIL',
        description: 'Pasta niveladora y reparadora',
        colors: [{ name: 'Blanco', value: '#ffffff', types: ['pasta', 'tratamiento'] }]
      },
      {
        name: 'SELLACRIL',
        description: 'Sellador de poros y fisuras',
        colors: [{ name: 'Transparente', value: '#f8f9fa', types: ['sellador', 'tratamiento'] }]
      }
    ]
  }
];