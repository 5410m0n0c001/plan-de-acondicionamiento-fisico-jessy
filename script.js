console.log("🚀 Plan de Jessy Cargado Correctamente - v2.1");
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
    kcal: "420–480",
    protein: "22–28g",
    iron: "🩸 Alto hierro",
    appetiteNote: "Despertá el metabolismo: toma un vaso de agua tibia con limón 15 min antes.",
    color: palette.gold,
    options: [
      {
        name: "Huevos a la mexicana con frijoles negros",
        emoji: "🍳",
        desc: "Huevos revueltos con jitomate, cebolla, chile serrano y epazote. Frijoles negros de olla con caldito.",
        ingredients: ["3 huevos", "Jitomate, cebolla, chile serrano", "Epazote fresco", "½ taza frijoles negros de olla", "2 tortillas de maíz calientes", "1 naranja en gajos (vitamina C)"],
        tip: "El caldito de frijol aparte estimula el apetito y facilita la digestión.",
        macros: { kcal: 450, p: "26g", c: "38g", g: "14g" },
        iron: "⬆️ Doble fuente: huevo + frijol",
        stimulate: "🌶️ El chile serrano activa la digestión y estimula el hambre"
      },
      {
        name: "Enfrijoladas de queso con crema",
        emoji: "🫔",
        desc: "Tortillas sumergidas en salsa de frijol negro con chile pasilla, bañadas en crema ácida y queso fresco. Servidas con huevo estrellado.",
        ingredients: ["3 tortillas de maíz", "1 taza frijoles licuados con chile pasilla", "2 huevos estrellados", "Queso fresco al gusto", "Crema ácida (1 cda)", "Jugo de naranja fresco"],
        tip: "La crema y el queso aportan calorías densas para aumentar el apetito progresivamente.",
        macros: { kcal: 480, p: "24g", c: "42g", g: "18g" },
        iron: "⬆️ Frijol negro + huevo",
        stimulate: "🧀 Las grasas del queso y crema estimulan las hormonas del hambre"
      },
      {
        name: "Molletes con frijoles, aguacate y pico de gallo",
        emoji: "🥖",
        desc: "Pan bolillo abierto, untado con frijoles negros refritos, queso tipo Oaxaca gratinado, aguacate en rebanadas y pico de gallo fresco.",
        ingredients: ["1 bolillo o telera", "Frijoles negros refritos", "Queso Oaxaca rallado, gratinado", "½ aguacate en rebanadas", "Pico de gallo fresco", "Limón y chile piquín"],
        tip: "El aguacate añade grasas monoinsaturadas que mejoran el HDL y sacian de forma saludable.",
        macros: { kcal: 460, p: "22g", c: "48g", g: "20g" },
        iron: "⬆️ Frijoles + queso (calcio separado del hierro)",
        stimulate: "🥑 El aguacate potencia la absorción de nutrientes liposolubles"
      },
      {
        name: "Chilaquiles verdes con pollo deshebrado",
        emoji: "🫓",
        desc: "Totopos de maíz bañados en salsa verde de tomatillo y chile serrano, con pollo deshebrado, crema, queso fresco y cebolla morada.",
        ingredients: ["1 taza totopos horneados", "Salsa verde: tomatillo, serrano, ajo, cilantro", "80g pollo deshebrado", "Cebolla morada en rodajas", "Queso fresco y crema"],
        tip: "Los chilaquiles son uno de los platillos con mayor densidad calórica y proteína por porción.",
        macros: { kcal: 470, p: "28g", c: "44g", g: "16g" },
        iron: "⬆️ Pollo + tomatillo (vitamina C)",
        stimulate: "🌿 El tomatillo y cilantro activan las papilas gustativas"
      },
      {
        name: "Tlayuda de frijoles con tasajo y verduras",
        emoji: "🫓",
        desc: "Tortilla grande tostada con frijoles negros, tiras de tasajo (carne magra), quesillo, hoja de aguacate.",
        ingredients: ["1 tortilla grande tostada", "Frijoles negros untados", "80g tasajo o carne magra", "Quesillo en tiras", "Lechuga, rábano, jitomate", "Limón y salsa verde"],
        tip: "El tasajo y la carne magra son excelentes fuentes de hierro hemo.",
        macros: { kcal: 430, p: "30g", c: "36g", g: "15g" },
        iron: "⭐ Hierro hemo premium",
        stimulate: "🌶️ La salsa verde y el limón despiertan las glándulas salivales"
      }
    ]
  },
  {
    meal: "🍎 Snack Mañana 10–11 am",
    kcal: "160–200",
    protein: "7–12g",
    iron: "🌿 Vitamina C",
    appetiteNote: "Este snack evita que llegues con hambre feroz a la comida. Come aunque no sientas mucho hambre.",
    color: palette.green,
    options: [
      {
        name: "Yogur natural con guayaba y nueces",
        emoji: "🥛",
        desc: "Yogur griego natural sin azúcar con guayabas picadas, nueces troceadas y una pizca de canela.",
        ingredients: ["1 yogur griego natural (150g)", "2 guayabas frescas picadas", "15g nueces troceadas", "Pizca de canela"],
        tip: "La guayaba tiene más vitamina C que la naranja — potencia el hierro de toda la mañana.",
        macros: { kcal: 180, p: "12g", c: "16g", g: "8g" },
        iron: "⬆️ Vitamina C alta (guayaba)",
        stimulate: "🍈 La guayaba dulce estimula el apetito naturalmente"
      },
      {
        name: "Plátano con mantequilla de cacahuate",
        emoji: "🍌",
        desc: "Plátano maduro con una cucharada de mantequilla de cacahuate natural.",
        ingredients: ["1 plátano maduro", "1 cda mantequilla de cacahuate natural", "Agua natural 250ml"],
        tip: "Ideal 30 min antes del ejercicio: glucosa rápida + proteína para el músculo.",
        macros: { kcal: 200, p: "7g", c: "30g", g: "7g" },
        iron: "Normal",
        stimulate: "🍌 El plátano maduro es uno de los alimentos más amigables con el apetito"
      },
      {
        name: "Agua de Jamaica con chía y limón",
        emoji: "🌺",
        desc: "Jamaica sin azúcar, semillas de chía hidratadas y mucho limón. Refrescante y lleno de vitamina C.",
        ingredients: ["1 vaso agua de jamaica", "1 cda semillas de chía", "Jugo de 1 limón"],
        tip: "La jamaica es fuente de vitamina C y antioxidantes.",
        macros: { kcal: 80, p: "3g", c: "12g", g: "2g" },
        iron: "⬆️ Vitamina C alta",
        stimulate: "🌺 El sabor ácido de la jamaica activa la digestión"
      },
      {
        name: "Tejocotes con chile piquín y limón",
        emoji: "🍊",
        desc: "Tejocotes frescos con chile piquín en polvo y limón al gusto.",
        ingredients: ["6–8 tejocotes frescos", "Chile piquín en polvo", "Jugo de limón"],
        tip: "Los tejocotes tienen vitamina C natural.",
        macros: { kcal: 90, p: "1g", c: "22g", g: "0g" },
        iron: "⬆️ Vitamina C natural",
        stimulate: "🌶️ El picante aumenta la secreción gástrica"
      },
      {
        name: "Tostada de frijoles con aguacate",
        emoji: "🥑",
        desc: "1 tostada horneada con frijoles negros untados, aguacate machacado, sal de mar y limón.",
        ingredients: ["1 tostada horneada de maíz", "3 cdas frijoles negros", "¼ aguacate machacado", "Limón + sal de grano"],
        tip: "Las grasas del aguacate aumentan la absorción de nutrientes.",
        macros: { kcal: 185, p: "6g", c: "24g", g: "8g" },
        iron: "⬆️ Frijoles negros",
        stimulate: "🥑 El aguacate estimula la producción de enzimas digestivas"
      }
    ]
  },
  {
    meal: "☀️ Comida 2–3 pm",
    kcal: "520–600",
    protein: "35–42g",
    iron: "⭐ Hierro hemo premium",
    appetiteNote: "La comida principal. El aroma y presentación del platillo activan el apetito antes del primer bocado.",
    color: palette.accent,
    options: [
      {
        name: "Cecina de res con nopales a la mexicana",
        emoji: "🥩",
        desc: "Cecina de res asada en comal, con nopales a la mexicana, arroz rojo y tortillas de maíz.",
        ingredients: ["150g cecina de res", "1 taza nopales tiernos", "½ taza arroz rojo", "3 tortillas de maíz", "Salsa roja de molcajete", "Limón generoso"],
        tip: "La cecina de res es una de las mejores fuentes de hierro hemo.",
        macros: { kcal: 560, p: "42g", c: "48g", g: "14g" },
        iron: "⭐ Hierro hemo muy alto",
        stimulate: "🔥 El aroma de la carne asada activa el apetito inmediatamente"
      },
      {
        name: "Caldo de pollo con verduras de temporada",
        emoji: "🍲",
        desc: "Caldo reconfortante de pollo con muslo y pierna, chayote, ejotes, calabaza, zanahoria y epazote.",
        ingredients: ["1 pieza muslo/pierna de pollo (200g)", "Chayote, ejotes, calabaza, zanahoria", "Epazote, ajo, cebolla", "½ taza arroz blanco", "3 tortillas de maíz", "Limón y chile de árbol"],
        tip: "El colágeno del hueso de pollo fortalece articulaciones y tendones.",
        macros: { kcal: 520, p: "38g", c: "42g", g: "12g" },
        iron: "⬆️ Pollo + verduras verdes",
        stimulate: "♨️ El vapor y aroma del caldo caliente activan el apetito"
      },
      {
        name: "Pipián verde con pollo",
        emoji: "🌿",
        desc: "Salsa espesa de pepitas de calabaza, tomatillo, chile serrano, cilantro y epazote.",
        ingredients: ["180g pollo (muslo o pechuga)", "80g pepitas de calabaza", "Tomatillo, chile serrano, cilantro, epazote", "½ taza arroz", "3 tortillas"],
        tip: "Las pepitas son una de las fuentes más altas de zinc y hierro vegetal.",
        macros: { kcal: 580, p: "40g", c: "44g", g: "22g" },
        iron: "⬆️ Pepitas (hierro vegetal) + pollo",
        stimulate: "🌿 La combinación de hierbas aromáticas abre el apetito"
      },
      {
        name: "Barbacoa de res en consomé con garbanzos",
        emoji: "🍖",
        desc: "Barbacoa de res con consomé especiado con garbanzos, arroz, tortillas y salsas.",
        ingredients: ["150g barbacoa de res (parte magra)", "1 taza consomé de barbacoa", "Cilantro, cebolla, orégano", "3 tortillas de maíz", "Salsa verde", "Limón"],
        tip: "El consomé caliente con garbanzo es reconstituyente.",
        macros: { kcal: 540, p: "40g", c: "46g", g: "16g" },
        iron: "⭐ Hierro hemo de res (muy alto)",
        stimulate: "🍖 El consomé caliente abre el apetito"
      },
      {
        name: "Mojarra frita con espinacas salteadas",
        emoji: "🐟",
        desc: "Mojarra entera frita o a la plancha, con espinacas salteadas en ajo, arroz rojo y tortillas.",
        ingredients: ["1 mojarra entera (180g)", "1 taza espinacas baby", "3 dientes de ajo", "½ taza arroz rojo", "Limón generoso"],
        tip: "Doble fuente de hierro: pescado + espinaca. El ajo potencia la absorción.",
        macros: { kcal: 530, p: "42g", c: "40g", g: "14g" },
        iron: "⭐ Doble hierro: pescado + espinaca + limón",
        stimulate: "🔥 El crujido del pescado frito es irresistible"
      }
    ]
  },
  {
    meal: "🌤️ Snack Tarde 5–6 pm",
    kcal: "180–220",
    protein: "8–14g",
    iron: "💪 Post-entreno",
    appetiteNote: "Snack clave para recuperación muscular óptima post-entreno.",
    color: palette.accent2,
    options: [
      {
        name: "Atún al limón con galletas integrales",
        emoji: "🐟",
        desc: "Media lata de atún en agua con limón, cebolla picada, chile jalapeño y ½ aguacate.",
        ingredients: ["½ lata atún en agua (85g)", "Limón, sal, pimienta", "Cebolla blanca picada", "¼ aguacate", "5 galletas integrales"],
        tip: "Proteína de absorción rápida post-entreno.",
        macros: { kcal: 210, p: "22g", c: "18g", g: "6g" },
        iron: "⬆️ Atún (hierro hemo)",
        stimulate: "🐟 El atún con jalapeño y limón es muy sabroso"
      },
      {
        name: "Licuado verde proteico con plátano",
        emoji: "🥤",
        desc: "Espinaca, plátano, leche o agua, chía y miel de abeja pura.",
        ingredients: ["1 puño espinaca baby", "1 plátano maduro", "1 taza leche o agua", "1 cda chía", "1 cdita miel de abeja"],
        tip: "El plátano repone glucógeno muscular.",
        macros: { kcal: 220, p: "8g", c: "36g", g: "4g" },
        iron: "⬆️ Espinaca + vitamina de la leche",
        stimulate: "🍌 El licuado frío es refrescante"
      },
      {
        name: "Elote en vaso",
        emoji: "🌽",
        desc: "Granos de elote cocido con mayonesa ligera, queso rallado, chile piquín y limón.",
        ingredients: ["1 elote desgranado", "2 cdas queso rallado", "1 cda mayonesa light", "Chile piquín y limón"],
        tip: "El elote tiene fibra, vitaminas y minerales.",
        macros: { kcal: 200, p: "8g", c: "30g", g: "6g" },
        iron: "Normal",
        stimulate: "🌶️ El chile piquín lo hace el snack muy sabroso"
      },
      {
        name: "Jícama con chile, limón y pepitas",
        emoji: "🫚",
        desc: "Jícama fresca en bastones con jugo de limón, chile piquín y pepitas de calabaza tostadas.",
        ingredients: ["150g jícama en bastones", "Jugo de 2 limones", "Chile piquín generoso", "20g pepitas de calabaza"],
        tip: "La jícama es hidratante y su fibra regula la digestión.",
        macros: { kcal: 165, p: "6g", c: "26g", g: "5g" },
        iron: "⬆️ Pepitas (hierro vegetal)",
        stimulate: "🌶️ El contraste frío-crujiente es irresistible"
      },
      {
        name: "Yogur con granola artesanal",
        emoji: "🥛",
        desc: "Yogur natural entero con granola artesanal de avena y fruta de temporada.",
        ingredients: ["1 yogur natural entero", "3 cdas granola artesanal", "½ taza fruta"],
        tip: "El yogur entero tiene más calorías para recuperar peso.",
        macros: { kcal: 210, p: "10g", c: "32g", g: "5g" },
        iron: "Normal",
        stimulate: "🥭 La fruta tropical abre el apetito"
      }
    ]
  },
  {
    meal: "🌙 Cena 7–8 pm",
    kcal: "350–420",
    protein: "20–28g",
    iron: "🌙 Digestión nocturna",
    appetiteNote: "Cena ligera pero completa. El cuerpo repara músculo en el sueño.",
    color: palette.accent2,
    options: [
      {
        name: "Quesadillas de huitlacoche con epazote",
        emoji: "🫔",
        desc: "Quesadillas grandes con huitlacoche salteado, queso derretido y frijoles.",
        ingredients: ["2 tortillas grandes de maíz", "½ taza huitlacoche salteado", "Epazote fresco", "Queso tipo Oaxaca", "Frijoles negros", "Salsa verde"],
        tip: "El huitlacoche tiene proteína vegetal, hierro y aminoácidos esenciales.",
        macros: { kcal: 400, p: "22g", c: "46g", g: "14g" },
        iron: "⬆️ Huitlacoche + queso",
        stimulate: "🍄 El aroma terroso del huitlacoche es único"
      },
      {
        name: "Sopa de lentejas con chorizo de soya",
        emoji: "🍜",
        desc: "Lentejas cocidas en caldillo de jitomate, chile guajillo, cebolla y ajo, con chorizo de soya salteado.",
        ingredients: ["1 taza lentejas cocidas", "2 chiles guajillo", "Jitomate, cebolla, ajo", "50g chorizo de soya", "Epazote o cilantro", "Limón SIEMPRE"],
        tip: "Las lentejas son la fuente de hierro vegetal más alta por porción.",
        macros: { kcal: 380, p: "24g", c: "52g", g: "6g" },
        iron: "⭐ Hierro vegetal máximo",
        stimulate: "🌶️ El chile guajillo da un aroma ahumado que abre el apetito"
      },
      {
        name: "Tinga de pollo en tostadas con aguacate",
        emoji: "🥙",
        desc: "Pollo deshebrado en salsa de jitomate con chile chipotle ahumado sobre tostadas.",
        ingredients: ["130g pollo deshebrado en tinga", "Chile chipotle en adobo", "2 tostadas horneadas", "Frijoles negros untados", "½ aguacate · Crema · Queso fresco"],
        tip: "El chipotle es ahumado y abre el apetito. Proteína completa + grasas del aguacate.",
        macros: { kcal: 420, p: "28g", c: "38g", g: "16g" },
        iron: "⬆️ Pollo + frijoles",
        stimulate: "🔥 El aroma del chipotle es muy apetitoso"
      },
      {
        name: "Tacos de nopales con huevo",
        emoji: "🌮",
        desc: "Nopales tiernos salteados con chile serrano, ajo y cebolla, mezclados con huevo revuelto.",
        ingredients: ["1 taza nopales tiernos", "2 huevos revueltos", "3 tortillas de maíz", "Salsa picante", "Queso fresco desmoronado"],
        tip: "Las salsas picantes estimulan el apetito.",
        macros: { kcal: 360, p: "20g", c: "42g", g: "12g" },
        iron: "⬆️ Nopales (hierro vegetal) + huevo",
        stimulate: "🌶️ La salsa picante tiene un aroma muy apetitoso"
      },
      {
        name: "Pozole verde ligero con pollo",
        emoji: "🍵",
        desc: "Pozole de maíz en caldo verde de tomatillo, pepitas y chile serrano.",
        ingredients: ["1 taza maíz pozolero", "100g pollo deshebrado", "Tomatillo, pepitas, serrano, cilantro", "Lechuga, rábano, orégano", "2 tostadas", "Limón"],
        tip: "El pozole verde es ligero y reconfortante.",
        macros: { kcal: 410, p: "26g", c: "50g", g: "10g" },
        iron: "⬆️ Pepitas + pollo + tomatillo",
        stimulate: "♨️ El caldo caliente con orégano y limón es reconfortante"
      }
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

        <div class="card" style="background: linear-gradient(135deg, ${meal.color}15, transparent); border-color: ${meal.color}30;">
            <div class="card-body">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 12px;">
                    <div>
                        <h2 style="margin: 0; font-size: 20px; color: ${meal.color}">${meal.meal}</h2>
                        <div style="font-size: 12px; color: var(--muted); margin-top: 4px;">🕐 Consumo recomendado</div>
                    </div>
                    <div style="display: flex; gap: 8px;">
                        <span class="meal-stat" style="border-color: var(--accent); color: var(--accent); font-weight: bold;">🔥 ${meal.kcal} kcal</span>
                        <span class="meal-stat" style="border-color: var(--accent-2); color: var(--accent-2); font-weight: bold;">💪 ${meal.protein}</span>
                        <span class="meal-stat" style="border-color: var(--red); color: var(--red); font-weight: bold;">${meal.iron}</span>
                    </div>
                </div>
                ${meal.appetiteNote ? `
                    <div style="margin-top: 16px; padding: 12px; background: rgba(255,255,255,0.03); border-left: 3px solid ${meal.color}; border-radius: 4px; font-size: 13px; color: var(--muted);">
                        💡 <b>Tip Apetito:</b> ${meal.appetiteNote}
                    </div>
                ` : ''}
            </div>
        </div>

        <h3 style="font-size: 12px; color: var(--gold); text-transform: uppercase; letter-spacing: 2px; margin: 24px 0 16px;">🍽️ Opciones de Platillos</h3>

        ${meal.options.map((opt, i) => `
            <div class="card">
                <div class="card-header" style="display: flex; justify-content: space-between; align-items: center;">
                    <div style="font-weight: 700; font-size: 16px;">${opt.emoji || '🍽️'} Opción ${i+1}: ${opt.name}</div>
                </div>
                <div class="card-body">
                    <p style="font-size: 13px; color: var(--muted); margin-bottom: 16px; font-style: italic;">${opt.desc || ''}</p>
                    
                    <div style="margin-bottom: 16px;">
                        <div style="font-size: 10px; color: var(--muted); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px;">Ingredientes Clave</div>
                        <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                            ${opt.ingredients.map(ing => `<span style="background: var(--border); padding: 4px 10px; border-radius: 20px; font-size: 11px;">${ing}</span>`).join('')}
                        </div>
                    </div>

                    ${opt.macros ? `
                        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin-bottom: 16px; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 8px;">
                            <div style="text-align: center;"><div style="font-size: 9px; color: var(--muted);">KCAL</div><div style="font-size: 13px; font-weight: bold; color: ${meal.color}">${opt.macros.kcal}</div></div>
                            <div style="text-align: center;"><div style="font-size: 9px; color: var(--muted);">PROT</div><div style="font-size: 13px; font-weight: bold; color: var(--accent-2)">${opt.macros.p}</div></div>
                            <div style="text-align: center;"><div style="font-size: 9px; color: var(--muted);">CARB</div><div style="font-size: 13px; font-weight: bold; color: var(--green)">${opt.macros.c}</div></div>
                            <div style="text-align: center;"><div style="font-size: 9px; color: var(--muted);">GRAS</div><div style="font-size: 13px; font-weight: bold; color: var(--accent)">${opt.macros.g}</div></div>
                        </div>
                    ` : ''}

                    <div style="display: flex; flex-direction: column; gap: 8px;">
                        ${opt.iron ? `<div style="font-size: 12px; color: var(--red); background: rgba(224, 92, 92, 0.1); padding: 8px; border-radius: 6px; border-left: 3px solid var(--red);">🩸 <b>Hierro:</b> ${opt.iron}</div>` : ''}
                        ${opt.stimulate ? `<div style="font-size: 12px; color: ${meal.color}; background: ${meal.color}10; padding: 8px; border-radius: 6px; border-left: 3px solid ${meal.color};">🌶️ <b>Estímulo:</b> ${opt.stimulate}</div>` : ''}
                        <div class="ex-tip" style="background: rgba(78, 203, 113, 0.1); border-color: var(--green)">💡 ${opt.tip}</div>
                    </div>
                </div>
            </div>
        `).join('')}

        <div class="card" style="margin-top: 30px; border-top: 3px solid var(--red);">
            <div class="card-header"><h3 style="font-size: 13px; color: var(--red); text-transform: uppercase; letter-spacing: 2px;">🩸 Reglas Críticas de Hierro</h3></div>
            <div class="card-body" style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <div style="font-size: 12px;">
                    <b style="color: var(--green)">✅ POTENCIADORES</b><br>
                    <div style="color: var(--muted); margin-top: 8px; line-height: 1.6;">
                        • Limón o naranja con comidas<br>
                        • Guayaba como snack principal<br>
                        • Agua de jamaica sin azúcar<br>
                        • Chile (capsaicina activa digestión)
                    </div>
                </div>
                <div style="font-size: 12px;">
                    <b style="color: var(--red)">❌ INHIBIDORES (alejar 2h)</b><br>
                    <div style="color: var(--muted); margin-top: 8px; line-height: 1.6;">
                        • Café (reduce absorción 39%)<br>
                        • Té negro o verde<br>
                        • Leche y queso junto con hierro<br>
                        • Antiácidos o calcio
                    </div>
                </div>
            </div>
        </div>

        <div class="card" style="margin-top: 20px; background: linear-gradient(135deg, var(--gold)10, transparent); border-color: var(--gold)40;">
            <div class="card-header"><h3 style="font-size: 13px; color: var(--gold); text-transform: uppercase; letter-spacing: 2px;">⚡ Hacks para estimular el apetito</h3></div>
            <div class="card-body">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                    <div style="font-size: 11px; background: rgba(0,0,0,0.2); padding: 8px; border-radius: 6px;"><b>🍋 Agua con limón:</b> 15 min antes activa enzimas</div>
                    <div style="font-size: 11px; background: rgba(0,0,0,0.2); padding: 8px; border-radius: 6px;"><b>🥣 Platos pequeños:</b> Engaña al cerebro para terminar</div>
                    <div style="font-size: 11px; background: rgba(0,0,0,0.2); padding: 8px; border-radius: 6px;"><b>🧂 Menos agua:</b> No bebas mucho líquido MIENTRAS comes</div>
                    <div style="font-size: 11px; background: rgba(0,0,0,0.2); padding: 8px; border-radius: 6px;"><b>🌶️ Especias:</b> Chile y canela despiertan el hambre</div>
                    <div style="font-size: 11px; background: rgba(0,0,0,0.2); padding: 8px; border-radius: 6px;"><b>🚶 Paseo corto:</b> 10 min de sol activa el metabolismo</div>
                    <div style="font-size: 11px; background: rgba(0,0,0,0.2); padding: 8px; border-radius: 6px;"><b>🥗 Color:</b> Presentación colorida abre el apetito</div>
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
