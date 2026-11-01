/* =========================================================
   ZonaRoja.es · lógica común de la web
   Todo lo que haya que actualizar está en los bloques de DATOS.
   ========================================================= */

// ---------- CONFIGURACIÓN: hoja de cálculo de Google ----------
// Pega aquí el identificador de la hoja (lo que va entre /d/ y /edit en su dirección).
// Si está vacío, la web usa solo los datos de este archivo.
const HOJA_ID = "";

// ---------- DATOS: menú ----------
const MENU = [
  ["index.html", "Inicio"],
  ["horarios.html", "Horarios"],
  ["donde-ver.html", "Dónde verla"],
  ["madrid.html", "NFL en Madrid"],
  ["equipos.html", "Equipos"],
  ["test.html", "¿Cuál es tu equipo?"],
  ["novatos.html", "Novatos"],
  ["comunidad.html", "Comunidad"],
];

// ---------- DATOS: los 32 equipos ----------
// c1 = color principal, c2 = color secundario, sb = Super Bowls ganadas (hasta la LX, febrero 2026)
const EQUIPOS = [
  // AFC Este
  { n: "Bills", ciudad: "Buffalo", conf: "AFC", div: "Este", c1: "#00338D", c2: "#C60C30", sb: 0, dato: "Perdió cuatro Super Bowls seguidas (1991-1994). Su afición, la Bills Mafia, salta sobre mesas antes de los partidos." },
  { n: "Dolphins", ciudad: "Miami", conf: "AFC", div: "Este", c1: "#008E97", c2: "#FC4C02", sb: 2, dato: "Único equipo con una temporada perfecta, incluida la Super Bowl (1972). Jugó el primer partido de la NFL en España (2025).", es: true },
  { n: "Patriots", ciudad: "Nueva Inglaterra", conf: "AFC", div: "Este", c1: "#002244", c2: "#C60C30", sb: 6, dato: "La dinastía de Tom Brady y Bill Belichick: seis anillos entre 2001 y 2019." },
  { n: "Jets", ciudad: "Nueva York", conf: "AFC", div: "Este", c1: "#125740", c2: "#FFFFFF", sb: 1, dato: "Joe Namath 'garantizó' la victoria en la Super Bowl III y la cumplió. Es su único título." },
  // AFC Norte
  { n: "Ravens", ciudad: "Baltimore", conf: "AFC", div: "Norte", c1: "#241773", c2: "#9E7C0C", sb: 2, dato: "Se llaman así por el poema 'El cuervo' de Edgar Allan Poe, que vivió y murió en Baltimore." },
  { n: "Bengals", ciudad: "Cincinnati", conf: "AFC", div: "Norte", c1: "#FB4F14", c2: "#000000", sb: 0, dato: "Han jugado tres Super Bowls y no han ganado ninguna. El 8 de noviembre de 2026 juegan en el Bernabéu.", es: true },
  { n: "Browns", ciudad: "Cleveland", conf: "AFC", div: "Norte", c1: "#311D00", c2: "#FF3C00", sb: 0, dato: "Su casco es el único de la NFL sin logo: naranja liso. Nunca han llegado a una Super Bowl." },
  { n: "Steelers", ciudad: "Pittsburgh", conf: "AFC", div: "Norte", c1: "#101820", c2: "#FFB612", sb: 6, dato: "Seis anillos, empatados con los Patriots como los que más. Su afición agita la 'Terrible Towel'." },
  // AFC Sur
  { n: "Texans", ciudad: "Houston", conf: "AFC", div: "Sur", c1: "#03202F", c2: "#A71930", sb: 0, dato: "El equipo más joven de la liga: nació en 2002." },
  { n: "Colts", ciudad: "Indianápolis", conf: "AFC", div: "Sur", c1: "#002C5F", c2: "#A2AAAD", sb: 2, dato: "Se mudaron de Baltimore a Indianápolis de madrugada y en camiones de mudanza, en 1984." },
  { n: "Jaguars", ciudad: "Jacksonville", conf: "AFC", div: "Sur", c1: "#006778", c2: "#D7A22A", sb: 0, dato: "Juegan casi todos los años un partido en Londres. Su estadio tiene piscinas en la grada." },
  { n: "Titans", ciudad: "Tennessee", conf: "AFC", div: "Sur", c1: "#0C2340", c2: "#4B92DB", sb: 0, dato: "En 2000 se quedaron a una yarda de empatar la Super Bowl XXXIV en la última jugada." },
  // AFC Oeste
  { n: "Broncos", ciudad: "Denver", conf: "AFC", div: "Oeste", c1: "#FB4F14", c2: "#002244", sb: 3, dato: "Su estadio está a 1.600 metros de altitud: a los rivales les falta el aire." },
  { n: "Chiefs", ciudad: "Kansas City", conf: "AFC", div: "Oeste", c1: "#E31837", c2: "#FFB81C", sb: 4, dato: "La era de Patrick Mahomes: tres anillos entre 2020 y 2024. Su estadio tuvo récord mundial de ruido." },
  { n: "Raiders", ciudad: "Las Vegas", conf: "AFC", div: "Oeste", c1: "#000000", c2: "#A5ACAF", sb: 3, dato: "Han jugado en Oakland, Los Ángeles, otra vez Oakland y ahora Las Vegas. Su imagen pirata es de las más vendidas." },
  { n: "Chargers", ciudad: "Los Ángeles", conf: "AFC", div: "Oeste", c1: "#0080C6", c2: "#FFC20E", sb: 0, dato: "Comparten estadio con los Rams: el SoFi Stadium, sede de la Super Bowl LXI en febrero de 2027." },
  // NFC Este
  { n: "Cowboys", ciudad: "Dallas", conf: "NFC", div: "Este", c1: "#003594", c2: "#869397", sb: 5, dato: "'El equipo de América': el club deportivo más valioso del mundo según Forbes en los últimos años." },
  { n: "Giants", ciudad: "Nueva York", conf: "NFC", div: "Este", c1: "#0B2265", c2: "#A71930", sb: 4, dato: "Ganaron dos Super Bowls a los Patriots de Brady, una de ellas impidiendo su temporada perfecta." },
  { n: "Eagles", ciudad: "Filadelfia", conf: "NFC", div: "Este", c1: "#004C54", c2: "#A5ACAF", sb: 2, dato: "Su afición es famosa por exigente. Popularizaron el 'tush push', la jugada empujando al quarterback." },
  { n: "Commanders", ciudad: "Washington", conf: "NFC", div: "Este", c1: "#5A1414", c2: "#FFB612", sb: 3, dato: "Cambiaron de nombre en 2022. Fueron el rival de los Dolphins en el primer partido NFL en Madrid (2025).", es: true },
  // NFC Norte
  { n: "Bears", ciudad: "Chicago", conf: "NFC", div: "Norte", c1: "#0B162A", c2: "#C83803", sb: 1, dato: "Uno de los equipos fundadores de la liga (1920). Su defensa del 85 es de las mejores de la historia." },
  { n: "Lions", ciudad: "Detroit", conf: "NFC", div: "Norte", c1: "#0076B6", c2: "#B0B7BC", sb: 0, dato: "Juegan siempre en Acción de Gracias. Nunca han llegado a una Super Bowl… todavía." },
  { n: "Packers", ciudad: "Green Bay", conf: "NFC", div: "Norte", c1: "#203731", c2: "#FFB612", sb: 4, dato: "El club es de sus aficionados: tiene cientos de miles de accionistas y no puede venderse ni mudarse." },
  { n: "Vikings", ciudad: "Minnesota", conf: "NFC", div: "Norte", c1: "#4F2683", c2: "#FFC62F", sb: 0, dato: "Cuatro Super Bowls jugadas, cuatro perdidas. Su grito de guerra es el 'Skol'." },
  // NFC Sur
  { n: "Falcons", ciudad: "Atlanta", conf: "NFC", div: "Sur", c1: "#A71930", c2: "#000000", sb: 0, dato: "Perdieron la Super Bowl LI tras ir ganando 28-3. Juegan como locales en el Bernabéu el 8 de noviembre de 2026.", es: true },
  { n: "Panthers", ciudad: "Carolina", conf: "NFC", div: "Sur", c1: "#0085CA", c2: "#101820", sb: 0, dato: "Nacieron en 1995 y ya han jugado dos Super Bowls." },
  { n: "Saints", ciudad: "Nueva Orleans", conf: "NFC", div: "Sur", c1: "#101820", c2: "#D3BC8D", sb: 1, dato: "Su título de 2010 llegó pocos años después del huracán Katrina y fue un símbolo para la ciudad." },
  { n: "Buccaneers", ciudad: "Tampa Bay", conf: "NFC", div: "Sur", c1: "#D50A0A", c2: "#34302B", sb: 2, dato: "Su estadio tiene un barco pirata que dispara cañonazos en cada anotación. Brady ganó aquí su séptimo anillo." },
  // NFC Oeste
  { n: "Cardinals", ciudad: "Arizona", conf: "NFC", div: "Oeste", c1: "#97233F", c2: "#000000", sb: 0, dato: "La franquicia en activo más antigua de la NFL: nació en 1898 en Chicago." },
  { n: "Rams", ciudad: "Los Ángeles", conf: "NFC", div: "Oeste", c1: "#003594", c2: "#FFA300", sb: 2, dato: "Ganaron la Super Bowl LVI en su propio estadio, algo que casi nunca pasa." },
  { n: "49ers", ciudad: "San Francisco", conf: "NFC", div: "Oeste", c1: "#AA0000", c2: "#B3995D", sb: 5, dato: "El nombre viene de los buscadores de oro de 1849. La dinastía de Joe Montana en los 80." },
  { n: "Seahawks", ciudad: "Seattle", conf: "NFC", div: "Oeste", c1: "#002244", c2: "#69BE28", sb: 2, dato: "Vigentes campeones: ganaron la Super Bowl LX (febrero de 2026) a los Patriots. Su afición es 'el jugador número 12'." },
];

// ---------- DATOS: partidos con interés para España (hora de Nueva York) ----------
const PARTIDOS = [
  { fecha: "2026-11-08", horaET: "09:30", local: "Falcons", visitante: "Bengals",
    lugar: "Estadio Santiago Bernabéu, Madrid", nota: "En España" },
];

// ---------- DATOS: franjas horarias habituales (hora de Nueva York) ----------
const FRANJAS = [
  { dia: 0, horaET: "13:00", nombre: "Primera tanda del domingo", veredicto: "ok", txt: "Ideal: después de comer" },
  // Misma franja: unos partidos empiezan a las 16:05 y otros a las 16:25 (hora de Nueva York) según la cadena de TV
  { dia: 0, horaET: "16:05", alt: "16:25", nombre: "Segunda tanda del domingo", veredicto: "ok", txt: "Perfecto para la cena" },
  { dia: 0, horaET: "20:20", nombre: "Sunday Night Football", veredicto: "mal", txt: "Madrugada: mejor en diferido" },
  { dia: 1, horaET: "20:15", nombre: "Monday Night Football", veredicto: "mal", txt: "Madrugada: mejor en diferido" },
  { dia: 4, horaET: "20:15", nombre: "Thursday Night Football", veredicto: "mal", txt: "Madrugada: mejor en diferido" },
];

/* =========================================================
   UTILIDADES DE HORA
   ========================================================= */
// Convierte una fecha y hora "de pared" de una zona horaria en un instante real
function desdeZona(fecha, hora, zona, offsets) {
  const [a, m, d] = fecha.split("-").map(Number);
  const [h, min] = hora.split(":").map(Number);
  const objetivo = `${fecha} ${String(h).padStart(2, "0")}:${String(min).padStart(2, "0")}`;
  for (const off of offsets) {
    const t = new Date(Date.UTC(a, m - 1, d, h - off, min));
    if (t.toLocaleString("sv-SE", { timeZone: zona }).slice(0, 16) === objetivo) return t;
  }
  return new Date(Date.UTC(a, m - 1, d, h - offsets[0], min));
}
const desdeNuevaYork = (f, h) => desdeZona(f, h, "America/New_York", [-5, -4]);
const desdeMadrid = (f, h) => desdeZona(f, h, "Europe/Madrid", [1, 2]);
// Un partido puede llevar la hora de Nueva York (horaET) o la de España (horaES, la de la hoja)
const momento = p => p.horaES ? desdeMadrid(p.fecha, p.horaES) : desdeNuevaYork(p.fecha, p.horaET);
const enMadrid = (t, o = {}) => t.toLocaleString("es-ES", { timeZone: "Europe/Madrid", ...o });
const horaMadrid = t => enMadrid(t, { hour: "2-digit", minute: "2-digit" });
function offset(t, zona) {
  const s = t.toLocaleString("en-US", { timeZone: zona, timeZoneName: "shortOffset" }).split("GMT")[1] || "0";
  const [h, m] = s.split(":").map(Number);
  return h + Math.sign(h || 1) * ((m || 0) / 60);
}
const diferenciaHoras = t => offset(t, "Europe/Madrid") - offset(t, "America/New_York");
function fechaNY(t) { return t.toLocaleString("sv-SE", { timeZone: "America/New_York" }).slice(0, 10); }
function sumarDias(fecha, n) { const d = new Date(fecha + "T12:00:00Z"); d.setUTCDate(d.getUTCDate() + n); return d.toISOString().slice(0, 10); }
function equipo(n) {
  const q = String(n || "").toLowerCase().trim();
  return EQUIPOS.find(e => e.n.toLowerCase() === q) ||
    EQUIPOS.find(e => q.includes(e.n.toLowerCase())) ||
    { n: n || "?", ciudad: "", c1: "#5b6b7c" };
}

/* =========================================================
   CABECERA Y PIE
   ========================================================= */
const BALON = `<svg width="34" height="22" viewBox="0 0 34 22" aria-hidden="true"><ellipse cx="17" cy="11" rx="16" ry="10" fill="#8a3b1c" stroke="#5c240f" stroke-width="1.5"/><path d="M9 11h16" stroke="#fff" stroke-width="1.6"/><path d="M12 8.5v5M15 8.5v5M18 8.5v5M21 8.5v5" stroke="#fff" stroke-width="1.4"/><path d="M4 5.5c2 3 2 8 0 11M30 5.5c-2 3-2 8 0 11" stroke="#fff" stroke-width="1.4" fill="none"/></svg>`;

function pintarCabecera() {
  const actual = location.pathname.split("/").pop() || "index.html";
  document.getElementById("cabecera").innerHTML = `
    <header class="site"><div class="wrap">
      <a class="logo" href="index.html">${BALON}<span>Zona<b>Roja</b></span></a>
      <nav>${MENU.map(([u, t]) => `<a href="${u}" class="${u === actual ? "activo" : ""}">${t}</a>`).join("")}</nav>
    </div></header>`;
  document.getElementById("pie").innerHTML = `
    <footer><div class="wrap">
      <div><strong>ZonaRoja</strong> · La NFL contada desde España.<br>Web de aficionados, sin relación oficial con la NFL ni con ningún equipo.</div>
      <div>Todas las horas en <strong>hora peninsular</strong>.<br>Canarias: una hora menos.</div>
    </div></footer>`;
}

/* =========================================================
   MARCADOR CON CUENTA ATRÁS
   ========================================================= */
function pintarMarcador(id, p) {
  const el = document.getElementById(id);
  if (!el) return;
  if (!p) return;
  const L = equipo(p.local), V = equipo(p.visitante);
  const t = momento(p);
  el.innerHTML = `
    <div class="equipos">
      <span class="chip-equipo"><i style="background:${V.c1}"></i>${V.n}</span>
      <span class="vs">en</span>
      <span class="chip-equipo"><i style="background:${L.c1}"></i>${L.n}</span>
    </div>
    <div class="digitos">
      <div><strong data-u="d">00</strong><span>días</span></div>
      <div><strong data-u="h">00</strong><span>horas</span></div>
      <div><strong data-u="m">00</strong><span>min</span></div>
      <div><strong data-u="s">00</strong><span>seg</span></div>
    </div>
    <div class="info">${enMadrid(t, { weekday: "long", day: "numeric", month: "long" })} · ${horaMadrid(t)}${p.lugar ? " · " + p.lugar : ""}</div>`;
  const set = (u, v) => el.querySelector(`[data-u="${u}"]`).textContent = String(v).padStart(2, "0");
  const gen = el.dataset.gen = String(Number(el.dataset.gen || 0) + 1);
  (function tic() {
    if (el.dataset.gen !== gen) return;
    const ms = Math.max(0, t - new Date());
    set("d", Math.floor(ms / 864e5)); set("h", Math.floor(ms / 36e5) % 24);
    set("m", Math.floor(ms / 6e4) % 60); set("s", Math.floor(ms / 1e3) % 60);
    if (ms > 0) setTimeout(tic, 1000);
  })();
}

/* =========================================================
   HORARIOS
   ========================================================= */
// Próxima jornada: calcula el próximo jueves/domingo/lunes y pasa las franjas a hora de Madrid
function pintarProximaJornada(idTabla = "proxima-jornada", idAviso = "aviso-cambio") {
  const tb = document.getElementById(idTabla);
  if (!tb) return;
  const hoyNY = fechaNY(new Date());
  const dow = new Date(hoyNY + "T12:00:00Z").getUTCDay();
  const domingo = sumarDias(hoyNY, (7 - dow) % 7);
  const filas = FRANJAS.map(f => {
    const fecha = f.dia === 0 ? domingo : f.dia === 1 ? sumarDias(domingo, 1) : sumarDias(domingo, 4);
    return { ...f, t: desdeNuevaYork(fecha, f.horaET), t2: f.alt ? desdeNuevaYork(fecha, f.alt) : null };
  }).sort((a, b) => a.t - b.t);
  tb.innerHTML = filas.map(f => `
    <tr><td><span class="hora">${horaMadrid(f.t)}${f.t2 ? " / " + horaMadrid(f.t2) : ""}</span></td>
      <td><strong>${f.nombre}</strong><br><span class="muted">${enMadrid(f.t, { weekday: "long", day: "numeric", month: "long" })}</span></td>
      <td><span class="tag ${f.veredicto}">${f.txt}</span></td></tr>`).join("");
  const dif = diferenciaHoras(filas[0].t);
  const av = document.getElementById(idAviso);
  if (av && dif !== 6) av.innerHTML = `<div class="aviso rojo"><strong>⚠️ Esta semana hay ${dif} horas de diferencia, no 6.</strong> España y EE. UU. cambian la hora en fechas distintas: todos los partidos empiezan una hora ${dif < 6 ? "antes" : "después"} de lo normal.</div>`;
}

function iniciarConversor() {
  const f = document.getElementById("conv-fecha"), h = document.getElementById("conv-hora"), out = document.getElementById("conv-resultado");
  if (!f) return;
  f.value = fechaNY(new Date());
  const calc = () => {
    if (!f.value || !h.value) return;
    const t = desdeNuevaYork(f.value, h.value), dif = diferenciaHoras(t);
    out.innerHTML = `${horaMadrid(t)} <span class="muted" style="font:500 1rem Inter">· ${enMadrid(t, { weekday: "long", day: "numeric", month: "long" })} · ${dif} h de diferencia</span>` +
      (dif !== 6 ? `<div class="aviso" style="font:400 .95rem Inter">⚠️ Semana de cambio de hora: la diferencia es de ${dif} horas en lugar de 6.</div>` : "");
  };
  f.addEventListener("input", calc); h.addEventListener("input", calc); calc();
}

function pintarPartidos() {
  const tb = document.getElementById("tabla-partidos");
  if (!tb) return;
  const ayer = Date.now() - 864e5;
  const lista = PARTIDOS.filter(p => momento(p) > ayer).sort((a, b) => momento(a) - momento(b));
  if (!lista.length) { tb.innerHTML = `<tr><td class="muted">No hay partidos destacados próximos.</td></tr>`; return; }
  tb.innerHTML = lista.map(p => {
    const t = momento(p), L = equipo(p.local), V = equipo(p.visitante);
    return `<tr><td><span class="hora">${horaMadrid(t)}</span><br><span class="muted">${enMadrid(t, { weekday: "short", day: "numeric", month: "short" })}</span></td>
      <td><span class="chip-equipo"><i style="background:${V.c1}"></i>${V.ciudad} ${V.n}</span> en
          <span class="chip-equipo"><i style="background:${L.c1}"></i>${L.ciudad} ${L.n}</span><br><span class="muted">${p.lugar || ""}</span></td>
      <td>${p.nota ? `<span class="tag ok">${p.nota}</span>` : ""}</td></tr>`;
  }).join("");
}

/* =========================================================
   EQUIPOS
   ========================================================= */
function tarjetaEquipo(e) {
  return `<div class="equipo ${e.es ? "espana" : ""}" style="background:linear-gradient(120deg, ${e.c1} 55%, ${e.c1}dd)">
    <div class="franja" style="background:${e.c2}"></div>
    <div style="position:relative;max-width:82%">
      <div class="ciudad">${e.ciudad} · ${e.conf} ${e.div}</div>
      <div class="nombre">${e.n}</div>
      <div class="dato">🏆 ${e.sb} Super Bowl${e.sb === 1 ? "" : "s"}${e.es ? " · 🇪🇸 Ha jugado en Madrid" : ""}</div>
      <div class="dato">${e.dato}</div>
    </div></div>`;
}
function pintarEquipos(filtro = "Todos") {
  const cont = document.getElementById("lista-equipos");
  if (!cont) return;
  let html = "";
  for (const conf of ["AFC", "NFC"]) for (const div of ["Este", "Norte", "Sur", "Oeste"]) {
    const lista = EQUIPOS.filter(e => e.conf === conf && e.div === div &&
      (filtro === "Todos" || (filtro === "España" && e.es) || (filtro === "Sin anillo" && e.sb === 0) || (filtro === "Campeones" && e.sb >= 4)));
    if (lista.length) html += `<div class="division"><h3>${conf} ${div}</h3><div class="equipos-grid">${lista.map(tarjetaEquipo).join("")}</div></div>`;
  }
  cont.innerHTML = html;
  document.querySelectorAll(".filtros button").forEach(b => b.classList.toggle("on", b.dataset.f === filtro));
}

/* =========================================================
   TEST: ¿CUÁL ES TU EQUIPO?
   ========================================================= */
const PREGUNTAS = [
  { p: "¿Qué tipo de aficionado eres?", o: [
    ["Quiero ganar. Mucho. Y ya.", ["Chiefs", "Patriots", "Steelers", "49ers", "Eagles", "Seahawks"]],
    ["Me gusta sufrir: quiero estar ahí el día que por fin ganen", ["Bills", "Lions", "Bengals", "Browns", "Vikings", "Falcons", "Chargers", "Jaguars", "Texans", "Panthers", "Cardinals", "Titans"]],
    ["Historia, tradición y escudo de toda la vida", ["Packers", "Bears", "Giants", "Steelers", "Cowboys", "Raiders"]],
  ]},
  { p: "¿Dónde te ves viendo un partido?", o: [
    ["En la grada nevada, a diez bajo cero", ["Bills", "Packers", "Bears", "Browns", "Steelers", "Patriots", "Broncos"]],
    ["Al sol, con playa cerca", ["Dolphins", "Buccaneers", "Chargers", "Rams", "Jaguars", "Panthers"]],
    ["Bajo techo, con pantallas gigantes", ["Lions", "Vikings", "Falcons", "Saints", "Cowboys", "Texans", "Colts", "Raiders", "Cardinals"]],
  ]},
  { p: "Elige ciudad para un viaje", o: [
    ["Nueva York, Los Ángeles o Chicago", ["Giants", "Jets", "Rams", "Chargers", "Bears", "Eagles", "Commanders"]],
    ["Una ciudad pequeña que vive para su equipo", ["Packers", "Bills", "Bengals", "Chiefs", "Saints", "Steelers"]],
    ["Espectáculo puro: Las Vegas, San Francisco, Dallas", ["Raiders", "49ers", "Cowboys", "Rams"]],
    ["Algo con carácter: Seattle, Denver, Baltimore", ["Seahawks", "Broncos", "Ravens", "Titans"]],
  ]},
  { p: "¿Qué colores llevarías?", o: [
    ["Rojo", ["Chiefs", "49ers", "Buccaneers", "Falcons", "Cardinals", "Texans"]],
    ["Azul", ["Bills", "Colts", "Lions", "Titans", "Chargers", "Giants", "Rams", "Cowboys", "Patriots", "Panthers"]],
    ["Verde", ["Eagles", "Jets", "Packers", "Seahawks", "Jaguars", "Dolphins"]],
    ["Negro, naranja o morado", ["Bengals", "Broncos", "Steelers", "Ravens", "Vikings", "Raiders", "Browns", "Saints"]],
  ]},
  { p: "¿Te importa que tu equipo haya jugado en España?", o: [
    ["¡Sí! Quiero un equipo que haya pisado el Bernabéu", ["Bengals", "Falcons", "Dolphins", "Commanders", "Bengals", "Falcons", "Dolphins", "Commanders"]],
    ["Me da igual, que gane", []],
  ]},
];
function iniciarTest() {
  const cont = document.getElementById("test");
  if (!cont) return;
  let paso = 0, puntos = {};
  function pintar() {
    if (paso >= PREGUNTAS.length) return resultado();
    const q = PREGUNTAS[paso];
    cont.innerHTML = `<div class="progreso"><div style="width:${paso / PREGUNTAS.length * 100}%"></div></div>
      <div class="muted">Pregunta ${paso + 1} de ${PREGUNTAS.length}</div>
      <h3 style="font-size:1.6rem;margin:.4rem 0">${q.p}</h3>
      <div class="opciones">${q.o.map((o, i) => `<button data-i="${i}">${o[0]}</button>`).join("")}</div>`;
    cont.querySelectorAll(".opciones button").forEach(b => b.onclick = () => {
      q.o[b.dataset.i][1].forEach(n => puntos[n] = (puntos[n] || 0) + 1);
      paso++; pintar();
    });
  }
  function resultado() {
    const max = Math.max(0, ...Object.values(puntos));
    const top = Object.keys(puntos).filter(n => puntos[n] === max);
    const elegido = equipo(top[Math.floor(Math.random() * top.length)] || "Bills");
    const otros = Object.entries(puntos).sort((a, b) => b[1] - a[1]).map(x => x[0]).filter(n => n !== elegido.n).slice(0, 3);
    cont.innerHTML = `<div class="progreso"><div style="width:100%"></div></div>
      <div class="muted">Tu equipo es…</div>
      <div style="margin:.8rem 0 1rem">${tarjetaEquipo(elegido)}</div>
      <p class="muted">También encajas con: ${otros.map(n => `<strong>${n}</strong>`).join(", ")}.</p>
      <button id="repetir">Repetir el test</button> <a class="boton" style="background:#1b2a3c" href="equipos.html">Ver los 32 equipos</a>`;
    document.getElementById("repetir").onclick = () => { paso = 0; puntos = {}; pintar(); };
  }
  pintar();
}

/* =========================================================
   GLOSARIO
   ========================================================= */
const GLOSARIO = [
  ["Down", "intento", "Cada uno de los 4 intentos que tiene el ataque para avanzar 10 yardas.", ""],
  ["First down", "primero y diez", "Conseguir las 10 yardas: el contador vuelve a 4 intentos.", ""],
  ["Touchdown (TD)", "anotación", "Entrar con el balón en la zona de anotación rival. 6 puntos.", "El equivalente al gol, pero vale más."],
  ["Extra point", "punto extra", "Patada tras un touchdown. 1 punto (o 2 si se intenta una jugada).", ""],
  ["Field goal (FG)", "gol de campo", "Patada entre los palos. 3 puntos.", ""],
  ["Safety", "", "Placar al rival dentro de su propia zona de anotación. 2 puntos y además recuperas el balón.", ""],
  ["Quarterback (QB)", "mariscal", "El que dirige el ataque y lanza los pases. La estrella del equipo.", "Como un mediapunta que toca todos los balones."],
  ["Running back (RB)", "corredor", "Recibe el balón en mano y corre.", ""],
  ["Wide receiver (WR)", "receptor", "Corre rutas para recibir pases largos.", "Como un extremo rápido."],
  ["Tight end (TE)", "ala cerrada", "Mitad bloqueador, mitad receptor.", ""],
  ["Offensive line (OL)", "línea ofensiva", "Cinco gigantes que protegen al quarterback.", ""],
  ["Linebacker (LB)", "apoyador", "Defensor polivalente: para carreras y presiona al QB.", "Como un mediocentro defensivo."],
  ["Cornerback (CB)", "esquinero", "Defiende a los receptores.", "Como un lateral que marca al extremo."],
  ["Safety (S)", "profundo", "La última línea de la defensa.", "Como un líbero."],
  ["Sack", "captura", "Placar al quarterback antes de que lance. Hace perder yardas.", ""],
  ["Interception (INT)", "intercepción", "Un defensor atrapa un pase del rival: el balón cambia de equipo.", ""],
  ["Fumble", "balón suelto", "Al jugador se le cae el balón. Quien lo recupere, se lo queda.", ""],
  ["Turnover", "pérdida", "Cualquier pérdida de balón: intercepción o fumble recuperado por el rival.", ""],
  ["Punt", "patada de despeje", "En el cuarto intento, se patea lejos para que el rival empiece más atrás.", "Como despejar el balón al saque de banda contrario."],
  ["Kickoff", "patada inicial", "La patada que pone el balón en juego al empezar y tras cada anotación.", "Como el saque de centro."],
  ["Red zone", "zona roja", "Las últimas 20 yardas antes de la zona de anotación rival. De aquí viene el nombre de esta web.", "Como el área."],
  ["End zone", "zona de anotación", "La zona del final del campo donde se marca el touchdown.", ""],
  ["Snap", "", "El pase hacia atrás entre las piernas del center que inicia cada jugada.", ""],
  ["Huddle", "corrillo", "Reunión de los jugadores antes de cada jugada para decidir qué hacer.", ""],
  ["Blitz", "", "Mandar más defensores de lo normal a por el quarterback.", "Una presión alta a la desesperada."],
  ["Hail Mary", "Ave María", "Pase larguísimo a la desesperada al final del partido.", "Como cuando sube el portero a rematar un córner."],
  ["Holding", "agarrón", "Agarrar ilegalmente a un rival. Penalización de 10 yardas.", ""],
  ["Pass interference", "interferencia de pase", "Impedir ilegalmente que un rival atrape el balón.", "Como un penalti: puede cambiar el partido."],
  ["Two-minute warning", "aviso de dos minutos", "Pausa automática cuando quedan 2 minutos de cada mitad.", ""],
  ["Bye week", "semana de descanso", "Cada equipo descansa una semana durante la temporada.", ""],
  ["Wild card", "comodín", "Los equipos que entran en playoffs sin ganar su división.", ""],
  ["Super Bowl", "", "La final de la NFL, en febrero. El evento televisivo más visto de EE. UU.", "Como la final de la Champions, pero a partido único y cada año en una sede."],
  ["Draft", "", "Cada primavera los equipos eligen a los mejores jugadores universitarios. Los peores eligen primero.", "No hay fichajes de cantera: todos llegan por aquí o como agentes libres."],
  ["Salary cap", "tope salarial", "Límite de lo que cada equipo puede gastar en sueldos. Por eso la liga está tan igualada.", "Nada que ver con el fútbol europeo."],
];
function pintarGlosario(q = "") {
  const cont = document.getElementById("glosario");
  if (!cont) return;
  q = q.toLowerCase();
  cont.innerHTML = GLOSARIO.filter(g => g.join(" ").toLowerCase().includes(q)).map(([t, es, d, f]) => `
    <div class="termino"><b>${t}</b>${es ? `<span class="es">${es}</span>` : ""}<p>${d}</p>${f ? `<span class="futbol">⚽ ${f}</span>` : ""}</div>`).join("")
    || `<p class="muted">No hay ningún término con «${q}».</p>`;
}

/* =========================================================
   FORMULARIO DE COMUNIDAD (de momento solo muestra un mensaje)
   ========================================================= */
function iniciarFormulario() {
  const f = document.getElementById("form-comunidad");
  if (!f) return;
  f.addEventListener("submit", e => {
    e.preventDefault();
    document.getElementById("form-ok").innerHTML = `<div class="aviso">¡Gracias! En la versión real esto llegará a nuestro buzón y lo revisaremos antes de publicarlo.</div>`;
    f.reset();
  });
}

/* =========================================================
   HOJA DE CÁLCULO DE GOOGLE (contenido editable sin programar)
   ========================================================= */
const MADRID_2026 = PARTIDOS[0];
const proximoPartido = () =>
  [...PARTIDOS].filter(p => momento(p) > Date.now()).sort((a, b) => momento(a) - momento(b))[0] || MADRID_2026;

function parseCSV(txt) {
  const filas = []; let fila = [], campo = "", comillas = false;
  for (let i = 0; i < txt.length; i++) {
    const c = txt[i];
    if (comillas) {
      if (c === '"' && txt[i + 1] === '"') { campo += '"'; i++; }
      else if (c === '"') comillas = false;
      else campo += c;
    } else if (c === '"') comillas = true;
    else if (c === ",") { fila.push(campo); campo = ""; }
    else if (c === "\n" || c === "\r") {
      if (c === "\r" && txt[i + 1] === "\n") i++;
      fila.push(campo); filas.push(fila); fila = []; campo = "";
    } else campo += c;
  }
  if (campo || fila.length) { fila.push(campo); filas.push(fila); }
  const cab = (filas.shift() || []).map(c => c.trim().toLowerCase());
  return filas.filter(f => f.some(x => x.trim())).map(f => Object.fromEntries(cab.map((c, i) => [c, (f[i] || "").trim()])));
}
async function leerPestana(nombre) {
  const url = `https://docs.google.com/spreadsheets/d/${HOJA_ID}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(nombre)}`;
  const r = await fetch(url);
  if (!r.ok) throw new Error(nombre);
  return parseCSV(await r.text());
}
// Acepta 8/11/2026, 08/11/2026 o 2026-11-08
function fechaISO(txt) {
  let m = txt.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
  if (m) return `${m[1]}-${m[2].padStart(2, "0")}-${m[3].padStart(2, "0")}`;
  m = txt.match(/^(\d{1,2})[\/.-](\d{1,2})[\/.-](\d{2,4})/);
  if (m) return `${m[3].length === 2 ? "20" + m[3] : m[3]}-${m[2].padStart(2, "0")}-${m[1].padStart(2, "0")}`;
  return null;
}
function horaHM(txt) { const m = String(txt).match(/(\d{1,2})[:.h](\d{2})/); return m ? `${m[1].padStart(2, "0")}:${m[2]}` : null; }
const escapar = t => String(t || "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const enlace = (url, txt) => /^https?:\/\//.test(url || "") ? `<a href="${escapar(url)}" target="_blank" rel="noopener">${txt}</a>` : "";

function pintarNovedades(lista) {
  const el = document.getElementById("novedades");
  if (!el || !lista.length) return;
  el.innerHTML = `<h2>Novedades</h2><div class="grid">${lista.slice(0, 6).map(n => `
    <div class="card"><div class="muted" style="font-size:.85rem">${escapar(n.fecha)}</div>
      <h3>${escapar(n.titulo)}</h3><p class="muted">${escapar(n.texto)}</p>${enlace(n.enlace, "Leer más →")}</div>`).join("")}</div>`;
}
function pintarTablaComunidad(id, lista, columnas) {
  const tb = document.getElementById(id);
  if (!tb || !lista.length) return;
  tb.innerHTML = lista.map(f => `<tr>${columnas.map(c => `<td>${c === "enlace" ? enlace(f.enlace, "Ver →") : escapar(f[c])}</td>`).join("")}</tr>`).join("");
}

async function cargarHoja() {
  if (!HOJA_ID) return;
  const leer = n => leerPestana(n).catch(() => []);
  const [partidos, novedades, bares, penas] = await Promise.all([leer("Partidos"), leer("Novedades"), leer("Bares"), leer("Penas")]);
  partidos.forEach(f => {
    const fecha = fechaISO(f.fecha || ""), hora = horaHM(f["hora españa"] || f["hora espana"] || f.hora || "");
    const repetido = PARTIDOS.some(p => p.fecha === fecha && equipo(p.local).n === equipo(f.local).n);
    if (fecha && hora && f.local && f.visitante && !repetido)
      PARTIDOS.push({ fecha, horaES: hora, local: f.local, visitante: f.visitante, lugar: f.lugar, nota: f.nota });
  });
  pintarMarcador("marcador", proximoPartido());
  pintarPartidos();
  pintarNovedades(novedades);
  pintarTablaComunidad("tabla-bares", bares, ["ciudad", "bar", "que ponen", "enlace"]);
  pintarTablaComunidad("tabla-penas", penas, ["equipo", "nombre", "ciudad", "enlace"]);
}

/* ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  pintarCabecera();
  pintarMarcador("marcador", proximoPartido());
  pintarMarcador("marcador-madrid", MADRID_2026);
  pintarProximaJornada();
  pintarProximaJornada("proxima-jornada-h", "aviso-cambio-h");
  iniciarConversor();
  pintarPartidos();
  pintarEquipos();
  document.querySelectorAll(".filtros button").forEach(b => b.onclick = () => pintarEquipos(b.dataset.f));
  iniciarTest();
  pintarGlosario();
  const b = document.getElementById("buscar"); if (b) b.oninput = () => pintarGlosario(b.value);
  iniciarFormulario();
  cargarHoja();
});
