# a great perhaps — sala 3D

Sala circular tipo museo para el álbum *a great perhaps* de Ok Pretty Boy.

## Archivos

```
index.html   la sala (no hace falta tocarlo)
config.js    TODO lo editable: textos EN/ES, géneros, mp3 y links de cada canción
cover.jpg    portada del álbum
audio/       un mp3 por canción (01.mp3 … 08.mp3)
```

## Cambios comunes

- **Cambiar el audio de una canción:** reemplaza el archivo en `audio/` con el mismo nombre
  (por ejemplo `audio/07.mp3`), o súbelo con otro nombre y cambia `audio:'audio/...'` en `config.js`.
- **Poner el link de Spotify de un track:** en `config.js`, dentro de la canción, llena
  `spotify:'https://open.spotify.com/track/...'`. Lo mismo con `apple` y `youtube`.
  Si lo dejas vacío (`''`), el botón abre la búsqueda de Ok Pretty Boy.
- **Cambiar un texto:** edita `en:` (inglés) o `es:` (español) de esa canción en `config.js`.
- **Cambiar la portada:** reemplaza `cover.jpg` (cuadrada, ~1024×1024).

Cuida las comillas simples `'...'` y las comas al editar `config.js`. Si la sala se queda en blanco,
casi siempre es una coma o comilla que falta.

## Publicar en GitHub Pages (gratis)

1. Crea una cuenta en github.com y un repositorio nuevo **público**, por ejemplo `agp`.
2. En el repo: **Add file → Upload files**, arrastra todo el contenido de esta carpeta
   (index.html, config.js, cover.jpg, README.md y la carpeta audio) y da **Commit changes**.
3. Ve a **Settings → Pages**. En *Source* elige **Deploy from a branch**, rama **main**, carpeta **/ (root)**, y guarda.
4. En uno o dos minutos tu sala queda en `https://TU-USUARIO.github.io/agp/`.

Para actualizar después: entra al archivo en GitHub, edítalo con el lápiz (o súbelo de nuevo) y haz commit.
La página se actualiza sola en uno o dos minutos.
