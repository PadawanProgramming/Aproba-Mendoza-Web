export interface Subject {
  title: string;
  description: string;
  topics: string[];
  duration: string;
}

export interface Career {
  id: string;
  name: string;
  description: string;
  university: string;
  subjectsNeeded: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  period: string;
  priceValue: number;
  priceFormatted: string;
  discountNote?: string;
  benefits: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface MathUnit {
  number: number;
  title: string;
  subtopics: string[];
}

export const MATH_UNITS: MathUnit[] = [
  {
    number: 1,
    title: "Conjuntos Numéricos",
    subtopics: [
      "Clasificación de conjuntos numéricos y símbolos matemáticos",
      "Definición de conjuntos por compresión y extensión",
      "Números Naturales, Enteros, Racionales (conversión a decimales, periódicos puros y mixtos), Irracionales, Reales y Complejos",
      "Particularidades del número 0 y representación en la recta numérica",
      "Operaciones en Reales: Suma, resta, multiplicación, división, potenciación, radicación, extracción de factores fuera del radical y racionalización de denominadores",
      "Orden de resolución de operaciones",
      "Razones y proporciones: Teorema fundamental, proporcionalidad directa e inversa, porcentajes"
    ]
  },
  {
    number: 2,
    title: "Ecuaciones, Inecuaciones de 1° Grado, Función Lineal y Valor Absoluto",
    subtopics: [
      "¿Qué es una ecuación? Definición de función: existencia, unicidad y clasificación de funciones",
      "Ecuaciones de primer grado y planteo de ecuaciones a partir de enunciados coloquiales",
      "Función Lineal: definición, partes, análisis gráfico (pendiente, ordenada al origen, raíces, intervalos de crecimiento/decrecimiento, dominio e imagen)",
      "Rectas específicas: ecuación que pasa por un punto, por dos puntos, rectas paralelas y perpendiculares",
      "Inecuaciones y representación de soluciones en la recta numérica",
      "Valor absoluto e inecuaciones con valor absoluto"
    ]
  },
  {
    number: 3,
    title: "Ecuaciones de 2° Grado, Función Cuadrática y SEL 2x2",
    subtopics: [
      "Ecuaciones de segundo grado completas e incompletas",
      "Función Cuadrática: gráfica y análisis completo (raíces, vértice)",
      "Formas de expresión: Polinómica, Factorizada y Canónica",
      "Método de completar cuadrados y obtención de ecuaciones a partir de su gráfica o ciertos datos",
      "Sistemas de Ecuaciones Lineales (SEL) 2x2: Métodos de reducción, igualación, sustitución y método gráfico"
    ]
  },
  {
    number: 4,
    title: "Polinomios, Casos de Factoreo y Función Racional",
    subtopics: [
      "¿Qué es y qué no es un polinomio? Simplificación de expresiones algebraicas",
      "Operaciones con polinomios: Suma, resta, multiplicación y división",
      "División por Ruffini y Teorema del Resto",
      "Función polinómica: análisis y representación gráfica",
      "Casos de Factoreo: Primer Caso al Séptimo Caso detallado con aplicaciones prácticas"
    ]
  },
  {
    number: 5,
    title: "Función Logarítmica, Exponencial y Números Complejos",
    subtopics: [
      "Logaritmos: definición, partes, cambio de base, operaciones y propiedades de los logaritmos",
      "Función Logarítmica: gráfica y análisis de la función",
      "Exponencial: definición, partes, propiedades de la exponenciación y ecuaciones exponenciales",
      "Función Exponencial: gráfica, análisis y problemas prácticos aplicados",
      "Números complejos: formas de expresión, conversión, operaciones básicas, propiedades y representación gráfica"
    ]
  },
  {
    number: 6,
    title: "Geometría, Circunferencia y Trigonometría",
    subtopics: [
      "Conceptos de geometría básica, clasificación de cuerpos y ángulos",
      "Conversión de sistemas: pasar de radianes a grados y viceversa",
      "Ángulos entre paralelas y transversal, clasificación y polígonos regulares",
      "Proporcionalidad y semejanza: Teorema de Thales, corolarios y semejanza de triángulos",
      "Teorema de Pitágoras y ecuación de la circunferencia",
      "Trigonometría: funciones trigonométricas (seno, coseno, tangente, cosecante, secante, cotangente)",
      "Identidades trigonométricas, simplificación y ecuaciones trigonométricas",
      "Resolución de triángulos no rectángulos: Teoremas del Seno y del Coseno"
    ]
  }
];

export const SUBJECTS: Subject[] = [
  {
    title: "Matemática",
    description: "Programa riguroso de 6 unidades para dominar desde la aritmética básica y álgebra hasta funciones, geometría y trigonometría analítica de nivel de ingreso universitario.",
    duration: "6 meses de cursado continuo",
    topics: [
      "Unidad 1: Conjuntos numéricos, operaciones en Reales, potencias, radicales y porcentajes",
      "Unidad 2: Ecuaciones, inecuaciones de 1° grado, función lineal y valor absoluto",
      "Unidad 3: Ecuaciones de 2° grado, función cuadrática y sistemas de ecuaciones lineales 2x2",
      "Unidad 4: Polinomios, simplificación de expresiones algebraicas y los 7 casos de factoreo",
      "Unidad 5: Funciones logarítmica y exponencial, ecuaciones y números complejos",
      "Unidad 6: Geometría plana, Teorema de Thales, Pitágoras, circunferencia y trigonometría analítica"
    ]
  },
  {
    title: "Física",
    description: "Física mecánica y magnitudes vectoriales. Aprendizaje conceptual riguroso y resolución práctica de problemas de nivel de examen para ingenierías y ciencias.",
    duration: "6 meses de cursado continuo",
    topics: [
      "Sistemas de unidades, pasaje de magnitudes y análisis dimensional",
      "Vectores aplicados a magnitudes físicas y descomposición de fuerzas",
      "Cinemática lineal y en el plano: MRU, MRUV, Caída Libre y Tiro Vertical",
      "Dinámica de la partícula: Leyes de Newton, diagramas de cuerpo libre y fuerzas de rozamiento",
      "Estática y condiciones de equilibrio de cuerpos rígidos y momentos de fuerza",
      "Trabajo, energía cinética y potencial, conservación de la energía mecánica y potencia"
    ]
  },
  {
    title: "Química",
    description: "Química general e inorgánica estructurada paso a paso. Fundamentos atómicos, estequiometría, soluciones y reacciones requeridas en carreras de salud, ingeniería y ciencias aplicadas.",
    duration: "6 meses de cursado continuo",
    topics: [
      "Estructura atómica, partículas subatómicas, número atómico y masa",
      "Tabla periódica, configuración electrónica y propiedades periódicas de los elementos",
      "Enlaces químicos: iónico, covalente, metálico y fuerzas intermoleculares",
      "Nomenclatura y formulación química inorgánica (óxidos, hidruros, ácidos, hidróxidos y sales)",
      "Reacciones químicas, balanceo por tanteo/redox y cálculos estequiométricos",
      "Soluciones acuosas: concentración física y química (molaridad, normalidad y diluciones)"
    ]
  },
  {
    title: "Biología",
    description: "Biología celular y molecular enfocada en los ingresos de Ciencias de la Salud y carreras biomédicas de Mendoza. De la célula a los sistemas fisiológicos.",
    duration: "6 meses de cursado continuo",
    topics: [
      "Biomoléculas esenciales: glúcidos, lípidos, proteínas y ácidos nucleicos",
      "Organización celular: células procariotas y eucariotas, organelas y citoesqueleto",
      "Membrana plasmática, transporte pasivo y activo, ósmosis y señalización celular",
      "Metabolismo y bioenergética celular: fotosíntesis y respiración celular aeróbica/anaeróbica",
      "Ciclo celular, replicación del ADN, transcripción, traducción y mitosis/meiosis",
      "Genética mendeliana, leyes de la herencia y bases de la fisiología humana básica"
    ]
  },
  {
    title: "Técnicas de Estudio + IA",
    description: "Workshops mensuales tipo taller de 1 hora de duración donde se enseñan técnicas de estudio científicas, inteligencia artificial aplicada, uso ético y herramientas digitales para el aprendizaje autónomo.",
    duration: "Workshops mensuales (1 hora)",
    topics: [
      "Técnicas de estudio científicas: Active Recall (recuperación activa) y Repetición Espaciada",
      "Uso de Inteligencia Artificial (Gemini / ChatGPT) para crear simulacros de preguntas y resumir",
      "Uso ético y estratégico de la IA en la preparación universitaria sin perder criterio propio",
      "Herramientas de estudio y organización digital: Notion, Anki, Obsidian y gestión de apuntes",
      "Estrategias de control del tiempo, combate de la procrastinación y manejo de nervios en exámenes"
    ]
  }
];

export const CAREERS: Career[] = [
  {
    id: "ingenierias",
    name: "Ingenierías (UNCuyo / UTN / UM)",
    description: "Sistemas, Civil, Electromecánica, Industrial, Petróleos, Química, etc.",
    university: "UNCuyo, UTN FRM, Universidad de Mendoza",
    subjectsNeeded: ["Matemática", "Física", "Química"]
  },
  {
    id: "salud",
    name: "Ciencias de la Salud (UNCuyo / UMaza / UM)",
    description: "Medicina, Odontología, Farmacia, Bioquímica, Kinesiología, etc.",
    university: "UNCuyo, UMaza, Universidad de Mendoza",
    subjectsNeeded: ["Química", "Biología", "Física", "Matemática"]
  },
  {
    id: "economicas",
    name: "Ciencias Económicas (UNCuyo / UM / Aconcagua)",
    description: "Administración, Contabilidad, Economía, Negocios, etc.",
    university: "UNCuyo, Universidad de Mendoza, Univ. del Aconcagua",
    subjectsNeeded: ["Matemática"]
  },
  {
    id: "arquitectura",
    name: "Arquitectura y Diseño (UNCuyo / UM / Congreso)",
    description: "Arquitectura, Diseño Industrial, Gráfico, etc.",
    university: "UNCuyo, UM, Universidad de Congreso",
    subjectsNeeded: ["Matemática", "Física"]
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "1-materia",
    name: "1 Materia",
    period: "cuota mensual",
    priceValue: 85000,
    priceFormatted: "$85.000",
    benefits: [
      "Cursado presencial especializado en 1 materia (ej: solo Matemática)",
      "Ideal si tu carrera solo te pide rendir una asignatura en el ingreso",
      "Material teórico y práctico impreso 100% bonificado",
      "Simulacros periódicos bajo reloj y seguimiento personalizado",
      "Acceso a los workshops mensuales de Técnicas de Estudio + IA"
    ]
  },
  {
    id: "2-materias",
    name: "2 Materias",
    period: "cuota mensual",
    priceValue: 100000,
    priceFormatted: "$100.000",
    benefits: [
      "Cursado presencial para 2 materias (ej: Matemática + Física, o Química + Biología)",
      "Carga horaria extendida para dominar ambas asignaturas en simultáneo",
      "Cuadernillos teóricos y guías prácticas impresas completas incluidas",
      "Simulacros integrales cronometrados con devolución individual",
      "Acceso a los workshops mensuales de Técnicas de Estudio + IA"
    ]
  },
  {
    id: "3-materias",
    name: "3 Materias",
    period: "cuota mensual",
    priceValue: 125000,
    priceFormatted: "$125.000",
    benefits: [
      "Cursado presencial completo para 3 materias (ej: Matemática, Física y Química)",
      "Preparación integral para carreras con alta exigencia de ingreso",
      "Todos los cuadernillos, apuntes y ejercitación impresa bonificados",
      "Simulacros de examen exhaustivos de las tres asignaturas con feedback detallado",
      "Acceso prioritario a los workshops mensuales de Técnicas de Estudio + IA"
    ]
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    question: "Si el precio de una calculadora científica de $20.000 aumenta un 10% y luego se le aplica un descuento del 10% sobre el nuevo precio, ¿cuál es el precio final?",
    options: [
      "$20.000",
      "$19.800",
      "$18.000",
      "$20.200"
    ],
    correctAnswerIndex: 1,
    explanation: "Un aumento del 10% lleva los $20.000 a $22.000. Luego, el 10% de descuento sobre $22.000 es $2.200, por lo que el precio final queda en $22.000 - $2.200 = $19.800. ¡Ojo con asumir que se cancelan!"
  },
  {
    question: "Un automóvil se desplaza con movimiento rectilíneo uniforme (MRU) a una velocidad constante de 72 km/h. ¿Cuántos metros recorre en exactamente 5 segundos?",
    options: [
      "360 metros",
      "72 metros",
      "100 metros",
      "150 metros"
    ],
    correctAnswerIndex: 2,
    explanation: "Primero convertimos la velocidad a metros por segundo (m/s): 72 km/h / 3.6 = 20 m/s. Luego, multiplicamos velocidad por tiempo: 20 m/s * 5 s = 100 metros."
  },
  {
    question: "Dada la función cuadrática f(x) = x² - 4x + 3, ¿en qué valores de 'x' interseca al eje de las abscisas (raíces)?",
    options: [
      "x = 1  y  x = 3",
      "x = -1  y  x = -3",
      "x = 0  y  x = 3",
      "x = 2  y  x = -2"
    ],
    correctAnswerIndex: 0,
    explanation: "Para hallar las raíces igualamos a cero: x² - 4x + 3 = 0. Factorizando queda (x - 1)(x - 3) = 0. Por ende, las raíces son x = 1 y x = 3."
  },
  {
    question: "¿Qué técnica de estudio ha demostrado científicamente la mayor retención a largo plazo en carreras de alta exigencia?",
    options: [
      "Releer los apuntes subrayados varias veces",
      "Resumir los textos de corrido con tus propias palabras",
      "Evaluación activa (Active Recall) mediante tarjetas de memoria o simulacros",
      "Estudiar escuchando música clásica de fondo"
    ],
    correctAnswerIndex: 2,
    explanation: "La evaluación activa (Active Recall o recuperación activa) y la repetición espaciada son las técnicas más eficaces validadas por la psicología cognitiva. Forzar al cerebro a recuperar la información genera conexiones sinápticas mucho más fuertes que la lectura pasiva."
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "¿Dónde se dictan las clases presenciales?",
    answer: "Las clases presenciales se dictan en la Biblioteca Popular Carrodilla, Antonio Saén 8225. Un espacio cómodo, tranquilo, climatizado y especialmente acondicionado para que te concentres al máximo con acompañamiento docente cercano."
  },
  {
    question: "¿Para qué universidades de Mendoza sirve esta preparación?",
    answer: "Está diseñada a medida para los ingresos de la Universidad Nacional de Cuyo (UNCuyo - Ingenierías, Económicas, Ciencias de la Salud, etc.), la Universidad Tecnológica Nacional (UTN - Regional Mendoza) y universidades privadas como la Universidad de Mendoza (UM), Universidad Juan Agustín Maza (UMaza), Universidad del Aconcagua (UDA), Universidad Champagnat (UCH), Universidad Católica Argentina (UCA) y Universidad de Congreso (UC)."
  },
  {
    question: "¿Cuáles son las materias que prepara Aprobá Mendoza?",
    answer: "Preparamos las materias centrales que exigen los exámenes de ingreso en Mendoza: Matemática, Física, Química, Biología y Técnicas de estudio + IA. Pagás únicamente por la cantidad de materias que tu carrera exija cursar (1, 2 o 3 materias)."
  },
  {
    question: "¿Cuánto dura la formación preuniversitaria?",
    answer: "La formación tiene una duración completa de 6 meses de cursado continuo para garantizar un aprendizaje profundo, sin apuros ni baches conceptuales."
  },
  {
    question: "¿Cómo se calculan las cuotas si solo rindo una materia?",
    answer: "El valor depende directamente de cuántas materias curses: 1 materia cuesta $85.000 por mes, 2 materias $100.000 por mes y 3 materias $125.000 por mes. Además, si te inscribís al mismo tiempo con un amigo, ambos tienen un 20% de descuento en su primera cuota."
  },
  {
    question: "¿Qué pasa si falto a una clase presencial?",
    answer: "No te preocupes. Todo el material práctico, las guías paso a paso y las resoluciones de ejercicios quedan digitalizados y disponibles. Además, contás con seguimiento de dudas personalizado por WhatsApp durante la semana para no perder el hilo."
  }
];

export { type MendozaCareer, MENDOZA_CARRERAS } from "./careersData";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  badge: string;
  iconName: string;
  details: string[];
  ctaText: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: "pre-universitario",
    title: "Formación Preuniversitaria Completa (6 Meses)",
    description: "Duración de 6 meses de cursado continuo. Preparación integral presencial en Biblioteca Popular Carrodilla en grupos reducidos de máximo 12 alumnos para asegurar atención individualizada y aprendizaje profundo de las materias exigidas por tu facultad.",
    badge: "Programa Principal (6 Meses)",
    iconName: "GraduationCap",
    details: [
      "Duración de 6 meses de cursado continuo",
      "Clases teóricas y prácticas estructuradas de alto rendimiento",
      "Grupos reducidos con seguimiento personalizado de tu avance semanal",
      "Material impreso de estudio y cuadernillos 100% bonificados"
    ],
    ctaText: "Consultar Formación de 6 Meses"
  },
  {
    id: "tecnicas-estudio-ia",
    title: "Técnicas de Estudio + IA",
    description: "Talleres mensuales tipo workshops de 1 hora de duración donde se ven técnicas de estudio, inteligencia artificial, uso ético, herramientas de estudio y digitales para el aprendizaje.",
    badge: "Workshops Mensuales (1 Hora)",
    iconName: "Sparkles",
    details: [
      "Talleres mensuales tipo workshops de 1 hora de duración",
      "Técnicas científicas de estudio (Active Recall y Repetición Espaciada)",
      "Inteligencia artificial y su uso ético y estratégico para el aprendizaje",
      "Herramientas de estudio y aplicaciones digitales para la vida universitaria"
    ],
    ctaText: "Consultar Workshops de IA y Estudio"
  },
  {
    id: "simulacros-examen",
    title: "Simulacros de Examen con Devolución y Seguimiento Personalizado",
    description: "Simulación de examen real presencial bajo condiciones exactas de evaluación. Te armamos una prueba personalizada acorde a las exigencias y materias de tu facultad, con reloj en mano, corrección exhaustiva y devolución paso a paso con seguimiento individual de tu progreso.",
    badge: "Entrenamiento Bajo Presión",
    iconName: "Clock",
    details: [
      "Evaluación real presencial bajo reloj con condiciones idénticas a tu examen",
      "Simulacros personalizados según las materias exigidas por tu carrera",
      "Corrección minuciosa y feedback estratégico directo para corregir errores",
      "Seguimiento personalizado de tu evolución y pérdida de nervios frente al examen"
    ],
    ctaText: "Armar Mi Simulacro"
  }
];
