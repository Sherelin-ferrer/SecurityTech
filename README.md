# Beraka Security — sitio web

Sitio estático (HTML/CSS/JS puro, sin frameworks ni build). Listo para subir a cualquier hosting.

## Contenido
- `index.html` — toda la página
- `style.css` — estilos
- `script.js` — reloj en vivo, menú móvil y animaciones al hacer scroll

## Botón de WhatsApp
Todos los botones de WhatsApp (header, hero, kit, cobertura, banner final, footer y el botón flotante) apuntan directamente a:

```
https://wa.me/573108093454
```

Al hacer clic, abre WhatsApp con la conversación al número **310 809 3454**, sin ningún mensaje pre-escrito: la persona ve el chat vacío y escribe lo que quiera. Si en algún momento quieres agregar un mensaje sugerido, solo agrega `?text=Hola,%20quiero%20cotizar...` al final de cada enlace `wa.me`.

## Cómo publicarlo (elige una opción)

### Opción rápida — Netlify / Vercel (arrastrar y soltar)
1. Entra a https://app.netlify.com/drop
2. Arrastra la carpeta completa (o el .zip descomprimido) a la página.
3. Netlify te da una URL pública en segundos. Puedes conectar tu propio dominio después desde "Domain settings".

### Opción — GitHub Pages
1. Crea un repositorio nuevo y sube estos 3 archivos a la raíz.
2. Ve a Settings → Pages → Source → selecciona la rama `main` y carpeta `/root`.
3. En un par de minutos tu sitio queda publicado en `https://tu-usuario.github.io/tu-repo`.

### Opción — Hosting tradicional (cPanel, etc.)
1. Sube `index.html`, `style.css` y `script.js` a la carpeta `public_html` (o `www`) por FTP o el administrador de archivos.
2. Listo, el dominio ya sirve el sitio.

### Probarlo en tu computador antes de publicar
No necesitas nada instalado más que un navegador: haz doble clic en `index.html` y se abre localmente. Si prefieres verlo como si estuviera en un servidor:

```bash
cd carpeta-del-sitio
python3 -m http.server 8080
```

Y abre `http://localhost:8080` en el navegador.

## Personalizar
- **Textos**: edita directamente `index.html`, todo el contenido está en español y es fácil de ubicar por sección (hero, servicios, kit, cobertura, banner final).
- **Número de WhatsApp**: busca `573108093454` en `index.html` (aparece varias veces) y reemplázalo si cambia el número.
- **Colores**: al inicio de `style.css` hay un bloque `:root { ... }` con todos los colores del sitio (fondo, ámbar, verde, rojo, etc.) para ajustarlos desde un solo lugar.
