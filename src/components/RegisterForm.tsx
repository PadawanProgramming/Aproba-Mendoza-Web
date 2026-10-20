import React, { useState } from "react";
import { 
  User, 
  MessageCircle, 
  ArrowRight, 
  ArrowLeft, 
  Calendar, 
  GraduationCap, 
  Sparkles, 
  CheckCircle,
  HelpCircle,
  Clock,
  Phone
} from "lucide-react";
import { SERVICES, ServiceItem } from "../data";

interface RegisterFormProps {
  ownerName: string;
  phoneNumber: string;
  onBackToHome: () => void;
  triggerToast: (msg: string) => void;
}

const SCHEDULE_OPTIONS = [
  {
    id: "manana",
    title: "Turno Mañana",
    time: "Lunes y Miércoles 09:00 a 12:00 hs",
    description: "Ideal para chicos que terminan el secundario en turno tarde."
  },
  {
    id: "tarde",
    title: "Turno Tarde",
    time: "Lunes y Miércoles 16:30 a 19:30 hs",
    description: "Nuestro turno principal con mayor demanda y cupos limitados."
  },
  {
    id: "vespertino",
    title: "Turno Vespertino",
    time: "Martes y Jueves 18:00 a 21:00 hs",
    description: "Excelente para quienes trabajan o asisten a colegios doble escolaridad."
  },
  {
    id: "sabados",
    title: "Sábados Intensivos",
    time: "Sábados de 09:00 a 13:00 hs",
    description: "Formación de cursado comprimido con foco fuerte en simulacros prácticos."
  }
];

export default function RegisterForm({ ownerName, phoneNumber, onBackToHome, triggerToast }: RegisterFormProps) {
  const [step, setStep] = useState<number>(1);
  
  // Form values
  const [fullName, setFullName] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [selectedServiceId, setSelectedServiceId] = useState<string>("pre-universitario");
  const [selectedScheduleId, setSelectedScheduleId] = useState<string>("tarde");

  // Error messaging for each step
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (currentStep === 1) {
      if (!fullName.trim()) {
        newErrors.fullName = "Por favor, ingresá tu nombre completo para comenzar.";
      } else if (fullName.trim().length < 3) {
        newErrors.fullName = "El nombre ingresado debe tener al menos 3 letras.";
      }
    }
    
    if (currentStep === 2) {
      if (!whatsappNumber.trim()) {
        newErrors.whatsappNumber = "Necesitamos tu número de WhatsApp para contactarte.";
      } else {
        const cleanNum = whatsappNumber.replace(/[^0-9]/g, "");
        if (cleanNum.length < 8) {
          newErrors.whatsappNumber = "Por favor, ingresá un número válido con código de área (ej: 2615551234).";
        }
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(prev => Math.min(prev + 1, 4));
    }
  };

  const handleBack = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const getSelectedService = (): ServiceItem | undefined => {
    return SERVICES.find(s => s.id === selectedServiceId);
  };

  const getSelectedSchedule = () => {
    return SCHEDULE_OPTIONS.find(s => s.id === selectedScheduleId);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(1) || !validateStep(2)) {
      // Find where the error is and switch step
      if (!fullName.trim() || fullName.trim().length < 3) {
        setStep(1);
        return;
      }
      if (!whatsappNumber.trim()) {
        setStep(2);
        return;
      }
    }

    const service = getSelectedService();
    const schedule = getSelectedSchedule();
    const cleanPhone = phoneNumber.replace(/[^0-9]/g, "");

    const text = `¡Hola, ${ownerName}! Me gustaría pre-inscribirme en el sitio web de *Aprobá Mendoza*. Dejo mis datos cargados:

- *Nombre completo*: ${fullName.trim()}
- *WhatsApp de contacto*: ${whatsappNumber.trim()}
- *Servicio de interés*: ${service?.title || "Formación Pre-Universitaria"}
- *Horario de conveniencia*: ${schedule?.title} (${schedule?.time})

Espero tu respuesta para coordinar el pago, aclarar dudas y asegurar mi vacante. ¡Muchas gracias!`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(text)}`;
    
    triggerToast("¡Formulario completo! Redirigiendo a WhatsApp...");
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 1000);
  };

  const progressPercentage = (step / 4) * 100;

  return (
    <div className="max-w-3xl mx-auto px-6 sm:px-12 py-12" id="register-flow-container">
      
      {/* Upper navigation */}
      <div className="flex items-center justify-between mb-8" id="register-nav-header">
        <button 
          onClick={onBackToHome}
          className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-gray-500 hover:text-[#FF5C00] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al Inicio
        </button>
        <span className="text-xs font-black text-[#FF5C00] uppercase tracking-widest bg-[#FF5C00]/10 px-3 py-1 border border-[#FF5C00]/20">
          Paso {step} de 4
        </span>
      </div>

      {/* Hero Intro */}
      <div className="text-left space-y-3 mb-10" id="register-title-block">
        <span className="text-xs font-black text-[#FF5C00] uppercase tracking-[0.2em] block">// INSCRIPCIÓN ONLINE DE ENTRADA DIRECTA</span>
        <h1 className="text-4xl sm:text-5xl font-display font-black uppercase italic tracking-tighter leading-none text-[#1A1A1A]">
          FORMULARIO DE PRE-INSCRIPCIÓN
        </h1>
        <p className="text-gray-600 text-sm sm:text-base font-light leading-relaxed">
          Completá tus datos de preferencia en 4 simples pasos interactivos. Al terminar, se generará un reporte de pre-inscripción que me llegará directo al WhatsApp para guardar tu prioridad de cupo, darte de alta y coordinar abono/días.
        </p>
      </div>

      {/* Progress Bar indicator */}
      <div className="w-full bg-black/5 border border-black/10 h-3 mb-10 relative overflow-hidden" id="register-progress-bar">
        <div 
          className="bg-[#FF5C00] h-full transition-all duration-300 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      {/* Main Interactive Form Card */}
      <div className="bg-white border-2 border-black p-6 sm:p-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative" id="register-card">
        
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* STEP 1: Full name */}
          {step === 1 && (
            <div className="space-y-6" id="step-1-content">
              <div className="space-y-2 text-left">
                <span className="text-xs font-black text-[#FF5C00] uppercase tracking-widest block">// PASO 1: TU IDENTIFICACIÓN</span>
                <label className="text-2xl sm:text-3xl font-display font-black uppercase italic tracking-tight text-[#1A1A1A] block">
                  ¿Cómo es tu nombre completo?
                </label>
                <p className="text-xs text-gray-500 font-medium">
                  Usaremos tu nombre para personalizar tu ficha académica y armar tu plan de estudio.
                </p>
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4.5 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  required
                  autoFocus
                  placeholder="ej: Lucas Martínez"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value);
                    if (errors.fullName) setErrors(prev => ({ ...prev, fullName: "" }));
                  }}
                  className={`w-full bg-[#FDFCFB] border-2 text-base font-bold py-4.5 pl-12 pr-4 transition-all uppercase placeholder:normal-case ${
                    errors.fullName ? "border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500" : "border-black focus:outline-none focus:ring-1 focus:ring-[#FF5C00] focus:border-[#FF5C00]"
                  }`}
                />
              </div>

              {errors.fullName && (
                <p className="text-xs text-red-600 font-bold tracking-wide mt-1.5 flex items-center gap-1.5 bg-red-50 border border-red-200 p-2.5">
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full shrink-0" />
                  {errors.fullName}
                </p>
              )}

              <div className="p-4 bg-[#FF5C00]/5 border border-black/10 text-xs text-gray-600 space-y-1 text-left">
                <p className="font-black text-[#1A1A1A] uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="h-4 w-4 text-[#FF5C00]" /> ¿Por qué prepararte en Aprobá Mendoza?
                </p>
                <p className="font-medium">
                  Clases dictadas presencialmente por docentes dedicados con material de primer nivel y enfoque específico en los programas de la UNCuyo, UTN y privadas de Mendoza.
                </p>
              </div>
            </div>
          )}

          {/* STEP 2: WhatsApp contact */}
          {step === 2 && (
            <div className="space-y-6" id="step-2-content">
              <div className="space-y-2 text-left">
                <span className="text-xs font-black text-[#FF5C00] uppercase tracking-widest block">// PASO 2: CONTACTO DE COORDINACIÓN</span>
                <label className="text-2xl sm:text-3xl font-display font-black uppercase italic tracking-tight text-[#1A1A1A] block">
                  ¿Cuál es tu número de WhatsApp?
                </label>
                <p className="text-xs text-gray-500 font-medium">
                  Ingresá tu celular para poder responderte de inmediato e informarte los días de cursado.
                </p>
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4.5 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  required
                  autoFocus
                  placeholder="ej: 2615551234 (sin 0 ni 15)"
                  value={whatsappNumber}
                  onChange={(e) => {
                    setWhatsappNumber(e.target.value);
                    if (errors.whatsappNumber) setErrors(prev => ({ ...prev, whatsappNumber: "" }));
                  }}
                  className={`w-full bg-[#FDFCFB] border-2 text-base font-mono font-bold py-4.5 pl-12 pr-4 transition-all ${
                    errors.whatsappNumber ? "border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500" : "border-black focus:outline-none focus:ring-1 focus:ring-[#FF5C00] focus:border-[#FF5C00]"
                  }`}
                />
              </div>

              {errors.whatsappNumber && (
                <p className="text-xs text-red-600 font-bold tracking-wide mt-1.5 flex items-center gap-1.5 bg-red-50 border border-red-200 p-2.5">
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full shrink-0" />
                  {errors.whatsappNumber}
                </p>
              )}

              <div className="p-4 bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 space-y-1 text-left">
                <p className="font-black uppercase tracking-wider flex items-center gap-1">
                  <CheckCircle className="h-4 w-4" /> Comunicación Directa y Humana
                </p>
                <p className="font-semibold">
                  No usamos sistemas de respuestas automáticas ni bots aburridos. Quien te responderá por WhatsApp será el mismo docente que te dictará el curso presencial en Mendoza.
                </p>
              </div>
            </div>
          )}

          {/* STEP 3: Selected Service */}
          {step === 3 && (
            <div className="space-y-6" id="step-3-content">
              <div className="space-y-2 text-left">
                <span className="text-xs font-black text-[#FF5C00] uppercase tracking-widest block">// PASO 3: SERVICIO REQUERIDO</span>
                <label className="text-2xl sm:text-3xl font-display font-black uppercase italic tracking-tight text-[#1A1A1A] block">
                  ¿En qué servicio estás interesado?
                </label>
                <p className="text-xs text-gray-500 font-medium">
                  Seleccioná la opción en la cual querés pre-inscribirte (seleccionado por defecto: Pre-Universitario de 6 meses).
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-h-[380px] overflow-y-auto pr-2 pb-2" id="register-services-selection">
                {SERVICES.map((service) => {
                  const isSelected = selectedServiceId === service.id;
                  return (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => setSelectedServiceId(service.id)}
                      className={`text-left p-4.5 border-2 transition-all flex flex-col justify-between ${
                        isSelected 
                          ? "border-black bg-[#FF5C00]/5 shadow-[4px_4px_0px_0px_#1A1A1A] translate-x-[-2px] translate-y-[-2px]" 
                          : "border-black/10 hover:border-black/25 bg-[#FDFCFB]"
                      }`}
                    >
                      <div className="space-y-1">
                        <span className={`text-[9px] font-black uppercase tracking-widest ${isSelected ? "text-[#FF5C00]" : "text-gray-400"}`}>
                          {service.badge}
                        </span>
                        <h4 className="font-display font-black text-sm uppercase tracking-tight text-[#1A1A1A] leading-tight">
                          {service.title}
                        </h4>
                        <p className="text-[11px] text-gray-500 leading-normal line-clamp-2">
                          {service.description}
                        </p>
                      </div>
                      
                      <div className="mt-4 pt-3 border-t border-black/5 flex items-center justify-between">
                        <span className="text-[10px] font-bold text-gray-400">Ver más detalles</span>
                        {isSelected && <span className="w-2.5 h-2.5 bg-[#FF5C00]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 4: Preferred Schedule */}
          {step === 4 && (
            <div className="space-y-6" id="step-4-content">
              <div className="space-y-2 text-left">
                <span className="text-xs font-black text-[#FF5C00] uppercase tracking-widest block">// PASO 4: HORARIOS DE PREFERENCIA</span>
                <label className="text-2xl sm:text-3xl font-display font-black uppercase italic tracking-tight text-[#1A1A1A] block">
                  Elegí tu horario ideal
                </label>
                <p className="text-xs text-gray-500 font-medium">
                  Contamos con 4 bandas horarias semanales de cursado presencial en grupos ultra reducidos. Seleccioná la que mejor se adapte a tus actividades habituales.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="register-schedule-selection">
                {SCHEDULE_OPTIONS.map((opt) => {
                  const isSelected = selectedScheduleId === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelectedScheduleId(opt.id)}
                      className={`text-left p-5 border-2 transition-all flex flex-col justify-between ${
                        isSelected 
                          ? "border-black bg-[#FF5C00]/5 shadow-[4px_4px_0px_0px_#1A1A1A] translate-x-[-2px] translate-y-[-2px]" 
                          : "border-black/10 hover:border-black/25 bg-[#FDFCFB]"
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-display font-black text-sm uppercase text-[#1A1A1A] italic">
                            {opt.title}
                          </h4>
                          {isSelected && <div className="w-3 h-3 bg-[#FF5C00]" />}
                        </div>
                        
                        <div className="bg-black/5 border border-black/5 p-2 font-mono text-[11px] font-bold text-gray-700">
                          {opt.time}
                        </div>
                        
                        <p className="text-[11px] text-gray-500 leading-relaxed font-medium">
                          {opt.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Final warnings before submission */}
              <div className="p-4 bg-gray-50 border border-black/10 text-left space-y-2">
                <p className="text-[10px] font-black uppercase tracking-wider text-gray-500 flex items-center gap-1">
                  <Clock className="h-4 w-4" /> Recordatorio sobre los cupos
                </p>
                <p className="text-[11px] text-gray-600 font-medium leading-relaxed">
                  Para sostener el nivel pedagógico, trabajamos rigurosamente en grupos de un <strong>máximo de 12 alumnos</strong> por turno. El envío del formulario no obliga al pago, pero sí te da prioridad temporal sobre otros interesados de tu misma franja.
                </p>
              </div>
            </div>
          )}

          {/* Action buttons footer */}
          <div className="flex items-center justify-between pt-6 border-t border-black/10" id="register-actions-footer">
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-gray-600 hover:text-black bg-black/5 hover:bg-black/10 border-2 border-black py-3.5 px-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px] transition-all"
              >
                <ArrowLeft className="h-4 w-4" />
                Atrás
              </button>
            ) : (
              <div /> // empty placeholder to maintain justify-between layout alignment
            )}

            {step < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest bg-[#FF5C00] text-white border-2 border-black py-3.5 px-6.5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                Siguiente Paso
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="submit"
                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest bg-[#25D366] text-white border-2 border-black py-4 px-7 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer"
              >
                <MessageCircle className="h-5 w-5 shrink-0" />
                Confirmar Pre-Inscripción por WhatsApp
              </button>
            )}
          </div>

        </form>

      </div>

      {/* Trust and reassurance footer */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-xs font-medium text-gray-500" id="register-trust-badges">
        <div className="flex flex-col items-center gap-1.5 p-4 bg-[#FF5C00]/5 border border-black/5 rounded">
          <CheckCircle className="h-5 w-5 text-[#FF5C00]" />
          <span className="font-bold text-black uppercase tracking-tight">Sin Matrícula</span>
          <span>El proceso es gratuito, solo abonás tu mes o plan al iniciar.</span>
        </div>
        <div className="flex flex-col items-center gap-1.5 p-4 bg-[#FF5C00]/5 border border-black/5 rounded">
          <Calendar className="h-5 w-5 text-[#FF5C00]" />
          <span className="font-bold text-black uppercase tracking-tight">Inicio Inmediato</span>
          <span>Coordinamos de inmediato el inicio de tus clases según prioridad.</span>
        </div>
        <div className="flex flex-col items-center gap-1.5 p-4 bg-[#FF5C00]/5 border border-black/5 rounded">
          <HelpCircle className="h-5 w-5 text-[#FF5C00]" />
          <span className="font-bold text-black uppercase tracking-tight">¿Tenés dudas?</span>
          <span>Escribime con libertad para consultarme temas o materias extra.</span>
        </div>
      </div>

    </div>
  );
}
