import React, { useState, useMemo } from "react";
import { Search, MessageCircle, Check, Award, BookOpen, School, Filter, RotateCcw, Sparkles, Building2, ChevronDown, CheckCircle2 } from "lucide-react";
import { MENDOZA_CARRERAS, MendozaCareer } from "../careersData";

interface CareerSearcherProps {
  ownerName: string;
  phoneNumber: string;
  onConsult: (careerName: string, institution: string) => void;
}

export default function CareerSearcher({ ownerName, phoneNumber, onConsult }: CareerSearcherProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<"Todos" | "Grado" | "Tecnicatura">("Todos");
  const [selectedSector, setSelectedSector] = useState<"Todos" | "Pública" | "Privada">("Todos");
  const [selectedInstitution, setSelectedInstitution] = useState<string>("Todas");
  const [selectedArea, setSelectedArea] = useState<string>("Todas");
  const [requiredSubjects, setRequiredSubjects] = useState<string[]>([]);
  const [onlyPreparedByAproba, setOnlyPreparedByAproba] = useState<boolean>(false);
  const [displayCount, setDisplayCount] = useState<number>(24);

  // Extract unique institutions
  const institutionsList = useMemo(() => {
    const list = Array.from(new Set(MENDOZA_CARRERAS.map(c => c.institution)));
    return ["Todas", ...list];
  }, []);

  // Extract unique areas of knowledge
  const areasList = useMemo(() => {
    const list = Array.from(new Set(MENDOZA_CARRERAS.map(c => c.area).filter(Boolean)));
    return ["Todas", ...list];
  }, []);

  const handleSubjectToggle = (subject: string) => {
    setRequiredSubjects(prev => 
      prev.includes(subject) 
        ? prev.filter(s => s !== subject) 
        : [...prev, subject]
    );
  };

  const handleResetFilters = () => {
    setSearchTerm("");
    setSelectedType("Todos");
    setSelectedSector("Todos");
    setSelectedInstitution("Todas");
    setSelectedArea("Todas");
    setRequiredSubjects([]);
    setOnlyPreparedByAproba(false);
    setDisplayCount(24);
  };

  const hasActiveFilters = 
    searchTerm.trim() !== "" || 
    selectedType !== "Todos" || 
    selectedSector !== "Todos" || 
    selectedInstitution !== "Todas" || 
    selectedArea !== "Todas" || 
    requiredSubjects.length > 0 ||
    onlyPreparedByAproba;

  const filteredCareers = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();

    return MENDOZA_CARRERAS.filter(career => {
      // Search term matching (name, institution, faculty, area, subjects, other requirements)
      if (term) {
        const matchesName = career.name.toLowerCase().includes(term);
        const matchesInst = career.institution.toLowerCase().includes(term);
        const matchesFac = career.faculty.toLowerCase().includes(term);
        const matchesArea = career.area ? career.area.toLowerCase().includes(term) : false;
        const matchesSubjects = career.subjects.some(s => s.toLowerCase().includes(term));
        const matchesOther = career.otherRequirements ? career.otherRequirements.toLowerCase().includes(term) : false;

        if (!matchesName && !matchesInst && !matchesFac && !matchesArea && !matchesSubjects && !matchesOther) {
          return false;
        }
      }

      // Type matching
      if (selectedType !== "Todos" && career.type !== selectedType) {
        return false;
      }

      // Sector matching
      if (selectedSector !== "Todos" && career.sector !== selectedSector) {
        return false;
      }

      // Institution matching
      if (selectedInstitution !== "Todas" && career.institution !== selectedInstitution) {
        return false;
      }

      // Area matching
      if (selectedArea !== "Todas" && career.area !== selectedArea) {
        return false;
      }

      // Special filter: Only prepared in Aprobá Mendoza (Matemática, Física, Química, Biología o Técnicas de estudio)
      if (onlyPreparedByAproba) {
        const hasAprobaSubject = career.subjects.some(s => {
          const lower = s.toLowerCase();
          return (
            lower.includes("matemática") || 
            lower.includes("física") || 
            lower.includes("química") || 
            lower.includes("biología") ||
            lower.includes("técnica") ||
            lower.includes("estudio")
          );
        });
        if (!hasAprobaSubject) return false;
      }

      // Required subjects matching (career must contain all selected subjects)
      if (requiredSubjects.length > 0) {
        const hasAllSelected = requiredSubjects.every(reqSubj =>
          career.subjects.some(cs => cs.toLowerCase().includes(reqSubj.toLowerCase()))
        );
        if (!hasAllSelected) return false;
      }

      return true;
    });
  }, [searchTerm, selectedType, selectedSector, selectedInstitution, selectedArea, onlyPreparedByAproba, requiredSubjects]);

  const visibleCareers = useMemo(() => {
    return filteredCareers.slice(0, displayCount);
  }, [filteredCareers, displayCount]);

  return (
    <section className="py-12 sm:py-20 bg-[#FDFCFB] border-b border-black/10" id="buscador-carreras">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* Header Section */}
        <div className="text-left space-y-4 mb-10 max-w-4xl" id="searcher-header">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF5C00]/10 border border-[#FF5C00]/30 text-[#FF5C00] text-[10px] font-black uppercase tracking-widest">
            <Sparkles className="h-3.5 w-3.5" />
            Relevamiento Oficial de Ingresos Universitarios en Mendoza
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black uppercase italic tracking-tighter leading-none text-[#1A1A1A]">
            BUSCADOR DE CARRERAS DE MENDOZA
          </h2>
          
          <p className="text-gray-700 text-base sm:text-lg font-light leading-relaxed">
            ¿No sabés si el preuniversitario de <strong className="font-semibold text-black">Aprobá Mendoza</strong> te sirve para tu carrera? Buscala a continuación y verificalo vos mismo. Nuestro pre prepara las 5 materias centrales de ingreso: <strong className="text-black font-semibold">Matemática, Física, Química, Biología y Técnicas de estudio + IA</strong>.
          </p>

          {/* Value callout banner */}
          <div className="bg-[#FAF9F6] border-2 border-black p-4 sm:p-5 shadow-[4px_4px_0px_0px_#1A1A1A] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#FF5C00] block">// CÓMO INTERPRETAR LOS RESULTADOS:</span>
              <p className="text-xs sm:text-sm text-gray-800 font-medium">
                Si tu carrera exige <strong className="text-black bg-amber-100 px-1 py-0.5">Matemática</strong>, <strong className="text-black bg-blue-100 px-1 py-0.5">Física</strong>, <strong className="text-black bg-emerald-100 px-1 py-0.5">Química</strong> o <strong className="text-black bg-purple-100 px-1 py-0.5">Biología</strong>, la <strong>Formación Preuniversitaria de Aprobá Mendoza</strong> cubre los contenidos exigidos y cursás únicamente las materias que necesites rendir.
              </p>
            </div>
            <button
              onClick={() => {
                setOnlyPreparedByAproba(prev => !prev);
              }}
              className={`shrink-0 px-4 py-2.5 text-xs font-black uppercase tracking-wider border-2 border-black transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px] ${
                onlyPreparedByAproba 
                  ? "bg-[#FF5C00] text-white" 
                  : "bg-white text-black hover:bg-black hover:text-white"
              }`}
            >
              {onlyPreparedByAproba ? "✓ Viendo carreras que prepara el Pre" : "Ver carreras que prepara el Pre"}
            </button>
          </div>
        </div>

        {/* Filter and Search Controls Card */}
        <div className="bg-white border-2 border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_#1A1A1A] mb-8 space-y-6" id="searcher-controls">
          
          {/* Row 1: Search text + Institution Select */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            
            {/* Search Input */}
            <div className="md:col-span-7 space-y-1.5">
              <label className="block text-[10px] font-black uppercase tracking-wider text-gray-500">
                1. Buscar por carrera, facultad o palabra clave
              </label>
              <div className="relative">
                <Search className="absolute left-3.5 top-3.5 h-4.5 w-4.5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Ej: Civil, Sistemas, Contador, Medicina, UTN, FCEN, UMaza..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setDisplayCount(24);
                  }}
                  className="w-full pl-10 pr-10 py-3 border-2 border-black rounded-none text-sm focus:outline-none focus:ring-0 focus:border-[#FF5C00] bg-white font-bold"
                />
                {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm("")}
                    className="absolute right-3.5 top-3 text-gray-400 hover:text-black font-black text-sm"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Institution Filter Select */}
            <div className="md:col-span-5 space-y-1.5">
              <label className="block text-[10px] font-black uppercase tracking-wider text-gray-500">
                2. Universidad / Institución
              </label>
              <div className="relative">
                <select
                  value={selectedInstitution}
                  onChange={(e) => {
                    setSelectedInstitution(e.target.value);
                    setDisplayCount(24);
                  }}
                  className="w-full px-4 py-3 border-2 border-black rounded-none text-xs sm:text-sm font-bold bg-white focus:outline-none focus:border-[#FF5C00] appearance-none pr-8 cursor-pointer"
                >
                  {institutionsList.map(inst => (
                    <option key={inst} value={inst}>
                      {inst === "Todas" ? "Todas las Universidades" : `${inst} — ${
                        inst === "UNCuyo" ? "Universidad Nacional de Cuyo" :
                        inst === "UTN FRM" ? "Univ. Tecnológica Nacional (FRM)" :
                        inst === "UM" ? "Universidad de Mendoza" :
                        inst === "UMaza" ? "Universidad Juan Agustín Maza" :
                        inst === "UDA" ? "Universidad del Aconcagua" :
                        inst === "UCH" ? "Universidad Champagnat" :
                        inst === "UCA" ? "Univ. Católica Argentina (Mendoza)" :
                        inst === "UC" ? "Universidad de Congreso" : inst
                      }`}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-4 h-4 w-4 text-gray-500 pointer-events-none" />
              </div>
            </div>

          </div>

          {/* Row 2: Type, Sector, Area */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 pt-2 border-t border-black/10">
            
            {/* Type Filter Buttons */}
            <div className="md:col-span-4 space-y-1.5">
              <label className="block text-[10px] font-black uppercase tracking-wider text-gray-500">
                3. Nivel de Título
              </label>
              <div className="grid grid-cols-3 gap-1">
                {(["Todos", "Grado", "Tecnicatura"] as const).map(type => (
                  <button
                    key={type}
                    onClick={() => {
                      setSelectedType(type);
                      setDisplayCount(24);
                    }}
                    className={`py-2.5 text-xs font-black uppercase border-2 transition-all ${
                      selectedType === type
                        ? "bg-black text-white border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                        : "bg-white text-gray-700 border-gray-200 hover:border-black hover:text-black"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Sector Filter Buttons */}
            <div className="md:col-span-4 space-y-1.5">
              <label className="block text-[10px] font-black uppercase tracking-wider text-gray-500">
                4. Gestión
              </label>
              <div className="grid grid-cols-3 gap-1">
                {(["Todos", "Pública", "Privada"] as const).map(sector => (
                  <button
                    key={sector}
                    onClick={() => {
                      setSelectedSector(sector);
                      setDisplayCount(24);
                    }}
                    className={`py-2.5 text-xs font-black uppercase border-2 transition-all ${
                      selectedSector === sector
                        ? "bg-[#FF5C00] text-white border-[#FF5C00] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                        : "bg-white text-gray-700 border-gray-200 hover:border-[#FF5C00] hover:text-[#FF5C00]"
                    }`}
                  >
                    {sector}
                  </button>
                ))}
              </div>
            </div>

            {/* Area Filter Select */}
            <div className="md:col-span-4 space-y-1.5">
              <label className="block text-[10px] font-black uppercase tracking-wider text-gray-500">
                5. Área de Conocimiento
              </label>
              <div className="relative">
                <select
                  value={selectedArea}
                  onChange={(e) => {
                    setSelectedArea(e.target.value);
                    setDisplayCount(24);
                  }}
                  className="w-full px-3 py-2.5 border-2 border-black rounded-none text-xs font-bold bg-white focus:outline-none focus:border-[#FF5C00] appearance-none pr-8 cursor-pointer"
                >
                  {areasList.map(area => (
                    <option key={area} value={area}>
                      {area === "Todas" ? "Todas las Áreas de Estudio" : area}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-3.5 h-4 w-4 text-gray-500 pointer-events-none" />
              </div>
            </div>

          </div>

          {/* Row 3: Required Subjects Selector */}
          <div className="pt-3 border-t border-black/10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <span className="block text-[10px] font-black uppercase tracking-wider text-gray-500">
                6. Filtrar por materias exigidas en el examen de ingreso
              </span>
              <span className="text-[10px] text-gray-400 font-medium">
                (Hacé clic para marcar o desmarcar)
              </span>
            </div>

            <div className="flex flex-wrap gap-2 items-center">
              {[
                { name: "Matemática", highlight: true },
                { name: "Física", highlight: true },
                { name: "Química", highlight: true },
                { name: "Biología", highlight: true },
                { name: "Comprensión Lectora", highlight: false }
              ].map(({ name, highlight }) => {
                const isSelected = requiredSubjects.includes(name);
                return (
                  <button
                    key={name}
                    onClick={() => {
                      handleSubjectToggle(name);
                      setDisplayCount(24);
                    }}
                    className={`px-3.5 py-2 text-xs font-bold border-2 transition-all flex items-center gap-2 ${
                      isSelected
                        ? "bg-[#1A1A1A] text-white border-black shadow-[2px_2px_0px_0px_#FF5C00]"
                        : "bg-white text-gray-800 border-gray-300 hover:border-black hover:bg-gray-50"
                    }`}
                  >
                    <div className={`w-3.5 h-3.5 border flex items-center justify-center text-[8px] ${
                      isSelected ? "border-white bg-[#FF5C00] text-white" : "border-gray-400 bg-white"
                    }`}>
                      {isSelected && <Check className="h-2.5 w-2.5 stroke-[3]" />}
                    </div>
                    <span>{name}</span>
                    {highlight && (
                      <span className="text-[9px] px-1 bg-[#FF5C00]/20 text-[#FF5C00] uppercase font-black">
                        Pre
                      </span>
                    )}
                  </button>
                );
              })}

              {requiredSubjects.length > 0 && (
                <button
                  onClick={() => setRequiredSubjects([])}
                  className="text-xs text-[#FF5C00] hover:underline font-bold px-2 py-1 ml-2"
                >
                  Limpiar filtro de materias
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Results Counter & Reset Action Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-black/10">
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#1A1A1A]">
              Mostrando <span className="text-[#FF5C00]">{filteredCareers.length}</span> carreras encontradas
            </span>
            <span className="text-xs text-gray-400 font-bold">
              (de 90 registradas en Mendoza)
            </span>
          </div>

          {hasActiveFilters && (
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#FF5C00] hover:text-black transition-colors border border-[#FF5C00]/30 hover:border-black px-3 py-1.5 bg-white"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Restablecer todos los filtros
            </button>
          )}
        </div>

        {/* Careers Cards Grid */}
        {filteredCareers.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="careers-search-grid">
              {visibleCareers.map((career) => {
                const isPrepared = career.subjects.some(s => {
                  const lower = s.toLowerCase();
                  return (
                    lower.includes("matemática") || 
                    lower.includes("física") || 
                    lower.includes("química") || 
                    lower.includes("biología")
                  );
                });

                return (
                  <div 
                    key={career.id}
                    className="bg-white border-2 border-black p-6 hover:shadow-[6px_6px_0px_0px_#FF5C00] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 flex flex-col justify-between"
                    id={`career-card-${career.id}`}
                  >
                    <div className="space-y-4">
                      
                      {/* Badges: Grado/Tecnicatura + Pública/Privada + Prepara Aprobá Mendoza */}
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="px-2.5 py-0.5 bg-black text-white text-[9px] font-black uppercase tracking-wider">
                          {career.type}
                        </span>
                        
                        <span className={`px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider border ${
                          career.sector === "Pública" 
                            ? "bg-emerald-50 text-emerald-800 border-emerald-300" 
                            : "bg-amber-50 text-amber-900 border-amber-300"
                        }`}>
                          {career.sector}
                        </span>

                        {isPrepared && (
                          <span className="px-2 py-0.5 bg-[#FF5C00] text-white text-[9px] font-black uppercase tracking-wider ml-auto">
                            ✓ Prepara Aprobá Mendoza
                          </span>
                        )}
                      </div>

                      {/* Career Title */}
                      <h3 className="font-display font-black text-xl uppercase tracking-tight text-[#1A1A1A] leading-snug">
                        {career.name}
                      </h3>

                      {/* Faculty and Institution */}
                      <div className="p-3 bg-[#FAF9F6] border border-black/10 space-y-1">
                        <div className="flex items-start gap-2">
                          <School className="h-4 w-4 text-[#FF5C00] shrink-0 mt-0.5" />
                          <div>
                            <span className="block text-xs font-black text-[#1A1A1A] leading-tight">
                              {career.faculty}
                            </span>
                            <span className="block text-[11px] font-mono font-bold text-[#FF5C00] uppercase tracking-wider mt-0.5">
                              {career.institution}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Required Subjects on Entrance Exam */}
                      <div className="pt-2">
                        <span className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">
                          // MATERIAS QUE PIDEN EN EL INGRESO:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {career.subjects.map((subj, idx) => {
                            const isAprobaSubject = 
                              subj.toLowerCase().includes("matemática") || 
                              subj.toLowerCase().includes("física") ||
                              subj.toLowerCase().includes("química") ||
                              subj.toLowerCase().includes("biología");
                            return (
                              <span 
                                key={idx} 
                                className={`px-2.5 py-1 text-[11px] font-black uppercase tracking-wide border ${
                                  isAprobaSubject
                                    ? "bg-[#FF5C00]/10 text-[#FF5C00] border-[#FF5C00]/40 font-black"
                                    : "bg-gray-100 text-gray-800 border-gray-300"
                                }`}
                              >
                                {subj}
                              </span>
                            );
                          })}
                        </div>
                      </div>

                    </div>

                    {/* Action Button: Consult Preparation */}
                    <div className="pt-6 mt-6 border-t border-black/10">
                      <button
                        onClick={() => onConsult(career.name, `${career.faculty} (${career.institution})`)}
                        className="w-full bg-[#25D366] hover:bg-black text-white hover:text-white border-2 border-black py-3 px-4 font-display font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer"
                      >
                        <MessageCircle className="h-4 w-4 shrink-0" />
                        Consultar Preparación
                      </button>
                    </div>

                  </div>
                );
              })}
            </div>

            {/* Pagination / Load More Button */}
            {filteredCareers.length > visibleCareers.length && (
              <div className="mt-12 text-center space-y-3">
                <button
                  onClick={() => setDisplayCount(prev => prev + 24)}
                  className="px-8 py-4 bg-black text-white hover:bg-[#FF5C00] font-display font-black text-xs uppercase tracking-widest border-2 border-black shadow-[4px_4px_0px_0px_#FF5C00] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                >
                  Cargar más carreras ({visibleCareers.length} de {filteredCareers.length})
                </button>
                <p className="text-[11px] text-gray-500 font-bold uppercase tracking-wider">
                  O utilizá el buscador arriba para encontrar tu carrera de inmediato
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="bg-white border-2 border-black p-12 text-center max-w-xl mx-auto space-y-5 shadow-[6px_6px_0px_0px_#FF5C00]">
            <BookOpen className="h-12 w-12 text-gray-400 mx-auto" />
            <div className="space-y-1">
              <h4 className="font-display font-black text-xl uppercase text-[#1A1A1A]">No se encontraron carreras con esos filtros</h4>
              <p className="text-xs text-gray-600 font-medium leading-relaxed">
                Probá eliminando algunos filtros de materias o institución, o buscá con otro término. Si tu carrera no figura acá, consultame directamente por WhatsApp y analizamos el plan de examen de tu facultad.
              </p>
            </div>
            <button
              onClick={handleResetFilters}
              className="px-6 py-3 bg-black text-white text-xs font-black uppercase tracking-widest hover:bg-[#FF5C00] transition-colors border-2 border-black"
            >
              Restablecer filtros y ver todas las 90 carreras
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
