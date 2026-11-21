/* =========================================================
   a great perhaps - configuracion de la sala
   Aqui cambias todo sin tocar index.html:
   - audio: ruta del mp3 de cada cancion (carpeta audio/)
   - spotify / apple / youtube: link directo de cada cancion.
     Si lo dejas vacio '', el boton abre la busqueda del artista.
   - en / es: texto de la tarjeta en ingles y en espanol
   - g: genero que sale en la etiqueta del cuadro
   ========================================================= */
window.AGP={};
AGP.ARTIST_LINKS={
 spotify:'https://open.spotify.com/search/Ok%20Pretty%20Boy',
 apple:'https://music.apple.com/search?term=Ok%20Pretty%20Boy',
 youtube:'https://www.youtube.com/results?search_query=Ok+Pretty+Boy'
};
AGP.SONGS=[
 {t:'atmosfera',audio:'audio/01.mp3',spotify:'',apple:'',youtube:'',
  g:{en:'ambient',es:'ambient'},
  en:'Born as a loop for Zuurkey Beatz, who also named it. Low notes and no words: a deep track to step into the album and give it your own meaning.',
  es:'Nació como un loop para Zuurkey Beatz, que también le puso el nombre. Notas graves y cero palabras: un track profundo para entrar al álbum y darle tu propio significado.'},
 {t:'summer crush',audio:'audio/02.mp3',spotify:'',apple:'',youtube:'',
  g:{en:'ambient trap',es:'ambient trap'},
  en:'A line found on TikTok: what someone in love would tell their crush. Summer is when they met.',
  es:'Una frase encontrada en TikTok: lo que alguien enamorado le diría a su crush. El verano es el tiempo en que la conoció.'},
 {t:'how it felt',audio:'audio/03.mp3',spotify:'',apple:'',youtube:'',
  g:{en:'ambient trap',es:'ambient trap'},
  en:'How it felt to share time with that person, like Miles with Alaska: the moments alone and everything they lived together.',
  es:'Cómo se sintió compartir el tiempo con esa persona, como Miles con Alaska: los ratos a solas y todo lo que vivieron juntos.'},
 {t:'lost in the labyrinth',audio:'audio/04.mp3',spotify:'',apple:'',youtube:'',
  g:{en:'ambient trap',es:'ambient trap'},
  en:'Alaska’s question when she meets Miles: how will we ever get out of this labyrinth of suffering? And is the labyrinth living, or dying?',
  es:'La pregunta de Alaska al conocer a Miles: ¿cómo salimos de este laberinto de sufrimiento? Y el laberinto, ¿es vivir o morir?'},
 {t:'young, alaska',audio:'audio/05.mp3',spotify:'',apple:'',youtube:'',
  g:{en:'ambient trap',es:'ambient trap'},
  en:'Alaska chose her name first and gave it meaning later. Same with Ok Pretty Boy: a line from a sound pack, and the OK from Metal Slug.',
  es:'Alaska escogió su nombre y después le dio significado. Igual pasó con Ok Pretty Boy: una frase de un pack de sonidos y el OK de Metal Slug.'},
 {t:'gorgeously dangerous',audio:'audio/06.mp3',spotify:'',apple:'',youtube:'',
  g:{en:'trap',es:'trap'},
  en:'Trap over an Italian soundtrack sample, full of violins and voices. The most beautiful song on the album; like Alaska, the more beautiful, the more dangerous.',
  es:'Trap sobre un sample de soundtrack italiano, con violines y voces. La más hermosa del álbum; como Alaska, entre más bella, más peligrosa.'},
 {t:'iris atmos',audio:'audio/07.mp3',spotify:'',apple:'',youtube:'',
  g:{en:'in progress',es:'en construcción'},
  en:'Still under construction. Its meaning stays hidden for now.',
  es:'Todavía en construcción. Su significado se queda guardado por ahora.'},
 {t:'last kiss',audio:'audio/08.mp3',spotify:'',apple:'',youtube:'',
  g:{en:'ambient',es:'ambient'},
  en:'Miles’s last kiss with Alaska. Without the bass it feels sweet: less an ending, more a memory.',
  es:'El último beso de Miles a Alaska. Sin bajos se siente dulce: más que un final, un recuerdo.'}
];
AGP.TXT={
 en:{sub:'Ok Pretty Boy · 8 songs',enter:'Enter the room',now:'now playing',start:'Start',center:'Center',albumTag:'Ok Pretty Boy · album',
  album1:'Giving meaning to an ambient trap album, where the artist never says a single word, was the challenge. The answer was to set it somewhere: every song borrows lines from Looking for Alaska, the book I read as a teenager and later watched as a series.',
  album2:'The title comes from Miles, the main character, who is fascinated by people’s last words and leaves in search of his own Great Perhaps.',
  hintD:'Your mouse is your view · WASD or arrow keys to walk · click a frame to go to it',
  hintT:'Use the buttons at the bottom to walk through the room',
  look:'Drag anywhere to look around \u00b7 it\u2019s 3D',
  tip:'Use these buttons to walk the room in order. You can also drag to look around and tap the floor to move.',
  escLock:'free your cursor to click links',escFree:'click the room to look around again',langBtn:'ES',langAria:'Cambiar a español',prev:'Previous song',next:'Next song',close:'Close'},
 es:{sub:'Ok Pretty Boy · 8 canciones',enter:'Entrar a la sala',now:'sonando',start:'Empezar',center:'Centro',albumTag:'Ok Pretty Boy · álbum',
  album1:'Darle significado a un álbum de ambient trap, donde el artista no dice una sola palabra, era el reto. La respuesta fue ambientarlo: cada canción toma frases de Buscando a Alaska, el libro que leí en la adolescencia y que después vi en serie.',
  album2:'El nombre viene de Miles, el protagonista, a quien le apasionan las últimas palabras de las personas y que se va en busca de su propio gran quizás.',
  hintD:'El mouse es tu mirada · WASD o flechas para caminar · clic en un cuadro para ir',
  hintT:'Usa los botones de abajo para recorrer la sala',
  look:'Arrastra para mirar a tu alrededor \u00b7 es 3D',
  tip:'Usa estos botones para recorrer la sala en orden. También puedes arrastrar para mirar y tocar el piso para moverte.',
  escLock:'suelta el mouse para dar clic en los links',escFree:'da clic en la sala para volver a mirar',langBtn:'EN',langAria:'Switch to English',prev:'Canción anterior',next:'Canción siguiente',close:'Cerrar'}
};
