export interface MendozaCareer {
  id: string;
  name: string;
  institution: string;
  faculty: string;
  type: "Grado" | "Tecnicatura";
  sector: "Pública" | "Privada";
  area: string;
  subjects: string[];
  otherRequirements?: string;
  regime?: string;
}

export const MENDOZA_CARRERAS: MendozaCareer[] = [
  {
    "id": "C01",
    "name": "Ingenieria Civil",
    "institution": "UNCuyo",
    "faculty": "Facultad de Ingenieria",
    "type": "Grado",
    "sector": "Pública",
    "area": "Ingenieria y Construccion",
    "subjects": [
      "Matemática",
      "Física",
      "Comprensión Lectora"
    ],
    "otherRequirements": "Comprension Lectora Aplicada a Cs. Exactas",
    "regime": "Eliminatorio / Examenes presenciales"
  },
  {
    "id": "C02",
    "name": "Ingenieria Industrial",
    "institution": "UNCuyo",
    "faculty": "Facultad de Ingenieria",
    "type": "Grado",
    "sector": "Pública",
    "area": "Ingenieria y Gestion",
    "subjects": [
      "Matemática",
      "Física",
      "Comprensión Lectora"
    ],
    "otherRequirements": "Comprension Lectora Aplicada a Cs. Exactas",
    "regime": "Eliminatorio / Examenes presenciales"
  },
  {
    "id": "C03",
    "name": "Ingenieria en Petroleos",
    "institution": "UNCuyo",
    "faculty": "Facultad de Ingenieria",
    "type": "Grado",
    "sector": "Pública",
    "area": "Ingenieria y Mineria",
    "subjects": [
      "Matemática",
      "Física",
      "Comprensión Lectora"
    ],
    "otherRequirements": "Comprension Lectora Aplicada a Cs. Exactas",
    "regime": "Eliminatorio / Examenes presenciales"
  },
  {
    "id": "C04",
    "name": "Ingenieria Mecatronica",
    "institution": "UNCuyo",
    "faculty": "Facultad de Ingenieria",
    "type": "Grado",
    "sector": "Pública",
    "area": "Ingenieria y Tecnologia",
    "subjects": [
      "Matemática",
      "Física",
      "Comprensión Lectora"
    ],
    "otherRequirements": "Comprension Lectora Aplicada a Cs. Exactas",
    "regime": "Eliminatorio / Examenes presenciales"
  },
  {
    "id": "C05",
    "name": "Arquitectura",
    "institution": "UNCuyo",
    "faculty": "Facultad de Ingenieria",
    "type": "Grado",
    "sector": "Pública",
    "area": "Arquitectura y Urbanismo",
    "subjects": [
      "Matemática",
      "Física",
      "Comprensión Lectora"
    ],
    "otherRequirements": "Comprension Lectora Aplicada a Cs. Exactas",
    "regime": "Eliminatorio / Examenes presenciales"
  },
  {
    "id": "C06",
    "name": "Licenciatura en Ciencias de la Computacion",
    "institution": "UNCuyo",
    "faculty": "Facultad de Ingenieria",
    "type": "Grado",
    "sector": "Pública",
    "area": "Tecnologia e Informatica",
    "subjects": [
      "Matemática",
      "Comprensión Lectora"
    ],
    "otherRequirements": "Resolucion de Problemas y Comprension Lectora",
    "regime": "Nivelatorio / Acreditacion"
  },
  {
    "id": "C07",
    "name": "Licenciatura en Ciencias Basicas - Matematica",
    "institution": "UNCuyo",
    "faculty": "Facultad de Ciencias Exactas y Naturales",
    "type": "Grado",
    "sector": "Pública",
    "area": "Ciencias Exactas",
    "subjects": [
      "Matemática",
      "Física",
      "Química",
      "Biología",
      "Comprensión Lectora"
    ],
    "otherRequirements": "Comprension de Textos y Ambientacion",
    "regime": "Nivelatorio con Examen PGC"
  },
  {
    "id": "C08",
    "name": "Licenciatura en Ciencias Basicas - Fisica",
    "institution": "UNCuyo",
    "faculty": "Facultad de Ciencias Exactas y Naturales",
    "type": "Grado",
    "sector": "Pública",
    "area": "Ciencias Exactas",
    "subjects": [
      "Matemática",
      "Física",
      "Química",
      "Biología",
      "Comprensión Lectora"
    ],
    "otherRequirements": "Comprension de Textos y Ambientacion",
    "regime": "Nivelatorio con Examen PGC"
  },
  {
    "id": "C09",
    "name": "Licenciatura en Ciencias Basicas - Quimica",
    "institution": "UNCuyo",
    "faculty": "Facultad de Ciencias Exactas y Naturales",
    "type": "Grado",
    "sector": "Pública",
    "area": "Ciencias Quimicas",
    "subjects": [
      "Matemática",
      "Física",
      "Química",
      "Biología",
      "Comprensión Lectora"
    ],
    "otherRequirements": "Comprension de Textos y Ambientacion",
    "regime": "Nivelatorio con Examen PGC"
  },
  {
    "id": "C10",
    "name": "Licenciatura en Ciencias Basicas - Biologia",
    "institution": "UNCuyo",
    "faculty": "Facultad de Ciencias Exactas y Naturales",
    "type": "Grado",
    "sector": "Pública",
    "area": "Ciencias Biologicas",
    "subjects": [
      "Matemática",
      "Física",
      "Química",
      "Biología",
      "Comprensión Lectora"
    ],
    "otherRequirements": "Comprension de Textos y Ambientacion",
    "regime": "Nivelatorio con Examen PGC"
  },
  {
    "id": "C11",
    "name": "Licenciatura en Geologia",
    "institution": "UNCuyo",
    "faculty": "Facultad de Ciencias Exactas y Naturales",
    "type": "Grado",
    "sector": "Pública",
    "area": "Ciencias de la Tierra",
    "subjects": [
      "Matemática",
      "Física",
      "Química",
      "Biología",
      "Comprensión Lectora"
    ],
    "otherRequirements": "Comprension de Textos y Ambientacion",
    "regime": "Nivelatorio con Examen PGC"
  },
  {
    "id": "C12",
    "name": "Profesorados Universitarios en Exactas",
    "institution": "UNCuyo",
    "faculty": "Facultad de Ciencias Exactas y Naturales",
    "type": "Grado",
    "sector": "Pública",
    "area": "Docencia Cientifica",
    "subjects": [
      "Matemática",
      "Física",
      "Química",
      "Biología",
      "Comprensión Lectora"
    ],
    "otherRequirements": "Comprension de Textos y Ambientacion",
    "regime": "Nivelatorio con Examen PGC"
  },
  {
    "id": "C13",
    "name": "TU en Conservacion de la Naturaleza",
    "institution": "UNCuyo",
    "faculty": "Facultad de Ciencias Exactas y Naturales",
    "type": "Tecnicatura",
    "sector": "Pública",
    "area": "Ciencias Ambientales",
    "subjects": [
      "Matemática",
      "Física",
      "Química",
      "Biología",
      "Comprensión Lectora"
    ],
    "otherRequirements": "Comprension de Textos y Ambientacion",
    "regime": "Nivelatorio con Examen PGC"
  },
  {
    "id": "C14",
    "name": "Ingenieria Agronomica",
    "institution": "UNCuyo",
    "faculty": "Facultad de Ciencias Agrarias",
    "type": "Grado",
    "sector": "Pública",
    "area": "Agro y Alimentos",
    "subjects": [
      "Matemática",
      "Química",
      "Biología"
    ],
    "otherRequirements": "Curso Vocacional y Ambientacion",
    "regime": "Nivelatorio con Global Presencial"
  },
  {
    "id": "C15",
    "name": "Ingenieria en Recursos Naturales Renovables",
    "institution": "UNCuyo",
    "faculty": "Facultad de Ciencias Agrarias",
    "type": "Grado",
    "sector": "Pública",
    "area": "Ambiente y Recursos",
    "subjects": [
      "Matemática",
      "Química",
      "Biología"
    ],
    "otherRequirements": "Curso Vocacional y Ambientacion",
    "regime": "Nivelatorio con Global Presencial"
  },
  {
    "id": "C16",
    "name": "Licenciatura en Bromatologia",
    "institution": "UNCuyo",
    "faculty": "Facultad de Ciencias Agrarias",
    "type": "Grado",
    "sector": "Pública",
    "area": "Alimentos y Salud",
    "subjects": [
      "Matemática",
      "Química",
      "Biología"
    ],
    "otherRequirements": "Curso Vocacional y Ambientacion",
    "regime": "Nivelatorio con Global Presencial"
  },
  {
    "id": "C17",
    "name": "TU en Produccion Vegetal Intensiva",
    "institution": "UNCuyo",
    "faculty": "Facultad de Ciencias Agrarias",
    "type": "Tecnicatura",
    "sector": "Pública",
    "area": "Produccion Agropecuaria",
    "subjects": [
      "Matemática",
      "Química",
      "Biología"
    ],
    "otherRequirements": "Curso Vocacional y Ambientacion",
    "regime": "Nivelatorio con Global Presencial"
  },
  {
    "id": "C18",
    "name": "TU en Enologia y Viticultura",
    "institution": "UNCuyo",
    "faculty": "Facultad de Ciencias Agrarias",
    "type": "Tecnicatura",
    "sector": "Pública",
    "area": "Industria Vitivinicola",
    "subjects": [
      "Matemática",
      "Química",
      "Biología"
    ],
    "otherRequirements": "Curso Vocacional y Ambientacion",
    "regime": "Nivelatorio con Global Presencial"
  },
  {
    "id": "C19",
    "name": "Contador Publico",
    "institution": "UNCuyo",
    "faculty": "Facultad de Ciencias Economicas",
    "type": "Grado",
    "sector": "Pública",
    "area": "Ciencias Economicas",
    "subjects": [
      "Matemática",
      "Comprensión Lectora"
    ],
    "otherRequirements": "Comprension Lectora y Sistemas Gestion",
    "regime": "Nivelatorio con Examen Final"
  },
  {
    "id": "C20",
    "name": "Licenciatura en Administracion",
    "institution": "UNCuyo",
    "faculty": "Facultad de Ciencias Economicas",
    "type": "Grado",
    "sector": "Pública",
    "area": "Ciencias Economicas",
    "subjects": [
      "Matemática",
      "Comprensión Lectora"
    ],
    "otherRequirements": "Comprension Lectora y Sistemas Gestion",
    "regime": "Nivelatorio con Examen Final"
  },
  {
    "id": "C21",
    "name": "Licenciatura en Economia",
    "institution": "UNCuyo",
    "faculty": "Facultad de Ciencias Economicas",
    "type": "Grado",
    "sector": "Pública",
    "area": "Ciencias Economicas",
    "subjects": [
      "Matemática",
      "Comprensión Lectora"
    ],
    "otherRequirements": "Comprension Lectora y Sistemas Gestion",
    "regime": "Nivelatorio con Examen Final"
  },
  {
    "id": "C22",
    "name": "Licenciatura en Logistica",
    "institution": "UNCuyo",
    "faculty": "Facultad de Ciencias Economicas",
    "type": "Grado",
    "sector": "Pública",
    "area": "Logistica y Gestion",
    "subjects": [
      "Matemática",
      "Comprensión Lectora"
    ],
    "otherRequirements": "Comprension Lectora y Sistemas Gestion",
    "regime": "Nivelatorio con Examen Final"
  },
  {
    "id": "C23",
    "name": "Medicina",
    "institution": "UNCuyo",
    "faculty": "Facultad de Ciencias Medicas",
    "type": "Grado",
    "sector": "Pública",
    "area": "Ciencias Medicas",
    "subjects": [
      "Física",
      "Química",
      "Biología",
      "Comprensión Lectora"
    ],
    "otherRequirements": "Comprension Lectora y Curso Vocacional",
    "regime": "Eliminatorio / Orden de Merito"
  },
  {
    "id": "C24",
    "name": "Licenciatura en Enfermeria",
    "institution": "UNCuyo",
    "faculty": "Facultad de Ciencias Medicas",
    "type": "Grado",
    "sector": "Pública",
    "area": "Salud Asistencial",
    "subjects": [
      "Matemática",
      "Biología",
      "Comprensión Lectora"
    ],
    "otherRequirements": "Comprension Lectora y Vocacional",
    "regime": "Nivelatorio con Examen"
  },
  {
    "id": "C25",
    "name": "TU en Anestesiologia",
    "institution": "UNCuyo",
    "faculty": "Facultad de Ciencias Medicas",
    "type": "Tecnicatura",
    "sector": "Pública",
    "area": "Salud Asistencial",
    "subjects": [
      "Matemática",
      "Biología",
      "Comprensión Lectora"
    ],
    "otherRequirements": "Comprension Lectora y Vocacional",
    "regime": "Nivelatorio con Examen"
  },
  {
    "id": "C26",
    "name": "TU en Quirofano e Instrumentacion",
    "institution": "UNCuyo",
    "faculty": "Facultad de Ciencias Medicas",
    "type": "Tecnicatura",
    "sector": "Pública",
    "area": "Salud Asistencial",
    "subjects": [
      "Matemática",
      "Biología",
      "Comprensión Lectora"
    ],
    "otherRequirements": "Comprension Lectora y Vocacional",
    "regime": "Nivelatorio con Examen"
  },
  {
    "id": "C27",
    "name": "TU en Radiologia",
    "institution": "UNCuyo",
    "faculty": "Facultad de Ciencias Medicas",
    "type": "Tecnicatura",
    "sector": "Pública",
    "area": "Salud Asistencial",
    "subjects": [
      "Matemática",
      "Biología",
      "Comprensión Lectora"
    ],
    "otherRequirements": "Comprension Lectora y Vocacional",
    "regime": "Nivelatorio con Examen"
  },
  {
    "id": "C28",
    "name": "TU en Hemoterapia",
    "institution": "UNCuyo",
    "faculty": "Facultad de Ciencias Medicas",
    "type": "Tecnicatura",
    "sector": "Pública",
    "area": "Salud Asistencial",
    "subjects": [
      "Matemática",
      "Biología",
      "Comprensión Lectora"
    ],
    "otherRequirements": "Comprension Lectora y Vocacional",
    "regime": "Nivelatorio con Examen"
  },
  {
    "id": "C29",
    "name": "Odontologia",
    "institution": "UNCuyo",
    "faculty": "Facultad de Odontologia",
    "type": "Grado",
    "sector": "Pública",
    "area": "Salud Odontologica",
    "subjects": [
      "Física",
      "Química",
      "Biología"
    ],
    "otherRequirements": "Curso Vocacional y Ambientacion",
    "regime": "Globales Escritos (Min 60%)"
  },
  {
    "id": "C30",
    "name": "TU en Protesis Dental",
    "institution": "UNCuyo",
    "faculty": "Facultad de Odontologia",
    "type": "Tecnicatura",
    "sector": "Pública",
    "area": "Salud Odontologica",
    "subjects": [
      "Física",
      "Química",
      "Biología"
    ],
    "otherRequirements": "Curso Vocacional y Taller Tecnico",
    "regime": "Nivelatorio Especifico"
  },
  {
    "id": "C31",
    "name": "TU en Asistencia Odontologica",
    "institution": "UNCuyo",
    "faculty": "Facultad de Odontologia",
    "type": "Tecnicatura",
    "sector": "Pública",
    "area": "Salud Odontologica",
    "subjects": [
      "Química",
      "Biología"
    ],
    "otherRequirements": "Curso Vocacional y Taller Tecnico",
    "regime": "Nivelatorio Especifico"
  },
  {
    "id": "C32",
    "name": "TU en Desarrollo de Software",
    "institution": "UNCuyo",
    "faculty": "Instituto Tecnologico Universitario",
    "type": "Tecnicatura",
    "sector": "Pública",
    "area": "Tecnologia e Informatica",
    "subjects": [
      "Matemática",
      "Comprensión Lectora"
    ],
    "otherRequirements": "Comprension Lectora y Pensamiento Logico",
    "regime": "Nivelatorio y Orden de Merito"
  },
  {
    "id": "C33",
    "name": "TU en Redes de Datos y Telecomunicaciones",
    "institution": "UNCuyo",
    "faculty": "Instituto Tecnologico Universitario",
    "type": "Tecnicatura",
    "sector": "Pública",
    "area": "Tecnologia e Informatica",
    "subjects": [
      "Matemática",
      "Comprensión Lectora"
    ],
    "otherRequirements": "Comprension Lectora y Pensamiento Logico",
    "regime": "Nivelatorio y Orden de Merito"
  },
  {
    "id": "C34",
    "name": "TU en Ciencia de Datos",
    "institution": "UNCuyo",
    "faculty": "Instituto Tecnologico Universitario",
    "type": "Tecnicatura",
    "sector": "Pública",
    "area": "Tecnologia e Informatica",
    "subjects": [
      "Matemática"
    ],
    "otherRequirements": "Pensamiento Logico Computacional",
    "regime": "Nivelatorio y Orden de Merito"
  },
  {
    "id": "C35",
    "name": "TU en Produccion Industrial y Automatizacion",
    "institution": "UNCuyo",
    "faculty": "Instituto Tecnologico Universitario",
    "type": "Tecnicatura",
    "sector": "Pública",
    "area": "Industria y Tecnologia",
    "subjects": [
      "Matemática",
      "Comprensión Lectora"
    ],
    "otherRequirements": "Comprension Lectora y Ambientacion",
    "regime": "Examen Presencial (Min 60%)"
  },
  {
    "id": "C36",
    "name": "TU en Mantenimiento e Instalaciones Industriales",
    "institution": "UNCuyo",
    "faculty": "Instituto Tecnologico Universitario",
    "type": "Tecnicatura",
    "sector": "Pública",
    "area": "Industria y Tecnologia",
    "subjects": [
      "Matemática",
      "Comprensión Lectora"
    ],
    "otherRequirements": "Comprension Lectora y Ambientacion",
    "regime": "Examen Presencial (Min 60%)"
  },
  {
    "id": "C37",
    "name": "TU en Electricidad y Sistemas de Control",
    "institution": "UNCuyo",
    "faculty": "Instituto Tecnologico Universitario",
    "type": "Tecnicatura",
    "sector": "Pública",
    "area": "Industria y Energia",
    "subjects": [
      "Matemática",
      "Comprensión Lectora"
    ],
    "otherRequirements": "Comprension Lectora y Ambientacion",
    "regime": "Examen Presencial (Min 60%)"
  },
  {
    "id": "C38",
    "name": "TU en Higiene y Seguridad en el Trabajo",
    "institution": "UNCuyo",
    "faculty": "Instituto Tecnologico Universitario",
    "type": "Tecnicatura",
    "sector": "Pública",
    "area": "Seguridad Laboral",
    "subjects": [
      "Matemática",
      "Comprensión Lectora"
    ],
    "otherRequirements": "Comprension Lectora y Ambientacion",
    "regime": "Examen Presencial (Min 60%)"
  },
  {
    "id": "C39",
    "name": "TU en Logistica y Transporte",
    "institution": "UNCuyo",
    "faculty": "Instituto Tecnologico Universitario",
    "type": "Tecnicatura",
    "sector": "Pública",
    "area": "Logistica y Gestion",
    "subjects": [
      "Matemática",
      "Comprensión Lectora"
    ],
    "otherRequirements": "Comprension Lectora y Ambientacion",
    "regime": "Examen Presencial (Min 60%)"
  },
  {
    "id": "C40",
    "name": "TU en Gestion de Empresas",
    "institution": "UNCuyo",
    "faculty": "Instituto Tecnologico Universitario",
    "type": "Tecnicatura",
    "sector": "Pública",
    "area": "Gestion y Administracion",
    "subjects": [
      "Matemática",
      "Comprensión Lectora"
    ],
    "otherRequirements": "Comprension Lectora y Ambientacion",
    "regime": "Examen Presencial (Min 60%)"
  },
  {
    "id": "C41",
    "name": "TU en Marketing",
    "institution": "UNCuyo",
    "faculty": "Instituto Tecnologico Universitario",
    "type": "Tecnicatura",
    "sector": "Pública",
    "area": "Negocios y Marketing",
    "subjects": [
      "Matemática",
      "Comprensión Lectora"
    ],
    "otherRequirements": "Comprension Lectora y Ambientacion",
    "regime": "Examen Presencial (Min 60%)"
  },
  {
    "id": "C42",
    "name": "Ingenieria Civil",
    "institution": "UTN FRM",
    "faculty": "Facultad Regional Mendoza",
    "type": "Grado",
    "sector": "Pública",
    "area": "Ingenieria y Construccion",
    "subjects": [
      "Matemática",
      "Física"
    ],
    "otherRequirements": "Introduccion a la Universidad (TAIU)",
    "regime": "Seminario Preuniversitario (Min 60%)"
  },
  {
    "id": "C43",
    "name": "Ingenieria Electromecanica",
    "institution": "UTN FRM",
    "faculty": "Facultad Regional Mendoza",
    "type": "Grado",
    "sector": "Pública",
    "area": "Ingenieria Industrial",
    "subjects": [
      "Matemática",
      "Física"
    ],
    "otherRequirements": "Introduccion a la Universidad (TAIU)",
    "regime": "Seminario Preuniversitario (Min 60%)"
  },
  {
    "id": "C44",
    "name": "Ingenieria Electronica",
    "institution": "UTN FRM",
    "faculty": "Facultad Regional Mendoza",
    "type": "Grado",
    "sector": "Pública",
    "area": "Ingenieria y Telecomunicaciones",
    "subjects": [
      "Matemática",
      "Física"
    ],
    "otherRequirements": "Introduccion a la Universidad (TAIU)",
    "regime": "Seminario Preuniversitario (Min 60%)"
  },
  {
    "id": "C45",
    "name": "Ingenieria Quimica",
    "institution": "UTN FRM",
    "faculty": "Facultad Regional Mendoza",
    "type": "Grado",
    "sector": "Pública",
    "area": "Ingenieria Quimica",
    "subjects": [
      "Matemática",
      "Física"
    ],
    "otherRequirements": "Introduccion a la Universidad (TAIU)",
    "regime": "Seminario Preuniversitario (Min 60%)"
  },
  {
    "id": "C46",
    "name": "Ingenieria en Sistemas de Informacion",
    "institution": "UTN FRM",
    "faculty": "Facultad Regional Mendoza",
    "type": "Grado",
    "sector": "Pública",
    "area": "Tecnologia e Informatica",
    "subjects": [
      "Matemática",
      "Física"
    ],
    "otherRequirements": "Introduccion a la Universidad (TAIU)",
    "regime": "Seminario Preuniversitario (Min 60%)"
  },
  {
    "id": "C47",
    "name": "TU en Programacion (TUP)",
    "institution": "UTN FRM",
    "faculty": "Facultad Regional Mendoza",
    "type": "Tecnicatura",
    "sector": "Pública",
    "area": "Tecnologia e Informatica",
    "subjects": [
      "Matemática"
    ],
    "otherRequirements": "Logica de Programacion y Seminario",
    "regime": "Examen Final con Cupo"
  },
  {
    "id": "C48",
    "name": "TU en Redes y Telecomunicaciones",
    "institution": "UTN FRM",
    "faculty": "Facultad Regional Mendoza",
    "type": "Tecnicatura",
    "sector": "Pública",
    "area": "Tecnologia e Informatica",
    "subjects": [
      "Matemática"
    ],
    "otherRequirements": "Logica e Introduccion Tecnica",
    "regime": "Examen Nivelatorio"
  },
  {
    "id": "C49",
    "name": "TU en Higiene y Seguridad Laboral",
    "institution": "UTN FRM",
    "faculty": "Facultad Regional Mendoza",
    "type": "Tecnicatura",
    "sector": "Pública",
    "area": "Seguridad Laboral",
    "subjects": [
      "Matemática"
    ],
    "otherRequirements": "Taller Institucional",
    "regime": "Examen Nivelatorio"
  },
  {
    "id": "C50",
    "name": "Bioingenieria",
    "institution": "UM",
    "faculty": "Facultad de Ingenieria",
    "type": "Grado",
    "sector": "Privada",
    "area": "Bioingenieria y Salud",
    "subjects": [
      "Matemática",
      "Física",
      "Química"
    ],
    "otherRequirements": "Introduccion a la Vida Universitaria",
    "regime": "Modulos Nivelatorios Integrados"
  },
  {
    "id": "C51",
    "name": "Ingenieria en Computacion",
    "institution": "UM",
    "faculty": "Facultad de Ingenieria",
    "type": "Grado",
    "sector": "Privada",
    "area": "Tecnologia e Informatica",
    "subjects": [
      "Matemática",
      "Física",
      "Química"
    ],
    "otherRequirements": "Introduccion a la Vida Universitaria",
    "regime": "Modulos Nivelatorios Integrados"
  },
  {
    "id": "C52",
    "name": "Ingenieria en Electronica",
    "institution": "UM",
    "faculty": "Facultad de Ingenieria",
    "type": "Grado",
    "sector": "Privada",
    "area": "Ingenieria y Tecnologia",
    "subjects": [
      "Matemática",
      "Física",
      "Química"
    ],
    "otherRequirements": "Introduccion a la Vida Universitaria",
    "regime": "Modulos Nivelatorios Integrados"
  },
  {
    "id": "C53",
    "name": "Ingenieria en Informatica",
    "institution": "UM",
    "faculty": "Facultad de Ingenieria",
    "type": "Grado",
    "sector": "Privada",
    "area": "Tecnologia e Informatica",
    "subjects": [
      "Matemática",
      "Física",
      "Química"
    ],
    "otherRequirements": "Introduccion a la Vida Universitaria",
    "regime": "Modulos Nivelatorios Integrados"
  },
  {
    "id": "C54",
    "name": "Ingenieria Industrial",
    "institution": "UM",
    "faculty": "Facultad de Ingenieria",
    "type": "Grado",
    "sector": "Privada",
    "area": "Ingenieria y Gestion",
    "subjects": [
      "Matemática",
      "Física",
      "Química"
    ],
    "otherRequirements": "Introduccion a la Vida Universitaria",
    "regime": "Modulos Nivelatorios Integrados"
  },
  {
    "id": "C55",
    "name": "Medicina",
    "institution": "UM",
    "faculty": "Facultad de Ciencias Medicas",
    "type": "Grado",
    "sector": "Privada",
    "area": "Ciencias Medicas",
    "subjects": [
      "Matemática",
      "Física",
      "Química",
      "Biología"
    ],
    "otherRequirements": "Tecnicas de Estudio",
    "regime": "Examenes Obligatorios (Min 60%)"
  },
  {
    "id": "C56",
    "name": "Licenciatura en Kinesiologia y Fisiatria",
    "institution": "UM",
    "faculty": "Facultad de Ciencias Medicas",
    "type": "Grado",
    "sector": "Privada",
    "area": "Salud y Rehabilitacion",
    "subjects": [
      "Física",
      "Química",
      "Biología"
    ],
    "otherRequirements": "Bases Anatomicas",
    "regime": "Curso Preuniversitario Aprobado"
  },
  {
    "id": "C57",
    "name": "Odontologia",
    "institution": "UM",
    "faculty": "Facultad de Ciencias Medicas",
    "type": "Grado",
    "sector": "Privada",
    "area": "Salud Odontologica",
    "subjects": [
      "Física",
      "Química",
      "Biología"
    ],
    "otherRequirements": "Introduccion Odontologica",
    "regime": "Curso Preuniversitario Aprobado"
  },
  {
    "id": "C58",
    "name": "Arquitectura y Urbanismo",
    "institution": "UM",
    "faculty": "Facultad de Arquitectura Urbanismo y Diseno",
    "type": "Grado",
    "sector": "Privada",
    "area": "Arquitectura y Urbanismo",
    "subjects": [
      "Matemática"
    ],
    "otherRequirements": "Taller de Dibujo y Composicion",
    "regime": "Preuniversitario Diagnostico"
  },
  {
    "id": "C59",
    "name": "Contador Publico",
    "institution": "UM",
    "faculty": "Facultad de Ciencias Economicas",
    "type": "Grado",
    "sector": "Privada",
    "area": "Ciencias Economicas",
    "subjects": [
      "Matemática",
      "Comprensión Lectora"
    ],
    "otherRequirements": "Contabilidad Basica y Comprension",
    "regime": "Curso de Nivelacion"
  },
  {
    "id": "C60",
    "name": "Licenciatura en Administracion de Negocios",
    "institution": "UM",
    "faculty": "Facultad de Ciencias Economicas",
    "type": "Grado",
    "sector": "Privada",
    "area": "Ciencias Economicas",
    "subjects": [
      "Matemática"
    ],
    "otherRequirements": "Introduccion a las Organizaciones",
    "regime": "Curso de Nivelacion"
  },
  {
    "id": "C61",
    "name": "Bioquimica",
    "institution": "UMaza",
    "faculty": "Facultad de Farmacia y Bioquimica",
    "type": "Grado",
    "sector": "Privada",
    "area": "Salud y Bioquimica",
    "subjects": [
      "Matemática",
      "Química",
      "Biología"
    ],
    "otherRequirements": "Materia FARO Institucional",
    "regime": "Programa Ingreso Universitario (PIU)"
  },
  {
    "id": "C62",
    "name": "Farmacia",
    "institution": "UMaza",
    "faculty": "Facultad de Farmacia y Bioquimica",
    "type": "Grado",
    "sector": "Privada",
    "area": "Salud y Farmacia",
    "subjects": [
      "Matemática",
      "Química",
      "Biología"
    ],
    "otherRequirements": "Materia FARO Institucional",
    "regime": "Programa Ingreso Universitario (PIU)"
  },
  {
    "id": "C63",
    "name": "Licenciatura en Quimica",
    "institution": "UMaza",
    "faculty": "Facultad de Farmacia y Bioquimica",
    "type": "Grado",
    "sector": "Privada",
    "area": "Ciencias Quimicas",
    "subjects": [
      "Matemática",
      "Física",
      "Química"
    ],
    "otherRequirements": "Materia FARO Institucional",
    "regime": "PIU Nivelacion Ciencias"
  },
  {
    "id": "C64",
    "name": "Veterinaria",
    "institution": "UMaza",
    "faculty": "Facultad de Cs. Veterinarias y Ambientales",
    "type": "Grado",
    "sector": "Privada",
    "area": "Ciencias Veterinarias",
    "subjects": [
      "Matemática",
      "Biología"
    ],
    "otherRequirements": "Materia FARO Institucional",
    "regime": "PIU: Examen Matematica y Biologia"
  },
  {
    "id": "C65",
    "name": "Licenciatura en Tecnologia de los Alimentos",
    "institution": "UMaza",
    "faculty": "Facultad de Cs. Veterinarias y Ambientales",
    "type": "Grado",
    "sector": "Privada",
    "area": "Alimentos e Industria",
    "subjects": [
      "Matemática",
      "Química"
    ],
    "otherRequirements": "Materia FARO Institucional",
    "regime": "PIU: Nivelacion Exactas"
  },
  {
    "id": "C66",
    "name": "Licenciatura en Ciencias Ambientales",
    "institution": "UMaza",
    "faculty": "Facultad de Cs. Veterinarias y Ambientales",
    "type": "Grado",
    "sector": "Privada",
    "area": "Ambiente y Ecologia",
    "subjects": [
      "Matemática",
      "Química",
      "Biología"
    ],
    "otherRequirements": "Materia FARO Institucional",
    "regime": "PIU: Nivelacion Ciencias"
  },
  {
    "id": "C67",
    "name": "Licenciatura en Kinesiologia y Fisioterapia",
    "institution": "UMaza",
    "faculty": "Facultad de Kinesiologia y Fisioterapia",
    "type": "Grado",
    "sector": "Privada",
    "area": "Salud y Rehabilitacion",
    "subjects": [
      "Física",
      "Química",
      "Biología"
    ],
    "otherRequirements": "Histologia y Materia FARO",
    "regime": "PIU: Biofisica Quimica Biologia"
  },
  {
    "id": "C68",
    "name": "Licenciatura en Terapia Ocupacional",
    "institution": "UMaza",
    "faculty": "Facultad de Kinesiologia y Fisioterapia",
    "type": "Grado",
    "sector": "Privada",
    "area": "Salud y Rehabilitacion",
    "subjects": [
      "Biología"
    ],
    "otherRequirements": "Introduccion Ocupacional y FARO",
    "regime": "PIU: Biologia Humana"
  },
  {
    "id": "C69",
    "name": "Ingenieria en Agrimensura",
    "institution": "UMaza",
    "faculty": "Facultad de Ingenieria y Enologia",
    "type": "Grado",
    "sector": "Privada",
    "area": "Ingenieria y Geomatica",
    "subjects": [
      "Matemática",
      "Física"
    ],
    "otherRequirements": "Materia FARO Institucional",
    "regime": "PIU: Matematica y Fisica"
  },
  {
    "id": "C70",
    "name": "Licenciatura o Ingenieria en Enologia",
    "institution": "UMaza",
    "faculty": "Facultad de Ingenieria y Enologia",
    "type": "Grado",
    "sector": "Privada",
    "area": "Enologia e Industria",
    "subjects": [
      "Matemática",
      "Química"
    ],
    "otherRequirements": "Materia FARO Institucional",
    "regime": "PIU: Matematica y Quimica"
  },
  {
    "id": "C71",
    "name": "TU en Cartografia y Teledeteccion",
    "institution": "UMaza",
    "faculty": "Facultad de Ingenieria y Enologia",
    "type": "Tecnicatura",
    "sector": "Privada",
    "area": "Tecnologia Geoespacial",
    "subjects": [
      "Matemática"
    ],
    "otherRequirements": "Materia FARO Institucional",
    "regime": "PIU Nivelacion Matematica"
  },
  {
    "id": "C72",
    "name": "Licenciatura en Nutricion",
    "institution": "UMaza",
    "faculty": "Facultad de Ciencias de la Nutricion",
    "type": "Grado",
    "sector": "Privada",
    "area": "Salud y Nutricion",
    "subjects": [
      "Química",
      "Biología"
    ],
    "otherRequirements": "Materia FARO Institucional",
    "regime": "PIU: Quimica y Biologia"
  },
  {
    "id": "C73",
    "name": "Contador Publico",
    "institution": "UDA",
    "faculty": "Facultad de Ciencias Economicas y Juridicas",
    "type": "Grado",
    "sector": "Privada",
    "area": "Ciencias Economicas",
    "subjects": [
      "Matemática",
      "Comprensión Lectora"
    ],
    "otherRequirements": "Comprension Lectora e Introduccion al Derecho",
    "regime": "Curso Nivelatorio"
  },
  {
    "id": "C74",
    "name": "Licenciatura en Administracion",
    "institution": "UDA",
    "faculty": "Facultad de Ciencias Economicas y Juridicas",
    "type": "Grado",
    "sector": "Privada",
    "area": "Ciencias Economicas",
    "subjects": [
      "Matemática",
      "Comprensión Lectora"
    ],
    "otherRequirements": "Comprension Lectora y Organizaciones",
    "regime": "Curso Nivelatorio"
  },
  {
    "id": "C75",
    "name": "Licenciatura en Economia",
    "institution": "UDA",
    "faculty": "Facultad de Ciencias Economicas y Juridicas",
    "type": "Grado",
    "sector": "Privada",
    "area": "Ciencias Economicas",
    "subjects": [
      "Matemática",
      "Comprensión Lectora"
    ],
    "otherRequirements": "Comprension Lectora y Pensamiento Economico",
    "regime": "Curso Nivelatorio"
  },
  {
    "id": "C76",
    "name": "Licenciatura en Comercio Internacional",
    "institution": "UDA",
    "faculty": "Facultad de Ciencias Economicas y Juridicas",
    "type": "Grado",
    "sector": "Privada",
    "area": "Ciencias Economicas",
    "subjects": [
      "Matemática",
      "Comprensión Lectora"
    ],
    "otherRequirements": "Comprension Lectora e Instituciones",
    "regime": "Curso Nivelatorio"
  },
  {
    "id": "C77",
    "name": "Licenciatura en Fonoaudiologia",
    "institution": "UDA",
    "faculty": "Facultad de Psicologia y Ciencias de la Salud",
    "type": "Grado",
    "sector": "Privada",
    "area": "Salud y Comunicacion",
    "subjects": [
      "Física",
      "Biología",
      "Comprensión Lectora"
    ],
    "otherRequirements": "Comprension de Textos",
    "regime": "Curso Nivelatorio en Acustica y Biologia"
  },
  {
    "id": "C78",
    "name": "Licenciatura en Sistemas de Informacion",
    "institution": "UCH",
    "faculty": "Facultad de Informatica y Diseno",
    "type": "Grado",
    "sector": "Privada",
    "area": "Tecnologia e Informatica",
    "subjects": [
      "Matemática"
    ],
    "otherRequirements": "Logica de Programacion y Algoritmia",
    "regime": "Curso de Nivelacion"
  },
  {
    "id": "C79",
    "name": "Analista Programador Universitario",
    "institution": "UCH",
    "faculty": "Facultad de Informatica y Diseno",
    "type": "Tecnicatura",
    "sector": "Privada",
    "area": "Tecnologia e Informatica",
    "subjects": [
      "Matemática"
    ],
    "otherRequirements": "Logica y Computacion",
    "regime": "Curso de Nivelacion"
  },
  {
    "id": "C80",
    "name": "Contador Publico",
    "institution": "UCH",
    "faculty": "Facultad de Ciencias Empresariales y Gestion",
    "type": "Grado",
    "sector": "Privada",
    "area": "Ciencias Economicas",
    "subjects": [
      "Matemática"
    ],
    "otherRequirements": "Introduccion a la Contabilidad",
    "regime": "Curso de Nivelacion"
  },
  {
    "id": "C81",
    "name": "Licenciatura en Administracion de Empresas",
    "institution": "UCH",
    "faculty": "Facultad de Ciencias Empresariales y Gestion",
    "type": "Grado",
    "sector": "Privada",
    "area": "Ciencias Economicas",
    "subjects": [
      "Matemática",
      "Comprensión Lectora"
    ],
    "otherRequirements": "Comprension de Textos y Negocios",
    "regime": "Curso de Nivelacion"
  },
  {
    "id": "C82",
    "name": "Licenciatura en Comercio Internacional",
    "institution": "UCH",
    "faculty": "Facultad de Ciencias Empresariales y Gestion",
    "type": "Grado",
    "sector": "Privada",
    "area": "Ciencias Economicas",
    "subjects": [
      "Matemática",
      "Comprensión Lectora"
    ],
    "otherRequirements": "Comprension de Textos",
    "regime": "Curso de Nivelacion"
  },
  {
    "id": "C83",
    "name": "Contador Publico",
    "institution": "UCA",
    "faculty": "Facultad de Ciencias Economicas - Sede Mendoza",
    "type": "Grado",
    "sector": "Privada",
    "area": "Ciencias Economicas",
    "subjects": [
      "Matemática"
    ],
    "otherRequirements": "Persona Cultura y Lenguaje",
    "regime": "Modulo Matematica Aplicada Obligatorio"
  },
  {
    "id": "C84",
    "name": "Licenciatura en Administracion de Empresas",
    "institution": "UCA",
    "faculty": "Facultad de Ciencias Economicas - Sede Mendoza",
    "type": "Grado",
    "sector": "Privada",
    "area": "Ciencias Economicas",
    "subjects": [
      "Matemática"
    ],
    "otherRequirements": "Persona Cultura y Lenguaje",
    "regime": "Modulo Matematica Aplicada Obligatorio"
  },
  {
    "id": "C85",
    "name": "Licenciatura en Economia Empresarial",
    "institution": "UCA",
    "faculty": "Facultad de Ciencias Economicas - Sede Mendoza",
    "type": "Grado",
    "sector": "Privada",
    "area": "Ciencias Economicas",
    "subjects": [
      "Matemática"
    ],
    "otherRequirements": "Persona Cultura y Lenguaje",
    "regime": "Modulo Matematica Aplicada Obligatorio"
  },
  {
    "id": "C86",
    "name": "Licenciatura en Negocios Digitales / Marketing",
    "institution": "UCA",
    "faculty": "Facultad de Ciencias Economicas - Sede Mendoza",
    "type": "Grado",
    "sector": "Privada",
    "area": "Ciencias Economicas",
    "subjects": [
      "Matemática"
    ],
    "otherRequirements": "Persona Cultura y Lenguaje",
    "regime": "Modulo Matematica Aplicada Obligatorio"
  },
  {
    "id": "C87",
    "name": "Arquitectura y Urbanismo",
    "institution": "UC",
    "faculty": "Facultad de Ambiente Arquitectura y Urbanismo",
    "type": "Grado",
    "sector": "Privada",
    "area": "Arquitectura y Urbanismo",
    "subjects": [
      "Matemática"
    ],
    "otherRequirements": "Taller Proyectual y Expresion",
    "regime": "Curso Nivelatorio"
  },
  {
    "id": "C88",
    "name": "Contador Publico",
    "institution": "UC",
    "faculty": "Facultad de Cs. Economicas y de la Administracion",
    "type": "Grado",
    "sector": "Privada",
    "area": "Ciencias Economicas",
    "subjects": [
      "Matemática",
      "Comprensión Lectora"
    ],
    "otherRequirements": "Comprension Lectora y Oratoria",
    "regime": "Modulo Nivelatorio"
  },
  {
    "id": "C89",
    "name": "Licenciatura en Administracion",
    "institution": "UC",
    "faculty": "Facultad de Cs. Economicas y de la Administracion",
    "type": "Grado",
    "sector": "Privada",
    "area": "Ciencias Economicas",
    "subjects": [
      "Matemática",
      "Comprensión Lectora"
    ],
    "otherRequirements": "Comprension Lectora y Oratoria",
    "regime": "Modulo Nivelatorio"
  },
  {
    "id": "C90",
    "name": "TU en Instrumentacion Quirurgica",
    "institution": "UC",
    "faculty": "Facultad de Ciencias de la Salud",
    "type": "Tecnicatura",
    "sector": "Privada",
    "area": "Salud Asistencial",
    "subjects": [
      "Química",
      "Biología"
    ],
    "otherRequirements": "Identidad Institucional",
    "regime": "Nivelatorio en Biologia y Quimica"
  }
];
