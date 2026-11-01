# Cómo llevar ZonaRoja tú mismo

Esta web es tuya. Aquí tienes todo lo que necesitas para cambiarla, ampliarla y mantenerla viva.

**La web está en:** https://ralfyan.github.io/zonaroja/
**El código está en:** https://github.com/Ralfyan/zonaroja

---

## 1. Lo que necesitas (todo gratis)

| Herramienta | Para qué | ¿Obligatoria? |
|---|---|---|
| **Cuenta de GitHub** (github.com) | Guardar la web y publicarla | Sí |
| **Un navegador** | Editar desde la propia web de GitHub | Sí |
| **GitHub Desktop** (desktop.github.com) | Trabajar con los archivos en tu ordenador | Más adelante |
| **Visual Studio Code** (code.visualstudio.com) | Editor de código cómodo, con colores | Más adelante |
| **Claude** (claude.ai) | Pedirle ayuda: "añade una página de…", "¿por qué no funciona…?" | Muy recomendable |

Para empezar **solo necesitas una cuenta de GitHub**. Cuando la tengas, pásale tu nombre de usuario a tu tío para que te dé permiso de edición.

> GitHub exige tener al menos 13 años para abrir una cuenta.

---

## 2. Cómo funciona

- Cada página es un archivo `.html`: `index.html` (portada), `horarios.html`, `equipos.html`…
- **Casi todo lo que vas a querer cambiar está en `app.js`, arriba del todo**: equipos, partidos, horarios y glosario.
- Los colores y el diseño están en `style.css`.
- **Cada vez que guardas un cambio en GitHub, la web se actualiza sola en 1-2 minutos.** No hay que hacer nada más.

---

## 3. Tu primer cambio (5 minutos, sin instalar nada)

Vamos a añadir un partido a la tabla de "Partidos con sabor español":

1. Entra en https://github.com/Ralfyan/zonaroja y abre el archivo **`app.js`**.
2. Pulsa el **lápiz** ✏️ de arriba a la derecha.
3. Busca `const PARTIDOS = [`. Verás algo así:
   ```js
   { fecha: "2026-11-08", horaET: "09:30", local: "Falcons", visitante: "Bengals",
     lugar: "Estadio Santiago Bernabéu, Madrid", nota: "En España" },
   ```
4. Copia esa línea y pégala debajo cambiando los datos. **La hora se pone en hora de Nueva York**, como sale en NFL.com: la web la pasa sola a hora española.
5. Pulsa el botón verde **"Commit changes"**, escribe qué has cambiado ("Añado el partido X") y confirma.
6. Espera 2 minutos y recarga la web. ¡Ya está!

Si te equivocas no pasa nada: GitHub guarda todas las versiones y se puede volver atrás.

---

## 4. Ideas para hacerla crecer

Ordenadas de más fácil a más difícil:

1. **Actualizar la portada cada semana** con los partidos que no hay que perderse.
2. **Añadir peñas y bares** a la página de Comunidad (pregunta en redes y comprueba que existen).
3. **Escribir una crónica** del Bengals – Falcons del Bernabéu.
4. **Página de la Super Bowl** con la cuenta atrás, como la de Madrid.
5. **Ampliar el test** con más preguntas.
6. **Crear redes sociales** (Instagram, TikTok, X) para dar a conocer la web.
7. **Dominio propio**, por ejemplo zonaroja.es (unos 10-15 € al año).

---

## 5. Reglas de oro

- **Nada de enlaces a webs piratas** para ver partidos. Es ilegal y te pueden cerrar la web.
- **No uses logos oficiales** de la NFL ni de los equipos. Los nombres y los colores sí.
- **Comprueba los datos** (fechas, precios, horarios) en la fuente oficial antes de publicarlos.
- **No publiques datos personales** tuyos ni de nadie: ni dirección, ni teléfono, ni colegio.
- **Mejor poco y constante** que mucho y luego nada. Una actualización a la semana basta.

---

## 6. Si algo se rompe

1. Mira qué fue lo último que cambiaste. Casi siempre falta una coma o unas comillas en `app.js`.
2. En GitHub, en la pestaña **"Commits"**, puedes ver todos los cambios y deshacer uno.
3. Pregúntale a Claude pegando el trozo de código: "esto no funciona, ¿qué falla?".
