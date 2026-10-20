import React, { useState, useEffect } from "react";
import { 
  BookOpen, 
  Calculator, 
  Atom, 
  Lightbulb, 
  GraduationCap, 
  CheckCircle, 
  Calendar, 
  MessageCircle, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  Clock, 
  Sparkles, 
  MapPin, 
  Users, 
  Award, 
  AlertCircle, 
  ThumbsUp, 
  HelpCircle,
  TrendingUp,
  Brain,
  Shield,
  Coffee,
  Phone,
  Settings,
  X,
  Download,
  FileText,
  Search,
  Filter,
  Code,
  FlaskConical,
  Dna
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { 
  SUBJECTS, 
  CAREERS, 
  PRICING_PLANS, 
  QUIZ_QUESTIONS, 
  FAQ_ITEMS,
  Subject,
  Career,
  PricingPlan,
  MATH_UNITS,
  MENDOZA_CARRERAS,
  MendozaCareer,
  SERVICES,
  ServiceItem
} from "./data";
import CareerSearcher from "./components/CareerSearcher";
import RegisterForm from "./components/RegisterForm";

export default function App() {
  // Owner settings for WhatsApp customization and urgency triggers
  const [showSettings, setShowSettings] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("5492617204802"); // Mendoza format: 549 + 261 + 7204802
  const [ownerName, setOwnerName] = useState("Antu");
  const [vacanciesCount, setVacanciesCount] = useState<number>(3); // Default remaining spots
  const [closingDate, setClosingDate] = useState<string>("15 de Julio"); // Default enrollment closing date

  // Load settings from localStorage if exists
  useEffect(() => {
    const savedPhone = localStorage.getItem("prep_mendoza_phone");
    const savedName = localStorage.getItem("prep_mendoza_name");
    const savedVacancies = localStorage.getItem("prep_mendoza_vacancies");
    const savedClosingDate = localStorage.getItem("prep_mendoza_closing_date");
    if (savedPhone) setPhoneNumber(savedPhone);
    if (savedName) setOwnerName(savedName);
    if (savedVacancies) {
      const parsed = parseInt(savedVacancies, 10);
      if (!isNaN(parsed)) setVacanciesCount(parsed);
    }
    if (savedClosingDate) setClosingDate(savedClosingDate);
  }, []);

  const saveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("prep_mendoza_phone", phoneNumber);
    localStorage.setItem("prep_mendoza_name", ownerName);
    localStorage.setItem("prep_mendoza_vacancies", vacanciesCount.toString());
    localStorage.setItem("prep_mendoza_closing_date", closingDate);
    setShowSettings(false);
    triggerToast("¡Configuración guardada correctamente!");
  };

  // State for interactive features
  const [activeSubjectTab, setActiveSubjectTab] = useState<number>(0);
  const [activeMathUnit, setActiveMathUnit] = useState<number | null>(0);
  const [selectedCareer, setSelectedCareer] = useState<string>(CAREERS[0].id);
  
  // Quiz state
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // FAQ state
  const [expandedFAQIndex, setExpandedFAQIndex] = useState<number | null>(null);

  // Freebies state
  const [activeFreebie, setActiveFreebie] = useState<string | null>(null);

  // Toast / notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Separate view state for separate pages ('home' | 'careers' | 'register')
  const [currentView, setCurrentView] = useState<'home' | 'careers' | 'register'>('home');

  useEffect(() => {
    // Support direct links for online registration
    const params = new URLSearchParams(window.location.search);
    const viewParam = params.get('view') || params.get('page');
    if (viewParam === 'inscripcion' || viewParam === 'register' || viewParam === 'inscribirse' || window.location.hash === '#inscripcion') {
      setCurrentView('register');
    }
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentView]);

  const navigateToHomeSection = (sectionId: string) => {
    setCurrentView('home');
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
  };

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // Helper to generate custom WhatsApp links
  const getWhatsAppLink = (
    messageType: "general" | "pricing" | "quiz" | "career" | "freebie" | "mendoza_career" | "simulacro" | "service", 
    freebieName?: string,
    mendozaCareerName?: string,
    mendozaCareerInst?: string,
    planId?: string,
    serviceName?: string
  ) => {
    let text = "";
    const cleanPhone = phoneNumber.replace(/[^0-9]/g, "");

    if (messageType === "general") {
      text = `¡Hola, ${ownerName}! Vi tu página web de *Aprobá Mendoza* y me gustaría recibir más información sobre el curso de preparación para ingresos universitarios.`;
    } else if (messageType === "pricing") {
      const plan = PRICING_PLANS.find(p => p.id === planId) || PRICING_PLANS[1];
      text = `¡Hola, ${ownerName}! Estuve en la web de *Aprobá Mendoza* y me interesó el plan de *${plan?.name}* (${plan?.priceFormatted}). ¿Tenés cupos disponibles para comenzar?`;
    } else if (messageType === "career") {
      const careerObj = CAREERS.find(c => c.id === selectedCareer);
      text = `¡Hola, ${ownerName}! Me gustaría consultarte por la preparación presencial de *Aprobá Mendoza* orientada al ingreso de *${careerObj?.name}* de la universidad *${careerObj?.university}*.`;
    } else if (messageType === "quiz") {
      text = `¡Hola, ${ownerName}! Acabo de hacer el autotest diagnóstico en la web de *Aprobá Mendoza* y obtuve *${quizScore}/${QUIZ_QUESTIONS.length}* correctas. Me gustaría coordinar para comenzar la preparación presencial de 6 meses en Biblioteca Popular Carrodilla.`;
    } else if (messageType === "freebie") {
      text = `¡Hola, ${ownerName}! Me interesó el recurso gratuito *${freebieName || "Kit de Inversión Gratuito"}* de *Aprobá Mendoza*. ¿Me lo podrías enviar en PDF a este número? ¡Muchas gracias!`;
    } else if (messageType === "mendoza_career") {
      text = `¡Hola, ${ownerName}! Estuve consultando el buscador de carreras en la web de *Aprobá Mendoza* y me interesa prepararme para la carrera *${mendozaCareerName}* en *${mendozaCareerInst}* (ingreso pide matemática, física o comprensión lectora). ¿Tenés cupos libres para comenzar?`;
    } else if (messageType === "simulacro") {
      text = `¡Hola, ${ownerName}! Me gustaría reservar mi vacante gratuita para asistir al Simulacro Presencial Demo de examen en Biblioteca Popular Carrodilla. ¿Me podrías confirmar fechas e indicarme cómo llegar?`;
    } else if (messageType === "service") {
      text = `¡Hola, ${ownerName}! Vi los servicios que ofreces en la web de *Aprobá Mendoza* y me gustaría consultarte especialmente por el servicio de: *${serviceName || "Clases Especializadas"}*. ¿Tenés disponibilidad para comenzar?`;
    }

    return `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(text)}`;
  };

  const handleConsultCareer = (careerName: string, institution: string) => {
    triggerToast(`Redirigiendo a WhatsApp por la carrera ${careerName}...`);
    const link = getWhatsAppLink("mendoza_career", undefined, careerName, institution);
    const win = window.open(link, "_blank");
    if (win) {
      win.focus();
    }
  };

  const handleQuizAnswer = (optionIndex: number) => {
    if (selectedAnswerIndex !== null) return;
    setSelectedAnswerIndex(optionIndex);
    setShowExplanation(true);
    
    if (optionIndex === QUIZ_QUESTIONS[currentQuestionIndex].correctAnswerIndex) {
      setQuizScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswerIndex(null);
    setShowExplanation(false);
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestionIndex(0);
    setSelectedAnswerIndex(null);
    setQuizScore(0);
    setShowExplanation(false);
    setQuizCompleted(false);
  };

  const getSubjectIcon = (title: string) => {
    switch (title) {
      case "Matemática":
        return <Calculator className="h-5 w-5" id="icon-math" />;
      case "Física":
        return <Atom className="h-5 w-5" id="icon-physics" />;
      case "Química":
        return <FlaskConical className="h-5 w-5" id="icon-chemistry" />;
      case "Biología":
        return <Dna className="h-5 w-5" id="icon-biology" />;
      default:
        return <Sparkles className="h-5 w-5" id="icon-workshops" />;
    }
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "GraduationCap":
        return <GraduationCap className="h-6 w-6 text-[#FF5C00]" />;
      case "Brain":
        return <Brain className="h-6 w-6 text-[#FF5C00]" />;
      case "Clock":
        return <Clock className="h-6 w-6 text-[#FF5C00]" />;
      case "CheckCircle":
        return <CheckCircle className="h-6 w-6 text-[#FF5C00]" />;
      case "Code":
        return <Code className="h-6 w-6 text-[#FF5C00]" />;
      case "Sparkles":
        return <Sparkles className="h-6 w-6 text-[#FF5C00]" />;
      default:
        return <BookOpen className="h-6 w-6 text-[#FF5C00]" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] font-sans antialiased selection:bg-[#FF5C00] selection:text-white" id="main-container">
      
      {/* Sticky Urgency Announcement Banner */}
      <div className="bg-[#1A1A1A] text-gray-300 py-2.5 px-4 border-b-2 border-black text-center text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] flex items-center justify-center gap-2 relative z-40 shadow-sm" id="urgency-announcement-banner">
        <span className="w-2 h-2 bg-[#FF5C00] rounded-full animate-pulse shrink-0" />
        <span>INSCRIPCIONES ABIERTAS: QUEDAN SOLO <strong className="text-white font-black">{vacanciesCount} VACANTES</strong> DE 12 • SEÑA ANTES DEL <strong className="text-[#FF5C00] font-black">{closingDate.toUpperCase()}</strong></span>
      </div>

      {/* OWNER/SETTINGS CONSOLE PIN */}
      <div className="fixed bottom-4 right-4 z-50" id="owner-settings-trigger">
        <button 
          onClick={() => setShowSettings(!showSettings)}
          className="flex items-center gap-2 bg-[#1A1A1A] text-[#FDFCFB] px-5 py-3 rounded-none shadow-[4px_4px_0px_0px_#FF5C00] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#FF5C00] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_0px_#FF5C00] transition-all duration-150 border border-black/20 text-xs font-bold uppercase tracking-wider"
        >
          <Settings className="h-4 w-4 animate-spin-slow" />
          Configurar Mi WhatsApp
        </button>
      </div>

      {/* SETTINGS MODAL */}
      <AnimatePresence>
        {showSettings && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4" id="settings-modal">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="bg-[#FDFCFB] rounded-none max-w-md w-full p-8 shadow-[8px_8px_0px_0px_#1A1A1A] border-2 border-black relative"
            >
              <button 
                onClick={() => setShowSettings(false)}
                className="absolute top-4 right-4 text-[#1A1A1A] hover:text-[#FF5C00] transition-colors p-1"
                id="close-settings-btn"
              >
                <X className="h-6 w-6" />
              </button>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-[#FF5C00]/10 text-[#FF5C00] border border-[#FF5C00]/20">
                  <Settings className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display font-black text-lg uppercase tracking-tight">Embudo de Ventas</h3>
                  <p className="text-xs text-gray-500 font-medium">Asigná el celular donde recibirás las consultas.</p>
                </div>
              </div>

              <form onSubmit={saveSettings} className="space-y-5">
                <div>
                  <label className="block text-[11px] font-black text-[#1A1A1A] uppercase tracking-wider mb-1.5">
                    Número de Celular (Con código de país sin + ni 15)
                  </label>
                  <input 
                    type="text" 
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Ej: 5492617204802"
                    className="w-full px-4 py-3 border-2 border-black rounded-none text-sm focus:outline-none focus:ring-0 focus:border-[#FF5C00] bg-white font-mono font-bold"
                    required
                  />
                  <p className="text-[10px] text-gray-500 mt-1.5 leading-relaxed">
                    Mendoza ej: <span className="font-mono bg-black/5 px-1.5 py-0.5 font-bold">5492617204802</span> (549 + 261 + tu número).
                  </p>
                </div>

                <div>
                  <label className="block text-[11px] font-black text-[#1A1A1A] uppercase tracking-wider mb-1.5">
                    Nombre del Docente / Anfitrión
                  </label>
                  <input 
                    type="text" 
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                    placeholder="Ej: Profe Antu"
                    className="w-full px-4 py-3 border-2 border-black rounded-none text-sm focus:outline-none focus:ring-0 focus:border-[#FF5C00] bg-white font-bold"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-black text-[#1A1A1A] uppercase tracking-wider mb-1.5">
                      Vacantes Libres (de 12)
                    </label>
                    <div className="flex items-center">
                      <button
                        type="button"
                        onClick={() => setVacanciesCount(Math.max(0, vacanciesCount - 1))}
                        className="px-3 py-2.5 border-2 border-black border-r-0 bg-white hover:bg-black/5 text-sm font-black rounded-none transition-colors select-none"
                      >
                        -
                      </button>
                      <input 
                        type="number" 
                        min="0"
                        max="12"
                        value={vacanciesCount}
                        onChange={(e) => setVacanciesCount(Math.min(12, Math.max(0, parseInt(e.target.value, 10) || 0)))}
                        className="w-full text-center py-2.5 border-2 border-black rounded-none text-sm focus:outline-none focus:ring-0 focus:border-[#FF5C00] bg-white font-bold"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setVacanciesCount(Math.min(12, vacanciesCount + 1))}
                        className="px-3 py-2.5 border-2 border-black border-l-0 bg-white hover:bg-black/5 text-sm font-black rounded-none transition-colors select-none"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-black text-[#1A1A1A] uppercase tracking-wider mb-1.5">
                      Cierre de Inscripciones
                    </label>
                    <input 
                      type="text" 
                      value={closingDate}
                      onChange={(e) => setClosingDate(e.target.value)}
                      placeholder="Ej: 15 de Julio"
                      className="w-full px-3 py-3 border-2 border-black rounded-none text-sm focus:outline-none focus:ring-0 focus:border-[#FF5C00] bg-white font-bold"
                      required
                    />
                  </div>
                </div>

                <div className="bg-[#FF5C00]/5 p-4 border border-[#FF5C00]/20">
                  <h4 className="text-xs font-black text-[#1A1A1A] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Sparkles className="h-4.5 w-4.5 text-[#FF5C00]" />
                    ¿Cómo funciona este panel?
                  </h4>
                  <p className="text-[11px] text-gray-700 leading-relaxed font-medium">
                    Al actualizar estos datos, todos los banners de urgencia, los cupos dinámicos en tiempo real y los botones de WhatsApp de la web se actualizarán automáticamente.
                  </p>
                </div>

                <div className="flex gap-3 pt-2">
                  <button 
                    type="button"
                    onClick={() => setShowSettings(false)}
                    className="flex-1 py-3 border border-black text-xs font-bold uppercase tracking-wider bg-white hover:bg-black/5 transition-colors"
                  >
                    Cancelar
                  </button>
                  <button 
                    type="submit"
                    className="flex-1 py-3 bg-[#FF5C00] text-white text-xs font-bold uppercase tracking-wider hover:bg-black hover:text-white hover:border-black transition-all border border-transparent"
                  >
                    Guardar Cambios
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* FREEBIE DETAILS MODAL */}
      <AnimatePresence>
        {activeFreebie && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto" id="freebie-modal">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#FDFCFB] rounded-none max-w-2xl w-full p-6 sm:p-8 shadow-[8px_8px_0px_0px_#1A1A1A] border-2 border-black relative my-8"
            >
              {/* Close Button */}
              <button 
                onClick={() => setActiveFreebie(null)}
                className="absolute top-4 right-4 text-[#1A1A1A] hover:text-[#FF5C00] transition-colors p-1"
                id="close-freebie-btn"
              >
                <X className="h-6 w-6" />
              </button>

              {activeFreebie === "fisica" && (
                <div className="space-y-6" id="freebie-content-fisica">
                  <div className="space-y-2">
                    <span className="text-xs font-black text-[#FF5C00] uppercase tracking-widest block">// RECURSO ONLINE GRATUITO</span>
                    <h3 className="text-2xl sm:text-3xl font-display font-black uppercase text-[#1A1A1A]">
                      Fórmula-Maestra: Física Mecánica
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-medium">
                      Estudiá y recordá de forma rápida los ejes de Cinemática, Dinámica y Unidades de los ingresos de Mendoza.
                    </p>
                  </div>

                  <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 border-y border-black/10 py-4" id="formulas-list">
                    {/* Formula 1 */}
                    <div className="bg-white border border-black p-4 space-y-2 relative group">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black text-gray-400 uppercase">// CINEMÁTICA: MRUV</span>
                        <button 
                          onClick={() => {
                            navigator.clipboard.writeText("xf = xi + vi * t + 0.5 * a * t^2");
                            triggerToast("¡Fórmula copiada al portapapeles!");
                          }}
                          className="text-[10px] bg-black text-white font-bold uppercase tracking-widest px-2 py-1 hover:bg-[#FF5C00] transition-colors cursor-pointer"
                        >
                          Copiar
                        </button>
                      </div>
                      <p className="text-lg font-mono font-black text-[#1A1A1A] tracking-tight">
                        x_f = x_i + v_i · t + ½ · a · t²
                      </p>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        <strong>x_f</strong> es posición final, <strong>v_i</strong> es velocidad inicial, <strong>a</strong> es aceleración y <strong>t</strong> es tiempo. Recordá que la aceleración de la gravedad es aprox. <code className="bg-gray-100 px-1 rounded font-mono">9.8 m/s²</code>.
                      </p>
                    </div>

                    {/* Formula 2 */}
                    <div className="bg-white border border-black p-4 space-y-2 relative group">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black text-gray-400 uppercase">// DINÁMICA: SEGUNDA LEY</span>
                        <button 
                          onClick={() => {
                            navigator.clipboard.writeText("F = m * a");
                            triggerToast("¡Fórmula copiada al portapapeles!");
                          }}
                          className="text-[10px] bg-black text-white font-bold uppercase tracking-widest px-2 py-1 hover:bg-[#FF5C00] transition-colors cursor-pointer"
                        >
                          Copiar
                        </button>
                      </div>
                      <p className="text-lg font-mono font-black text-[#1A1A1A] tracking-tight">
                        F = m · a
                      </p>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        <strong>F</strong> es la fuerza neta en Newtons [N], <strong>m</strong> es la masa en kg y <strong>a</strong> es la aceleración en m/s².
                      </p>
                    </div>

                    {/* Formula 3 */}
                    <div className="bg-white border border-black p-4 space-y-2 relative group">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black text-gray-400 uppercase">// TRABAJO Y ENERGÍA</span>
                        <button 
                          onClick={() => {
                            navigator.clipboard.writeText("W = F * d * cos(theta)");
                            triggerToast("¡Fórmula copiada al portapapeles!");
                          }}
                          className="text-[10px] bg-black text-white font-bold uppercase tracking-widest px-2 py-1 hover:bg-[#FF5C00] transition-colors cursor-pointer"
                        >
                          Copiar
                        </button>
                      </div>
                      <p className="text-lg font-mono font-black text-[#1A1A1A] tracking-tight">
                        W = F · d · cos(θ)
                      </p>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        <strong>W</strong> es Trabajo en Joules [J], <strong>F</strong> es fuerza, <strong>d</strong> es distancia recorrida y <strong>θ</strong> es el ángulo entre la fuerza y el movimiento.
                      </p>
                    </div>

                    {/* Formula 4 */}
                    <div className="bg-white border border-black p-4 space-y-2 relative group">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black text-gray-400 uppercase">// FACTORES DE CONVERSIÓN CRÍTICOS</span>
                        <button 
                          onClick={() => {
                            navigator.clipboard.writeText("1 m/s = 3.6 km/h");
                            triggerToast("¡Fórmula copiada al portapapeles!");
                          }}
                          className="text-[10px] bg-black text-white font-bold uppercase tracking-widest px-2 py-1 hover:bg-[#FF5C00] transition-colors cursor-pointer"
                        >
                          Copiar
                        </button>
                      </div>
                      <p className="text-sm font-mono font-black text-[#1A1A1A] tracking-tight">
                        • De km/h a m/s: Dividir por 3.6<br />
                        • De m/s a km/h: Multiplicar por 3.6<br />
                        • 1 N = 1 kg·m/s²
                      </p>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        Muchos alumnos fallan simplemente por mezclar metros con kilómetros o minutos con segundos. Convertí todo al Sistema Internacional (SI) antes de operar.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <a 
                      href={getWhatsAppLink("freebie", "Formulario de Física Completo en PDF")}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:flex-1 py-3 bg-[#25D366] text-white text-xs font-black uppercase tracking-wider hover:bg-black transition-colors border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Recibir PDF de Alta Resolución en WhatsApp
                    </a>
                    <button 
                      onClick={() => setActiveFreebie(null)}
                      className="w-full sm:w-auto px-6 py-3 border-2 border-black text-xs font-black uppercase tracking-wider bg-white hover:bg-black/5 transition-colors cursor-pointer"
                    >
                      Cerrar Vista
                    </button>
                  </div>
                </div>
              )}

              {activeFreebie === "algebra" && (
                <div className="space-y-6" id="freebie-content-algebra">
                  <div className="space-y-2">
                    <span className="text-xs font-black text-[#FF5C00] uppercase tracking-widest block">// RECURSO ONLINE GRATUITO</span>
                    <h3 className="text-2xl sm:text-3xl font-display font-black uppercase text-[#1A1A1A]">
                      Fichas Rápidas: Álgebra y Trigonometría
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-medium">
                      Fórmulas y propiedades de polinomios, factorización y trigonometría básica indispensables para el examen.
                    </p>
                  </div>

                  <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 border-y border-black/10 py-4" id="algebra-list">
                    {/* Algebra 1 */}
                    <div className="bg-white border border-black p-4 space-y-2 relative group">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black text-gray-400 uppercase">// FACTORIZACIÓN DE CASOS COMUNES</span>
                        <button 
                          onClick={() => {
                            navigator.clipboard.writeText("a^2 - b^2 = (a-b)(a+b)");
                            triggerToast("¡Fórmula copiada al portapapeles!");
                          }}
                          className="text-[10px] bg-black text-white font-bold uppercase tracking-widest px-2 py-1 hover:bg-[#FF5C00] transition-colors cursor-pointer"
                        >
                          Copiar
                        </button>
                      </div>
                      <p className="text-sm sm:text-base font-mono font-black text-[#1A1A1A] tracking-tight">
                        • Diferencia de Cuadrados: a² - b² = (a - b)(a + b)<br />
                        • Trinomio Cuadrado Perfecto: a² ± 2ab + b² = (a ± b)²
                      </p>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        Saber factorizar te permite simplificar fracciones algebraicas complejas al instante, algo sumamente común en las preguntas difíciles de examen.
                      </p>
                    </div>

                    {/* Algebra 2 */}
                    <div className="bg-white border border-black p-4 space-y-2 relative group">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black text-gray-400 uppercase">// ECUACIONES DE SEGUNDO GRADO</span>
                        <button 
                          onClick={() => {
                            navigator.clipboard.writeText("x = (-b +- sqrt(b^2 - 4ac)) / (2a)");
                            triggerToast("¡Fórmula copiada al portapapeles!");
                          }}
                          className="text-[10px] bg-black text-white font-bold uppercase tracking-widest px-2 py-1 hover:bg-[#FF5C00] transition-colors cursor-pointer"
                        >
                          Copiar
                        </button>
                      </div>
                      <p className="text-lg font-mono font-black text-[#1A1A1A] tracking-tight">
                        x = [-b ± √(b² - 4ac)] / 2a
                      </p>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        Fórmula resolvente (Bhaskara) para resolver <code className="bg-gray-100 px-1 rounded font-mono">ax² + bx + c = 0</code>.
                      </p>
                    </div>

                    {/* Algebra 3 */}
                    <div className="bg-white border border-black p-4 space-y-2 relative group">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black text-gray-400 uppercase">// TRIGONOMETRÍA: TRIÁNGULO RECTÁNGULO</span>
                        <button 
                          onClick={() => {
                            navigator.clipboard.writeText("sen = O/H, cos = A/H, tg = O/A");
                            triggerToast("¡Propiedades copiadas!");
                          }}
                          className="text-[10px] bg-black text-white font-bold uppercase tracking-widest px-2 py-1 hover:bg-[#FF5C00] transition-colors cursor-pointer"
                        >
                          Copiar
                        </button>
                      </div>
                      <p className="text-sm sm:text-base font-mono font-black text-[#1A1A1A] tracking-tight leading-relaxed">
                        • sen(θ) = Opuesto / Hipotenusa (SOH)<br />
                        • cos(θ) = Adyacente / Hipotenusa (CAH)<br />
                        • tg(θ) = Opuesto / Adyacente (TOA)
                      </p>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        Esenciales para resolver problemas de descomposición de fuerzas en física o distancias en matemática. No olvides la identidad fundamental: <code className="bg-gray-100 px-1 rounded font-mono">sen²θ + cos²θ = 1</code>.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <a 
                      href={getWhatsAppLink("freebie", "Fichas de Matemática Completo en PDF")}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:flex-1 py-3 bg-[#25D366] text-white text-xs font-black uppercase tracking-wider hover:bg-black transition-colors border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Recibir PDF de Alta Resolución en WhatsApp
                    </a>
                    <button 
                      onClick={() => setActiveFreebie(null)}
                      className="w-full sm:w-auto px-6 py-3 border-2 border-black text-xs font-black uppercase tracking-wider bg-white hover:bg-black/5 transition-colors cursor-pointer"
                    >
                      Cerrar Vista
                    </button>
                  </div>
                </div>
              )}

              {activeFreebie === "ia" && (
                <div className="space-y-6" id="freebie-content-ia">
                  <div className="space-y-2">
                    <span className="text-xs font-black text-[#FF5C00] uppercase tracking-widest block">// RECURSO ONLINE GRATUITO</span>
                    <h3 className="text-2xl sm:text-3xl font-display font-black uppercase text-[#1A1A1A]">
                      Prompts Científicos para Estudiar con IA
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 font-medium">
                      Copiar y pegar estos prompts en Gemini o ChatGPT para multiplicar por 5 tu velocidad de comprensión de textos y autoevaluación.
                    </p>
                  </div>

                  <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 border-y border-black/10 py-4" id="prompts-list">
                    {/* Prompt 1 */}
                    <div className="bg-white border border-black p-4 space-y-2 relative group">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black text-gray-400 uppercase">// PROMPT 1: RESUMIR APUNTES LARGOS</span>
                        <button 
                          onClick={() => {
                            navigator.clipboard.writeText("Actúa como un tutor de comprensión lectora de nivel universitario. Te proporcionaré un texto. Por favor, realiza un resumen ejecutivo estructurado con: 1) La idea central explicada en un solo párrafo, 2) Una lista de los 5 conceptos clave más importantes con definiciones cortas, y 3) Dos preguntas analíticas para reflexionar sobre el texto con sus respectivas respuestas.");
                            triggerToast("¡Prompt 1 copiado al portapapeles!");
                          }}
                          className="text-[10px] bg-black text-white font-bold uppercase tracking-widest px-2 py-1 hover:bg-[#FF5C00] transition-colors cursor-pointer"
                        >
                          Copiar Prompt
                        </button>
                      </div>
                      <p className="text-xs text-gray-700 bg-gray-50 border border-gray-100 p-3 font-mono leading-relaxed max-h-[100px] overflow-y-auto rounded-sm">
                        "Actúa como un tutor de comprensión lectora de nivel universitario. Te proporcionaré un texto. Por favor, realiza un resumen ejecutivo estructurado con: 1) La idea central explicada en un solo párrafo, 2) Una lista de los 5 conceptos clave más importantes con definiciones cortas, y 3) Dos preguntas analíticas para reflexionar sobre el texto con sus respectivas respuestas."
                      </p>
                      <p className="text-[10px] text-gray-500 italic">
                        Uso: Ideal para textos de historia, geografía, economía o análisis literario requeridos en ingresos de la UNCuyo.
                      </p>
                    </div>

                    {/* Prompt 2 */}
                    <div className="bg-white border border-black p-4 space-y-2 relative group">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black text-gray-400 uppercase">// PROMPT 2: GENERADOR DE AUTOEVALUACIONES</span>
                        <button 
                          onClick={() => {
                            navigator.clipboard.writeText("Actúa como un profesor riguroso de ingreso universitario. Basado en el siguiente tema o apunte de [MATERIA/TEMA], genera un examen de autoevaluación interactivo. Proporciona 5 preguntas de opción múltiple (A, B, C, D) de nivel de ingreso de Mendoza. No me muestres las respuestas de inmediato. Al final del mensaje, incluye una clave de respuestas oculta o espaciada con explicaciones detalladas para cada una.");
                            triggerToast("¡Prompt 2 copiado al portapapeles!");
                          }}
                          className="text-[10px] bg-black text-white font-bold uppercase tracking-widest px-2 py-1 hover:bg-[#FF5C00] transition-colors cursor-pointer"
                        >
                          Copiar Prompt
                        </button>
                      </div>
                      <p className="text-xs text-gray-700 bg-gray-50 border border-gray-100 p-3 font-mono leading-relaxed max-h-[100px] overflow-y-auto rounded-sm">
                        "Actúa como un profesor riguroso de ingreso universitario. Basado en el siguiente tema o apunte de [MATERIA/TEMA], genera un examen de autoevaluación interactivo. Proporciona 5 preguntas de opción múltiple (A, B, C, D) de nivel de ingreso de Mendoza. No me muestres las respuestas de inmediato. Al final del mensaje, incluye una clave de respuestas oculta o espaciada con explicaciones detalladas para cada una."
                      </p>
                      <p className="text-[10px] text-gray-500 italic">
                        Uso: Excelente para practicar simulacros de opción múltiple en cualquier materia antes de rendir.
                      </p>
                    </div>

                    {/* Prompt 3 */}
                    <div className="bg-white border border-black p-4 space-y-2 relative group">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black text-gray-400 uppercase">// PROMPT 3: EXPLICADOR DE PROBLEMAS DE FÍSICA</span>
                        <button 
                          onClick={() => {
                            navigator.clipboard.writeText("Te voy a dar el enunciado de un problema de física de nivel secundario/ingreso. Ayúdame a resolverlo científicamente: 1) Identifica qué datos me da el enunciado y qué me pide calcular, 2) Explica qué conceptos físicos aplican (cinemática, dinámica, etc.), 3) Proporciona las fórmulas necesarias, 4) Realiza el desarrollo matemático paso a paso con explicaciones breves en cada renglón, 5) Dame la respuesta final redondeada con sus unidades correspondientes.");
                            triggerToast("¡Prompt 3 copiado al portapapeles!");
                          }}
                          className="text-[10px] bg-black text-white font-bold uppercase tracking-widest px-2 py-1 hover:bg-[#FF5C00] transition-colors cursor-pointer"
                        >
                          Copiar Prompt
                        </button>
                      </div>
                      <p className="text-xs text-gray-700 bg-gray-50 border border-gray-100 p-3 font-mono leading-relaxed max-h-[100px] overflow-y-auto rounded-sm">
                        "Te voy a dar el enunciado de un problema de física de nivel secundario/ingreso. Ayúdame a resolverlo científicamente: 1) Identifica qué datos me da el enunciado y qué me pide calcular, 2) Explica qué conceptos físicos aplican (cinemática, dinámica, etc.), 3) Proporciona las fórmulas necesarias, 4) Realiza el desarrollo matemático paso a paso con explicaciones breves en cada renglón, 5) Dame la respuesta final redondeada con sus unidades correspondientes."
                      </p>
                      <p className="text-[10px] text-gray-500 italic">
                        Uso: Ideal para desarmar problemas complejos de fuerzas o cinemática cuando te quedás trabado en casa.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <a 
                      href={getWhatsAppLink("freebie", "Guía Completa de IA para el Estudio en PDF")}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:flex-1 py-3 bg-[#25D366] text-white text-xs font-black uppercase tracking-wider hover:bg-black transition-colors border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Pedir la Guía Completa de IA en PDF por WhatsApp
                    </a>
                    <button 
                      onClick={() => setActiveFreebie(null)}
                      className="w-full sm:w-auto px-6 py-3 border-2 border-black text-xs font-black uppercase tracking-wider bg-white hover:bg-black/5 transition-colors cursor-pointer"
                    >
                      Cerrar Vista
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* FLOATING TOAST NOTIFICATION */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div 
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#1A1A1A] text-[#FDFCFB] px-6 py-4 rounded-none shadow-[6px_6px_0px_0px_#FF5C00] flex items-center gap-3 border border-black text-xs font-bold uppercase tracking-wider"
            id="toast-notification"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-ping" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HEADER NAVBAR */}
      <header className="sticky top-0 z-40 bg-[#FDFCFB]/95 backdrop-blur-md border-b border-black/10 transition-all duration-300" id="site-header">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 h-20 flex items-center justify-between">
          <button 
            onClick={() => setCurrentView('home')}
            className="flex items-center gap-3 cursor-pointer select-none text-left" 
            id="brand-logo"
          >
            <div className="p-2 bg-[#1A1A1A] text-white">
              <GraduationCap className="h-6 w-6" />
            </div>
            <div>
              <span className="font-display font-black text-xl uppercase tracking-tighter block leading-none text-[#1A1A1A]">
                APROBÁ MENDOZA
              </span>
              <span className="block text-[9px] font-black text-[#FF5C00] uppercase tracking-[0.2em] mt-1">
                Acompañamiento en Casa
              </span>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-[#1A1A1A]" id="main-nav">
            {currentView === 'home' ? (
              <>
                <a href="#servicios" className="hover:text-[#FF5C00] transition-colors py-1 text-[#FF5C00]">Servicios</a>
                <button 
                  onClick={() => setCurrentView('careers')}
                  className="hover:text-[#FF5C00] transition-colors py-1 font-bold uppercase tracking-widest text-left"
                >
                  Buscador de Carreras
                </button>
                <a href="#plan-estudios" className="hover:text-[#FF5C00] transition-colors py-1">Plan de Estudios</a>
                <a href="#precios" className="hover:text-[#FF5C00] transition-colors py-1">Precios y Reserva</a>
                <a href="#faq" className="hover:text-[#FF5C00] transition-colors py-1">Dudas</a>
              </>
            ) : currentView === 'register' ? (
              <>
                <button 
                  onClick={() => setCurrentView('home')}
                  className="hover:text-[#FF5C00] transition-colors py-1 font-bold uppercase tracking-widest text-[#FF5C00] flex items-center gap-1.5"
                >
                  ← Volver al Inicio
                </button>
                <span className="bg-[#25D366]/10 text-emerald-700 px-3 py-1 text-[10px] font-black uppercase tracking-widest border border-[#25D366]/20">
                  Formulario de Inscripción
                </span>
                <button 
                  onClick={() => { setCurrentView('home'); setTimeout(() => navigateToHomeSection('servicios'), 150); }}
                  className="hover:text-[#FF5C00] transition-colors py-1 font-bold uppercase tracking-widest text-left"
                >
                  Servicios
                </button>
                <button 
                  onClick={() => { setCurrentView('home'); setTimeout(() => navigateToHomeSection('precios'), 150); }}
                  className="hover:text-[#FF5C00] transition-colors py-1 font-bold uppercase tracking-widest text-left"
                >
                  Precios
                </button>
              </>
            ) : (
              <>
                <button 
                  onClick={() => setCurrentView('home')}
                  className="hover:text-[#FF5C00] transition-colors py-1 font-bold uppercase tracking-widest text-[#FF5C00] flex items-center gap-1.5"
                >
                  ← Volver al Inicio
                </button>
                <span className="bg-[#FF5C00]/10 text-[#FF5C00] px-3 py-1 text-[10px] font-black uppercase tracking-widest border border-[#FF5C00]/20">
                  Buscador de Carreras
                </span>
                <button 
                  onClick={() => navigateToHomeSection('servicios')}
                  className="hover:text-[#FF5C00] transition-colors py-1 font-bold uppercase tracking-widest text-left"
                >
                  Servicios
                </button>
                <button 
                  onClick={() => navigateToHomeSection('plan-estudios')}
                  className="hover:text-[#FF5C00] transition-colors py-1 font-bold uppercase tracking-widest text-left"
                >
                  Plan de Estudios
                </button>
                <button 
                  onClick={() => navigateToHomeSection('precios')}
                  className="hover:text-[#FF5C00] transition-colors py-1 font-bold uppercase tracking-widest text-left"
                >
                  Precios
                </button>
                <button 
                  onClick={() => navigateToHomeSection('faq')}
                  className="hover:text-[#FF5C00] transition-colors py-1 font-bold uppercase tracking-widest text-left"
                >
                  Dudas
                </button>
              </>
            )}
          </nav>

          <div className="flex items-center gap-3" id="header-cta-group">
            {currentView !== 'register' && (
              <button
                onClick={() => setCurrentView('register')}
                className="flex items-center gap-1.5 bg-[#FF5C00] hover:bg-black text-white hover:text-white border-2 border-black px-4.5 py-2.5 font-bold text-xs uppercase tracking-wider transition-all duration-150 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
              >
                Inscribirme Online
              </button>
            )}
          </div>
        </div>
      </header>

      {currentView === 'home' ? (
        <>
          {/* HERO SECTION */}
          <section className="relative overflow-hidden bg-[#FDFCFB] border-b border-black/10 pt-8 pb-16 sm:pb-24" id="hero-section">
        {/* Background grid markings representing structural lines */}
        <div className="absolute inset-y-0 right-1/4 w-px bg-black/5 pointer-events-none hidden lg:block" />

        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Col: Hero content */}
            <div className="lg:col-span-7 flex flex-col justify-between pr-0 lg:pr-8 space-y-8" id="hero-content">
              <div className="space-y-6">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-black/5 border border-black/10 text-slate-800 text-[10px] font-black uppercase tracking-[0.12em]" id="hero-badge">
                  <Users className="h-3.5 w-3.5 text-[#FF5C00]" />
                  Cupos estrictamente limitados (Máx 12 alumnos)
                </div>

                {/* Big Bold Headline */}
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-black tracking-tighter uppercase italic leading-[0.85] text-[#1A1A1A]" id="hero-title">
                  TU PASAJE <br /> A LA <span className="text-[#FF5C00] not-italic font-black">FACU.</span>
                </h1>

                {/* Sub-headline */}
                <p className="text-xl sm:text-2xl font-light text-gray-700 max-w-2xl leading-snug" id="hero-subtitle">
                  Formación presencial y personalizada en Mendoza para aspirantes de <strong>Ingeniería, Informática, Arquitectura y Ciencias Económicas</strong> de cualquier universidad de la provincia.
                </p>
              </div>

              {/* Unique layout point: Bullet block inspired by the requested theme */}
              <div className="space-y-4 max-w-xl" id="hero-bullet-block">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1A1A1A] text-white rounded-none flex items-center justify-center font-display font-black text-xl italic shrink-0 shadow-[3px_3px_0px_0px_#1A1A1A]">
                    6
                  </div>
                  <div>
                    <span className="block text-sm font-black uppercase tracking-wider text-[#1A1A1A]">Meses de Preparación Total</span>
                    <span className="block text-xs text-gray-600 font-medium leading-relaxed mt-0.5">
                      Dominio práctico de Matemática, Física, Química, Biología y Técnicas de estudio + IA, simulacros bajo presión real y seguimiento personalizado en Biblioteca Popular Carrodilla.
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4" id="hero-cta-group">
                <a 
                  href="#precios" 
                  className="text-center bg-[#1A1A1A] text-white hover:bg-[#FF5C00] hover:text-white border-2 border-black font-display font-black text-sm uppercase tracking-wider py-4.5 px-8 transition-all duration-150 shadow-[4px_4px_0px_0px_#FF5C00] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                >
                  Ver Planes y Precios
                </a>
                <a 
                  href={getWhatsAppLink("general")}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => triggerToast("Iniciando chat de WhatsApp...")}
                  className="flex items-center justify-center gap-2 bg-white text-[#1A1A1A] border-2 border-black hover:bg-[#25D366]/5 hover:text-[#25D366] hover:border-[#25D366] font-display font-black text-sm uppercase tracking-wider py-4.5 px-8 transition-all duration-150 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                >
                  <MessageCircle className="h-5 w-5 text-[#25D366]" />
                  Escribinos por WhatsApp
                </a>
              </div>

              {/* Location Badge */}
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest flex items-center gap-2" id="hero-footnote">
                <MapPin className="h-4 w-4 text-[#FF5C00]" />
                Biblioteca Popular Carrodilla, Antonio Saén 8225 — Cursado presencial.
              </p>
            </div>

            {/* Right Col: Interactive status card with Bold typography border style */}
            <div className="lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-black/10 pt-8 lg:pt-0 lg:pl-12" id="hero-card-container">
              <div className="bg-[#FAF9F6] border-2 border-black p-8 relative overflow-hidden" id="hero-interactive-card">
                
                <h3 className="font-display font-black text-sm uppercase tracking-wider mb-6 text-[#1A1A1A] border-b border-black/10 pb-3">
                  // PROGRAMA E INGRESO 2026
                </h3>

                <div className="space-y-4" id="cycle-details">
                  <div className="p-4 bg-white border border-black/10">
                    <span className="block text-[9px] font-black text-[#FF5C00] uppercase tracking-wider mb-1">CURSADO DE ALTO RENDIMIENTO</span>
                    <span className="block text-sm font-extrabold text-[#1A1A1A]">Ingresos Universitarios Mendoza</span>
                    <span className="block text-xs text-gray-600 font-medium mt-1">Clases presenciales y personalizadas enfocadas en que cada alumno entienda realmente.</span>
                  </div>

                  <div className="p-4 bg-white border border-black/10">
                    <span className="block text-[9px] font-black text-[#FF5C00] uppercase tracking-wider mb-1">TALLERES DE ESTUDIO Y PRODUCTIVIDAD</span>
                    <span className="block text-sm font-extrabold text-[#1A1A1A]">Copilotos de IA y Active Recall</span>
                    <span className="block text-xs text-gray-600 font-medium mt-1">Estrategias de estudio científicas para asimilar contenidos sin frustraciones ni estrés.</span>
                  </div>
                </div>

                <div className="space-y-4 border-t border-black/10 pt-6 mt-6">
                  <div className="flex items-center justify-between" id="spots-counter">
                    <div>
                      <span className="block text-[9px] font-black text-gray-500 uppercase tracking-widest">CUPOS DISPONIBLES</span>
                      <span className="text-3xl font-black italic tracking-tight text-[#1A1A1A]">
                        {vacanciesCount} <span className="text-xs font-bold uppercase not-italic text-gray-600">de 12</span>
                      </span>
                    </div>
                    {vacanciesCount <= 4 ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FF5C00] text-white text-[9px] font-black uppercase tracking-widest animate-pulse">
                        Últimos {vacanciesCount} Cupos
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black text-white text-[9px] font-black uppercase tracking-widest">
                        Vacantes Disponibles
                      </span>
                    )}
                  </div>

                  <div className="bg-[#1A1A1A] text-white p-4 flex items-center justify-between gap-3 shadow-[4px_4px_0px_0px_#FF5C00]">
                    <div>
                      <span className="block text-[9px] font-black text-gray-400 uppercase tracking-widest">CIERRE DE INSCRIPCIONES</span>
                      <span className="text-sm font-display font-black tracking-wide uppercase text-white">{closingDate}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECCIÓN DE SERVICIOS ACADÉMICOS */}
      <section className="py-16 sm:py-24 bg-white border-b border-black/10" id="servicios">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          
          <div className="text-left space-y-3 mb-12 max-w-3xl" id="services-header">
            <span className="text-xs font-black text-[#FF5C00] uppercase tracking-[0.2em] block">// NUESTRA CARTERA DE SOLUCIONES</span>
            <h2 className="text-4xl sm:text-5xl font-display font-black uppercase italic tracking-tighter leading-none text-[#1A1A1A]">
              QUÉ OFRECEMOS: CLASES, CURSOS Y SOPORTE
            </h2>
            <p className="text-gray-600 text-lg font-light leading-relaxed">
              No solo te acompañamos en tu ingreso universitario; ofrecemos soporte integral para potenciar tu desarrollo escolar, universitario y tecnológico. <strong>Explorá todo lo que podés cursar en nuestro espacio presencial y virtual:</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch" id="services-cards-grid">
            {SERVICES.map((service) => (
              <div 
                key={service.id}
                className="bg-[#FDFCFB] border-2 border-black p-6 sm:p-8 flex flex-col justify-between relative transition-all duration-300 hover:shadow-[6px_6px_0px_0px_#1A1A1A] shadow-[3px_3px_0px_0px_rgba(0,0,0,0.04)] hover:translate-y-[-2px] hover:translate-x-[-2px]"
                id={`service-card-${service.id}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="px-2.5 py-1 bg-black/5 border border-black/10 text-slate-800 text-[9px] font-black uppercase tracking-widest">
                      {service.badge}
                    </span>
                    <span className="p-2 bg-black/5 border border-black/10">
                      {getServiceIcon(service.iconName)}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-lg sm:text-xl uppercase tracking-tight text-[#1A1A1A] mb-3 leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs text-gray-600 leading-relaxed font-medium mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-black/10">
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block">// DETALLES DEL SERVICIO:</span>
                    <ul className="space-y-2 text-xs font-semibold text-gray-700">
                      {service.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2 leading-relaxed">
                          <CheckCircle className="h-4 w-4 text-[#FF5C00] shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-black/10">
                  <a
                    href={getWhatsAppLink("service", undefined, undefined, undefined, undefined, service.title)}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => triggerToast(`Abriendo chat por el servicio: ${service.title}...`)}
                    className="w-full bg-[#1A1A1A] hover:bg-[#25D366] text-white hover:text-white py-4 px-6 font-display font-black text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 border-2 border-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                    id={`service-cta-${service.id}`}
                  >
                    <MessageCircle className="h-4.5 w-4.5 shrink-0" />
                    {service.ctaText}
                  </a>
                  
                  <button
                    onClick={() => setCurrentView('register')}
                    className="w-full mt-3.5 text-center text-[11px] font-black uppercase tracking-wider text-[#FF5C00] hover:text-black transition-colors border-b border-dashed border-[#FF5C00]/20 hover:border-black/20 pb-0.5 cursor-pointer block"
                  >
                    ✍ Pre-Inscribirme Online (4 Pasos)
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECCIÓN DE ACCESO AL BUSCADOR DE CARRERAS APARTE */}
      <section className="py-16 sm:py-20 bg-[#FAF9F6] border-b border-black/10" id="buscador-carreras">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          <div className="bg-white border-2 border-black p-8 sm:p-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl text-left">
              <span className="text-xs font-black text-[#FF5C00] uppercase tracking-[0.2em] block">
                // CONSULTÁ TU REQUISITO DE INGRESO
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-black uppercase italic tracking-tighter leading-none text-[#1A1A1A]">
                ¿Querés saber qué rinde tu carrera en Mendoza?
              </h2>
              <p className="text-gray-600 text-sm sm:text-base font-light leading-relaxed">
                Separamos nuestro <strong>Buscador Interactivo de Carreras</strong> en su propia sección para tu comodidad. Explorá las <strong>90 carreras universitarias y tecnicaturas</strong> relevadas de la <strong className="font-semibold text-black">UNCuyo, UTN y universidades privadas de Mendoza</strong> para verificar si el pre te sirve con sus 5 materias: Matemática, Física, Química, Biología y Técnicas de estudio + IA.
              </p>
            </div>
            <div className="w-full md:w-auto shrink-0">
              <button
                onClick={() => setCurrentView('careers')}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 bg-[#1A1A1A] text-white hover:bg-[#FF5C00] border-2 border-black font-display font-black text-sm uppercase tracking-wider py-4.5 px-8 shadow-[4px_4px_0px_0px_#FF5C00] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                <Search className="h-4.5 w-4.5" />
                Abrir Buscador de Carreras
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PLAN DE ESTUDIOS INTERACTIVO */}
      <section className="py-16 sm:py-24 bg-[#FDFCFB] border-b border-black/10" id="plan-estudios">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          
          <div className="text-left space-y-3 mb-12 max-w-3xl" id="syllabus-header">
            <span className="text-xs font-black text-[#FF5C00] uppercase tracking-[0.2em] block">// DETALLE COMPLETO</span>
            <h2 className="text-4xl sm:text-5xl font-display font-black uppercase italic tracking-tighter leading-none text-[#1A1A1A]">
              QUÉ VAS A APRENDER EN ESTOS 6 MESES
            </h2>
            <p className="text-gray-600 text-base font-light">
              Las materias de la formación de Aprobá Mendoza son <strong>Matemática, Física, Química, Biología y Técnicas de estudio + IA</strong>. Desglosamos cada programa de acuerdo a las exigencias de la UNCuyo, UTN y universidades privadas de Mendoza. Hacé clic en las pestañas para explorar los temarios prácticos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="syllabus-layout-grid">
            
            {/* Left: Tab selectors */}
            <div className="lg:col-span-4 flex flex-col gap-2.5" id="syllabus-tabs-sidebar">
              {SUBJECTS.map((sub, idx) => (
                <button
                  key={sub.title}
                  onClick={() => setActiveSubjectTab(idx)}
                  className={`text-left px-5 py-4 border-2 transition-all duration-150 flex items-center justify-between rounded-none ${
                    activeSubjectTab === idx 
                      ? "border-black bg-[#FAF9F6] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] translate-x-[-2px] translate-y-[-2px]" 
                      : "border-black/10 hover:border-black/30 bg-white"
                  }`}
                  id={`subject-tab-${idx}`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`p-1.5 border border-black/15 ${activeSubjectTab === idx ? "bg-black text-white" : "bg-black/5"}`}>
                      {getSubjectIcon(sub.title)}
                    </span>
                    <span className="font-display font-black text-sm uppercase tracking-tight text-[#1A1A1A]">{sub.title}</span>
                  </div>
                  <ArrowRight className={`h-4 w-4 transition-transform ${activeSubjectTab === idx ? "translate-x-1 text-[#FF5C00]" : "text-gray-400"}`} />
                </button>
              ))}
            </div>

            {/* Right: Selected Tab Content */}
            <div className="lg:col-span-8 bg-white border-2 border-black p-8 sm:p-12 shadow-[6px_6px_0px_0px_#1A1A1A]" id="subject-content-panel">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSubjectTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.15 }}
                  className="space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-black/10">
                    <div>
                      <span className="text-[10px] font-black text-[#FF5C00] uppercase tracking-widest">// PROGRAMA DE CLASES</span>
                      <h3 className="text-3xl font-display font-black uppercase text-[#1A1A1A] mt-1">
                        {SUBJECTS[activeSubjectTab].title}
                      </h3>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black text-white text-[10px] font-black uppercase tracking-widest">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{SUBJECTS[activeSubjectTab].duration}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 text-base leading-relaxed font-medium">
                    {SUBJECTS[activeSubjectTab].description}
                  </p>

                  <div className="pt-4">
                    <h4 className="font-black text-xs text-gray-500 uppercase tracking-widest mb-4">
                      {SUBJECTS[activeSubjectTab].title === "Matemática" ? "Unidades detalladas del Plan de Estudios" : "Temario Estructurado de Examen"}
                    </h4>
                    
                    {SUBJECTS[activeSubjectTab].title === "Matemática" ? (
                      <div className="space-y-3" id="math-units-accordion">
                        {MATH_UNITS.map((unit) => {
                          const isOpen = activeMathUnit === unit.number;
                          return (
                            <div 
                              key={unit.number} 
                              className={`border-2 border-black transition-all ${
                                isOpen ? "bg-[#FAF9F6] shadow-[4px_4px_0px_0px_#1A1A1A]" : "bg-white"
                              }`}
                            >
                              <button
                                onClick={() => setActiveMathUnit(isOpen ? null : unit.number)}
                                className="w-full text-left p-4 flex items-center justify-between gap-4 cursor-pointer"
                                id={`math-unit-btn-${unit.number}`}
                              >
                                <div className="flex items-center gap-3">
                                  <span className="bg-black text-white text-[10px] font-black uppercase tracking-wider px-2 py-1">
                                    UNIDAD {unit.number}
                                  </span>
                                  <span className="font-display font-black text-sm uppercase tracking-tight text-[#1A1A1A]">
                                    {unit.title}
                                  </span>
                                </div>
                                <span className="shrink-0 p-1 border border-black bg-white rounded-none">
                                  {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                                </span>
                              </button>
                              
                              <AnimatePresence initial={false}>
                                {isOpen && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.15 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="p-4 pt-0 border-t border-black/10 bg-white/50 space-y-2">
                                      <ul className="list-none space-y-2.5">
                                        {unit.subtopics.map((sub, sIdx) => (
                                          <li key={sIdx} className="flex items-start gap-2.5 text-xs text-gray-700">
                                            <span className="text-[#FF5C00] font-black shrink-0">→</span>
                                            <span className="font-medium leading-relaxed">{sub}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {SUBJECTS[activeSubjectTab].topics.map((topic, tIdx) => (
                          <div key={tIdx} className="flex items-start gap-3 p-3 bg-white border border-black/10 hover:border-black/30 transition-all">
                            <span className="w-5 h-5 bg-[#1A1A1A] text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                              {tIdx + 1}
                            </span>
                            <span className="text-xs font-bold text-gray-800 leading-tight">{topic}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="mt-8 pt-6 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-[11px] text-gray-500 leading-relaxed max-w-md text-center sm:text-left">
                      * Todos los apuntes teóricos y cuadernillos de ejercicios prácticos de este temario se entregan impresos clase a clase y están 100% bonificados.
                    </p>
                    <a 
                      href={getWhatsAppLink("general")}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => triggerToast(`Consultando detalles de la materia ${SUBJECTS[activeSubjectTab].title}...`)}
                      className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#FF5C00] hover:text-[#1A1A1A] transition-colors"
                    >
                      Consultar por esta materia
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>


      {/* SECTOR PRECIOS Y PLANES (TRES BANNERS DE VALOR) */}
      <section className="py-16 sm:py-24 bg-[#FDFCFB] border-b border-black/10" id="precios">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          
          <div className="text-left space-y-3 mb-12 max-w-3xl" id="pricing-header">
            <span className="text-xs font-black text-[#FF5C00] uppercase tracking-[0.2em] block">// VALOR DE LA CUOTA MENSUAL</span>
            <h2 className="text-4xl sm:text-5xl font-display font-black uppercase italic tracking-tighter leading-none text-[#1A1A1A]">
              PLANES SIMPLES SEGÚN LAS MATERIAS QUE CURSES
            </h2>
            <p className="text-gray-600 text-lg font-light leading-relaxed">
              El valor del preuniversitario depende directamente de cuántas materias curse el alumno. Si solo te piden rendir Matemática cursarás menos horas y pagarás menos que quien rinde Matemática, Física y Química.
            </p>
          </div>

          {/* PROMO AMIGOS SIMPLIFICADA */}
          <div className="mb-10 bg-[#FAF9F6] border-2 border-black p-6 sm:p-7 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-center justify-between gap-6" id="pricing-promo-amigos">
            <div className="space-y-2 text-left">
              <span className="px-2.5 py-1 bg-[#FF5C00] text-white text-[9px] font-black uppercase tracking-widest border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] inline-block">
                🔥 PROMO AMIGOS: 20% DE DESCUENTO
              </span>
              <h3 className="font-display font-black text-xl sm:text-2xl uppercase tracking-tight italic text-[#1A1A1A]">
                Si te inscribís al mismo tiempo con otro amigo, se le hace a los dos un 20% de descuento en su primera cuota.
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm font-medium">
                Válido para cualquiera de los tres planes. Solo deben indicar el nombre del otro al momento de anotarse.
              </p>
            </div>
            
            <div className="shrink-0 w-full md:w-auto">
              <button
                onClick={() => {
                  setCurrentView('register');
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  triggerToast("Iniciando inscripción conjunta con amigo...");
                }}
                className="w-full md:w-auto bg-black hover:bg-[#FF5C00] text-white py-4 px-7 font-display font-black text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 border-2 border-black transition-all shadow-[4px_4px_0px_0px_rgba(255,92,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
              >
                <Users className="h-4.5 w-4.5 shrink-0" />
                Inscribirme con un amigo (-20%)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch" id="pricing-cards-grid">
            {PRICING_PLANS.map((plan) => {
              const isTwo = plan.id === "2-materias";

              return (
                <div 
                  key={plan.id}
                  className={`border-2 border-black p-6 sm:p-8 flex flex-col justify-between relative transition-all duration-300 ${
                    isTwo 
                      ? "bg-black text-white shadow-[8px_8px_0px_0px_#FF5C00] translate-x-[-2px] translate-y-[-2px]" 
                      : "bg-white text-[#1A1A1A] shadow-[6px_6px_0px_0px_#1A1A1A]"
                  }`}
                  id={`pricing-card-${plan.id}`}
                >
                  {isTwo && (
                    <span className="absolute -top-3 left-6 px-3 py-1 bg-[#FF5C00] text-white text-[9px] font-black uppercase tracking-widest border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      ★ MÁS ELEGIDO
                    </span>
                  )}

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#FF5C00] block">
                        // {plan.id === "1-materia" ? "POR UNA MATERIA" : plan.id === "2-materias" ? "POR DOS MATERIAS" : "POR TRES MATERIAS"}
                      </span>
                      <h3 className="font-display font-black text-2xl uppercase tracking-tight italic">
                        {plan.name}
                      </h3>
                      <p className={`text-xs ${isTwo ? "text-gray-400" : "text-gray-500"} font-medium`}>
                        {plan.id === "1-materia" && "Para carreras que solo evalúan una asignatura"}
                        {plan.id === "2-materias" && "Para carreras que evalúan dos materias en el ingreso"}
                        {plan.id === "3-materias" && "Preparación integral para ingresos de tres materias"}
                      </p>
                    </div>

                    <div className="py-4 border-y border-current/10 space-y-1">
                      <span className={`text-[10px] font-bold uppercase tracking-wider block ${isTwo ? "text-gray-400" : "text-gray-500"}`}>
                        VALOR DE LA CUOTA:
                      </span>
                      <div className="flex items-baseline gap-1.5">
                        <span className={`text-4xl sm:text-5xl font-display font-black tracking-tight ${isTwo ? "text-[#FF5C00]" : "text-[#1A1A1A]"}`}>
                          {plan.priceFormatted}
                        </span>
                        <span className={`text-xs font-black uppercase tracking-widest ${isTwo ? "text-gray-400" : "text-gray-500"}`}>
                          / {plan.period}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-xs font-black uppercase tracking-widest text-[#FF5C00]">
                        // QUÉ INCLUYE:
                      </h4>
                      <ul className="space-y-2.5 text-xs font-medium">
                        {plan.benefits.map((benefit, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 leading-relaxed">
                            <CheckCircle className={`h-4.5 w-4.5 shrink-0 mt-0.5 ${isTwo ? "text-[#FF5C00]" : "text-emerald-600"}`} />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-current/10 space-y-3">
                    <a
                      href={getWhatsAppLink("pricing", undefined, undefined, undefined, plan.id)}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => triggerToast(`Abriendo chat por el plan: ${plan.name}...`)}
                      className={`w-full py-4 px-6 font-display font-black text-xs sm:text-sm uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-all ${
                        isTwo 
                          ? "bg-[#25D366] text-white border-2 border-black hover:bg-white hover:text-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]" 
                          : "bg-[#FF5C00] text-white border-2 border-black hover:bg-black hover:text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                      }`}
                    >
                      <MessageCircle className="h-4.5 w-4.5 shrink-0" />
                      Anotarme en {plan.name}
                    </a>
                    
                    <button
                      onClick={() => setCurrentView('register')}
                      className={`w-full py-2.5 text-center text-xs font-black uppercase tracking-wider transition-all border-b border-dashed cursor-pointer block ${
                        isTwo 
                          ? "text-[#FF5C00] hover:text-white border-[#FF5C00]/20 hover:border-white" 
                          : "text-gray-600 hover:text-[#FF5C00] border-black/10 hover:border-[#FF5C00]"
                      }`}
                    >
                      ✍ Pre-Inscribirme Online (4 Pasos)
                    </button>

                    <p className={`text-[10px] text-center font-medium ${isTwo ? "text-gray-400" : "text-gray-500"}`}>
                      Cursado presencial en Biblioteca Popular Carrodilla
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 p-6 bg-white border-2 border-black shadow-[4px_4px_0px_0px_#1A1A1A] flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left" id="pricing-guarantees">
            <Shield className="h-8 w-8 text-[#FF5C00] shrink-0" />
            <div className="space-y-1">
              <h4 className="font-display font-black text-sm uppercase text-[#1A1A1A]">Garantía de Congelamiento y Transparencia</h4>
              <p className="text-gray-600 text-xs leading-relaxed">
                No cobramos matrícula de inscripción. Todo el material de estudio impreso (cuadernillos teóricos y prácticos de nivel de examen) está 100% incluido en el abono elegido. El abono mensual se mantiene congelado una vez iniciado el cursado.
              </p>
            </div>
          </div>

        </div>
      </section>



      {/* PREGUNTAS FRECUENTES (FAQ ACCORDION) */}
      <section className="py-16 sm:py-24 bg-[#FDFCFB] border-b border-black/10" id="faq">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="text-center space-y-3 mb-12" id="faq-header">
            <span className="text-xs font-black text-[#FF5C00] uppercase tracking-[0.2em] block">// DUDAS COMUNES</span>
            <h2 className="text-4xl sm:text-5xl font-display font-black uppercase italic tracking-tighter leading-none text-[#1A1A1A]">
              PREGUNTAS FRECUENTES
            </h2>
            <p className="text-gray-600 text-sm font-light">
              Respuestas rápidas para evacuar tus dudas sobre locación, formas de pago, dinámicas grupales y cursado.
            </p>
          </div>

          <div className="space-y-3" id="faq-accordion-group">
            {FAQ_ITEMS.map((item, idx) => {
              const isExpanded = expandedFAQIndex === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-white border-2 border-black overflow-hidden transition-all duration-150 rounded-none shadow-[3px_3px_0px_0px_rgba(0,0,0,0.05)]"
                  id={`faq-item-${idx}`}
                >
                  <button
                    onClick={() => setExpandedFAQIndex(isExpanded ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-display font-black uppercase tracking-tight text-[#1A1A1A] hover:bg-black/5 transition-colors"
                  >
                    <span className="text-sm sm:text-base pr-4 leading-snug">{item.question}</span>
                    {isExpanded ? (
                      <ChevronUp className="h-5 w-5 text-[#FF5C00] shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 shrink-0" />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                      >
                        <div className="p-5 pt-0 border-t border-black/10 text-xs sm:text-sm text-gray-600 font-medium leading-relaxed">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center bg-[#FF5C00]/5 p-8 border-2 border-black/20" id="faq-footer">
            <h4 className="font-display font-black text-lg uppercase tracking-tight text-[#1A1A1A] mb-1">¿Tenés otra consulta sobre el ingreso?</h4>
            <p className="text-xs text-gray-600 mb-5 font-medium">Escribime directamente al WhatsApp sin compromiso para charlar de tu carrera y las materias exigidas.</p>
            <a 
              href={getWhatsAppLink("general")}
              target="_blank"
              rel="noreferrer"
              onClick={() => triggerToast("Abriendo WhatsApp para consultas personalizadas...")}
              className="inline-flex items-center gap-2 bg-[#25D366] text-white border-2 border-black font-display font-extrabold text-xs uppercase tracking-widest py-3.5 px-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
            >
              <MessageCircle className="h-4.5 w-4.5 shrink-0" />
              Chatear conmigo por WhatsApp
            </a>
          </div>

        </div>
      </section>
        </>
      ) : currentView === 'register' ? (
        <div className="py-8 bg-[#FDFCFB]">
          <RegisterForm
            ownerName={ownerName}
            phoneNumber={phoneNumber}
            onBackToHome={() => setCurrentView('home')}
            triggerToast={triggerToast}
          />
        </div>
      ) : (
        <div className="py-8 bg-[#FDFCFB]">
          <CareerSearcher 
            ownerName={ownerName} 
            phoneNumber={phoneNumber} 
            onConsult={handleConsultCareer} 
          />
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-[#1A1A1A] text-gray-400 py-16" id="site-footer">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10" id="footer-grid">
            
            <div className="md:col-span-4 space-y-4" id="footer-info-col">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white text-black font-black">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <span className="font-display font-black text-lg text-white uppercase tracking-tight">APROBÁ MENDOZA</span>
              </div>
              <p className="text-xs text-gray-400 max-w-sm leading-relaxed font-light">
                Acompañamiento personalizado y clases en grupo híper reducidos dictados presencialmente en Biblioteca Popular Carrodilla en Mendoza. Preparándote para el éxito académico con las mejores metodologías modernas.
              </p>
            </div>

            <div className="md:col-span-3 space-y-3 font-medium" id="footer-contact-col">
              <h4 className="text-white text-xs font-black uppercase tracking-widest text-[#FF5C00]">// CONTACTO DIRECTO</h4>
              <ul className="text-xs space-y-2.5">
                <li className="flex items-start gap-2.5">
                  <MapPin className="h-4.5 w-4.5 text-[#FF5C00] shrink-0 mt-0.5" />
                  <span className="leading-tight">Biblioteca Popular Carrodilla, Antonio Saén 8225, Mendoza, Argentina</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#FF5C00] shrink-0" />
                  <span className="font-mono">+{phoneNumber}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#FF5C00] shrink-0" />
                  <span>Turno Tarde: Lunes a Sábados</span>
                </li>
              </ul>
            </div>

            <div className="md:col-span-2 space-y-3" id="footer-shortcuts-col">
              <h4 className="text-white text-xs font-black uppercase tracking-widest text-[#FF5C00]">// MAPA DEL SITIO</h4>
              <ul className="text-xs space-y-2 font-semibold">
                <li><a href="#servicios" className="hover:text-white transition-colors">Servicios Académicos</a></li>
                <li><a href="#plan-estudios" className="hover:text-white transition-colors">Plan de Estudios</a></li>
                <li><a href="#simulacro-demo" className="hover:text-white transition-colors">Reservar Simulacro</a></li>
                <li><a href="#precios" className="hover:text-white transition-colors">Precios y Carreras</a></li>
              </ul>
            </div>

            <div className="md:col-span-3 space-y-3" id="footer-map-col">
              <h4 className="text-white text-xs font-black uppercase tracking-widest text-[#FF5C00]">// MI UBICACIÓN</h4>
              <div className="w-full h-32 border border-white/20 overflow-hidden shadow-[4px_4px_0px_0px_#FF5C00] relative">
                <iframe
                  title="Ubicación Aprobá Mendoza"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(0.5) contrast(1.1)" }}
                  src="https://maps.google.com/maps?q=Biblioteca%20Popular%20Carrodilla,%20Antonio%20Saenz%208225,%20Mendoza,%20Argentina&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-[0.15em] font-bold text-gray-500" id="footer-bottom">
            <p>© {new Date().getFullYear()} APROBÁ MENDOZA. TODOS LOS DERECHOS RESERVADOS.</p>
            <p className="text-gray-500 text-center sm:text-right">DISEÑADO CON RIGOR EDITORIAL PARA EXCELENCIA EN LA CONVERSIÓN DE ANUNCIOS.</p>
          </div>

        </div>
      </footer>

    </div>
  );
}
