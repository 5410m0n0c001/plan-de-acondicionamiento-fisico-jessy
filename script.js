const palette = {
  bg: "#0f0e17",
  card: "#1a1828",
  cardHover: "#221f33",
  accent: "#e8724a",
  accent2: "#7b61ff",
  gold: "#f0c040",
  green: "#4ecb71",
  red: "#e05c5c",
  text: "#ede8f5",
  muted: "#8a84a3",
  border: "#2e2b42",
};

const days = ["Lun","Mar","Mié","Jue","Vie","Sáb","Dom"];

const weekPlan = [
  { day: "Lunes", focus: "Tren Inferior — Glúteo + Cuádriceps", color: palette.accent, icon: "🦵" },
  { day: "Martes", focus: "Tren Superior — Empuje + Tríceps", color: palette.accent2, icon: "💪" },
  { day: "Miércoles", focus: "Tren Inferior — Femoral + Glúteo", color: palette.accent, icon: "🍑" },
  { day: "Jueves", focus: "Tren Superior — Espalda + Bíceps", color: palette.accent2, icon: "🏋️" },
  { day: "Viernes", focus: "Pierna Completa — Circuito", color: palette.gold, icon: "🔥" },
  { day: "Sábado", focus: "Cardio Ligero + Core", color: palette.green, icon: "❤️" },
  { day: "Domingo", focus: "Descanso Activo", color: palette.muted, icon: "🌿" },
];

const routines = {
  "Lunes": {
    warmup: ["Marcha en el lugar 3 min","Rotación de cadera 20 rep","Sentadilla sin peso 10 rep (lenta)"],
    exercises: [
      { name:"Sentadilla prisionera", sets:"4x12", rest:"60s", tip:"3 segundos bajando, pausa abajo. Activa glúteo, no rodilla.", icon:"🦵" },
      { name:"Sentadilla sumo (mancuernas 1.3 kg)", sets:"4x10", rest:"60s", tip:"Pies abiertos 45°, empuja rodillas afuera. Activa aductor y glúteo.", icon:"🍑" },
      { name:"Zancadas estáticas alternadas", sets:"3x12 por pierna", rest:"45s", tip:"Rodilla trasera casi toca el suelo. No dejes caer el torso.", icon:"⚡" },
      { name:"Puente de glúteo (en el piso)", sets:"4x15", rest:"45s", tip:"Pausa 2 seg arriba. Aprieta glúteo con fuerza. Con mancuerna en cadera si tolera.", icon:"🍑" },
      { name:"Elevación de talones de pie (gemelos)", sets:"4x15", rest:"30s", tip:"Pausa 2 seg arriba. Manos en pared para equilibrio.", icon:"🦶" },
    ],
    cool: ["Estiramiento cuádriceps 30s c/u","Estiramiento glúteo en figura 4, 30s c/u","Respiración profunda 1 min"]
  },
  "Martes": {
    warmup: ["Rotación de hombros 20 rep","Círculos de brazos 15 rep","Puente de hombro 10 rep"],
    exercises: [
      { name:"Lagartijas con rodillas (push-up modificado)", sets:"4x10", rest:"60s", tip:"Cuerpo recto de cabeza a rodilla. Codos 45° del cuerpo.", icon:"💪" },
      { name:"Press de pecho en piso con mancuernas", sets:"4x12", rest:"60s", tip:"Baja hasta que codos toquen el piso. Sube sin bloquear codos.", icon:"🏋️" },
      { name:"Aperturas de pecho en piso (mancuernas)", sets:"3x12", rest:"45s", tip:"Brazos ligeramente doblados, baja lento, siente el pecho.", icon:"🎯" },
      { name:"Elevaciones laterales de hombro", sets:"3x12", rest:"45s", tip:"Codos ligeramente doblados. No subas más arriba del hombro.", icon:"🙆" },
      { name:"Extensión de tríceps sobre cabeza (1 mancuerna)", sets:"3x12", rest:"45s", tip:"Codo apunta al techo. Solo el antebrazo se mueve.", icon:"💪" },
    ],
    cool: ["Estiramiento de pecho en marco de puerta 30s","Estiramiento de tríceps 20s c/u","Rotación suave de cuello"]
  },
  "Miércoles": {
    warmup: ["Peso muerto sin peso 10 rep","Círculo de cadera 15 rep","Marcha elevando rodillas 2 min"],
    exercises: [
      { name:"Peso muerto con mancuernas (1.3 kg)", sets:"4x12", rest:"60s", tip:"ESPALDA RECTA siempre. Bisagra en la cadera, no en la espalda.", icon:"🏋️" },
      { name:"Patada de glúteo cuadrupedia", sets:"3x15 por pierna", rest:"40s", tip:"Rodilla 90°, empuja el pie al techo. No arquees la espalda.", icon:"🍑" },
      { name:"Curl femoral con toalla en el piso", sets:"3x10", rest:"60s", tip:"Acostada boca arriba, talones en toalla. Jala talones hacia ti elevando cadera.", icon:"🦵" },
      { name:"Puente de glúteo con pausa", sets:"4x15", rest:"45s", tip:"Esta vez 3 segundos arriba. Aprieta glúteo máximo.", icon:"⚡" },
      { name:"Sentadilla sumo pliométrica (sin salto)", sets:"3x12", rest:"60s", tip:"Baja rápido, sube explosivo. Sin impacto por la anemia.", icon:"🔥" },
    ],
    cool: ["Postura de paloma (glúteo) 40s c/u","Estiramiento femoral acostada 30s c/u","Respiración diafragmática 2 min"]
  },
  "Jueves": {
    warmup: ["Giros de torso 20 rep","Remo sin peso 10 rep","Cat-cow (columna) 10 rep"],
    exercises: [
      { name:"Remo inclinado con mancuerna (unilateral)", sets:"4x12 por brazo", rest:"45s", tip:"Espalda paralela al piso. Codo pega al cuerpo al subir. Activa escápula.", icon:"💪" },
      { name:"Curl de bíceps con mancuernas", sets:"3x12", rest:"45s", tip:"No balancees el cuerpo. Solo el antebrazo se mueve.", icon:"💪" },
      { name:"Curl martillo (mancuernas)", sets:"3x12", rest:"45s", tip:"Palmas se ven entre sí. Más trabajo de braquial.", icon:"🔨" },
      { name:"Elevaciones frontales de hombro", sets:"3x12", rest:"45s", tip:"No subas más del nivel del hombro. Peso controlado.", icon:"🙋" },
      { name:"Plancha abdominal en codos", sets:"3x25s", rest:"45s", tip:"Semana 1: 20s. Semana 4: 40s. Cuerpo recto, respira.", icon:"🧘" },
    ],
    cool: ["Estiramiento de bíceps en pared 20s c/u","Estiramiento de espalda baja (niño) 40s","Suspiro de alivio profundo x5"]
  },
  "Viernes": {
    warmup: ["Trote en el lugar 2 min","10 sentadillas sin peso","Puentes x10"],
    exercises: [
      { name:"CIRCUITO: Sentadilla + Puente + Zancada + Peso muerto", sets:"4 rondas", rest:"90s entre rondas", tip:"10 rep cada ejercicio sin pausa entre ejercicios. Pace moderado.", icon:"🔥" },
      { name:"Sentadilla isométrica (pared)", sets:"3x20s", rest:"45s", tip:"Espalda en la pared, rodillas a 90°. Mantén posición.", icon:"🧱" },
      { name:"Elevación de cadera en 1 pierna", sets:"3x10 por pierna", rest:"40s", tip:"Desde puente normal, extiende una pierna. Control total.", icon:"⭐" },
      { name:"Gemelos bilateral con silla", sets:"3x20", rest:"30s", tip:"Usa silla para equilibrio. Pausa arriba 1 seg.", icon:"🦶" },
    ],
    cool: ["Estiramiento completo de pierna 30s c/u","Postura de paloma 40s c/u","Rodamientos de columna sentada"]
  },
  "Sábado": {
    warmup: ["Respiración activadora 2 min"],
    exercises: [
      { name:"Caminata rápida 30 min (o en el lugar)", sets:"1 sesión", rest:"—", tip:"Ritmo que te permita hablar pero con esfuerzo. NO correr por la anemia.", icon:"🚶" },
      { name:"Plancha lateral (ambos lados)", sets:"3x20s por lado", rest:"30s", tip:"Cuerpo alineado. Cadera no cae.", icon:"🧘" },
      { name:"Elevaciones de pierna acostada", sets:"3x12", rest:"30s", tip:"Espalda baja pegada al piso. Piernas juntas.", icon:"🦵" },
      { name:"Crunch abdominal controlado", sets:"3x12", rest:"30s", tip:"Sin jalones de cuello. Exhala al subir.", icon:"🎯" },
      { name:"Estiramiento completo de cuerpo", sets:"5 min", rest:"—", tip:"Fluir de estiramiento a estiramiento. Respirar en cada postura.", icon:"🌿" },
    ],
    cool: ["Savasana / reposo total 3 min","Hidratación doble"]
  },
  "Domingo": {
    warmup: [],
    exercises: [
      { name:"Caminata suave 20 min (opcional)", sets:"1 vez", rest:"—", tip:"Sin presión. Si hay fatiga, reposo completo.", icon:"🌿" },
      { name:"Estiramientos generales", sets:"10 min", rest:"—", tip:"Yoga suave o simplemente estirar lo que sientas tenso.", icon:"🧘" },
    ],
    cool: []
  },
};

const mealPlan = [
  {
    meal: "🌅 Desayuno 7–8 am",
    kcal: "~450 kcal",
    protein: "25g",
    iron: "⬆️ Alto",
    options: [
      {
        name: "Huevos a la mexicana con frijoles",
        ingredients: ["3 huevos revueltos con jitomate, cebolla, chile serrano","½ taza de frijoles negros de olla","2 tortillas de maíz calientes","1 naranja en gajos (vitamina C → absorción de hierro)"],
        tip: "Caldo de frijol aparte si quiere comer más",
        local: "Frijoles negros de Morelos, chiles del mercado Adolfo López Mateos"
      },
      {
        name: "Enfrijoladas con huevo",
        ingredients: ["2 tortillas bañadas en salsa de frijol negro","2 huevos estrellados encima","Queso fresco rallado","Rodajas de jitomate","1 vaso de agua de jamaica sin azúcar + limón"],
        tip: "La jamaica es fuente de vitamina C",
        local: "Tortillas de La Palomita (tortillería de Cuernavaca)"
      }
    ]
  },
  {
    meal: "🍎 Snack Mañana 10–11 am",
    kcal: "~180 kcal",
    protein: "8g",
    iron: "Normal",
    options: [
      { name: "Fruta + yogur", ingredients: ["1 yogur natural sin azúcar","½ plátano tabasco","Granola casera ligera (1 cda)"], tip: "Plátano = potasio + energía pre-ejercicio", local: "Plátanos de Morelos" },
      { name: "Nueces + fruta", ingredients: ["20g nueces o almendras","1 guayaba o tejocote (vitamina C)","Agua natural"], tip: "Guayaba tiene más vitamina C que la naranja", local: "Guayabas de la región" },
    ]
  },
  {
    meal: "☀️ Comida 2–3 pm",
    kcal: "~550 kcal",
    protein: "35g",
    iron: "⬆️ Muy alto",
    options: [
      {
        name: "Cecina de Yecapixtla con nopales",
        ingredients: ["150g cecina de res (hierro hemo excelente)","Nopales a la mexicana (cebolla, jitomate, cilantro)","½ taza arroz rojo","2 tortillas","Agua de limón o tamarindo natural"],
        tip: "La cecina de Yecapixtla es uno los mejores hierro hemo de la región",
        local: "Cecina de Yecapixtla, Morelos — ícono regional"
      }
    ]
  },
  {
    meal: "🌙 Cena 7–8 pm",
    kcal: "~380 kcal",
    protein: "22g",
    iron: "Moderado",
    options: [
      {
        name: "Quesadillas de huitlacoche",
        ingredients: ["2 tortillas grandes","Huitlacoche salteado con epazote","Queso Oaxaca","Frijoles negros de acompañamiento","Agua de jamaica sin azúcar"],
        tip: "Huitlacoche = proteína vegetal + hierro",
        local: "Huitlacoche de temporada en mercados de Cuernavaca"
      }
    ]
  },
  {
    meal: "🌙 Snack Noche 9 pm",
    kcal: "~130 kcal",
    protein: "10g",
    iron: "Bajo",
    options: [
      { name: "Yogur natural + nueces", ingredients: ["1 yogur natural","10 nueces o almendras"], tip: "Proteína para reparación muscular nocturna", local: "" }
    ]
  }
];

const weeklyProgression = [
  { week: "Semana 1", title: "Adaptación & Fundación", color: palette.green, details: ["Peso ultraligero (1kg o sin peso)", "Aprender técnica de cada ejercicio", "3 segundos en fase excéntrica (bajada)", "Parar si hay mareo o fatiga inusual", "Dormir 7–8 hrs obligatorio", "Hidratación: 1.8L mínimo"]},
  { week: "Semana 2", title: "Volumen & Repeticiones", color: palette.accent2, details: ["Aumentar 2 reps por ejercicio", "Mancuernas 1.3kg en ejercicios de pierna", "Reducir descanso a 50s entre series", "Añadir 5s a la plancha", "Aumentar snack proteico post-entreno", "Revisar energía general"]},
  { week: "Semana 3", title: "Superseries & Densidad", color: palette.accent, details: ["Combinar 2 ejercicios seguidos (superseries)", "Glúteo + Femoral juntos", "Bíceps + Tríceps juntos", "Cardio sábado: 35 min", "Opcional: agregar tobillera 0.5kg si hay buena energía", "Evaluar nivel de anemia (¿más energía?)"]},
  { week: "Semana 4", title: "Intensidad & Circuitos", color: palette.gold, details: ["Circuitos completos viernes + sábado", "Series al fallo técnico (no al dolor)", "Cardio LISS 40 min sábado", "Medir tono y energía", "Hacer lista de logros del mes", "Preparar progresión para el Mes 2"]},
];

const medicalNotes = [
  { icon: "🩸", title: "Anemia leve — Protocolo", color: palette.red, points: [
    "Hemoglobina 12.0 → límite bajo. No hacer HIIT los primeros 2 meses.",
    "Hierro sérico 49 → bajo. Prioridad #1 en nutrición.",
    "Vitamina C en CADA comida con hierro (limón, naranja, guayaba).",
    "Evitar café/té 2 horas antes o después de comer hierro.",
    "Si hay mareo durante ejercicio: parar, sentarse, hidratarse.",
  ]},
  { icon: "❤️", title: "Perfil Cardiovascular — Excelente", color: palette.green, points: [
    "Glucosa 86 → óptima. Sin restricción de carbohidratos.",
    "Colesterol total 130, LDL 78 → cardioprotector.",
    "Triglicéridos 46 → excepcional.",
    "HDL 43 → ligeramente bajo. El ejercicio lo mejorará.",
  ]},
];

// App State
let activeTab = 'rutina';
let activeDay = 'Lunes';
let activeMeal = 0;
let expandedExercise = null;

// DOM Elements
const contentArea = document.getElementById('content');
const navBtns = document.querySelectorAll('.nav-btn');

// Initial Render
render();

// Event Listeners
navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        activeTab = btn.getAttribute('data-tab');
        navBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        render();
    });
});

function render() {
    contentArea.innerHTML = '';
    contentArea.className = 'content-area fade-in';
    
    switch(activeTab) {
        case 'rutina': renderRutina(); break;
        case 'nutricion': renderNutricion(); break;
        case 'progresion': renderProgresion(); break;
        case 'medico': renderMedico(); break;
    }
}

function renderRutina() {
    const routine = routines[activeDay];
    const currentDayPlan = weekPlan.find(d => d.day === activeDay);

    const html = `
        <div class="week-grid">
            ${weekPlan.map((d, i) => `
                <button class="day-btn ${activeDay === d.day ? 'active' : ''}" onclick="setActiveDay('${d.day}')">
                    <span class="icon">${d.icon}</span>
                    <span class="label">${days[i]}</span>
                </button>
            `).join('')}
        </div>

        <div class="card">
            <div class="card-header" style="background: linear-gradient(90deg, ${currentDayPlan.color}20, transparent)">
                <div style="font-size: 24px; margin-bottom: 4px;">${currentDayPlan.icon}</div>
                <h2 style="color: ${currentDayPlan.color}">${activeDay}</h2>
                <p style="font-size: 13px; color: var(--muted)">${currentDayPlan.focus}</p>
            </div>
            <div class="card-body">
                ${routine.warmup.length > 0 ? `
                    <div style="margin-bottom: 20px;">
                        <h3 style="font-size: 12px; color: var(--gold); text-transform: uppercase; letter-spacing: 2px; margin-bottom: 10px;">🔥 Calentamiento</h3>
                        ${routine.warmup.map(w => `<div class="list-item">• ${w}</div>`).join('')}
                    </div>
                ` : ''}

                <h3 style="font-size: 12px; color: var(--accent); text-transform: uppercase; letter-spacing: 2px; margin-bottom: 12px;">💪 Ejercicios Principales</h3>
                ${routine.exercises.map((ex, i) => `
                    <div class="exercise-item" onclick="toggleExercise(${i})">
                        <div class="exercise-header">
                            <div class="ex-info">
                                <span class="ex-icon">${ex.icon}</span>
                                <div>
                                    <div class="ex-name">${ex.name}</div>
                                    <div class="ex-sets">${ex.sets}</div>
                                </div>
                            </div>
                            <div class="ex-meta">
                                <span class="ex-rest">⏱ ${ex.rest}</span>
                                <i class="bi bi-chevron-${expandedExercise === i ? 'up' : 'down'}" style="font-size: 12px; color: var(--muted)"></i>
                            </div>
                        </div>
                        ${expandedExercise === i ? `<div class="ex-tip">💡 ${ex.tip}</div>` : ''}
                    </div>
                `).join('')}

                ${routine.cool.length > 0 ? `
                    <div style="margin-top: 20px;">
                        <h3 style="font-size: 12px; color: var(--accent-2); text-transform: uppercase; letter-spacing: 2px; margin-bottom: 10px;">🌿 Enfriamiento</h3>
                        ${routine.cool.map(c => `<div class="list-item">• ${c}</div>`).join('')}
                    </div>
                ` : ''}
            </div>
        </div>

        <div class="warning-box">
            <strong style="color: var(--red)">🚨 Señal de alto:</strong> Mareo, palpitaciones o fatiga extrema = DETENER inmediatamente.
        </div>
    `;
    contentArea.innerHTML = html;
}

function renderNutricion() {
    const meal = mealPlan[activeMeal];
    const html = `
        <div class="meal-nav">
            ${mealPlan.map((m, i) => `
                <button class="meal-btn ${activeMeal === i ? 'active' : ''}" onclick="setActiveMeal(${i})">
                    ${m.meal.split(' ')[1]}
                </button>
            `).join('')}
        </div>

        <div class="meal-stats">
            <div class="meal-stat" style="border-color: var(--accent)"><span style="color: var(--muted); font-size: 10px;">KCAL</span><br><b style="color: var(--accent)">${meal.kcal}</b></div>
            <div class="meal-stat" style="border-color: var(--accent-2)"><span style="color: var(--muted); font-size: 10px;">PROT</span><br><b style="color: var(--accent-2)">${meal.protein}</b></div>
            <div class="meal-stat" style="border-color: var(--red)"><span style="color: var(--muted); font-size: 10px;">HIERRO</span><br><b style="color: var(--red)">${meal.iron}</b></div>
        </div>

        <h3 style="margin-bottom: 16px; color: var(--gold)">${meal.meal}</h3>

        ${meal.options.map((opt, i) => `
            <div class="card">
                <div class="card-body">
                    <div style="font-weight: 700; margin-bottom: 12px;">🍽️ Opción ${i+1}: ${opt.name}</div>
                    <div style="margin-bottom: 12px;">
                        ${opt.ingredients.map(ing => `<div class="list-item" style="padding: 4px 0">• ${ing}</div>`).join('')}
                    </div>
                    <div class="ex-tip" style="background: rgba(78, 203, 113, 0.1); border-color: var(--green)">💡 ${opt.tip}</div>
                    ${opt.local ? `<div class="ex-tip" style="background: rgba(240, 192, 64, 0.1); border-color: var(--gold); margin-top: 8px;">📍 ${opt.local}</div>` : ''}
                </div>
            </div>
        `).join('')}

        <div class="card" style="margin-top: 30px;">
            <div class="card-header"><h3 style="font-size: 13px; color: var(--red); text-transform: uppercase;">🩸 Reglas de Hierro</h3></div>
            <div class="card-body" style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <div style="font-size: 12px;">
                    <b style="color: var(--green)">✅ SIEMPRE</b><br>
                    <span style="color: var(--muted)">Limón, naranja, guayaba, jamaica, frijoles negros.</span>
                </div>
                <div style="font-size: 12px;">
                    <b style="color: var(--red)">❌ EVITAR (±2h)</b><br>
                    <span style="color: var(--muted)">Café, té, leche, queso, antiácidos.</span>
                </div>
            </div>
        </div>
    `;
    contentArea.innerHTML = html;
}

function renderProgresion() {
    const html = `
        <h2 style="font-size: 13px; color: var(--muted); text-transform: uppercase; margin-bottom: 20px; letter-spacing: 2px;">Progresión Mensual</h2>
        ${weeklyProgression.map((w, i) => `
            <div class="card" style="border-left: 4px solid ${w.color}">
                <div class="card-body">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 15px;">
                        <div>
                            <div style="font-size: 10px; color: var(--muted); text-transform: uppercase;">${w.week}</div>
                            <div style="font-size: 18px; font-weight: 700; color: ${w.color}">${w.title}</div>
                        </div>
                    </div>
                    ${w.details.map(d => `<div class="list-item">▸ ${d}</div>`).join('')}
                </div>
            </div>
        `).join('')}
    `;
    contentArea.innerHTML = html;
}

function renderMedico() {
    const html = `
        <h2 style="font-size: 13px; color: var(--muted); text-transform: uppercase; margin-bottom: 20px; letter-spacing: 2px;">Notas Médicas</h2>
        ${medicalNotes.map(n => `
            <div class="card" style="border-top: 3px solid ${n.color}">
                <div class="card-body">
                    <h3 style="color: ${n.color}; margin-bottom: 12px;">${n.icon} ${n.title}</h3>
                    ${n.points.map(p => `<div class="list-item">• ${p}</div>`).join('')}
                </div>
            </div>
        `).join('')}
    `;
    contentArea.innerHTML = html;
}

// Global functions for inline handlers
window.setActiveDay = (day) => {
    activeDay = day;
    render();
};

window.setActiveMeal = (index) => {
    activeMeal = index;
    render();
};

window.toggleExercise = (index) => {
    expandedExercise = expandedExercise === index ? null : index;
    render();
};
